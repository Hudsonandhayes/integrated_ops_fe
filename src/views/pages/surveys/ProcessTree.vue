<template>
	<div id="process_tree">
		<vs-breadcrumb
			class="flex-grow justify-start"
			:items="breadcrumbs"
		></vs-breadcrumb>
		<vx-card title="Set Process Hierarchy" class="mb-8">
			<div class="vx-row mb-3">
				<div class="vx-col w-1/2">
					<div class="vx-row mb-3">
						<form
							class="w-full"
							data-vv-scope="main_form"
							id="main_form"
						>
							<div class="vx-col w-full">
								<small class="label">Select Processes</small>
								<v-select
									v-validate="'required'"
									name="process"
									:options="all_processes"
									label="name"
									multiple
									:reduce="(process) => process.id"
									v-model="selected_processes"
									:dir="$vs.rtl ? 'rtl' : 'ltr'"
									:closeOnSelect="false"
								/>
								<span
									class="text-danger text-sm"
									v-show="errors.has('main_form.process')"
								>
									{{ errors.first("main_form.process") }}
								</span>
							</div>
							<div class="vx-col w-full">
								<small class="label">Parent Process</small>
								<v-select
									v-validate="'required'"
									name="parent_process"
									:options="p_processes"
									label="name"
									:reduce="(process) => process.id"
									v-model="
										client_process.parent_process_tree_id
									"
									:dir="$vs.rtl ? 'rtl' : 'ltr'"
								/>
								<span
									class="text-danger text-sm"
									v-show="
										errors.has('main_form.parent_process')
									"
								>
									{{
										errors.first("main_form.parent_process")
									}}
								</span>
							</div>
							<div class="vx-col w-full mt-2">
								<vs-checkbox
									false-value="0"
									true-value="1"
									v-model="client_process.status"
									>Status</vs-checkbox
								>
							</div>
							<div class="vx-col w-1/2 mt-2">
								<div class="flex justify-between flex-wrap">
									<vs-button
										class="mt-4 mr-2 shadow-lg"
										type="gradient"
										color="#7367F0"
										gradient-color-secondary="#CE9FFC"
										v-on:click="create_client_process"
										>Save Process Hierarchy
									</vs-button>

									<vs-button
										class="mt-4"
										type="border"
										color="#b9b9b9"
										v-on:click="$router.back()"
									>
										Close
									</vs-button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="vx-col w-1/2">
					<vx-card
						no-shadow
						title="Current Process Hierarchy"
						class="tree-view-card pt-1"
					>
						<vs-button
							v-if="show_tree_update"
							@click="update_process_tree"
							color="primary"
							type="filled"
						>
							Update Tree
						</vs-button>

						<v-tree
							ref="tree"
							@drag-node-end="drop_event"
							:canDeleteRoot="true"
							:tpl="tpl"
							:data="tree_view"
							:draggable="true"
						/>
					</vx-card>
				</div>
			</div>
		</vx-card>
		<vs-popup
			class="vs-con-loading__container clinic-create-popup"
			title="Create Process"
			:active.sync="process_dialog"
			:buttons-hidden="true"
		>
			<form data-vv-scope="process_form" id="process_form">
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name</small>
							<vs-input
								v-validate="'required|min:2'"
								placeholder="Process Name"
								name="name"
								v-model="process.name"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('name')"
							>
								{{ errors.first("name") }}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-validate="'required|min:10'"
								v-model="process.description"
								name="description"
								height="100px"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('description')"
							>
								{{ errors.first("description") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="process.status"
								>Status</vs-checkbox
							>
						</div>
					</div>
					<!-- Save & Reset Button -->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_process($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							type="border"
							color="warning"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
	</div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import vSelect from "vue-select";
import ClientService from "@/services/ClientService.js";
import ProcessService from "@/services/ProcessService.js";
import TreeView from "@/components/TreeView.vue";
import ConfigService from "@/services/ConfigService.js";
import { VTree, VSelectTree } from "vue-tree-halower";

import { Validator } from "vee-validate";

export default {
	name: "process-tree",
	components: {
		FormWizard,
		TabContent,
		vSelect,
		TreeView,
		VTree,
		VSelectTree,
	},
	data() {
		return {
			all_processes: [],
			client_process: {},
			client_processes: [],
			tree_view: [],
			selected_processes: 0,
			selected_parent_process: 0,
			parent_processes: [],
			p_processes: [{ id: 0, name: "None", level: 1 }],
			new_parent_process: {},
			available_process_levels: [1, 2, 3],
			frequency: [],
			unit_measure: [],
			process_dialog: false,
			process: {},
			expanded: false,
			show_tree_update: false,
			level_colours: ConfigService.colors,
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{
					title: "Clients",
					url: `/pages/client/${this.$route.params.client_id}`,
				},
				{ title: "Process Hierarchy", active: true },
			],
		};
	},

	methods: {
		get_all_processes() {
			this.all_processes = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_processes(this.client_id)
				.then((response) => {
					const output = response.data;
					console.log(output, "client processses");
					if (output && output !== undefined) {
						if (output.success) {
							_that.all_processes = output.data || {};
							_that.client_processes = output.data || {};
							_that.$vs.loading.close();
						} else {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Get client processes",
								text: "No data returned",
								color: "warning",
								timing: 4000,
							});
						}
					}
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Get client processes",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		get_client_processes() {
			const _that = this;
			this.client_processes = [];
			this.$vs.loading();
			ClientService.get_client_processes(this.client_id)
				.then((response) => {
					const output = response.data;
					// console.log(output, "client processses");
					if (output && output !== undefined) {
						if (output.success) {
							_that.client_processes = output.data || {};
							_that.$vs.loading.close();
						} else {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Get client processes",
								text: "No data returned",
								color: "warning",
								timing: 4000,
							});
						}
					}
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Get client processes",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},

		get_client_process_tree() {
			//	this.client_processes = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_process_tree(this.client_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.process_tree_data(output.data);
						} else {
							_that.$vs.notify({
								title: "Load client process tree",
								text: "No data returned",
								color: "warning",
								timing: 4000,
							});
						}
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Load client process tree",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},

		go_to_clients_page(id) {
			const client_id = parseInt(id, 10);
			this.$router.push(`/pages/client/${client_id}`);
		},

		add_new_process() {
			this.process = Object.assign({}, ProcessService.process);
			this.process_dialog = true;
		},
		save_process(e) {
			e.preventDefault();
			const _that = this;
			this.$vs.loading();
			if (this.process.id === -1) {
				ProcessService.create_process(this.process)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success) {
								_that.all_processes.push(data.data);
								_that.process_dialog = false;
								_that.$vs.notify({
									position: "top-right",
									title: "Save successfull",
									text: "Process tree updated successfully",
									color: "success",
									timing: 4000,
								});
							} else {
								_that.$vs.notify({
									title: "Error: Saving Process ",
									text: data.error,
									color: "warning",
									timing: 4000,
								});
							}
						}
						_that.$vs.loading.close();
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Error: Saving Process Tree",
							text: err.message,
							color: "warning",
							timing: 4000,
						});
					});
			}
		},

		create_client_process(event) {
			const _that = this;
			const old_tree_view = this.tree_view;
			this.$validator.validateAll("main_form").then((result) => {
				if (result) {
					if (_that.selected_processes.length > 0) {
						_that.client_process.process_ids =
							_that.selected_processes || [];
						_that.$vs.loading();
						_that.tree_view = [];

						ClientService.create_client_processes(
							_that.client_id,
							_that.client_process
						)
							.then((response) => {
								const output = response.data;
								if (output && output !== undefined) {
									if (output.success) {
										_that.process_tree_data(
											output.data.process_tree
										);
										_that.client_process = Object.assign(
											{},
											ClientService.client_process
										);
										_that.$vs.notify({
											position: "top-right",
											title: "Update client process",
											text: "Process tree updated successfully",
											color: "success",
											timing: 4000,
										});
									} else {
										this.tree_view = old_tree_view;
										_that.$vs.notify({
											title: "Create client process tree",
											text: "Invalid data",
											color: "warning",
											timing: 4000,
										});
									}
								}
								_that.$vs.loading.close();
							})
							.catch((err) => {
								this.tree_view = old_tree_view;
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Create client",
									text: "Failed.Invalid data",
									color: "warning",
									timing: 4000,
								});
							});

						_that.new_parent_processes = {};
						_that.new_processes = [];
						_that.selected_processes = 0;
						_that.selected_parent_process = 0;
					} else {
						_that.$vs.notify({
							title: "Error: Process not selected",
							text: "Please select atleast one Process to be added to the process tree",
							color: "warning",
							timing: 5000,
						});
					}
				} else {
					console.log("form validation error");
				}
			});
		},
		process_tree_data(data) {
			let temp_tree = [];
			this.available_process_levels = [];

			// 			id: 2
			// level_id: 1
			// name: "Reporting and analytics"
			// parent_process_tree_id: 0
			// process_label: "Reporting and analytics"

			let tree_item = this.tree_view;
			this.p_processes = [{ id: 0, name: "None ", level: 1 }];

			data.forEach((item) => {
				if (
					this.available_process_levels[item.level_id] === undefined
				) {
					this.available_process_levels[item.level_id] = {
						id: item.id,
						name: `Level ${item.level_id}`,
					};
				}
				const t_obj = {
					id: item.id,
					name: `${item.name} - level ${item.level_id}`,
					title: `${item.name}`,
					level: `${item.level_id}`,
					expanded: true,
					children: [],
				};
				let parent_obj = {
					id: item.id,
					name: `${item.name} - level ${item.level_id}`,
					level: item.level_id,
				};

				this.p_processes.push(parent_obj);

				if (item.parent_process_tree_id > 0) {
					const tree_item = ProcessService.find_tree_item(
						item.parent_process_tree_id,
						this.tree_view
					);
					tree_item.children.push(t_obj);
				} else {
					this.tree_view.push(t_obj);
				}
			});
		},
		update_process_select(data) {
			this.p_processes = [{ id: 0, name: "None ", level: 1 }];

			data.forEach((item) => {
				let parent_obj = {
					id: item.id,
					name: `${item.name} - level ${item.level_id}`,
					level: item.level_id,
				};

				this.p_processes.push(parent_obj);
			});
		},

		done() {
			this.go_to_clients_page(this.client_id);
		},
		delete_node(node, parent, index) {
			// console.log("node is "+node);
			// console.log("parent is "+parent);
			console.log("index is " + index);
			let node_id = node.id || -1;
			const _that = this;

			if (node_id > 0) {
				ClientService.delete_client_process(node_id)
					.then((response) => {
						const output = response.data;
						if (output && output !== undefined) {
							if (output.success) {
								_that.$refs.tree.delNode(node, parent, index);

								_that.p_processes = [
									{ id: 0, name: "None ", level: 1 },
								];

								output.data.forEach((item, k) => {
									let parent_obj = {
										id: item.id,
										name: `${item.name} - level ${item.level_id}`,
										level: item.level_id,
									};

									_that.p_processes.push(parent_obj);
								});
							} else {
								that.$vs.notify({
									title: "Delete client process",
									text: "Failed",
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Delete client process",
							text: "Failed",
							color: "warning",
							timing: 4000,
						});
					});
			}
			_that.$vs.loading.close();
		},
		drop_event(node) {
			try {
				let drag_node_id = node.dragNode.id || -1;
				let new_parent_id = node.targetNode.id || -1;
				let new_level = parseInt(node.targetNode.level, 10) || -1;

				if (drag_node_id > 0 && new_parent_id > 0) {
					if (new_level > 0) {
						new_level += 1;
						let tree_item = ProcessService.find_tree_item(
							drag_node_id,
							this.tree_view
						);

						tree_item = ProcessService.update_tree_level(
							tree_item,
							new_level
						);
						console.log("tree element  ");
						console.log(node);
						node.dragNode = tree_item;
						node.dragNode.level = new_level;

						//call service to update or maybe enable a button so the user can select whether to update or not
						const _that = this;
						_that.$vs.loading();
						if (node) {
							ClientService.move_process_node(
								this.client_id,
								node
							)
								.then((response) => {
									const output = response.data;
									if (output && output !== undefined) {
										if (output.success) {
											_that.update_process_select(
												output.data
											);
										} else {
											this.tree_view = old_tree_view;
											_that.$vs.notify({
												title: "Create client process tree",
												text: "Invalid data",
												color: "warning",
												timing: 4000,
											});
										}
									}
									_that.$vs.loading.close();
								})
								.catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Move client process",
										text: "Failed",
										color: "warning",
										timing: 4000,
									});
								});
						}

						console.log("showing the tree " + this.tree_view);
						//this.show_tree_update = true;
					}
				}
			} catch (e) {
				console.log("error while doing drop and drap");
				console.log(e);
			}
		},
		update_process_tree() {
			this.show_tree_update = false;
		},
		expand_node(node) {
			node.expanded = !node.expanded;
		},
		tpl(...args) {
			let { 0: node, 2: parent, 3: index } = args;
			// console.log("node is "+node);
			// console.log("parent is "+parent);
			// console.log("index is "+index);
			let title_class = node.selected
				? "node-title node-selected"
				: "node-title";
			if (node.searched) titleClass += " node-searched";
			let is_parent = node.children.length > 0 ? true : false;
			let leaf_class = is_parent ? "" : " leaf_class ";
			title_class += leaf_class;
			let l_colour = "";
			if (
				this.level_colours[node.level] &&
				this.level_colours[node.level] !== undefined
			) {
				l_colour = this.level_colours[node.level];
			}

			return (
				<div class="flex py-1 mb-0.5">
					{is_parent ? (
						<span
							class="tree-expand"
							onClick={() => {
								this.expand_node(node);
							}}
						>
							<vs-icon icon="arrow_right"></vs-icon>
						</span>
					) : (
						""
					)}
					<span class="mx-2 max-w-1/2">{node.title}</span>
					{
						<vs-chip class="mr-0" transparent color={l_colour}>
							Level {node.level}
						</vs-chip>
					}

					<vx-tooltip class="ml-2" text="Delete" position="left">
						<vs-button
							onClick={() => {
								this.delete_node(node, parent, index);
							}}
							size="small"
							radius
							color="primary"
							type="border"
							icon="delete"
						></vs-button>
					</vx-tooltip>
				</div>
			);

			// return <span>
			// 	{
			// 		is_parent ?
			// 		<span class="tree-expand" onClick={() => {this.expand_node(node)}}  >
			// 			<vs-icon icon="arrow_right"></vs-icon>
			// 		</span>  : ''

			// 	}
			// 	<span class={title_class} domPropsInnerHTML={node_title} onClick={() => {
			// 		this.$refs.tree.nodeSelected(node)
			// 	}}>
			// 		{<vs-chip color="primary">{ node.level}</vs-chip>}
			// 	</span>

			// 	<vx-tooltip class="inline-block ml-2" text="Delete" position="left">
			// 		<vs-button onClick={() => {this.delete_node(node, parent, index)}} size="small" radius color="primary" type="border" icon="delete">
			// 		</vs-button>
			// 	</vx-tooltip>

			// </span>
		},
	},
	created() {
		this.client_id = this.$route.params.client_id || -1;
		this.client_process = Object.assign({}, ClientService.client_process);
		this.frequency = ConfigService.frequencies;
		this.unit_measure = ConfigService.unit_measures;
		this.get_all_processes();
		// this.get_client_processes();

		this.get_client_process_tree();
	},
};
</script>
<style scoped lang="scss">
// @import "@/assets/scss/vuexy/extraComponents/tree.scss";
@mixin btn-style {
	border: none;
	color: #fff;
	font-weight: bold;
	width: 140px;
	height: 35px;
	border-radius: 4px;
}
.add-btn {
	@include btn-style;
	background-color: #10163a;
}
.save-btn {
	@include btn-style;
	background-color: #ff8c00;
	position: relative;
	top: 8vh;
	left: 15vw;
	font-size: 14px;
}

.tree-view-card {
	.vx-card .vx-card__header {
		padding: 0.5rem 0.5rem 0 !important;
	}
}

.halo-tree {
	margin-left: 20px !important;
	margin-top: 10px !important;
}
</style>
<style scoped>
#process_tree >>> ul.halo-tree {
	margin-left: 15px !important;
}

.leaf_class {
	opacity: 0.8 !important;
	color: blue !important;
}
</style>
