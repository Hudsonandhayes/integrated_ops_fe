<template>
	<div class="vx-row">
		<div class="vx-col w-full mb-2">
			<vx-card slot="no-body" class="text-center greet-user ">
				<h1 class="mb-6 ">{{this.survey.name}}</h1>
				<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto ">
					{{this.survey.description}}
				</p>
				<div class="mt-5 ">
					<h6>H&H Consultant:</h6>
					<p>Arron Clarke</p>
				</div>
				<div class="mt-5 flex justify-between">
					<vs-button
					class="ml-4 mt-2"
					@click="edit_survey()"					 
					color="warning"
					type="filled"
					>
					Edit survey
					</vs-button>
					<vs-button
					class="ml-4 mt-2"
					@click="send_survey()"
					type="filled"
					color="success"					
					>Send survey</vs-button
				>
				</div>
			</vx-card>
		</div>

		<div class="vx-col w-full">
			<vx-card title="Opportunity Survey Participants">
				<div slot="no-body" class="mx-2">
					<vs-table
						search 
						max-items="10"
						pagination
						:data="participants" 
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>Name</vs-th>
							<vs-th>Phone</vs-th>
							<vs-th>Email</vs-th>
							<vs-th>Completion</vs-th>
							<vs-th>Status</vs-th>
							<vs-th>actions</vs-th>
						</template>
						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								class="cursor-pointer"
							>
								<vs-td :data="tr.first_name"
									>{{ tr.first_name }}
									{{ tr.last_name }}</vs-td
								>
								<vs-td :data="tr.phone">{{
									tr.phone
								}}</vs-td>
								<vs-td :data="tr.email">{{
									tr.email
								}}</vs-td>
								<vs-td>
									{{ tr.completion.lever_completed_count }} / 
									{{ tr.completion.lever_count }}
								
								</vs-td
								>
								<vs-td :data="tr.status">
									<vs-chip
										v-if="tr.completion.lever_completed_count === tr.completion.lever_count"
										transparent
										color="primary"
										>Completed</vs-chip
									>
									<vs-chip
										v-if="tr.completion.lever_completed_count < tr.completion.lever_count"
										transparent
										color="warning"
										>Pending</vs-chip
									>
									
								</vs-td>
								<vs-td>
									<div class="vx-row">
										<!-- <vx-tooltip
											class="mr-2"
											text="Edit Participant"
											position="left"
										>
											<vs-button
												@click.native="
													update_department(
														tr,
														indextr
													)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
											></vs-button>
										</vx-tooltip> -->
										<vx-tooltip
											v-if="tr.status === 1"
											class="mr-2"
											text="Resend Invite"
											position="left"
										>
											<vs-button
												@click="
													resend_assessment_to_employee(
														tr.id
													)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-mail"
											></vs-button>
										</vx-tooltip>
										<vx-tooltip
											v-if="tr.status === 1"
											text="Take Assessment"
											position="left"
										>
											<vs-button
												@click="take_survey_form(tr)"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-eye"
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
			class="vs-con-loading__container survey-process-create-popup"
			title="Add Participant"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">First Name</small>
							<vs-input
								v-validate="'required|min:3'"
								name="first_name"
								v-model="participant.first_name"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('first_name')"
								>{{ errors.first("first_name") }}</span
							>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Last Name</small>
							<vs-input
								v-validate="'required|min:2'"
								name="last_name"
								v-model="participant.last_name"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('last_name')"
								>{{ errors.first("last_name") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Email</small>
							<vs-input
								v-validate="'required|email'"
								name="email"
								v-model="participant.email"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('email')"
								>{{ errors.first("email") }}</span
							>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Phone</small>
							<vs-input
								v-validate="'required'"
								name="phone"
								v-model="participant.phone"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('phone')"
								>{{ errors.first("phone") }}</span
							>
						</div>
						<!-- <div class="vx-col w-1/2">
							<small class="label">Date Completed</small>
							<vs-input
								v-validate="'required'"
								name="Date Completed"
								v-model="participant.date_completed"
								class="w-full required"
								type="date"
￼
eted") }}</span
							>
						</div> -->
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="participant.status"
								>Status</vs-checkbox
							>
						</div>
						<div class="vx-col w-1/2">
							<vs-input
								type="hidden"
								name="client_id"
								:value="client_id"
							/>
						</div>
					</div>

					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_participant($event)"
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
import DepartmentService from "@/services/DepartmentService.js";
import SurveyService from "@/services/SurveyService.js";
import ConstantsService from "@/services/ConstantsService.js";

export default {
	name: "ops-survey-participants",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			paticipant_id: -1,
			assessment_id: -1,
			selected_participant_index: -1,
			client_id: 0,
			participant: {
				id: 0,
				first_name: "",
				last_name: "",
				phone: "",
				reference: "",
				email: "",
				date_completed: "",
				status: "",
				client_id: 0,
			},
			participants: [],
			survey:{
				client_id:-1
			},
			
		};
	},
	components: {},
	methods: {
		on_survey_view(id) {
			this.$router.push({ path: `/pages/ops-survey/${id}` });
		},
		take_survey_form(item) {
			this.$router.push({
				path: `/ops-survey/${this.assessment_id}/quick-form/${item.id}`,
			});
		},
		on_survey_form(id) {
			let token = "abnasjyjejs2933jhsksjhdekkskskksss";
			let route = this.$router.resolve({
				path: `/ops-survey/${id}/form/${token}`,
			});
			window.open(route.href, "_blank");
			//this.$router.push({ path: `/survey/${id}/form/${token}` });
		},
		save_participant(e) {
			e.preventDefault();
			try {
				const _that = this;
				this.$vs.loading();
				this.$validator.validateAll().then((result) => {
					if (result) {
						if (this.participant_id == -1) {
							SurveyService.create_survey_participant(
								this.participant
							).then((response) => {
								//console.log(response.data, "participants");
								const output = response.data;
								if (output && output !== undefined) {
									if (output.success) {
										_that.participants.push(output.data);
										_that.popupActive = false;
									}else{
										_that.$vs.notify({
											title: "Save participant",
											text: "Invalid data",
											color: "warning",
											timing: 4000,
										});
									}
								}
							}).catch((err) => {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Save participant",
									text: "Invalid data.",
									color: "warning",
									timing: 4000,
								});		
							});
						}
						_that.$vs.loading.close();
					} else {
						_that.$vs.loading.close();
						console.log("form validation error");
					}
				});
			} catch (error) {
				_that.$vs.loading.close();
				console.log("error during form submission");
			}
		},
		// reset_participant() {
		// 	this.participant
		// },
		add_participant() {
			this.selected_participant_index = -1;
			this.participant_id = -1;
			this.participant;
			this.popupActive = true;
			this.resetParticipant();
		},
		update_department(department, department_index) {
			this.department_id = department.id || -1;
			this.selected_department_index = department_index;
			this.department = department;
			this.popupActive = true;
		},
		get_survey_participants() {
			const _that = this;
			this.participants = [];
			this.$vs.loading();
			SurveyService.get_ops_survey_participants(this.assessment_id).then(
				(response) => {
					const data = response.data;
					console.log(data, "list of participants");
					if (data && data !== undefined) {
						if (data.success) {
							_that.participants = data.data || [];
						}else{
							_that.$vs.notify({
								title: "Get opportunity survey participants",
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
					title: "Get opportunity survey participants",
					text: "No data returned.",
					color: "warning",
					timing: 4000,	
				});	
			});
		},
		resend_assessment_to_employee(employee_id) {
			const _that = this;
			this.$vs.loading();
			SurveyService.resend_ops_to_employee(
				this.assessment_id,
				employee_id
			).then((response) => {
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						_that.$vs.notify({
							title: "Send/Resend survey.",
							text: "Please check email",
							color: "primary",
							timing: 4000,
						});
					}else{
						_that.$vs.notify({
							title: "Send/Resend survey.",
							text: "Failed",
							color: "warning",
							timing: 4000,
						});
					}
				}
				_that.$vs.loading.close();
				console.log("send assessment again");
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Send/Resend survey.",
					text: "Failed to send",
					color: "warning",
					timing: 4000,				
				});		
			});
		},
		resetParticipant() {
			this.participant.first_name = "";
			this.participant.last_name = "";
			this.participant.email = "";
			this.participant.phone = "";
			this.participant.status = 0;
			this.$validator.reset();
		},

		get_client_ops_survey() {
			this.survey = [];
			const _that = this;
			this.$vs.loading();
			SurveyService.get_client_ops_survey(this.assessment_id).then((response) => {

				const data = response.data;
				console.log("ops survey",data);
				if (data && data !== undefined) {
					if (data.success) {
						_that.survey = data.data || {};
						_that.$vs.loading.close();
					}else{
						_that.$vs.notify({
							title: "Error: Getting Opportunity survey",
							text: data.error,
							color: "warning",
							timing: 4000,				
						});	
					}
				}
				_that.$vs.loading.close();

			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get Opportunity survey",
					text: err.message,
					color: "warning",
					timing: 4000,				
				});		
			});
		},
		edit_survey() {
			this.$router.push({
				path: `/pages/client/${this.client_id}/ops-assessment/${this.assessment_id}`,
			});
		},
		send_survey() {
			this.$vs.loading();
			const _that =this;
			console.log(this.assessment_id, "survey id");
			SurveyService.send_ops_survey(this.assessment_id).then((response) => {
				console.log(response, "survey data");
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Survey successfully send to participants",
							text: "Please check email",
							color: "primary",
							timing: 4000,
						});
						console.log("data send successfully");
					}else{
						_that.$vs.notify({
							title: "Send survey",
							text: "Failed to send",
							color: "warning",
							timning: 4000,
						});	
					}
				}
				_that.$vs.loading.close();
			}
			).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Send survey",
					text: "Failed to send",
					color: "warning",
					timning: 4000,
				});	
				
			});
		},
			
	},
	created() {
		this.client_id = this.$route.params.client_id || -1;
		this.participant.client_id = this.$route.params.client_id || -1;
		this.assessment_id = this.$route.params.id || -1;
		this.get_client_ops_survey();
		// console.log("client id form participants page", this.client_id);
		// console.log("assessment_id form participants page", this.assessment_id);
		this.get_survey_participants();
		
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
