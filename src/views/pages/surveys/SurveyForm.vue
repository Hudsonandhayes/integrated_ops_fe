<template>
	<div id="survey-form">
		<div class="block sm:hidden">
			<div class="h-screen flex w-full bg-img">
				<div
					class="
						vx-col
						flex
						items-center
						justify-center
						flex-col
						sm:w-1/2
						md:w-3/5
						lg:w-3/4
						xl:w-1/2
						mx-auto
						text-center
					"
				>
					<img
						src="@/assets/images/pages/404.png"
						alt="graphic-500"
						class="mx-auto mb-4"
					/>
					<h1
						class="
							sm:mx-0
							mx-4
							mb-4
							sm:mb-12
							text-3xl
							font-bold
							d-theme-heading-color
						"
					>
						Survey disabled on Mobile Devices!
					</h1>
					<p
						class="
							sm:mx-0
							mx-4
							mb-4
							sm:mb-16
							text-lg
							font-semibold
							d-theme-text-inverse
						"
					>
						Sorry, but the Survey is currently disabled on mobile
						devices.Please use a computer with a large screen to
						continue.
					</p>
				</div>
			</div>
		</div>
		<div class="hidden sm:block">
			<div class="faq-jumbotron">
				<div
					class="
						faq-jumbotron-content
						min-h-1/4
						flex flex-col
						rounded-lg
						mb-base
					"
				>
					<div class="flex mx-10 mt-5">
						<h1 class="card-title text-white text-center flex-grow">
							{{ title }}
						</h1>
						<img
							class="self-start"
							width="150px"
							alt="Hudson & Hayes logo"
							src="@/assets/images/logo/logo.png"
						/>
					</div>
					<div class="text-white lg:p-32 md:p-24 sm:p-16 p-8">
						<h2 class="text-white">
							Hello {{ survey.assessment_employee.first_name
							}}{{ survey.assessment_employee.last_name }},
						</h2>
						<br />
						<h3 class="text-white">
							Thanking you for taking part in this
							{{ survey.assessment.name }}.
						</h3>
						<br />
						<p class="text-white">
							{{ survey.assessment.description }}
						</p>
					</div>
				</div>
			</div>
			<vx-card class="mb-base h-full py-5 px-16">
				<form-wizard
					color="rgba(var(--vs-primary), 1)"
					title="Employee Activity Data Assessment"
					:subtitle="null"
					finishButtonText="Done"
					@on-complete="formSubmitted"
					class="mt-10"
				>
					<tab-content
						title="Terms and Conditions"
						class="mb-5"
						icon="feather icon-image"
						:before-change="survey_consent"
					>
						<div class="vx-row w-full align-middle mt-12">
							<p class="mb-3">
								Please accept the following "Terms and
								Conditions" before taking the survey.
							</p>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-1/2">
								<vs-checkbox
									false-value="0"
									true-value="1"
									v-model="
										survey.assessment_employee.gdpr_consent
									"
									>GDPR Consent
								</vs-checkbox>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-1/2">
								<vs-checkbox
									false-value="0"
									true-value="1"
									v-model="survey.assessment_employee.tandc"
									>I Agree</vs-checkbox
								>
							</div>
						</div>
					</tab-content>

					<!--tab 1 content-->
					<tab-content
						title="Personal Details"
						class="mb-5 h-2/3"
						icon="feather icon-home"
					>
						<vx-card class="mb-base">
							<div class="vs-row flex">
								<div class="vx-col w-1/2 mb-5">
									<span
										class="
											label
											text-base
											font-semibold
											text-grey-700
										"
										>Name :
									</span>
									<span class="label text-base text-grey-700">
										{{
											survey.assessment_employee
												.first_name
										}}
										{{
											survey.assessment_employee.last_name
										}}
									</span>
								</div>
								<div class="vx-col w-1/2 mb-5">
									<span
										class="
											label
											text-base
											font-semibold
											text-grey-700
										"
										>Email :
									</span>
									<span class="label text-base text-grey-700">
										{{ survey.assessment_employee.email }}
									</span>
								</div>
							</div>
							<div class="vs-row flex">
								<div class="vx-col w-1/2 mb-5">
									<span
										class="
											label
											text-base
											font-semibold
											text-grey-700
										"
										>Profession :
									</span>
									<span class="label text-base text-grey-700">
										{{
											survey.assessment_employee.job_title
										}}
									</span>
								</div>
								<div class="vx-col w-1/2 mb-5">
									<span
										class="
											label
											text-base
											font-semibold
											text-grey-700
										"
										>Department :
									</span>
									<span class="label text-base text-grey-700">
										{{
											survey.assessment_employee.function
										}}
									</span>
								</div>
							</div>
							<div class="vs-row flex">
								<div class="vx-col w-1/2 mb-5">
									<span
										class="
											label
											text-base
											font-semibold
											text-grey-700
										"
										>Sub Department :
									</span>
									<span class="label text-base text-grey-700">
										{{
											survey.assessment_employee
												.sub_function
										}}
									</span>
								</div>
							</div>
						</vx-card>
					</tab-content>

					<tab-content
						title="Activity Breakdown"
						class="mb-5"
						icon="feather icon-briefcase"
						:before-change="submit_responses"
					>
						<div class="vx-row w-full align-middle">
							<!-- <div class="vx-col w-1/6 bg-highlight">
								<h3 class="mt-4">Activity</h3>
							</div> -->
							<vs-col vs-w="1.8" class="bg-highlight">
								<h3 class="mt-4">Activity</h3>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<vx-tooltip
									text="What % of your overall working time is spent working on this process "
								>
									<h3 class="mt-4">
										Percentage of time spent
									</h3>
								</vx-tooltip>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<vx-tooltip
									text="How much time do you spend working on this process/activity. This is the tangible working time, otherwise known as touch time. Enter the minimum time here.  "
								>
									<h3 class="mt-4">Process Time (min)</h3>
								</vx-tooltip>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<vx-tooltip
									text="How much time do you spend working on this process/activity. This is the tangible working time, otherwise known as touch time. Enter the average time here. "
								>
									<h3 class="mt-4">Process Time (max)</h3>
								</vx-tooltip>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<vx-tooltip
									text="How much time do you spend working on this process/activity. This is the tangible working time, otherwise known as touch time. Enter the maximun time here.  "
								>
									<h3 class="mt-4">Process Time (avg)</h3>
								</vx-tooltip>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<h3 class="mt-4">Rework values</h3>
							</vs-col>
							<vs-col vs-w="1.2" class="bg-highlight">
								<h3 class="mt-4">Add Rework</h3>
							</vs-col>
						</div>
						<div class="vx-row w-full align-middle">
							<!-- <div class="vx-col w-1/6 bg-highlight">
								<h3 class="mt-4">Activity</h3>
							</div> -->
							<vs-col vs-w="1.8" class="bg-highlight">
								<h3 class="mt-4">Total</h3>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<h3 class="mt-4">{{ total_pct_time }}</h3>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<h3 class="mt-4">
									{{ total_min_process_time }}
								</h3>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<h3 class="mt-4">
									{{ total_max_process_time }}
								</h3>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight">
								<h3 class="mt-4">
									{{ total_avg_process_time }}
								</h3>
							</vs-col>
							<vs-col vs-w="1.8" class="bg-highlight"> </vs-col>
							<vs-col vs-w="1.2" class="bg-highlight"> </vs-col>
						</div>
						<!-- <hr /> -->
						<div
							class="vx-row w-full align-middle mt-12"
							v-for="item in survey.response_full"
							:key="item.id"
						>
							<vs-col vs-w="1.8">
								<!-- <vs-breadcrumb
									:color="colorx"
									:items="item.name"
									separator="chevron_right"
								></vs-breadcrumb> -->
								<strong>{{ item.name }} </strong>
							</vs-col>
							<vs-col vs-w="1.8">
								<vs-tooltip
									:text="`Frequency ${item.frequency}, in ${item.unit_measure}`"
								>
									<vs-input
										v-model="item.pc_time_spent"
										:label-placeholder="`% of time`"
										class="mt-4 w-3/4"
										@change="calculate_time_totals"
									/>
								</vs-tooltip>
							</vs-col>
							<vs-col vs-w="1.8">
								<vs-input
									v-model="item.min_time_spent"
									:label-placeholder="`In ${item.unit_measure}`"
									class="mt-4 w-3/4"
									@change="calculate_time_totals"
								/>
							</vs-col>
							<vs-col vs-w="1.8">
								<vs-input
									v-model="item.max_time_spent"
									:label-placeholder="`In ${item.unit_measure}`"
									class="mt-4 w-3/4"
									@change="calculate_time_totals"
								/>
							</vs-col>
							<vs-col vs-w="1.8">
								<vs-input
									v-model="item.avg_time_spent"
									:label-placeholder="`In ${item.unit_measure}`"
									class="mt-4 w-3/4"
									@change="calculate_time_totals"
								/>
							</vs-col>
							<vs-col vs-w="1.8">
								<ul>
									<li>
										Rework time(min):
										{{ item.min_time_waste }}
									</li>
									<li>
										Rework time(max):
										{{ item.max_time_waste }}
									</li>
									<li>
										Rework time(avg):
										{{ item.avg_time_waste }}
									</li>
								</ul>
							</vs-col>
							<vs-col vs-w="1.2" class="rework_btn">
								<vx-tooltip
									text="Add/View Rework"
									position="left"
								>
									<vs-button
										color="primary"
										@click="add_rework_form(item)"
										type="filled"
										radius
										icon="add"
									></vs-button>
								</vx-tooltip>
							</vs-col>
							<!-- <div class="vx-col w-1/6">
								<vs-breadcrumb
									:color="colorx"
									:items="item.levels"
									separator="chevron_right"
								></vs-breadcrumb>

								<h5>{{ item.name }}</h5>
							</div>
							<div class="vx-col w-1/6">
								<vs-input
									v-model="item.percent_time"
									class="mt-4 w-full"
								/>
							</div>
							<div class="vx-col w-1/6">
								<vs-input
									v-model="item.process_time_min"
									class="mt-4 w-full"
								/>
							</div>
							<div class="vx-col w-1/6">
								<vs-input
									v-model="item.process_time_max"
									class="mt-4 w-full"
								/>
							</div>
							<div class="vx-col w-1/6">
								<vs-input
									v-model="item.process_time_avg"
									class="mt-4 w-full"
								/>
							</div>

							<div class="vx-col w-1/12 rework_btn">
								<ul>
									<li>
										Rework time(min):
										{{ rework_response.cum_waste_time_min }}
									</li>
									<li>
										Rework time(max):
										{{ rework_response.cum_waste_time_max }}
									</li>
									<li>
										Rework time(avg):
										{{ rework_response.cum_waste_time_avg }}
									</li>
								</ul>
							</div>
							<div class="vx-col w-1/12 rework_btn">
								<vx-tooltip text="Add/View Rework" position="left">
									<vs-button
										color="primary"
										@click="add_rework_form(item.id)"
										type="filled"
										radius
										icon="add"
									></vs-button>
								</vx-tooltip>
							</div> -->
						</div>
					</tab-content>

					<!-- tab 3 content -->
					<tab-content
						title="Thank You!"
						class="mb-5"
						icon="feather icon-image"
					>
						<div
							class="
								vx-row
								w-full
								flex flex-col
								align-middle
								mt-12
							"
						>
							<h3>Thank you for submitting the assessment</h3>
							<p class="mt-3">
								We may get in touch to further discuss the
								information provided as part of this assessment.
								<br />If you have any questions regarding the
								assessment, please email us at
								<span class="email-link"
									>info@hudsonandhayes.co.uk</span
								>
							</p>
						</div>
					</tab-content>
				</form-wizard>
			</vx-card>

			<vs-popup
				class="vs-con-loading__container"
				title="Thank You!"
				:active.sync="no_consent_notification"
				:buttons-hidden="true"
				button-close-hidden
			>
				<vx-card no-shadow>
					<div class="vx-row w-full align-middle">
						<div class="vx-col w-full">
							<h2
								class="
									mb-3
									text-base
									font-semibold
									text-grey-700
								"
							>
								You have declined consent to Terms and
								Conditions of this survey. You may close the
								page to exit the survey.
							</h2>
						</div>
					</div>
				</vx-card>
			</vs-popup>

			<vs-popup
				class="vs-con-loading__container"
				title="Thank You!"
				:active.sync="no_questions_returned"
				:buttons-hidden="true"
				button-close-hidden
			>
				<vx-card no-shadow>
					<div class="vx-row w-full align-middle">
						<div class="vx-col w-full">
							<h2
								class="
									mb-3
									text-base
									font-semibold
									text-grey-700
								"
							>
								This survey did not pull up questions related to
								you. You may close the page to exit the survey.
								<br />If you have any questions regarding the
								assessment, please email us at
								<span class="email-link"
									>info@hudsonandhayes.co.uk</span
								>
							</h2>
						</div>
					</div>
				</vx-card>
			</vs-popup>

			<vs-popup
				class="vs-con-loading__container"
				title="Thank You!"
				:active.sync="thankyouDone"
				:buttons-hidden="true"
				button-close-hidden
			>
				<vx-card no-shadow>
					<div class="vx-row w-full align-middle">
						<div class="vx-col w-full">
							<h2
								class="
									mb-3
									text-base
									font-semibold
									text-grey-700
								"
							>
								Thank you for taking part in this survey. You
								may close the page to exit the survey.
							</h2>
						</div>
					</div>
				</vx-card>
			</vs-popup>
			<!--FORM-->
			<vs-popup
				class="
					vs-con-loading__container
					employee_survey-popup
					rework_form
				"
				title="Add Rework"
				:active.sync="popupActive1"
				:buttons-hidden="true"
			>
				<form data-vv-scope="wastage_form" id="wastage_form">
					<vx-card no-shadow>
						<div class="vx-row mb-3">
							<div class="vx-col w-1/3">
								<small class="label"
									>Rework or waste time(min)</small
								>
								<vs-input
									name="rework_min_time"
									v-model="rework.min_time_waste"
									class="w-full required"
									v-validate="'required'"
								/>
								<span
									v-show="
										errors.has(
											'wastage_form.rework_min_time'
										)
									"
									class="text-danger text-sm"
									>{{
										errors.first(
											"wastage_form.rework_min_time"
										)
									}}
								</span>
							</div>
							<div class="vx-col w-1/3">
								<small class="label"
									>Rework or waste time(max)</small
								>
								<vs-input
									name="rework_max_time"
									v-model="rework.max_time_waste"
									class="w-full required"
									v-validate="'required'"
								/>
								<span
									v-show="
										errors.has(
											'wastage_form.rework_max_time'
										)
									"
									class="text-danger text-sm"
									>{{
										errors.first(
											"wastage_form.rework_max_time"
										)
									}}
								</span>
							</div>
							<div class="vx-col w-1/3">
								<small class="label"
									>Rework or waste time(avg)</small
								>
								<vs-input
									name="rework_avg_time"
									v-model="rework.avg_time_waste"
									class="w-full required"
									:value="total"
									v-validate="'required'"
								/>
								<span
									v-show="
										errors.has(
											'wastage_form.rework_avg_time'
										)
									"
									class="text-danger text-sm"
									>{{
										errors.first(
											"wastage_form.rework_avg_time"
										)
									}}
								</span>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<small class="label">Reason for rework</small>
								<vs-textarea
									name="reason"
									v-model="rework.waste_reason"
									height="100px"
								/>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<div
									class="
										flex flex-wrap
										items-center
										justify-end
										mt-8
									"
								>
									<vs-button
										@click="add_rework()"
										class="ml-auto mt-2"
										>Add</vs-button
									>
								</div>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<vs-table
									max-items="7"
									stripe
									class="
										table-dark-inverted
										add_process_table
									"
									:data="rework_list"
								>
									<template slot="thead">
										<vs-th>Reason for rework</vs-th>
										<vs-th>Rework or waste time(min)</vs-th>
										<vs-th>Rework or waste time(max)</vs-th>
										<vs-th>Rework or waste time(avg)</vs-th>
									</template>

									<template slot-scope="{ data }">
										<vs-tr
											:data="tr"
											:key="indextr"
											v-for="(tr, indextr) in data"
										>
											<vs-td
												:data="
													data[indextr].waste_reason
												"
											>
												{{ tr.waste_reason }}
											</vs-td>

											<vs-td
												:data="
													data[indextr].min_time_waste
												"
											>
												{{ tr.min_time_waste }}
											</vs-td>
											<vs-td
												:data="
													data[indextr].max_time_waste
												"
											>
												{{ tr.max_time_waste }}
											</vs-td>
											<vs-td
												:data="
													data[indextr].avg_time_waste
												"
											>
												{{ tr.avg_time_waste }}
											</vs-td>
										</vs-tr>
									</template>
								</vs-table>
							</div>
						</div>
					</vx-card>
				</form>
			</vs-popup>
		</div>
	</div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import SurveyService from "@/services/SurveyService.js";
import { Validator } from "vee-validate";

export default {
	data() {
		return {
			colorx: "#10163a",
			title: "Timing Survey",
			popupActive1: false,
			thankyouDone: false,
			can_proceed: false,
			survey: {
				assessment: {
					name: "",
					description: "",
				},
				assessment_employee: {
					first_name: "",
					last_name: "",
				},
				response_full: [],
			},
			survey_id: -1,
			employee_id: -1,
			token: "",
			image: {},
			rework: {},
			rework_list: [],
			rework_response: {
				cum_waste_time_min: 0,
				cum_waste_time_max: 0,
				cum_waste_time_avg: 0,
			},
			total_pct_time: 0,
			total_min_process_time: 0,
			total_max_process_time: 0,
			total_avg_process_time: 0,
			current_response_row: {},
			no_consent_notification: false,
			no_questions_returned: false,
		};
	},
	methods: {
		formSubmitted() {
			console.log(this.survey.assessment_employee);
			this.thankyouDone = true;
			console.log("Thank you for submission");
		},
		survey_consent() {
			console.log(this.survey.assessment_employee);
			const _that = this;
			let employee = this.survey.assessment_employee;
			this.no_consent_notification = false;

			if (this.can_proceed) {
				this.$vs.loading();
				return new Promise((resolve, reject) => {
					if (_that.token && _that.token !== undefined) {
						SurveyService.update_assessment_employee_token(
							_that.employee_id,
							_that.survey.assessment_employee,
							_that.token
						)
							.then((response) => {
								const data = response.data;
								if (data && data !== undefined) {
									if (data.success) {
										_that.$vs.loading.close();
										if (
											data.data.gdpr_consent === 0 ||
											data.data.tandc === 0
										) {
											_that.no_consent_notification = true;
										}
										resolve(true);
									} else {
										_that.$vs.notify({
											title: "Error processing request",
											text: data.error,
											color: "warning",
											timing: 4000,
										});
									}
									_that.$vs.loading.close();
									resolve(false);
								}
							})
							.catch((err) => {
								console.log("Error " + err.message);
								that.$vs.loading.close();
								_that.$vs.notify({
									title: "Error processing requset",
									text: err.message,
									color: "warning",
									timing: 4000,
								});
								resolve(false);
							});
					} else {
						SurveyService.update_assessment_employee(
							_that.employee_id,
							_that.survey.assessment_employee
						)
							.then((response) => {
								const data = response.data;
								if (data && data !== undefined) {
									if (data.success) {
										_that.$vs.loading.close();
										if (
											(employee.gdpr_consent === 1 ||
												employee.gdpr_consent ===
													true) &&
											(employee.tandc === 1 ||
												employee.tandc === true)
										) {
											resolve(true);
										} else {
											if (
												data.data.gdpr_consent === 0 ||
												data.data.tandc === 0
											) {
												_that.no_consent_notification = true;
											}
											resolve(false);
										}
									} else {
										_that.$vs.notify({
											title: "Error processing request",
											text: data.error,
											color: "warning",
											timing: 4000,
										});
									}
									_that.$vs.loading.close();
									resolve(false);
								}
								_that.$vs.loading.close();
							})
							.catch((err) => {
								console.log("Error " + err.message);
								that.$vs.loading.close();
								_that.$vs.notify({
									title: "Error processing request",
									text: err.message,
									color: "warning",
									timing: 4000,
								});
								resolve(false);
							});
					}
				});
			} else {
				this.$vs.notify({
					title: "Problem loading survey data",
					text: "Please contact Admin to resovle the issue",
					color: "warning",
					timing: 4000,
				});
				resolve(false);
			}
		},
		add_rework_form(item) {
			console.log(item);
			this.current_response_row = {};
			//reset rework
			this.$validator.reset();
			this.rework = Object.assign({}, SurveyService.rework);
			this.rework.client_assessment_response_id = item.id;
			this.current_response_row = item;
			console.log(
				this.rework.client_assessment_response_id,
				"client response id"
			);
			this.popupActive1 = true;
		},
		add_rework() {
			const _that = this;
			this.$validator.validateAll("wastage_form").then((result) => {
				if (result) {
					if (this.token && this.token !== undefined) {
						SurveyService.create_rework_token(
							_that.rework.client_assessment_response_id,
							_that.rework,
							_that.token
						).then((response) => {
							console.log(_that.rework);
							_that.current_response_row.min_time_waste =
								parseFloat(
									_that.current_response_row.min_time_waste
								) + parseFloat(_that.rework.min_time_waste);
							_that.current_response_row.max_time_waste =
								parseFloat(
									_that.current_response_row.max_time_waste
								) + parseFloat(_that.rework.max_time_waste);
							_that.current_response_row.avg_time_waste =
								parseFloat(
									_that.current_response_row.avg_time_waste
								) + parseFloat(_that.rework.avg_time_waste);

							_that.rework_list.push(_that.rework);

							_that.rework = {
								client_assessment_response_id:
									_that.rework.client_assessment_response_id,
							};

							// _that.current_response_row = {};
						});
					} else {
						SurveyService.create_rework(
							_that.rework.client_assessment_response_id,
							_that.rework
						).then((response) => {
							console.log(_that.rework);
							_that.current_response_row.min_time_waste =
								parseFloat(
									_that.current_response_row.min_time_waste
								) + parseFloat(_that.rework.min_time_waste);
							_that.current_response_row.max_time_waste =
								parseFloat(
									_that.current_response_row.max_time_waste
								) + parseFloat(_that.rework.max_time_waste);
							_that.current_response_row.avg_time_waste =
								parseFloat(
									_that.current_response_row.avg_time_waste
								) + parseFloat(_that.rework.avg_time_waste);

							_that.rework_list.push(_that.rework);

							_that.rework = {
								client_assessment_response_id:
									_that.rework.client_assessment_response_id,
							};

							// _that.current_response_row = {};
						});
					}
				}
			});
		},
		calculate_time_totals() {
			console.log("calculating time totals");
			this.total_pct_time = 0;
			this.total_min_process_time = 0;
			this.total_max_process_time = 0;
			this.total_avg_process_time = 0;
			console.log(this.survey.response_full, "response");
			this.survey.response_full.forEach((item) => {
				let new_pct_time =
					parseInt(this.total_pct_time, 10) +
					parseInt(item.pc_time_spent, 10);
				let new_min_process_time =
					parseFloat(this.total_min_process_time) +
					parseFloat(item.min_time_spent);
				if (new_pct_time <= 100) {
					this.total_pct_time += parseInt(item.pc_time_spent, 10);
				} else {
					this.$vs.notify({
						title: "Cannot exceed 100%",
						text: "Please check your percentage time spent.",
						color: "warning",
						timing: 4000,
					});
					console.log("Total Percentage time exceeds 100%");
				}

				this.total_min_process_time += parseFloat(item.min_time_spent);
				this.total_max_process_time += parseFloat(item.max_time_spent);
				this.total_avg_process_time += parseFloat(item.avg_time_spent);
			});
		},
		submit_responses() {
			//const _that=this;
			const _that = this;

			if (this.employee_id > 0) {
				this.$vs.loading();
				SurveyService.submit_timing_survey_responses(
					this.survey_id,
					this.employee_id,
					this.survey.response_full
				)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success) {
								_that.$vs.loading.close();
								return true;
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Submit response",
									text: "Failed",
									color: "warning",
									timing: 4000,
								});
							}
							_that.$vs.loading.close();
						}
					})
					.catch((err) => {
						console.log("Error " + err.message);
						that.$vs.loading.close();
						_that.$vs.notify({
							title: "Submit response",
							text: "Failed.",
							color: "warning",
							timing: 4000,
						});
						return false;
					});
			} else {
				this.$vs.loading();
				SurveyService.submit_timing_survey_responses_with_token(
					this.token,
					this.survey.response_full
				)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success) {
								_that.$vs.loading.close();
								return true;
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Submit response",
									text: "Failed",
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						condole.log("Error " + err.message);
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Submit response",
							text: "Failed",
							color: "warning",
							timing: 4000,
						});
						return false;
					});
			}
			return true;
		},
		get_emp_survey_details() {
			const _that = this;

			if (this.employee_id > 0) {
				this.$vs.loading();
				SurveyService.get_emp_survey_details(
					this.survey_id,
					this.employee_id
				)
					.then((response) => {
						console.log(response, "Loading assessment data");
						const output = response.data;
						if (output && output !== undefined) {
							if (output.success) {
								_that.survey.assessment =
									output.data.assessment;
								_that.survey.assessment_employee =
									output.data.assessment_employee;
								_that.survey.response_full =
									output.data.response_full || [];

								console.log(output.data.response_full);
								_that.calculate_time_totals();
								_that.$vs.loading.close();

								if (_that.survey.response_full.length <= 0) {
									_that.can_proceed = false;
									_that.$vs.notify({
										title: "Get employee survey details",
										text: "No data returned",
										color: "warning",
										timing: 4000,
									});
									_that.no_questions_returned = true;
								} else {
									_that.can_proceed = true;
								}
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Get employee survey details",
									text: "No data returned. Please contact HnH for queries.",
									color: "warning",
									timing: 4000,
								});
								_that.no_questions_returned = true;
							}
						}
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Get employee survey details",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			} else {
				this.$vs.loading();
				SurveyService.get_emp_survey_token_details(this.token)
					.then((response) => {
						console.log("Assessment form submitted");
						const output = response.data;
						if (output && output !== undefined) {
							if (output.success) {
								_that.survey.assessment =
									output.data.assessment;
								_that.survey.assessment_employee =
									output.data.assessment_employee;
								_that.survey.response_full =
									output.data.response_full || [];
								_that.calculate_time_totals();
								_that.$vs.loading.close();

								if (_that.survey.response_full.length <= 0) {
									_that.can_proceed = false;
									_that.$vs.notify({
										title: "Get employee survey details",
										text: "No data returned",
										color: "warning",
										timing: 4000,
									});
									_that.no_questions_returned = true;
								} else {
									_that.can_proceed = true;
								}
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Get employee survey details",
									text: "No data returned",
									color: "warning",
									timing: 4000,
								});
								_that.no_questions_returned = true;
							}
						}
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Get employee survey details",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
	},
	computed: {
		total: function () {
			let calculatedTotal =
				parseInt(this.rework.waste_time_min) +
				parseInt(this.rework.waste_time_max);
			if (isNaN(calculatedTotal)) {
				this.rework.waste_time_avg == 0;
			} else {
				this.rework.waste_time_avg = calculatedTotal / 2;
			}
			// this.rework.waste_time_avg = calculatedTotal / 2;

			return this.rework.waste_time_avg;
		},
		// recorded_pct_time: funciton(){
		// 	let total_time=0;
		// 	this.survey.response_full.forEach((item) => {
		// 		total_time+=item.pc_time_spent;

		// 	});

		// 	console.log("recorder pct time "+total_time);
		// 	return total_time;
		// }
	},
	components: {
		FormWizard,
		TabContent,
	},
	created() {
		this.survey_id = this.$route.params.survey_id || -1;
		this.employee_id = this.$route.params.emp_id || -1;
		this.token = this.$route.params.token || "";
		console.log(" survey details " + this.token);
		this.get_emp_survey_details();
	},
};
</script>
<style scoped lang="scss">
.vs-breadcrumb--ol a .vs-breadcrumb--ol a:focus,
.vs-breadcrumb--ol a:hover,
.vs-breadcrumb--ol .active {
	color: #10163a !important;
}

.faq-jumbotron-content {
	background-image: url("~@/assets/images/pages/faq.jpg");
	background-size: cover;
}
.faq-bg {
	background-color: #fff;
}

.vx-card__body {
	height: 100vh;
}
.card-title {
	font-weight: 500;
}
.showcase-img {
	height: 40vh;
	background-size: cover;
	background-position: center;
	p {
		width: 50%;
		color: #fff;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 0 25px 25px 0;
		font-size: 1rem;
		padding: 2rem;
		font-weight: 500;
		position: relative;
		top: 30%;
		line-height: 1.5rem;
	}
}
h4 {
	font-size: 2rem;
}
.profile-img {
	height: 70%;
	width: 70%;
	img {
		height: 100%;
	}
}
.bg-highlight {
	background: #f4f4f4;
	padding: 1rem;
	border-right: 1px solid #d7dae3;
	h3 {
		font-size: 1.2rem;
	}
}
.submission-card {
	line-height: 170%;
	.email-link {
		color: #6556d7;
	}
}
.vue-form-wizard {
	button.wizard-btn {
		padding-top: 1rem !important;
		padding-bottom: 1rem;
	}
}
.rework_btn {
	display: grid;
	justify-items: center;
	margin-top: 1vw;
}
.rework_form.con-vs-popup .vs-popup {
	width: 60% !important;
}
</style>
