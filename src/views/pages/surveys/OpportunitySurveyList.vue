<template>

	<div>
		<div v-if="!assessment_ready" class="vx-row mb-5">	 
			<vx-card class="rounded-lg vx-col flex w-full h-34 justify-center text-base font-semibold text-center place-items-center bg-orange-600">
				<span class="text-white">Waiting for Process Tree and Employee list to be loaded </span>
				 <br/>
				OR <br/>
				<span class="text-white">Please ensure Process Tree and Employees have been created. </span>
			</vx-card>
		</div>

		<div class="vx-row">
			<!-- CARD 9: DISPATCHED ORDERS -->
			<div class="vx-col w-full">
				<vx-card title="Opportunity Assessments">
					<template slot="actions">
						<!-- <vs-button
							@click="create_survey"
							class="mr-3"
							color="primary"
							type="filled"
							>Create Assessment</vs-button
						> -->
						<vs-button
							@click.native="edit_survey(client_id, survey_id)"
							color="primary"
							class="mr-3"
							type="filled"
							:disabled="!assessment_ready"	
							>Create Opportunity Survey</vs-button
						>
					</template>
					<div slot="no-body" class="mx-2">
						<vs-table
							search 
							max-items="10"
							pagination
							:data="surveys"
							stripe
							class="table-dark-inverted table-auto vs-con-loading__container"
						>
							>
							<template slot="thead">
								<vs-th>Name</vs-th>
							
								<vs-th>Start Date</vs-th>
								<vs-th>End Date</vs-th>
						
								<vs-th>Completed Surveys</vs-th>
								<vs-th>Status</vs-th>
								<vs-th>Action</vs-th>
							</template>

							<template slot-scope="{ data }">
								<vs-tr
									:key="indextr"
									v-for="(tr, indextr) in data"
									class="cursor-pointer"
								>
									<vs-td :data="tr.name">{{
										tr.name
									}}</vs-td>

									<vs-td :data="tr.start_date">{{
										tr.start_date | localdate
									}}</vs-td>
									<vs-td :data="tr.end_date">{{
										tr.end_date | localdate
									}}</vs-td>
								
									<vs-td >{{
										tr.completion.participant_completed_count }} / {{ 	
										tr.completion.participant_count							
									}}</vs-td>

									<vs-td>
										<div v-if="tr.completion.participant_count > 0">
											<vs-chip
												v-if="tr.completion.participant_completed_count === 
												tr.completion.participant_count"
												transparent
												color="primary"
												>
												Completed
											</vs-chip>
											<vs-chip
												v-if="tr.completion.participant_completed_count < tr.completion.participant_count"
												transparent
												color="warning"
												>
												Pending
											</vs-chip>

										</div>
										<!-- <vs-chip transparent	color="warning" > Pending </vs-chip> -->
										
									</vs-td>
									<vs-td>
										<div class="vx-row">
											<vx-tooltip text="Edit" position="left">
												<vs-button
													@click.native="
														edit_survey(
															client_id,
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
											<vx-tooltip text="View" position="left">
												<vs-button
													@click="
														view_survey(
															client_id,
															tr.id
														)
													"
													radius
													color="primary"
													type="border"
													icon-pack="feather"
													icon="icon-eye"
													class="ml-2"
												></vs-button>
											</vx-tooltip>
											<vx-tooltip
												text="Send Survey"
												position="left"
											>
												<vs-button
													@click="
														send_survey(
															tr.id
														)
													"
													radius
													color="primary"
													type="border"
													icon="send"
													class="ml-2"
												></vs-button>
											</vx-tooltip>
										</div>
									</vs-td>
								</vs-tr>
							</template>
						</vs-table>
					</div>
				</vx-card>
			</div>
			<vs-popup
				class="vs-con-loading__container survey-create-popup"
				title="Create Survey"
				:active.sync="popupActive"
				:buttons-hidden="true"
			>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name</small>
							<vs-input
								v-validate="'required|min:2'"
								name="name"
								v-model="survey.name"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('name')"
								>{{ errors.first("name") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">FTE Value</small>
							<vs-input
								v-validate="'required'"
								name="FTE value"
								v-model="survey.fte_hours"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('FTE value')"
								>{{ errors.first("FTE value") }}</span
							>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Participants</small>
							<vs-input-number
								v-model="survey.no_of_employees"
								v-validate="'required'"
								name="Paticipants number"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('Paticipants number')"
								>{{ errors.first("Paticipants number") }}</span
							>
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
								v-model="survey.description"
								v-validate="'required|min:3'"
								name="Survey Description"
								height="100px"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('Survey Description')"
								>{{ errors.first("Survey Description") }}</span
							>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="survey.status"
								>Status</vs-checkbox
							>
						</div>
					</div>

					<!-- <div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Notes</small>
							<vs-textarea
								v-model="survey.notes"
								v-validate="'required|min:3'"
								name="Survey notes"
								height="100px"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('Survey notes')"
								>{{ errors.first("Survey notes") }}</span
							>
						</div>
					</div> -->
					<!-- Save & Reset Button -->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button @click="save_survey($event)" class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							@click="reset_survey($event)"
							type="border"
							color="warning"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</vs-popup>
		</div>
		
	</div>
	
</template>

<script>
import ClientService from "@/services/ClientService.js";
import SurveyService from "@/services/SurveyService.js";
import ConstantsService from "@/services/ConstantsService.js";

export default {
	name: "opportunity-survey-list",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			survey_id: -1,
			tree_id: -1,
			selected_survey_index: -1,
			client_id: -1,
			process_tree: [],
			employees: [],
			assessment_ready_return: 0,
			surveys: [
				// {
				// 	id: 1,
				// 	name: "Source-to-Pay Assessment",
				// 	particpants: 10,
				// 	fte: 40,
				// 	completed_participants: 5,
				// 	start_date: "01/10/2020",
				// 	end_date: "31/12/2020",
				// 	description: "Source-to-Pay Assessment ",
				// 	notes: "",
				// 	status: 0,
				// },
				// {
				// 	id: 2,
				// 	name: "Assessment 2",
				// 	particpants: 20,
				// 	fte: 40,
				// 	completed_participants: 20,
				// 	description: " ",
				// 	notes: "",
				// 	start_date: "01/11/2020",
				// 	end_date: "30/11/2020",
				// 	status: 2,
				// },
				// {
				// 	id: 3,
				// 	name: "Assessment 3",
				// 	particpants: 10,
				// 	fte: 35,
				// 	completed_participants: 0,
				// 	start_date: "01/01/2021",
				// 	end_date: "31/01/2021",
				// 	description: "Assessment 3",
				// 	notes: "",
				// 	status: 0,
				// },
			],
			survey: {
				name: "",
				no_of_employees: 0,
				particpants: 1,
				fte: 40,
				completed_participants: 0,
				description: "",
				start_date: "",
				end_date: "",
				notes: "",
				status: 0,
			},
			statuses: ConstantsService.get_statuses(),
			clinic_id: -1,
		};
	},
	components: {},
	computed: {
		assessment_ready: function() {
	 		return this.assessment_ready_return;
		}
	},
	methods: {
		status_label(id) {
			return this.statuses[id] !== undefined ? this.statuses[id] : "N/A";
		},
		edit_survey(client_id, id) {

			if(this.assessment_ready){
				this.$router.push({
					path: `/pages/client/${client_id}/ops-assessment/${id}`,
				});
			} else {
				this.$vs.notify({
					title: "Load create survey form",
					text: "No process tree or Resources created. Please create process tree and employees before stating a survey.",
					color: "warning",
					timing: 4000,				
				});	
			}
		},
		view_survey(client_id, id) {
			this.$router.push({
				path: `/pages/client/${client_id}/ops-survey/${id}`,
			});
		},
		check_assessment_ready() {
			const _that = this;
			this.assessment_ready_return = false;
			this.$vs.loading();
			console.log('in check ready');
			ClientService.check_ops_survey_ready(this.client_id)
				.then((response) => {
					const output = response.data;
				
					if (output && output !== undefined) {
						if (output.success) {
							_that.assessment_ready_return = output.data.data || 0;
						} else {
							_that.$vs.notify({
								title: "Get opportunity survey  readiness",
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
						title: "Get opportunity survey readiness",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		save_survey(e) {
			e.preventDefault();
			const _that = this;
			this.$vs.loading();
			this.$validator.validateAll().then((result) => {
				if (result) {
					SurveyService.create_assesment(
						this.client_id,
						this.survey
					).then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success) {
								_that.surveys.push(data.data);
								_that.popupActive = false;
							}else{
								_that.$vs.notify({
									title: "Save survey",
									text: "Invalid data.",
									color: "warning",
									timing: 4000,				
								});	
							}
						}
						_that.$vs.loading.close();
					}).catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Save survey",
							text: "Failed to save survey.",
							color: "warning",
							timing: 4000,				
						});	
						
					});
				} else {
					_that.$vs.loading.close();
					console.log("form validation error");
				}
			});
		},
		reset_survey(e) {
			this.survey.name = "";
			this.survey.fte_hours = 0;
			this.survey.particpants = "";
			this.survey.completed_participants = "";
			this.survey.start_date = "";
			this.survey.end_date = "";
			this.survey.description = "";
			this.survey.notes = "";
			this.survey.status = 0;
			this.$validator.reset();
		},
		create_survey() {
			this.selected_survey_index = -1;
			this.survey_id = -1;
			this.reset_survey();
			this.popupActive = true;
		},
		myFunction() {
			this.$vs.notify({
				title: "Send survey Successfully to participants",
				text: "Please check email",
				color: "primary",
				fixed: true,
			});
		},
		send_survey(id) {
			const _that = this;
			this.$vs.loading();
			console.log(id, "survey id");
			SurveyService.send_ops_survey(id).then((response) => {
				const data = response.data;
				console.log(response, "survey data");
				if (response.data.success) {
					_that.myFunction();
					console.log("data send successfully");
				}else{
					_that.$vs.notify({
						title: "Send survey",
						text: "Failed to send survey",
						color: "warning",
						timing: 4000,				
					});
				}
				_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Send survey",
					text: "Failed to send survey",
					color: "warning",
					timing: 4000,				
				});	
				
			});
		},
		update_survey(client_id, survey_id, survey) {
			this.$router.push({
				path: `/pages/client/${client_id}/ops-assessment/${survey_id}`,
			});
		},
		get_client_ops_surveys() {
			const _that = this;
			this.surveys = [];
			this.$vs.loading();

			SurveyService.get_client_ops_surveys(this.client_id).then(
				(response) => {
					const data = response.data;

					if (data && data !== undefined) {
						if (data.success) {
							_that.surveys = data.data || [];
						}
					}
					_that.$vs.loading.close();
				}
			).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get client ops survey.",
					text: "No data returned.",
					color: "warning",
					timing: 4000,	
				});	
				
			});
		},
	},
	created() {
		this.client_id = this.$route.params.id || -1;
		this.get_client_ops_surveys();
		this.check_assessment_ready();
	},
};
</script>

<style scoped>
.clinic-create-popup >>> .vs-popup {
	min-height: 80% !important;
	min-width: 50% !important;
}

@media (min-width: 768px) and (max-width: 1319px) {
	.clinic-create-popup >>> .vs-popup {
		min-height: 80% !important;
		min-width: 65% !important;
	}
}
</style>
