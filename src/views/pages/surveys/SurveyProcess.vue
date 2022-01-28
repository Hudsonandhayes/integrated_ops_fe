<template>
	<div>
		<!-- ITEM VIEW - GRID/LIST -->
		<div class="vs-row flex justify-end pb-4">
			<div>
				<feather-icon
					icon="ListIcon"
					@click="currentItemView = 'item-list-view'"
					class="p-2 mr-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer hidden sm:inline-flex"
					:svgClasses="{
						'text-primary stroke-current':
							currentItemView == 'item-list-view',
					}"
				/>
				<feather-icon
					icon="GridIcon"
					@click="currentItemView = 'item-tree-view'"
					class="p-2 mr-2 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer"
					:svgClasses="{
						'text-primary stroke-current':
							currentItemView == 'item-tree-view',
					}"
				/>
			</div>
		</div>

		<!--Add process-->
		<!-- <div class="vs-row flex justify-end pb-4">
			<template>
				<vs-button
					@click="create_survey_process"
					class
					color="primary"
					type="filled"
				>
					Add Process
				</vs-button>
			</template>
		</div> -->

		<!--item-tree-view-->
		<template v-if="currentItemView == 'item-tree-view'">
			<vx-card class="tree-view-card">
				<ul class="tree-view">
					<li class="pt-4 pb-4" v-for="tree in t_p_a" :key="tree.id">
						<tree-view :node="tree"></tree-view>
						<span>
							<vx-tooltip text="Edit" position="left">
								<vs-button
									@click="on_survey_view(data[indextr].id)"
									radius
									color="primary"
									type="border"
									icon-pack="feather"
									icon="icon-edit"
								></vs-button>
							</vx-tooltip>
						</span>
					</li>
				</ul>
			</vx-card>

			<!-- <VTree /> -->
		</template>
		<template v-else>
			<!-- CARD 9: DISPATCHED ORDERS -->
			<div class="vx-col w-full">
				<vx-card title="Assessment Processes">
					<!-- <template slot="actions">
						<vs-button
							@click="create_survey_process"
							class
							color="primary"
							type="filled"
							>Add Process</vs-button
						>
					</template> -->
					<div slot="no-body" class="mt-4">
						<vs-table
							max-items="10"
							pagination
							:data="survey_processes"
							stripe
							class="table-dark-inverted table-auto vs-con-loading__container"
						>
							>
							<template slot="thead">
								<vs-th>Process</vs-th>
								<vs-th>Frequecy</vs-th>
								<vs-th>Unit Measure</vs-th>
								<vs-th>Status</vs-th>
								<vs-th>Action</vs-th>
							</template>

							<template slot-scope="{ data }">
								<vs-tr
									:key="indextr"
									v-for="(tr, indextr) in data"
									class="cursor-pointer"
								>
									<vs-td :data="data[indextr].name">
										{{ data[indextr].name }}
									</vs-td>
									<!-- <vs-td
										:data="
											processes[data[indextr].process_id]
												.name
										"
									>
										{{ processes[tr.process_id].name }}
									</vs-td> -->
									<vs-td>
										{{ data[indextr].frequency }}
									</vs-td>
									<vs-td>
										{{ data[indextr].unit_measure }}
									</vs-td>
									<vs-td>
										<vs-chip
											v-if="data[indextr].status === 0"
											transparent
											color="warning"
										>
											disabled
										</vs-chip>
										<vs-chip
											v-if="data[indextr].status === 1"
											transparent
											color="primary"
											>enabled</vs-chip
										>
									</vs-td>
									<vs-td>
										<vx-tooltip text="Edit" position="left">
											<vs-button
												@click="
													update_survey_process(
														tr,
														tr.id
													)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
											></vs-button>
										</vx-tooltip>
										<vx-tooltip
											text="Delete"
											position="left"
										>
											<vs-button
												@click="
													delete_survey_process(tr.id)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-delete"
												class="mt-4"
											></vs-button>
										</vx-tooltip>
									</vs-td>
									<!-- <vs-td :data="data[indextr].process_id">
										{{ data[indextr].process_id }}
									</vs-td>
									<vs-td
										v-if="
											data[indextr]
												.parent_client_process_id
										"
										:data="data[indextr].description"
										>{{
											processes[
												data[indextr]
													.parent_client_process_id
											]
										}}</vs-td
									>
									{
											processes[
												data[indextr]
													.parent_client_process_id
											]
										}} -->
									<!-- {{  payment_types[data[indextr].payment_type] !== undefined ? payment_types[data[indextr].payment_type] : "N/A"}} -->
									<!-- <vs-td
										v-if="data[indextr].parent_process_name"
										:data="data[indextr].description"
										>{{
											data[indextr].parent_process_name
										}}</vs-td
									>
									<vs-td :data="data[indextr].order">
										{{ data[indextr].order }}
									</vs-td>
									<vs-td :data="data[indextr].status">
										<vs-chip
											v-if="data[indextr].status === 0"
											transparent
											color="warning"
											>disabled</vs-chip
										>
										<vs-chip
											v-if="data[indextr].status === 1"
											transparent
											color="primary"
											>enabled</vs-chip
										>
									</vs-td>
									<vs-td>
										<vx-tooltip text="Edit" position="left">
											<vs-button
												@click="
													update_survey_process(
														data[indextr],
														data[indextr].id
													)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
											></vs-button>
										</vx-tooltip>
										<vx-tooltip text="Edit" position="left">
											<vs-button
												@click="
													delete_survey_process(
														data[indextr].id
													)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-delete"
											></vs-button>
										</vx-tooltip>
									</vs-td> -->

									<!--<vs-td :data="data[indextr].description">{{
										process_label(
											data[indextr].parent_process_id
										)
									}}</vs-td>
									<vs-td :data="data[indextr].description">{{
										data[indextr].level
									}}</vs-td>
									<vs-td :data="data[indextr].status">
										<vs-chip
											v-if="data[indextr].status === 0"
											transparent
											color="warning"
											>disabled</vs-chip
										>
										<vs-chip
											v-if="data[indextr].status === 1"
											transparent
											color="primary"
											>enabled</vs-chip
										>
									</vs-td>
									<vs-td>
										<vx-tooltip text="Edit" position="left">
											<vs-button
												@click="
													on_survey_view(data[indextr].id)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
											></vs-button>
										</vx-tooltip>
									</vs-td>-->
								</vs-tr>
							</template>
						</vs-table>
					</div>
				</vx-card>
			</div>
		</template>

		<vs-popup
			class="vs-con-loading__container survey-process-create-popup"
			title="Add Survey Process"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Process Name</small>
							<!-- <v-select
								:options="processes"
								label="name"
								:value="$store.myValue"
								@input="setChildProcess"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/> -->
							<v-select
								v-validate="'required|min:3'"
								required
								:options="processes"
								label=" process name"
								v-model="survey_process.processess_val"
								:value="$store.myValue"
								@input="setChildProcess"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('processess_val')"
								>{{ errors.first("processess_val") }}
							</span>
							<!-- <span
								class="text-danger text-sm"
								v-show="errors.has('Process name')"
							>
								{{ errors.first("Process name") }}
							</span> -->
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Department</small>
							<!-- <v-select
								:options="departments"
								label="name"
								:value="$store.myValue"
								@input="setDepartment"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/> -->
							<v-select
								:options="departments"
								label="name"
								v-model="departments_val"
								:value="$store.myValue"
								@input="setDepartment"
							/>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Sub Department</small>
							<v-select
								:options="sub_departments"
								label="name"
								v-model="survey_process.sub_function"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Level</small>
							<vs-input
								v-validate="'required'"
								name="level"
								v-model="survey_process.level_id"
								class="w-full required"
								type="number"
								@input="setLevel"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('level')"
							>
								{{ errors.first("level") }}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Parent Process</small>
							<!-- <v-select
								label="name"
								:closeOnSelect="false"
								:options="processes"
								:reduce="(process) => process.id"
								v-model="
									survey_process.parent_client_process_id
								"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/><br /> -->
							<!-- <v-select
								:options="display_parent_process"
								label="process_lable"
								:value="$store.myValue"
								@input="setParentProcess"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/> -->
							<v-select
								:options="display_parent_process"
								label="process_lable"
								v-model="parent_process_val"
								:value="$store.myValue"
								@input="setParentProcess"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label"
								>Link to process Documentation</small
							>
							<vs-input
								name="documentation_link"
								v-model="survey_process.documentation_link"
								class="w-full required"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Process Input</small>
							<vs-input
								name="process inputs"
								v-model="survey_process.inputs"
								class="w-full required"
							/>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Process Output</small>
							<vs-input
								name="process outputs"
								v-model="survey_process.outputs"
								class="w-full required"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-model="survey_process.notes"
								name="Process notes"
								height="100px"
							/>
						</div>
						<div class="vx-col w-1/2"></div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Status</small>
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="survey_process.status"
								>Status</vs-checkbox
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<vs-input
								type="hidden"
								v-model="survey_process.survey_id"
								:value="survey_id"
							/>
						</div>
					</div>

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
import SurveyService from "@/services/SurveyService.js";
import DepartmentService from "@/services/DepartmentService.js";
import ProcessService from "@/services/ProcessService.js";
import vSelect from "vue-select";
import TreeView from "../../../components/TreeView.vue";
import VTree from "../../../components/VTree.vue";
export default {
	name: "survey-process-list",
	data() {
		return {
			currentItemView: "item-list-view",
			root: {
				name: "Parent Process",
				id: 1,
				children: [
					{
						name: "child process1",
						id: 11,
						children: [{ name: "sub-child1", id: 111 }],
					},
					{
						name: "child process2",
						id: 22,
						children: [{ name: "sub-child2", id: 222 }],
					},
				],
			},
			survey_id: -1,
			client_id: -1,
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			survey_process_id: -1,
			selected_survey_process_index: -1,
			survey_process: SurveyService.survey_process,
			departments_val: {},
			departments: [],
			sub_departments: [],
			processess_val: {},
			processes: [],
			process_name: [],
			process_id: [],
			survey_processes: [],
			parent_process_val: {},
			display_parent_process: [],
			tree_processes: [
				{
					name: "Parent Process1",
					id: 1,
					children: [
						{
							name: "child process1",
							id: 11,
							children: [{ name: "sub-child1", id: 111 }],
						},
						{
							name: "child process2",
							id: 22,
							children: [{ name: "sub-child2", id: 222 }],
						},
					],
				},
				{
					name: "Parent Process2",
					id: 2,
					children: [
						{
							name: "child process1",
							id: 11,
							children: [{ name: "sub-child1", id: 111 }],
						},
						{
							name: "child process2",
							id: 22,
							children: [{ name: "sub-child2", id: 222 }],
						},
					],
				},
			],
			t_p: {},
			t_p_a: [],
			t_p_c: {},
		};
	},
	components: {
		"v-select": vSelect,
		TreeView,
		VTree,
	},
	methods: {
		// process_label(id) {
		// 	return this.processes[id] !== undefined
		// 		? this.processes[id]
		// 		: "N/A";
		// 	console.log(this.processes[id], "id");
		// },
		on_survey_view(id) {
			this.$router.push({ path: `/pages/survey/${id}` });
		},
		save_process(e) {
			e.preventDefault();
			try {
				const _that = this;
				this.$validator
					.validateAll("Add Survey Process")
					.then((result) => {
						this.$vs.loading();
						if (result) {
							if (_that.survey_process_id === -1) {
								// this.survey_processes.push(this.survey_process);
								// console.log(this.survey_processes, "processes");
								// this.popupActive = false;
								SurveyService.create_survey_process(
									this.client_id,
									this.survey_process
								).then((response) => {
									const output = response.data;
									console.log(
										output.data,
										"survey process data"
									);
									if (output && output !== undefined) {
										if (output.success) {
											_that.survey_processes.push(
												output.data
											);
											_that.popupActive = false;
										}else{
											_that.$vs.notify({
												title: "Save survey process",
												text: "Failed to save.",
												color: "warning",
												timing: 4000,				
											});
										}
									}
									_that.$vs.loading.close();
								}).catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Save survey process",
										text: "Failed to save.",
										color: "warning",
										timing: 4000,				
									});		
								});
							} else if (this.survey_process_id > 0) {
								SurveyService.update_survey_process(
									this.survey_process_id,
									this.survey_process
								).then((response) => {
									const data = response.data;
									console.log(data, "survey process");
									if (data && data !== undefined) {
										if (data.success) {
											if (
												_that.survey_processes[
													_that
														.selected_survey_process_index
												]
											) {
												_that.survey_processes[
													_that.selected_survey_process_index
												] = data.data;
											}
											_that.popupActive = false;
										}else{
											_that.$vs.notify({
												title: "Update survey process",
												text: "Failed to save.",
												color: "warning",
												timing: 4000,				
											});	
										}
									}
									_that.$vs.loading.close();
								}).catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Update survey process",
										text: "Failed to save.",
										color: "warning",
										timing: 4000,				
									});		
								});
							}
						}
					});
			} catch (error) {
				_that.$vs.loading.close();
				console.log("error");
			}
		},
		reset_survey_process() {
			this.survey_process.level_id = 0;
			this.survey_process.documentation_link = "";
			this.survey_process.inputs = "";
			this.survey_process.outputs = "";
			this.survey_process.notes = "";
			this.survey_process.status = 0;
			this.survey_process.notes = "";
			this.processess_val = "";
			this.departments_val = "";
			this.parent_process_val = "";
			//this.survey_process.notes = "";
		},
		create_survey_process() {
			this.selected_survey_process_index = -1;
			this.survey_process_id = -1;
			this.reset_survey_process();
			this.popupActive = true;
		},
		update_survey_process(item, index) {
			this.survey_process_id = item.id || -1;
			this.selected_survey_process_index = index;
			this.survey_process = item;
			this.popupActive = true;
		},
		delete_survey_process(index) {
			//e.preventDefault();
			const _that = this;
			SurveyService.delete_survey_process(index).then((response) => {
				console.log("disabled the process");
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						_that.get_survey_processes();
					}else{
						_that.$vs.notify({
							title: "Delete survey process",
							text: "Failed to delete",
							color: "warning",
							timing: 4000,				
						});
					}
				}
			}).catch((err) => {
				_that.$vs.notify({
					title: "Delete survey process",
					text: "Failed to delete",
					color: "warning",
					timing: 4000,				
				});		
			});
		},

		get_survey_processes() {
			const _that = this;
			this.survey_processes = [];
			this.$vs.loading();
			SurveyService.get_survey_processes(this.client_id).then(
				(response) => {
					const data = response.data;
					console.log(data, "list of process saved");
					if (data && data !== undefined) {
						if (data.success) {
							_that.survey_processes = data.data || [];
						}else{
							_that.$vs.notify({
								title: "Get survey process",
								text: "No data returned",
								color: "warning",
								timing: 4000,
							});
						}
					}
					_that.$vs.loading.close();
				}
			).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get survey process",
					text: "No data returned.",
					color: "warning",
					timing: 4000,
				});	
			});
		},
		get_process_name(id) {
			// console.log(id, "process id");
			this.processes.forEach((process) => {
				if (process.id == id) {
					// console.log(process.name, "process name");
					return "process anme";
				}
			});
			// return id;
		},

		//departments, processes to display in select dropdown
		get_all_departments() {
			const _that = this;
			this.departments = [];
			DepartmentService.get_all_departments().then((response) => {
				const data = response.data;
				
				// console.log(data, "departments");
				if (data && data !== undefined) {
					if (data.success) {
						_that.departments = data.data || {};
					}
				}
			});
		},
		get_client_departments() {
			this.sub_departments = [];
			const _that = this;
			DepartmentService.get_client_departments(this.client_id).then(
				(response) => {
					const output = response.data;
					
					// console.log(output, "subdepartments");
					if (output && output !== undefined) {
						if (output.success) {
							output.data.forEach((dept) => {
								_that.sub_departments.push(dept.sub_function);
							});
						}
						console.log(_that.sub_departments, "sub function");
					}
				}
			);
		},

		setChildProcess(value) {
			// console.log(value.name + " selected ");
			this.survey_process.process_id = value.id;
			this.survey_process.process_lable = value.name;
		},
		setDepartment(value) {
			// console.log(value.name + " selected ");
			this.survey_process.client_department_id = value.id;
		},
		setParentProcess(value) {
			// console.log(value + " selected ");
			this.survey_process.parent_client_process_id = value.id;
			this.survey_process.process_lable = value.process_lable;
			// this.survey_process.department_label = value.name;
		},
		setLevel(value) {
			// console.log(value + "level selected");
			this.survey_processes.forEach((process) => {
				if (process.level_id < value) {
					this.display_parent_process.push(process);
				}
				// console.log(this.display_parent_process, "parent process");
			});
		},
	},
	created() {
		this.survey_id = this.$route.params.id || -1;
		this.client_id = this.$route.params.client_id || -1;
		this.survey_process.survey_id = this.survey_id;
		// console.log(this.client_id, "client id from process page");
		this.get_survey_processes();
		//this.get_client_departments();
		//this.get_all_departments();
	},
};
</script>

<style lang="scss">
.clinic-create-popup >>> .vs-popup {
	min-height: 80% !important;
	min-width: 50% !important;
}
.tree-view-card.vx-card .vx-card__collapsible-content .vx-card__body {
	padding: 0px !important;
}
.tree-view {
	li {
		border-bottom: 1px solid #f4f4f4;
		padding-left: 1.5rem;
		display: grid;
		grid-template-columns: 1fr 0.1fr;
		align-items: center;
		&:nth-child(odd) {
			background-color: rgba(0, 0, 0, 0.05);
		}
	}
}

@media (min-width: 768px) and (max-width: 1319px) {
	.clinic-create-popup >>> .vs-popup {
		min-height: 80% !important;
		min-width: 65% !important;
	}
}
</style>
