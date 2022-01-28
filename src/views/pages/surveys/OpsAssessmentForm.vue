<template>
	<div id="assessment-form">
		<vx-card>
			<vs-breadcrumb
				class="flex-grow justify-start"
				:items="breadcrumbs"
			></vs-breadcrumb>
			<form-wizard
				:title="survey_form_wizard_title"
				:subtitle="null"
				finish-button-text="Generate"
				@on-complete="submit_ops_survey"
			>
				<tab-content
					title="Survey Information"
					:before-change="create_ops_survey"
				>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Survey Name</small>
							<vs-input
								v-validate="'required'"
								name="survey_name"
								class="w-full required"
								type="text"
								v-model="survey.name"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('survey_name')"
								>{{ errors.first("survey_name") }}</span
							>
						</div>
						<div class="vx-col w-1/2">
							<small class="label"> Timing Assessment</small>
							<v-select
								label="name"
								:options="client_assessments"
								:reduce="
									(client_assessment) => client_assessment.id
								"
								v-model="survey.client_assessment_id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Start Date</small>
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
								>{{ errors.first("start_date") }}</span
							>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">End Date</small>
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
								>{{ errors.first("end_date") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-validate="'required|min:3'"
								name="survey_description"
								height="100px"
								v-model="survey.description"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('survey_description')"
								>{{ errors.first("survey_description") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Status</small>
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="survey.status"
								>Status</vs-checkbox
							>
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
				</tab-content>

				<tab-content
					title="Process Info"
					:before-change="create_process_lever"
				>
					<div class="vx-row mb-3">
						<div class="vx-col w-full flex justify-end">
							<vs-button
								v-if="selected_processes.length > 0"
								color="danger"
								class="p-3 mr-6 mb-6 mt-6"
								@click="confirm_delete_assessment_process()"
							>
								Delete Process
							</vs-button>
							<vs-button
								class="p-3 ml-6 mb-6 mt-6"
								@click="assign_process_participants()"
							>
								Add particpants
							</vs-button>
						</div>
						<div class="vx-col w-full">
							<vs-table
								multiple
								onlyClickCheckbox
								v-model="selected_processes"
								stripe
								:data="saved_process_emp"
								class="w-full"
							>
								<template slot="thead">
									<vs-th class="w-1/4">Process Name</vs-th>
									<vs-th class="w-1/4">Description</vs-th>
									<vs-th class="w-1/2">Participants</vs-th>
								</template>

								<template slot-scope="{ data }">
									<tbody>
										<vs-tr
											class="w-full"
											:data="tr"
											:key="indextr"
											v-for="(tr, indextr) in data"
										>
											<vs-td
												:data="tr.name"
												class="w-1/4"
											>
												{{ tr.name }}
											</vs-td>
											<vs-td
												:data="tr.description"
												class="w-1/4"
											>
												{{ tr.description }}
											</vs-td>
											<vs-td class="w-1/2">
												<ul>
													<li
														class="
															w-full
															flex
															justify-between
															pb-2
															border-b
														"
														v-for="(
															emp, emp_index
														) in tr.employees"
														:key="
															emp.ops_employee_process_id
														"
													>
														<span
															>{{
																emp.first_name
															}}
															{{
																emp.last_name
															}}</span
														>
														<span>{{
															emp.email
														}}</span>
														<vs-button
															type="border"
															size="small"
															icon-pack="feather"
															icon="icon-trash"
															color="danger"
															@click="
																confirm_delete_process_employee(
																	emp,
																	tr,
																	indextr,
																	emp_index
																)
															"
														></vs-button>
													</li>
												</ul>
											</vs-td>
										</vs-tr>
									</tbody>
								</template>
							</vs-table>
						</div>
					</div>
				</tab-content>

				<tab-content
					title="Lever Selection"
					:before-change="create_survey_process"
				>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<vs-table :data="process_levers">
								<template slot="thead">
									<vs-th>Process Name / Levers</vs-th>
								</template>

								<template slot-scope="{ data }">
									<vs-tr
										:data="tr"
										:key="indextr"
										v-for="(tr, indextr) in data"
									>
										<vs-td class="vx-col w-full">
											<div :data="tr.name">
												{{ tr.name }}
											</div>

											<div class="vx-col w-2/3">
												<v-select
													v-validate="'required'"
													required
													:options="levers"
													label="name"
													name="levers"
													v-model="
														process_levers[indextr]
															.levers
													"
													multiple
													append-to-body
													:dir="
														$vs.rtl ? 'rtl' : 'ltr'
													"
													class="w-full required"
												/>
											</div>
										</vs-td>
									</vs-tr>
								</template>
							</vs-table>
						</div>
					</div>
				</tab-content>

				<tab-content title="Summary">
					<h3 class="mb-8 summary-title">Summary</h3>
					<vx-card title="General Info" class="mb-3">
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<b>Survey Name</b>
								<span class="pl-3">{{
									summary.ops_survey.name
								}}</span>
							</div>
							<div class="vx-col w-full">
								<b>Description</b>
								<span class="pl-3">{{
									summary.ops_survey.description
								}}</span>
							</div>
							<div class="vx-col w-1/2 summary-info mb-6">
								<b>Start Date</b>
								<span class="pl-3">{{
									summary.ops_survey.start_date | localdate
								}}</span>
							</div>
							<div class="vx-col w-1/2 summary-info">
								<b>End Date</b>
								<span class="pl-3">{{
									summary.ops_survey.end_date | localdate
								}}</span>
							</div>
						</div>
					</vx-card>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<vx-card title="Selected Participants">
								<div class="vx-col w-full mb-base">
									<vx-card
										v-for="process in summary.process_emp"
										:key="process.id"
										:subtitle="process.name"
										class="mb-3"
										subtitle-color="primary"
										collapse-action
									>
										<vs-table
											max-items="10"
											pagination
											:data="process.employees"
										>
											<template slot="thead">
												<vs-th> Name </vs-th>
												<vs-th> Email </vs-th>
												<!-- <vs-th> Phone </vs-th> -->
											</template>

											<template slot-scope="{ data }">
												<vs-tr
													:key="indextr"
													v-for="(
														tr, indextr
													) in data"
												>
													<vs-td
														:data="
															data[indextr]
																.first_name
														"
													>
														{{
															data[indextr]
																.first_name
														}}
														{{
															data[indextr]
																.last_name
														}}
													</vs-td>

													<vs-td
														:data="
															data[indextr].email
														"
													>
														{{
															data[indextr].email
														}}
													</vs-td>

													<!-- <vs-td :data="data[indextr].phone">
														{{ data[indextr].phone }}
													</vs-td> -->
												</vs-tr>
											</template>
										</vs-table>
									</vx-card>
								</div>
							</vx-card>
						</div>
					</div>
				</tab-content>
				<!-- <wizard-button @click.native="save_and_exit"
                            slot="custom-buttons-right" 
                            slot-scope="props"
                            :style="props.fillButtonStyle">
                 Save & Exit
             </wizard-button> -->

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

			<vs-popup
				class="
					vs-con-loading__container
					client-process-create-popup
					add_process
				"
				title="Associate Participants to Processes"
				:active.sync="process_participant_dialog"
				:buttons-hidden="true"
			>
				<vx-card no-shadow>
					<form
						data-vv-scope="associate_participant_frm"
						id="associate_participant_frm"
					>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<div class="vx-row mb-3">
									<div class="vx-col w-full">
										<small class="label"
											>Process Name</small
										>
										<v-select
											v-validate="'required'"
											required
											:options="client_processes"
											label="name"
											name="processes"
											multiple
											v-model="
												assign_processes_participants.processes_ids
											"
											:reduce="(process) => process.id"
											:dir="$vs.rtl ? 'rtl' : 'ltr'"
											class="w-full required"
										/>
										<span
											class="text-danger text-sm"
											v-show="
												errors.has(
													'associate_participant_frm.processes'
												)
											"
										>
											{{
												errors.first(
													"associate_participant_frm.processes"
												)
											}}
										</span>
									</div>
								</div>
								<div class="vx-row mb-3">
									<div class="vx-col w-full">
										<small class="label">Employees</small>
										<v-select
											v-validate="'required'"
											name="employee"
											:options="employees"
											:getOptionLabel="
												(emp) =>
													emp.first_name +
													' ' +
													emp.last_name
											"
											multiple
											v-model="
												assign_processes_participants.employee_ids
											"
											:reduce="(emp) => emp.id"
											:dir="$vs.rtl ? 'rtl' : 'ltr'"
										/>
										<span
											class="text-danger text-sm"
											v-show="
												errors.has(
													'associate_participant_frm.employee'
												)
											"
										>
											{{
												errors.first(
													"associate_participant_frm.employee"
												)
											}}
										</span>
									</div>
								</div>
								<div
									class="
										flex flex-wrap
										items-center
										justify-end
										mt-8
									"
								>
									<vs-button
										@click="save_process_participants"
										class="ml-auto mt-2"
										>Save
									</vs-button>

									<vs-button
										class="ml-4 mt-2"
										type="border"
										color="warning"
										@click="
											process_participant_dialog = false
										"
										>Close
									</vs-button>
								</div>
							</div>
						</div>
					</form>
				</vx-card>
			</vs-popup>

			<vs-alert
				class="success_alert"
				:active.sync="sucess_dialog"
				closable
				close-icon="close"
			>
				Successfully created Survey !
			</vs-alert>
			<vs-alert
				class="error_alert"
				:active.sync="error_dialog"
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
import ProcessService from "@/services/ProcessService.js";
import SurveyService from "@/services/SurveyService.js";
import LeverService from "@/services/LeverService.js";
import TreeView from "@/components/TreeView.vue";
import { VTree, VSelectTree } from "vue-tree-halower";
// For custom error message
import { Validator } from "vee-validate";
const dict = {
	custom: {
		survey_name: {
			required: "Survey name is a required field",
		},
		start_date: {
			required: "Start date is a required field",
		},
		end_date: {
			required: "End date is a required field",
		},
	},
};
// register custom messages
Validator.localize("en", dict);

export default {
	name: "ops-assessment-form",
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
			sucess_dialog: false,
			error_dialog: false,
			allCheck: false,
			survey_form_wizard_title: "Create Opportunity Survey",
			checked_employees: [],
			selected: [],
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
			process_participants: [],
			employees: [],
			client_survey: {},
			client_id: 0,
			survey_id: -1,
			client_assessment_id: -1,
			old_assessment_id: -1,
			department_id: 0,
			select1: [],
			levers: [
				{ name: "Simplification", id: 1 },
				{ name: "Standardization", id: 2 },
				{ name: "Automation", id: 3 },
			],
			process_levers: [],
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
				client_assessment_id: -1,
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
			selected_processes: [],
			surveys: [],
			sum_processes: [],
			t_p: {
				name: "",
				id: 0,
				children: [],
			},

			process_participant_dialog: false,
			active2: false,
			tree_data: [],
			assign_processes_participants: {
				client_id: -1,
				processes_ids: [],
				employee_ids: [],
			},
			saved_process_emp: [],
			sel_process_emp: {},
			sel_process: {},
			sel_process_index: -1,
			sel_process_emp_index: -1,
			summary: {
				ops_survey: {},
				process_emp: [],
			},
			saved_process_levers: [],
			client_assessments: [],
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{
					title: "Clients",
					url: `/pages/client/${this.$route.params.client_id}`,
				},
				{ title: "Opportunity Survey Form", active: true },
			],
		};
	},
	methods: {
		go_to_assessment_page(client_id, client_assessment_id) {
			const c_id = parseInt(client_id, 10);
			const a_id = parseInt(client_assessment_id, 10);
			console.log("going to ops survey page");
			this.$router.push(`/pages/client/${c_id}/ops-survey/${a_id}`);
		},

		assign_process_participants() {
			this.assign_processes_participants.processes_ids = [];
			this.assign_processes_participants.employee_ids = [];
			this.$validator.reset();
			this.process_participant_dialog = true;
		},
		confirm_delete_assessment_process() {
			if (this.selected_processes.length > 0) {
				this.$vs.dialog({
					type: "confirm",
					color: "danger",
					title: `Confirm Assessment Process(s) Delete`,
					text: "Please confirm that you wish to delete the Assessment Process(s)? Any previous data stored for these process(s) may also get deleted.",
					accept: this.delete_assessment_process,
				});
			}
		},
		delete_assessment_process() {
			console.log("delete assessment process API to call ");
			console.log(this.selected_processes);
			const _that = this;
			let ops_employee_processes_ids = [];
			this.selected_processes.forEach(function (process, index) {
				ops_employee_processes_ids.push(process.client_process_id);
			});
			if (ops_employee_processes_ids.length > 0) {
				SurveyService.remove_ops_employee_process(
					this.client_assessment_id,
					ops_employee_processes_ids
				)
					.then((response) => {
						const output = response.data;
						if (output && output !== undefined) {
							if (output.success) {
								let new_saved_process_emp = [];
								for (
									let i = 0;
									i < _that.saved_process_emp.length;
									i++
								) {
									if (
										!ops_employee_processes_ids.includes(
											_that.saved_process_emp[i]
												.client_process_id
										)
									) {
										new_saved_process_emp.push(
											_that.saved_process_emp[i]
										);
									}
								}

								_that.saved_process_emp = new_saved_process_emp;
							} else {
								_that.$vs.notify({
									title: "Delete ops survey assessment process.",
									text: output.error,
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((e) => {
						that.$vs.notify({
							title: "Delete ops survey assessment process.",
							text: e.message,
							color: "warning",
							timing: 4000,
						});
					});
			}

			this.selected_processes = [];
		},
		create_ops_survey(e) {
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
		create_participants(e) {
			this.save_second_step(false);
			return true;
		},
		go_to_clients_page(id) {
			const client_id = parseInt(id, 10);
			this.$router.push(`/pages/client/${client_id}`);
		},

		save_and_exit(stage_num) {
			console.log(`stage num ${stage_num}`);
			if (stage_num === 0) {
				return this.save_first_step(true);
			} else if (stage_num === 1) {
				this.go_to_clients_page(this.client_id);
			} else if (stage_num === 2) {
				this.create_survey_process(true);
			}
		},

		save_first_step(save_and_exit = false) {
			const _that = this;
			const exit = save_and_exit;

			if (this.client_assessment_id <= 0) {
				this.$vs.loading();
				SurveyService.create_ops_survey(this.client_id, this.survey)
					.then((response) => {
						const output = response.data;
						if (output && output !== undefined) {
							if (output.success) {
								_that.surveys.push(output.data);
								_that.client_assessment_id = output.data.id;
								_that.survey_form_wizard_title =
									"Editing Opportunity Survey : " +
									output.data.name;

								if (exit) {
									_that.$vs.loading.close();
									_that.go_to_clients_page(_that.client_id);
								} else {
									_that.get_survey_processes();
									_that.get_process_levers();
									_that.get_client_employees();
									_that.get_client_processes();
									_that.get_survey_process_employees();

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
											`/pages/client/${_that.client_id}/ops-assessment/${new_a_id}`
										);
									}
									_that.$vs.loading.close();
								}
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Create opportunity survey",
									text: "Invalid data.",
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Create opportunity survey",
							text: "Failed to create survey " + err.message,
							color: "warning",
							timing: 4000,
						});
					});
			} else {
				this.$vs.loading();
				SurveyService.update_ops_survey(
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
								} else {
									_that.$vs.loading.close();
									_that.get_survey_processes();
									_that.get_process_levers();
									_that.get_client_employees();
									_that.get_client_processes();
									_that.get_survey_process_employees();

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
											`/pages/client/${_that.client_id}/ops-assessment/${new_a_id}`
										);
									}

									// _that.$vs.notify({
									// 	title: "Edit opportunity survey",
									// 	text: "No data returned.",
									// 	color: "warning",
									// 	timing: 4000,
									// });
								}
							}
						}
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Failed to edit survey",
							text: err.message,
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
			const _that = this;
			const exit = save_and_exit;
			//this.getSelectedParticipants();
			this.$vs.loading();
			SurveyService.create_assessment_employees(
				this.client_assessment_id,
				this.assessment_emp
			)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							if (exit) {
								_that.go_to_clients_page(_that.client_id);
							} else {
								output.data.selected_employees.forEach(
									(emp) => {
										_that.assessment_emp.employee_ids.push(
											emp.client_assessment_employee_id
										);
										_that.assessment.assessment_employee_ids.push(
											emp.client_assessment_employee_id
										);
									}
								);
							}
						}
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Failed to create assessment",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},
		delete_selected_employee(employee_id) {
			const _that = this;
			this.$vs.loading();
			SurveyService.delete_assessment_employee(employee_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined && output.success) {
						_that.get_client_department_employees();
					} else {
						_that.$vs.notify({
							title: "Delete employee",
							text: output.error,
							color: "warning",
							timing: 4000,
						});
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Error deleting employee",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},
		get_client_employees() {
			const _that = this;
			this.employees = [];
			this.$vs.loading();
			ClientService.get_client_employees(this.client_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.employees = output.data;
						} else {
							_that.$vs.notify({
								title: "Get client employees",
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
						title: "Get client employees",
						text: err.meesage,
						color: "warning",
						timing: 4000,
					});
				});
		},

		save_process_participants() {
			const _that = this;

			this.$validator
				.validateAll("associate_participant_frm")
				.then((result) => {
					if (result) {
						if (
							_that.assign_processes_participants.processes_ids !=
								undefined &&
							_that.assign_processes_participants.processes_ids
								.length > 0
						) {
							_that.assign_processes_participants.client_id =
								this.client_id;

							//  _that.saved_process_emp = Object.assign([],[]);
							_that.$vs.loading();
							SurveyService.create_ops_survey_process_employees(
								_that.client_assessment_id,
								_that.assign_processes_participants
							)
								.then((response) => {
									const data = response.data;
									if (data && data !== undefined) {
										if (data.success) {
											let new_data = data.data || [];
											_that.saved_process_emp =
												new_data.slice(
													0,
													new_data.length
												);
											_that.process_participant_dialog = false;
											_that.$vs.notify({
												position: "top-right",
												title: "Save Successful",
												text: "Paricipants added to process",
												color: "success",
												timing: 4000,
											});
										} else {
											_that.$vs.notify({
												title: "Add participant",
												text: "Failed to add particpant.",
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
										title: "Failed to Add participant",
										text: err.message,
										color: "warning",
										timing: 4000,
									});
								});
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
						} else {
							_that.$vs.notify({
								title: "Get client process",
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
						title: "Get client process",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},
		get_process_levers() {
			const _that = this;
			this.$vs.loading();
			this.process_levers = [];
			LeverService.get_process_levers()
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.levers = output.data || {};
							// console.log(_that.levers);
						}
					}
					_that.$vs.loading.close();
				})
				.catch((e) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Error fetching process levers",
						text: e.message,
						color: "warning",
						timing: 4000,
					});
				});

			this.saved_process_levers = [];
			this.$vs.loading();
			LeverService.get_saved_process_levers(
				this.client_id,
				this.client_assessment_id
			)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.saved_process_levers = output.data || {};
						}
					}
					_that.$vs.loading.close();
				})
				.catch((e) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Error fetching saved process levers",
						text: e.message,
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
			const _that = this;
			this.$vs.loading();

			ClientService.get_client_process_tree(this.client_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							let process_tree = output.data.process_tree || [];
							let saved_process_tree_ids =
								output.data.saved_process_tree_ids || [];
							let saved_process_ids = [];

							saved_process_tree_ids.forEach((item) => {
								saved_process_ids.push(item.process_tree_id);
							});

							_that.process_tree(process_tree, saved_process_ids);
						} else {
							_that.$vs.notify({
								title: "Get Survey processes",
								text: "Survey processes not found.",
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
						title: "Survey processes not found.",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},
		get_client_ops_survey() {
			const _that = this;
			this.$vs.loading();
			SurveyService.get_client_ops_survey(this.client_assessment_id)
				.then((response) => {
					const data = response.data;

					if (data && data !== undefined) {
						if (data.success) {
							_that.client_survey = data.data || {};
							_that.survey = _that.client_survey;
							_that.survey_form_wizard_title =
								"Editing Opportunity Survey : " +
								_that.client_survey.name;
						} else {
							_that.$vs.notify({
								title: "Get opportunity survey",
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
						title: "Get opportunity survey",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},

		create_survey_process(save_and_exit = false) {
			const _that = this;
			let lever_selected = true;

			this.process_levers.forEach((process) => {
				if (process.levers.length === 0) {
					lever_selected = false;
				}
			});

			if (!lever_selected) {
				this.$vs.notify({
					title: "Error: Select Process Lever",
					text: "Please select atleast one process lever",
					color: "warning",
					timing: 4000,
				});
				return false;
			}
			this.$vs.loading();
			return new Promise((resolve, reject) => {
				LeverService.post_process_levers(
					_that.client_id,
					_that.client_assessment_id,
					_that.process_levers
				)
					.then((response) => {
						_that.$vs.loading.close();
						const data = response.data;
						if (data && data != undefined) {
							if (data.success) {
								// _that.$vs.notify({
								// 	title: "Save successful",
								// 	text: "Survey process have been created successfully!",
								// 	color: "success",
								// 	timing: 4000,
								// });

								if (save_and_exit) {
									_that.go_to_clients_page(_that.client_id);
								}
								_that.get_survey_summary();
								resolve(true);
							} else {
								_that.$vs.notify({
									title: "Error creating Survey Processes",
									text: data.error,
									color: "warning",
									timing: 4000,
								});
								resolve(false);
							}
						}
					})
					.catch((e) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Process levers update",
							text: e.message,
							color: "warning",
							timing: 4000,
						});
						resolve(false);
					});
			});
		},

		create_process_lever() {
			if (this.saved_process_emp.length > 0) {
				this.process_levers = [];
				this.saved_process_emp.forEach((process) => {
					let p = {
						name: process.description,
						id: process.client_process_id,
						levers: this.levers,
					};
					if (this.saved_process_levers[process.client_process_id]) {
						p["levers"] =
							this.saved_process_levers[
								process.client_process_id
							]["levers"];
					}
					this.process_levers.push(p);
					console.log(p);
				});
				return true;
			} else {
				this.$vs.notify({
					title: "Participant not selected",
					text: "Plaese select participant(s) for the survey",
					color: "warning",
					timing: 4000,
				});
				return false;
			}
		},
		get_survey_process_employees() {
			const _that = this;
			this.$vs.loading();

			SurveyService.get_survey_process_employees(
				this.client_assessment_id
			)
				.then((response) => {
					const data = response.data;

					if (data && data !== undefined) {
						if (data.success) {
							_that.saved_process_emp.splice(
								0,
								_that.saved_process_emp.length,
								...data.data
							);
						} else {
							_that.$vs.notify({
								title: "Get survey process employees",
								text: "There are no  survey process employees",
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
						title: "Get survey process employees",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},
		confirm_delete_process_employee(item, process, p_index, emp_index) {
			this.sel_process_emp = item;
			this.sel_process = process;
			this.sel_process_index = p_index;
			this.sel_process_emp_index = emp_index;

			this.$vs.dialog({
				type: "confirm",
				color: "danger",
				title: `Confirm Participant Delete`,
				text: "Please confirm that you wish to delete the Participant from the Process? Any previous data stored for this process participant may get deleted.",
				accept: this.delete_process_employee,
				parameters: [item, process, p_index, emp_index],
			});
		},
		acceptAlert(color) {
			this.$vs.notify({
				color: "danger",
				title: "Deleted image",
				text: "The selected image was successfully deleted",
			});
		},

		delete_process_employee(parameters) {
			const _that = this;
			this.$vs.loading();
			SurveyService.delete_process_employee(
				this.sel_process_emp.ops_employee_process_id
			)
				.then((response) => {
					const data = response.data;
					if (data && data !== undefined) {
						if (_that.sel_process.employees.length === 1) {
							_that.get_survey_process_employees();
						} else {
							_that.sel_process.employees.splice(
								_that.sel_process_emp_index,
								1
							);
						}

						_that.$vs.notify({
							title: "Delete sucessful",
							text: "Resource has been removed successfully.",
							color: "success",
							timing: 4000,
						});
					} else {
						_that.$vs.notify({
							title: "Failed : Delete Resource",
							text: data.error,
							color: "warning",
							timing: 4000,
						});
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Delete employees",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},

		get_survey_summary() {
			this.$vs.loading();
			const _that = this;
			SurveyService.get_ops_survey_summary(this.client_assessment_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.summary.ops_survey = output.data.ops_survey;
							_that.summary.process_emp =
								output.data.process_employees || [];
							_that.$vs.loading.close();
							return true;
						} else {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Survey summary",
								text: "No data returned.",
								color: "warning",
								timing: 4000,
							});
							_that.error_dialog = true;
						}
					}
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Survey summary",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
			return false;
		},
		get_client_surveys() {
			const _that = this;
			this.client_assessments = [];
			this.$vs.loading();
			SurveyService.get_client_surveys(this.client_id)
				.then((response) => {
					const data = response.data;
					if (data && data !== undefined) {
						if (data.success) {
							_that.client_assessments = data.data || {};
						} else {
							_that.$vs.notify({
								title: "Get client survey",
								text: "There are no client surveys",
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
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},

		generate_and_send() {
			this.$vs.loading();
			const _that = this;

			SurveyService.create_send_ops_assessment(this.client_assessment_id)
				.then((response) => {
					console.log("Assessment form submitted");
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.sucess_dialog = true;

							setTimeout(
								() =>
									_that.go_to_assessment_page(
										_that.client_id,
										_that.client_assessment_id
									),
								2000
							);
						} else {
							_that.$vs.notify({
								title: "Create and send opportunity survey assessment.",
								text: "Invalid data",
								color: "warning",
								timing: 4000,
							});
							_that.error_dialog = true;
						}
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Create and send opportunity survey assessment.",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},

		submit_ops_survey() {
			this.$vs.loading();
			const _that = this;
			SurveyService.create_ops_assessment(this.client_assessment_id)
				.then((response) => {
					console.log("Assessment form submitted");
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.sucess_dialog = true;

							setTimeout(
								() =>
									_that.go_to_assessment_page(
										_that.client_id,
										_that.client_assessment_id
									),
								2000
							);
						} else {
							_that.$vs.notify({
								title: "Create opportunity survey assessment.",
								text: "Invalid data",
								color: "warning",
								timing: 4000,
							});
							_that.error_dialog = true;
						}
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Create opportunity survey assessment.",
						text: "Invalid data",
						color: "warning",
						timing: 4000,
					});
				});
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
		this.survey = Object.assign({}, SurveyService.ops_survey);
		if (this.client_assessment_id > 0) {
			this.get_client_ops_survey(this.client_assessment_id);
		}

		// console.log(this.client_id, "client id");
		this.survey.client_id = this.client_id;
		this.survey_process.client_id = this.client_id;
		this.assessment.client_id = this.client_id;

		this.get_client_processes();
		//this.get_process_levers();
		this.get_client_surveys();
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
