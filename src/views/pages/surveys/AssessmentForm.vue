<template>
	<div id="assessment-form">
		<!--success alert message-->
		<vx-card>
			<vs-breadcrumb class="ml-4" :items="breadcrumbs"></vs-breadcrumb>

			<form-wizard
				ref="timing_survey_wizard"
				color="#e67e22"
				:title="survey_form_wizard_title"
				:subtitle="null"
				finish-button-text="Create survey"
				@on-complete="submit_process_timing_survey"
			>
				<tab-content
					title="Survey Information"
					:before-change="validate_survey_info_tab"
				>
					<form
						data-vv-scope="create_survey_form"
						id="create_survey_form"
					>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<small class="label">Survey Name*</small>
								<vs-input
									v-validate="'required'"
									name="survey_name"
									class="w-full"
									type="text"
									v-model="survey.name"
								/>
								<span
									class="text-danger text-sm"
									v-show="errors.has('survey_name')"
								>
									{{ errors.first("survey_name") }}
								</span>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-1/2">
								<small class="label">Start Date*</small>
								<vs-input
									type="date"
									v-validate="'required'"
									name="start_date"
									class="w-full"
									v-model="survey.start_date"
								/>
								<span
									class="text-danger text-sm"
									v-show="errors.has('start_date')"
								>
									{{ errors.first("start_date") }}
								</span>
							</div>
							<div class="vx-col w-1/2">
								<small class="label">End Date*</small>
								<vs-input
									type="date"
									v-validate="'required'"
									name="end_date"
									class="w-full"
									v-model="survey.end_date"
								/>
								<span
									class="text-danger text-sm"
									v-show="errors.has('end_date')"
								>
									{{ errors.first("end_date") }}
								</span>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<small class="label">Description</small>
								<vs-textarea
									v-validate="'required|min:3'"
									name="Survey Description"
									height="100px"
									v-model="survey.description"
								/>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-1/2">
								<small class="label">Status</small>
								<vs-checkbox
									false-value="0"
									true-value="1"
									v-model="survey.status"
								>
									Status
								</vs-checkbox>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-1/2">
								<vs-input
									type="hidden"
									v-model="survey.client_id"
									:value="client_id"
									name="client id"
								/>
							</div>
						</div>
					</form>
				</tab-content>

				<tab-content
					title="Process Info"
					:before-change="validate_process_select"
				>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Select Processes Tree</small>

							<v-tree
								ref="tree"
								:data="tree_data"
								:draggable="false"
								:tpl="tpl"
								:multiple="true"
								v-model="selected_processes"
							/>
						</div>
					</div>
				</tab-content>
				<tab-content
					title="Participants"
					:before-change="create_participants"
				>
					<div class="vx-row mb-3 flex-row items-end">
						<div class="vx-col w-2/3">
							<small class="label">Select Department</small>
							<v-select
								:options="departments"
								label="department_label"
								@input="on_department_select"
							/>
						</div>
						<div class="vx-col w-1/3">
							<small class="label"></small>
							<vs-button
								v-if="this.checked_employees.length > 0"
								color="rgb(62, 201, 214)"
								type="filled"
								class="p-3"
								@click="add_participants()"
							>
								Add Survey Participants
							</vs-button>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<p
								class="
									table-header
									text-base
									font-semibold
									text-gray-700
								"
							>
								Select Participants for the survey
							</p>
							<div slot="no-body" class="mt-4">
								<vs-table
									v-model="checked_employees"
									max-items="20"
									pagination
									multiple
									stripe
									class="table-dark-inverted"
									:data="participants"
								>
									<template slot="thead">
										<vs-th>NAME</vs-th>
										<vs-th>EMAIL</vs-th>
										<vs-th>JOB TITLE</vs-th>
										<vs-th>DEPARTMENT</vs-th>
										<vs-th>SUB DEPARTMENT</vs-th>
									</template>

									<template slot-scope="{ data }">
										<vs-tr
											:data="tr"
											:key="indextr"
											v-for="(tr, indextr) in data"
										>
											<vs-td :data="tr.first_name">
												{{ tr.first_name }}
												{{ tr.last_name }}
											</vs-td>
											<vs-td :data="tr.email">
												{{ tr.email }}
											</vs-td>
											<vs-td :data="tr.job_title">
												{{ tr.job_title }}
											</vs-td>
											<vs-td :data="tr.department_label">
												{{ tr.department_label }}
											</vs-td>
											<vs-td :data="tr.sub_function">
												{{ tr.sub_function }}
											</vs-td>
										</vs-tr>
									</template>
								</vs-table>
							</div>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<div class="mt-4">
								<vs-table
									stripe
									max-items="10"
									pagination
									class="table-dark-inverted"
									:data="selected_participants"
								>
									<template slot="header">
										<p
											class="
												table-header
												text-base
												font-semibold
												text-gray-700
											"
										>
											List of Selected Participants
										</p>
									</template>
									<template slot="thead">
										<vs-th></vs-th>
										<vs-th>NAME</vs-th>
										<vs-th>EMAIL</vs-th>
										<vs-th>JOB TITLE</vs-th>
										<vs-th>DEPARTMENT</vs-th>
										<vs-th>SUB DEPARTMENT</vs-th>
										<vs-th>Actions</vs-th>
									</template>

									<template slot-scope="{ data }">
										<vs-tr
											:data="tr"
											:key="indextr"
											v-for="(tr, indextr) in data"
										>
											<vs-td></vs-td>
											<vs-td :data="tr.first_name">
												{{ tr.first_name }}
												{{ tr.last_name }}
											</vs-td>
											<vs-td :data="tr.email">
												{{ tr.email }}
											</vs-td>
											<vs-td :data="tr.job_title">
												{{ tr.job_title }}
											</vs-td>
											<vs-td :data="tr.department_label">
												{{ tr.department_label }}
											</vs-td>
											<vs-td :data="tr.sub_function">
												{{ tr.sub_function }}
											</vs-td>

											<vs-td>
												<vx-tooltip
													text="Delete"
													position="left"
												>
													<vs-button
														radius
														color="primary"
														type="border"
														icon="delete"
														@click="
															confirm_delete_selected_employee(
																tr,
																indextr
															)
														"
													></vs-button>
												</vx-tooltip>
											</vs-td>
										</vs-tr>
									</template>
								</vs-table>
							</div>
						</div>
					</div>
				</tab-content>
				<tab-content title="Summary">
					<h3 class="mb-8 summary-title">Summary</h3>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2 summary-info mb-6">
							<p>
								<b>Survey Name</b>
								<span>{{ survey.name }}</span>
							</p>
							<p>
								<b>Start Date</b>
								<span>{{ survey.start_date | localdate }}</span>
							</p>
							<p>
								<b>End Date</b>
								<span>{{ survey.end_date | localdate }}</span>
							</p>
						</div>
						<div class="vx-col w-1/2 summary-info">
							<!-- <p>
								<b>Notes</b> <span>{{ survey.notes }}</span>
							</p> -->
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<p><b>Selected Participants </b></p>
							<vs-table
								max-items="3"
								pagination
								:data="selected_participants"
							>
								<template slot="thead">
									<vs-th> Name </vs-th>
									<vs-th> Email </vs-th>
									<vs-th> Phone </vs-th>
								</template>

								<template slot-scope="{ data }">
									<vs-tr
										:key="indextr"
										v-for="(tr, indextr) in data"
									>
										<vs-td :data="tr.first_name">
											{{ tr.first_name }}
											{{ tr.last_name }}
										</vs-td>

										<vs-td :data="tr.email">
											{{ tr.email }}
										</vs-td>

										<vs-td :data="tr.phone">
											{{ tr.phone }}
										</vs-td>
									</vs-tr>
								</template>
							</vs-table>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<p><b>Selected Processes</b></p>
							<vs-table
								max-items="3"
								pagination
								:data="sum_processes"
							>
								<template slot="thead">
									<vs-th> Name </vs-th>
								</template>

								<template slot-scope="{ data }">
									<vs-tr
										:key="indextr"
										v-for="(tr, indextr) in data"
									>
										<vs-td :data="tr.name">
											{{ tr.name }}
										</vs-td>
									</vs-tr>
								</template>
							</vs-table>
						</div>
					</div>
				</tab-content>
				<template slot="custom-buttons-left" slot-scope="props">
					<wizard-button
						v-if="!props.isLastStep"
						@click.native="save_and_exit(props.activeTabIndex)"
						class="save-exit-btn"
						>Save & Exit</wizard-button
					>
				</template>
				<template slot="custom-buttons-right" slot-scope="props">
					<wizard-button
						v-if="props.isLastStep"
						@click.native="generate_and_send"
						class="save-exit-btn"
						>Generate & Send</wizard-button
					>
				</template>
			</form-wizard>
			<vs-alert
				class="success_alert"
				:active.sync="active1"
				closable
				close-icon="close"
			>
				Successfully created Survey !
			</vs-alert>
			<vs-alert
				class="error_alert"
				:active.sync="active2"
				closable
				close-icon="close"
			>
				Error in creating Survey !
			</vs-alert>
		</vx-card>
	</div>
</template>
<script>
import { FormWizard, TabContent, WizardButton } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import vSelect from "vue-select";
import ClientService from "@/services/ClientService.js";
import DepartmentService from "@/services/DepartmentService.js";
import ProcessService from "@/services/ProcessService.js";
import SurveyService from "@/services/SurveyService.js";
import TreeView from "@/components/TreeView.vue";
import { VTree, VSelectTree } from "vue-tree-halower";
import SurveyEmployeeResultsVue from "./SurveyEmployeeResults.vue";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
	custom: {
		survey_name: {
			required: "Survey name is a required field",
		},
		start_date: {
			required: "Start date is a required field",
			//   alpha: "Your name may only contain alphabetic characters"
		},
		end_date: {
			required: "End date is a required field",
			//   alpha: "Your name may only contain alphabetic characters"
		},
	},
};
// register custom messages
Validator.localize("en", dict);

export default {
	name: "assessment-form",
	components: {
		FormWizard,
		TabContent,
		WizardButton,
		vSelect,
		TreeView,
		VTree,
		VSelectTree,
	},
	data() {
		return {
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{
					title: "Clients",
					url: `/pages/client/${this.$route.params.client_id}`,
				},
				{ title: "Survey", active: true },
			],
			allCheck: false,
			survey_form_wizard_title: "Create new Process Timing Survey",
			checked_employees: [],
			//selected: [],
			selected_participants_id: [],
			response_participants: [],
			selected_participants: [],
			root_processes: [],
			child_processes: {},
			departments: [],
			department_arr: [],
			processes: [],
			client_processes: [],
			participants: [],
			employees: [],
			client_survey: {},
			client_id: 0,
			survey_id: -1,
			client_assessment_id: -1,
			old_assessment_id: -1,
			department_id: 0,
			selected: null,
			assessment_emp: {
				employee_ids: [],
				status: 1,
			},
			assessment_process: {
				tree_id: 0,
				level_id: 0,
			},
			level_ids: [],
			assessment: {
				client_id: -1,
				assessment_employee_ids: [],
				assessment_process_ids: [],
				status: 1,
			},
			survey: {
				name: "",
				start_date: "",
				end_date: "",
				description: "",
				status: 1,
			},
			survey_process: {
				client_id: 0,
				process_tree_ids: [],
			},
			prev_selected_process_ids: [],

			selected_dept: {
				name: "",
				id: 0,
			},
			selected_processes: 0,
			surveys: [],
			sum_processes: [],
			t_p: {
				name: "",
				id: 0,
				children: [],
			},

			active1: false,
			active2: false,
			process_tree_data: [],
			tree_data: [],
			sel_resource: {},
			sel_resource_idx: -1,
		};
	},
	methods: {
		tpl(...args) {
			let { 0: node, 2: parent, 3: index } = args;
			let titleClass = node.selected
				? "node-title node-selected"
				: "node-title";
			if (node.searched) titleClass += " node-searched";
			return (
				<span>
					<span
						class={titleClass}
						domPropsInnerHTML={node.title}
						onClick={() => {
							this.$refs.tree.nodeSelected(node);
						}}
					></span>
				</span>
			);
		},
		//used in survey tab
		create_survey(e) {
			console.log("inside the create survey");
			// e.preventDefault();
			this.save_first_step(false);
			// const _that = this;

			//this.get_survey_processes();
		},
		create_participants(e) {
			const _that = this;
			console.log("saving participants");
			if (this.selected_participants.length !== 0) {
				this.save_second_step(false);
				return true;
			}
			_that.$vs.notify({
				title: "Add Participants",
				text: "Please add participants before proceeding.",
				color: "warning",
				timing: 4000,
			});
			return false;
		},
		go_to_clients_page(id) {
			const client_id = parseInt(id, 10);
			this.$router.push(`/pages/client/${client_id}`);
		},
		go_to_assessment_page(client_id, assessment_id) {
			const c_id = parseInt(client_id, 10);
			const a_id = parseInt(assessment_id, 10);

			this.$router.push(`/pages/client/${c_id}/survey/${a_id}`);
		},

		save_first_step(save_and_exit = false) {
			this.$vs.loading();
			const _that = this;
			const exit = save_and_exit;

			if (this.client_assessment_id <= 0) {
				SurveyService.create_assessment_survey(
					this.client_id,
					this.survey
				)
					.then((response) => {
						const output = response.data;

						if (output && output !== undefined) {
							if (output.success) {
								_that.surveys.push(output.data);
								_that.client_assessment_id = output.data.id;
								_that.survey_process.client_assessment_id =
									_that.client_assessment_id;
								_that.client_survey.name = output.data.name;
								_that.survey_form_wizard_title =
									"Editing Process Timing Survey : " +
									_that.client_survey.name;

								if (exit) {
									_that.$vs.loading.close();
									_that.go_to_clients_page(_that.client_id);
								} else {
									_that.get_survey_processes();
									let old_a_id = parseInt(
										_that.old_assessment_id,
										10
									);
									let new_a_id = parseInt(
										_that.client_assessment_id,
										10
									);
									if (
										old_a_id === -1 &&
										old_a_id !== new_a_id
									) {
										_that.$router.push(
											`/pages/client/${_that.client_id}/assessment/${new_a_id}`
										);
									}
								}
							} else {
								_that.$vs.notify({
									title: "Create survey",
									text: "Failed to create survey.",
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
							title: "Create survey",
							text: "Failed to create survey.",
							color: "warning",
							timing: 4000,
						});
					});
			} else {
				this.get_survey_processes();
				SurveyService.update_assessment(
					this.client_assessment_id,
					this.survey
				)
					.then((response) => {
						const output = response.data;

						if (output && output !== undefined) {
							if (output.success) {
								_that.surveys = output.data;

								if (exit) {
									_that.$vs.loading.close();
									_that.go_to_clients_page(_that.client_id);
								}
							} else {
								_that.$vs.notify({
									title: "Update survey",
									text: "Failed to update survey.",
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
							title: "Update survey",
							text: "Failed to update survey.",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		//used in participant tab
		//save and exit for second tab

		save_second_step(save_and_exit = false) {
			console.log(this.client_assessment_id, "client assessment id");
			// this.$vs.loading();
			const _that = this;
			if (!save_and_exit) {
				SurveyService.get_assessment_summary(this.client_assessment_id)
					.then((response) => {
						if (response.data.success) {
							const output = response.data;
							_that.sum_processes = output.data.processes;
						} else {
							_that.$vs.notify({
								title: "Fetch survey details",
								text: "No data returned.",
								color: "warning",
								timing: 4000,
							});
						}
						// _that.$vs.loading.close();
					})
					.catch((err) => {
						// _that.$vs.loading.close();
						_that.$vs.notify({
							title: "Fetch survey details",
							text: "No data returned.",
							color: "warning",
							timing: 4000,
						});
					});
			} else {
				const _that = this;
				let selected_nodes = this.$refs.tree.getNodes() || [];
				this.survey_process.process_tree_ids = [];
				selected_nodes.forEach((node) => {
					if (node.halfcheck || node.checked) {
						this.survey_process.process_tree_ids.push(node.id);
					}
				});

				let old_selection = this.prev_selected_process_ids.sort() || [];
				let new_selection =
					this.survey_process.process_tree_ids.sort() || [];

				if (
					JSON.stringify(old_selection) !=
					JSON.stringify(new_selection)
				) {
					//this.get_client_department_employees();
					SurveyService.save_assessment_process(
						this.client_assessment_id,
						this.survey_process
					).then((response) => {
						const output = response.data;
						if (output && output !== undefined) {
							// _that.get_client_department_employees();
							_that.go_to_clients_page(_that.client_id);
						}
					});
					_that.$vs.loading.close();
				}
			}
			// this.$vs.loading.close();
		},
		confirm_delete_selected_employee(item, index) {
			this.sel_resource = item;
			this.sel_resource_idx = index;

			this.$vs.dialog({
				type: "confirm",
				color: "danger",
				title: `Confirm Resource Delete`,
				text: "Please confirm that you wish to delete the Resource? Any previous data stored for the Resource may also get deleted.",
				accept: this.delete_selected_employee,
			});
		},
		delete_selected_employee() {
			if (this.sel_resource.assessment_employee_id > 0) {
				this.$vs.loading();
				const _that = this;
				SurveyService.delete_assessment_employee(
					this.sel_resource.assessment_employee_id
				)
					.then((response) => {
						const output = response.data;

						if (output && output !== undefined) {
							if (output.success) {
								let participant =
									_that.selected_participants[
										_that.sel_resource_idx
									];
								_that.selected_participants.splice(
									_that.sel_resource_idx,
									1
								);
								_that.participants.push(participant);
								_that.$vs.notify({
									title: "Delete successful",
									text: "Resource has been removed!",
									color: "success",
									time: 3000,
									position: "top-right",
								});
							} else {
								_that.$vs.notify({
									title: "Delete resource",
									text: output.error,
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
							title: "Delete resource",
							text: "Failed to delete resource",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		get_client_department_employees() {
			this.$vs.loading();
			const _that = this;
			this.department_arr = [];
			SurveyService.get_assessment_available_dept_employees(
				this.client_assessment_id
			)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.process_assessment_emp_list(output.data);
						} else {
							_that.$vs.notify({
								title: "Get client department employees",
								text: "No data returned",
								color: "warning",
								timing: 4000,
							});
						}
					}
					_that.$vs.loading.close();
					return true;
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Get client department employees",
						text: "No data returned",
						color: "warning",
						timing: 4000,
					});
				});
		},
		on_department_select(value) {
			console.log("change in department");
			this.department_id = value.department_id;
			this.selected_dept.name = value.department_label;
			this.selected_dept.id = value.department_id;
			this.filter_dept_employees();
		},
		filter_dept_employees() {
			this.participants = [];
			if (this.department_id > 0) {
				this.employees.forEach((emp) => {
					if (emp.function_id === this.department_id) {
						this.participants.push(emp);
					}
				});
			} else {
				this.participants = [...this.employees];
			}
		},

		process_assessment_emp_list(emp_data) {
			const _that = this;
			_that.departments = emp_data.departments;
			_that.departments.unshift({
				id: -1,
				department_label: "Select All",
				department_id: -1,
			});
			_that.employees = emp_data.department_employees || [];
			_that.selected_participants = emp_data.assessment_employees;
			_that.departments.forEach((dept) => {
				_that.department_arr[dept.id] = dept.department_label;
			});
			this.filter_dept_employees();
		},
		add_participants() {
			if (this.checked_employees.length > 0) {
				const _that = this;
				this.$vs.loading();
				let selected_employees = [];
				this.checked_employees.forEach((c_emp) => {
					selected_employees.push(c_emp.id);
				});
				let obj = {
					employee_ids: selected_employees,
				};
				console.log(obj);
				SurveyService.create_assessment_employees(
					this.client_assessment_id,
					obj
				)
					.then((response) => {
						const output = response.data;

						// console.log(output, "client processses");
						if (output && output !== undefined) {
							if (output.success) {
								_that.process_assessment_emp_list(output.data);
							} else {
								_that.$vs.notify({
									title: "Add participant",
									text: "Failed to add participant",
									color: "warning",
									timing: 4000,
								});
							}
						}
						_that.checked_employees = [];
						_that.$vs.loading.close();
					})
					.catch((err) => {
						_that.checked_employees = [];
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Add participant",
							text: "Failed to add participant",
							color: "warning",
							timing: 4000,
						});
					});
			} else {
				this.$vs.notify({
					title: "Select participant(s)",
					text: "Please select one or more participant for the survey",
					color: "warning",
					timing: 4000,
				});
			}
		},

		//used in process info tab(3rd)

		get_processes() {
			this.processes = [];
			ProcessService.get_all_processes().then((response) => {
				const data = response.data;
				// console.log(response.data, "processes");
				const _that = this;
				if (data && data !== undefined) {
					if (data.success) {
						this.processes = data.data || {};
					}
				}
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

							if (_that.client_processes.length <= 0) {
								_that.$vs.notify({
									title: "Get client process.",
									text: "Please make sure you have resources, departments and processes tree are created.",
									color: "warning",
									timing: 4000,
								});
							}
						} else {
							_that.$vs.notify({
								title: "Get client process.",
								text: "No data returned.",
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
						title: "Get client process.",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		process_tree(data, saved_process_ids) {
			let temp_tree = [];
			this.tree_data = [];
			let tree_item = this.tree_data;
			this.prev_selected_process_ids = saved_process_ids;
			console.log(data, "data return");
			data.forEach((item) => {
				const node_selected = saved_process_ids.includes(item.id)
					? true
					: false;

				const t_obj = {
					id: item.id,
					title: item.name,
					selected: node_selected,
					checked: node_selected,
					expanded: true,
					children: [],
				};

				if (item.parent_process_tree_id > 0) {
					const tree_item = ProcessService.find_tree_item(
						item.parent_process_tree_id,
						this.tree_data
					);
					tree_item.children.push(t_obj);
				} else {
					this.tree_data.push(t_obj);
				}
			});
		},

		get_survey_processes() {
			this.$vs.loading();
			const _that = this;
			SurveyService.get_assessment_process_tree(this.client_assessment_id)
				.then((response) => {
					const output = response.data;

					if (output && output !== undefined) {
						if (output.success) {
							let process_tree = output.data.process_tree || [];
							let saved_process_tree_ids =
								output.data.saved_process_tree_ids || [];
							if (
								process_tree !== [] &&
								saved_process_tree_ids !== []
							) {
								let saved_process_ids = [];
								saved_process_tree_ids.forEach((item) => {
									saved_process_ids.push(
										item.process_tree_id
									);
								});
								_that.process_tree(
									process_tree,
									saved_process_ids
								);
								console.log("getting assessment process ");
							}
						} else {
							_that.$vs.notify({
								title: "Add some processes",
								text: "No data returned.",
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
						title: "Get assessment process tree",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		get_client_survey() {
			this.$vs.loading();
			const _that = this;
			SurveyService.get_assessment_survey(this.client_assessment_id)
				.then((response) => {
					const data = response.data;

					if (data && data !== undefined) {
						if (data.success) {
							_that.client_survey = data.data || {};
							_that.survey = _that.client_survey;
							if (_that.survey && _that.survey !== undefined) {
								_that.survey_form_wizard_title =
									"Editing Process Timing Survey : " +
									_that.client_survey.name;
							} else {
								_that.survey_form_wizard_title =
									"Creating new Process Timing Survey";
							}
						} else {
							_that.$vs.notify({
								title: "Get client survey",
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
						title: "Get client survey",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},

		create_survey_process() {
			this.$vs.loading();
			const _that = this;
			let selected_nodes = this.$refs.tree.getNodes() || [];
			this.survey_process.process_tree_ids = [];
			selected_nodes.forEach((node) => {
				if (node.halfcheck || node.checked) {
					this.survey_process.process_tree_ids.push(node.id);
				}
			});

			let old_selection = this.prev_selected_process_ids.sort() || [];
			let new_selection =
				this.survey_process.process_tree_ids.sort() || [];

			console.log("getting assessment process " + new_selection);

			if (
				JSON.stringify(old_selection) === JSON.stringify(new_selection)
			) {
				this.get_client_department_employees();
				_that.$vs.loading.close;
				return true;
			} else {
				return new Promise((resolve, reject) => {
					SurveyService.save_assessment_process(
						_that.client_assessment_id,
						_that.survey_process
					)
						.then((response) => {
							const output = response.data;
							if (output && output !== undefined) {
								_that.get_client_department_employees();
								resolve(true);
								_that.$vs.loading.close();
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Save assessment process",
									text: "Invalid data",
									color: "warning",
									timing: 4000,
								});
							}
						})
						.catch((err) => {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Save assessment process",
								text: "Invalid data.",
								color: "warning",
								timing: 4000,
							});
						});
				}).catch((error) => {
					_that.$vs.loading.close();
					reject(error);
				});
			}
		},

		save_and_exit(stage_num) {
			// console.log(`stage num ${stage_num}`);
			if (stage_num === 0) {
				this.save_first_step(true);
			} else if (stage_num === 1) {
				this.save_second_step(true);
			} else if (stage_num === 2) {
				this.go_to_clients_page(this.client_id);
			}
		},

		generate_and_send() {
			console.log("generate and send");
			this.$vs.loading();
			const _that = this;
			SurveyService.create_send_assessment(
				this.client_assessment_id,
				this.assessment
			)
				.then((response) => {
					console.log("Assessment form");
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							// alert(this.success_msg);
							_that.active1 = true;
							setTimeout(
								() =>
									_that.go_to_assessment_page(
										_that.client_id,
										_that.client_assessment_id
									),
								2000
							);

							// this.go_to_clients_page(this.client_id);
						} else {
							_that.$vs.notify({
								title: "Generate and send survey",
								text: "Generate/send failed.",
								color: "warning",
								timing: 4000,
							});
							_that.active2 = true;
						}
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Generate and send survey",
						text: "Generate/Send failed.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		submit_process_timing_survey() {
			const _that = this;
			this.$vs.loading();
			SurveyService.create_assessment(
				this.client_assessment_id,
				this.assessment
			)
				.then((response) => {
					console.log("Assessment form");
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							// alert(this.success_msg);
							_that.active1 = true;
							_that.$vs.loading.close();
							setTimeout(
								() =>
									_that.go_to_assessment_page(
										_that.client_id,
										_that.client_assessment_id
									),
								2000
							);

							// this.go_to_clients_page(this.client_id);
						} else {
							_that.$vs.notify({
								title: "Create survey.",
								text: "invalid data",
								color: "warning",
								timing: 4000,
							});
							_that.active2 = true;
						}
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Create survey.",
						text: "Failed to create survey.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		validate_survey_info_tab() {
			console.log("validating the create survey tab");
			let has_errors = false;
			let errors = [];

			if (
				this.survey.name === undefined ||
				this.survey.name.length === 0
			) {
				errors.push("Survey Name is missing");
				has_errors = true;
			}

			if (
				this.survey.start_date === undefined ||
				this.survey.start_date.length === 0
			) {
				errors.push("Survey Start Date");
				has_errors = true;
			}

			if (
				this.survey.end_date === undefined ||
				this.survey.end_date.length === 0
			) {
				errors.push("Survey End Date");
				has_errors = true;
			}

			if (!has_errors) {
				this.save_first_step(false);
				return true;
			} else {
				this.$vs.notify({
					title: "Please provide the following details",
					text: errors.join("<br/>"),
					color: "warning",
					timing: 5000,
				});

				return false;
			}
		},
		validate_process_select() {
			let selected_nodes = this.$refs.tree.getNodes() || [];
			let checked_nodes = [];
			selected_nodes.forEach((node) => {
				if (node.halfcheck || node.checked) {
					checked_nodes.push(node.id);
				}
			});

			if (checked_nodes.length === 0) {
				this.$vs.notify({
					title: "Process not selected",
					text: "Please select a process",
					color: "warning",
					timing: 5000,
				});
				return false;
			}
			return this.create_survey_process();
			return true;
		},
		get_department_label(id) {
			let label = "";

			if (
				this.department_arr[id] &&
				this.department_arr[id] !== undefined
			) {
				label = this.department_arr[id];
			}

			return label;
		},

		resetInput() {
			this.$validator.reset();
		},
	},
	mounted() {
		this.participants.map(function (participant) {
			return (p_name = `${participant.first_name} ${Participant.last_name}`);
		});
	},
	created() {
		this.client_id = parseInt(this.$route.params.client_id, 10) || -1;
		this.client_assessment_id =
			parseInt(this.$route.params.survey_id, 10) || -1;
		this.old_assessment_id =
			parseInt(this.$route.params.survey_id, 10) || -1;
		// console.log(this.client_id, "client id");
		this.survey.client_id = this.client_id;
		this.survey_process.client_id = this.client_id;
		this.assessment.client_id = this.client_id;
		if (this.client_assessment_id > -1) {
			this.get_client_survey();
		}

		this.get_client_processes();
	},
	isLastStep() {
		if (this.$refs.timing_survey_wizard) {
			return this.$refs.timing_survey_wizard.isLastStep;
		}
		return false;
	},
};
</script>
<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/tree.scss";
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
.first-tab {
	left: 0 !important;
}
.right-align {
	display: grid;
	justify-items: end;
}
.summary-title {
	color: #e74c3c;
	font-size: 1.5rem;
}
.summary-info {
	padding: 1rem;
	p {
		// padding-bottom: 1.5rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-bottom: 1rem;
		font-size: 1rem !important;
	}
	span {
		// padding-left: 2rem;
	}
}
.table-header {
	font-size: 12px;
	margin-bottom: 1rem;
	color: #25beb1;
}

.vue-form-wizard .wizard-btn,
.save-exit-btn {
	@include btn-style;
	background-color: #ff8c00;
	font-size: 14px;
}
</style>
