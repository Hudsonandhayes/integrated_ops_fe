<template>
	<div id="process_tree">
		<vx-card title="Set Process Hierarchy" class="mb-8">
			<div class="vx-row mb-3">
				<div class="vx-col w-1/2">
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Select Processes</small>
							<v-select
								:options="all_processes"
								label="name"
								multiple
								:reduce="(process) => process.id"
								v-model="selected_processes"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/>
						</div>
						<div class="vx-col w-full">
							<small class="label">Parent Process</small>
							<v-select
								:options="p_processes"
								label="name"
								:reduce="(process) => process.id"
								v-model="client_process.parent_process_tree_id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/>
						</div>

						<!-- <div class="vx-col w-full">
							<small class="label">Frequency</small>
							<v-select
								:options="frequency"
								label="name"
								:reduce="(f) => f.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								v-model="client_process.frequency_id"
							/>
						</div>

						<div class="vx-col w-full">
							<small class="label">Unit of Measure</small>
							<v-select
								:options="unit_measure"
								label="name"
								:reduce="(measure) => measure.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								v-model="client_process.unit_measure_id"
							/>
						</div>
						<div class="vx-col w-full">
							<small class="label">Notes</small>
							<vs-textarea
								v-model="client_process.notes"
								v-validate="'required|min:3'"
								name="Process notes"
								height="100px"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('Process Notes')"
								>{{ errors.first("Process Notes") }}</span
							>
						</div> -->
						<!-- <div class="vx-col w-full">
									<small class="label">Process Levels</small>
									<v-select
										:options="available_process_levels"
										label="name"
										multiple
										:dir="$vs.rtl ? 'rtl' : 'ltr'"
										v-model="client_process.process_levels"
									/>
								</div> -->
						<!-- <div class="vx-col w-1/2">
							<small class="label">Average Volume</small>
							<vs-input
								name="volume"
								v-model="client_process.average_volume"
							/>
						</div> -->
						<div class="vx-col w-1/2 mt-8">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="client_process.status"
								>Status</vs-checkbox
							>
						</div>
					</div>

					<!-- <div class="vx-row mb-3">
								<div class="vx-col w-full">
									<button
										class="p-3 mb-6 mt-6 add-btn"
										v-on:click="create_client_process"
									>
										Add Process
									</button>
								</div>
							</div> -->
				</div>
				<div class="vx-col w-1/2">
					<vx-card title="Current Process Hierarchy" class="tree-view-card">
						
						<div>
							<ul class="tree-view">
								<li
									class="pt-4 pb-4"
									v-for="tree in tree_view"
									:key="tree.id"
								>
								<tree-view :node="tree"></tree-view>
								</li>
							</ul>

						</div>
						
					</vx-card>
				</div>
				<div class="vx-col w-full">
					<div class="flex justify-between flex-wrap">
						<vs-button
							class="mt-4 mr-2 shadow-lg"
							type="gradient"
							color="#7367F0"
							gradient-color-secondary="#CE9FFC"
							v-on:click="create_client_process"
							>Save Process Hierarchy</vs-button
						>

						<vs-button
							class="mt-4"
							type="border"
							color="#b9b9b9"
							v-on:click="$router.back()"
						>
							Close</vs-button
						>
					</div>
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
							<span class="text-danger text-sm" v-show="errors.has('name')">
								{{ errors.first("name") }}
							</span>
						</div>
					</div>
					<!-- <div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label"
								>Link to process Documentation</small
							>
							<vs-input
								name="documentation_link"
								v-model="process.documentation_link"
								class="w-full required"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Process Inputs</small>
							<vs-input
								name="process inputs"
								v-model="process.inputs"
								class="w-full required"
							/>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Process Outputs</small>
							<vs-input
								name="process outputs"
								v-model="process.outputs"
								class="w-full required"
							/>
						</div>
					</div> -->
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-validate="'required|min:10'"
								v-model="process.description"
								name="description"
								height="100px"
							/>
							<span class="text-danger text-sm" v-show="errors.has('description')">
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

export default {
	name: "process-tree",
	components: {
		FormWizard,
		TabContent,
		vSelect,
		TreeView,
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
			process_dialog:false,
			process:{},

		};
	},

	methods: {
		get_all_processes() {
			this.all_processes = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_processes(this.client_id).then((response) => {
				const output = response.data;
				console.log(output, "client processses");
				if (output && output !== undefined) {
					if (output.success) {
						_that.all_processes = output.data || {};
					}else{
						_that.$vs.notify({
							title: "Get client process",
							text: "No data returned",
							color: "warning",
							timing: 4000,				
						});	
					}
				}
				_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get client process",
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
			ClientService.get_client_processes(this.client_id).then(
				(response) => {
					const output = response.data;
					// console.log(output, "client processses");
					if (output && output !== undefined) {
						if (output.success) {
							_that.client_processes = output.data || {};
						}else{
							_that.$vs.notify({
							title: "Get client process",
							text: "No data returned.",
							color: "warning",
							timing: 4000,				
						});
						}
					}
					_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get client proces",
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
			ClientService.get_client_process_tree(this.client_id).then(
				(response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.process_tree_data(output.data);
						}else{
							_that.$vs.notify({
								title: "Load process tree",
								text: "No data returned",
								color: "warning",
								timing: 4000,				
							});	
						}
					}
					_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Load process tree",
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
		// // tree-view
		// setTreeProcess(value) {
		// 	// this.t_p.name = value.name;
		// 	// this.t_p.id = value.id;
		// 	this.new_parent_process = {
		// 		id: value.id,
		// 		name: value.name,
		// 		level: value.level,
		// 	};
		// 	this.client_process.parent_client_process_id = this.new_parent_process.id;
		// 	this.client_process.process_lable = this.new_parent_process.name;
		// },
		add_new_process(){
			this.process = Object.assign({},ProcessService.process);			
			this.process_dialog = true;
		},
		save_process(e){
			e.preventDefault();
			const _that=this;
			this.$validator.validateAll("process_form").then((result) => {
				if (result) {
					if (_that.process.id === -1) {
						ProcessService.create_process(_that.process).then(
							(response) => {
								const data = response.data;								
								if (data && data !== undefined) {
									if (data.success) {
										_that.all_processes.push(data.data);
										_that.process_dialog = false;
									}
								}
							}
						);
					}  
				} else {
					console.log("form validation error");
				}
			});
		},

		create_client_process(event) {
			const _that = this;
			this.$vs.loading();
			this.tree_view = [];
			if (this.selected_processes.length > 0) {
				this.client_process.process_ids = this.selected_processes || [];

				ClientService.create_client_processes(
					this.client_id,
					this.client_process
				).then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.process_tree_data(output.data.process_tree);
							_that.client_process = Object.assign(
								{},
								ClientService.client_process
							);
						}else{
							_that.$vs.notify({
								title: "Create client process",
								text: "No data returned",
								color: "warning",
								timing: 4000,				
							});	
						}
					}
				}).catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Create client process",
						text: "No data returned",
						color: "warning",
						timing: 4000,				
					});	
					
				});

				this.new_parent_processes = {};
				this.new_processes = [];
				this.selected_processes = 0;
				this.selected_parent_process = 0;
			}
			_that.$vs.loading.close();
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

		done() {
			this.go_to_clients_page(this.client_id);
		},
	},
	created() {
		this.client_id = this.$route.params.client_id || -1;
		this.client_process = Object.assign({}, ClientService.client_process);
		this.frequency = ConfigService.frequencies;
		this.unit_measure = ConfigService.unit_measures;
		this.get_all_processes();
		this.get_client_processes();

		this.get_client_process_tree();
	},
};
</script>
<style scoped lang="scss">
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
</style>
