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
					<div class="text-white md:p-10 sm:p-6 p-4">
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
						<h5 class="text-left text-white">
							Please verify the following details before
							attempting the survey
						</h5>
						<div class="vx-col w-1/2 mt-4">
							<div class="vs-row flex">
								<div class="vx-col w-1/2 mb-3">
									<span class="font-semibold text-base"
										>Name :
									</span>
									<span class="label text-base pl-3"
										>{{
											survey.assessment_employee
												.first_name
										}}
										{{
											survey.assessment_employee.last_name
										}}
									</span>
								</div>
								<div class="vx-col w-1/2 mb-3">
									<span class="font-semibold text-base"
										>Email :
									</span>
									<span class="label text-base pl-3">{{
										survey.assessment_employee.email
									}}</span>
								</div>
							</div>
							<div class="vs-row flex">
								<div class="vx-col w-1/2 mb-3">
									<span class="font-semibold text-base"
										>Department :
									</span>
									<span class="label text-base pl-3">{{
										survey.assessment_employee
											.department_label
									}}</span>
								</div>
								<div class="vx-col w-1/2 mb-3">
									<span class="font-semibold text-base"
										>Sub Department :
									</span>
									<span class="label text-base pl-3">{{
										survey.assessment_employee.sub_function
									}}</span>
								</div>
							</div>
							<div class="vx-row">
								<div class="vx-col w-1/2 mb-3">
									<span class="font-semibold text-base"
										>Profession :
									</span>
									<span class="label text-base pl-3">{{
										survey.assessment_employee.job_title
									}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				v-if="!can_proceed && !loading"
				class="text-center bg-primary-gradient greet-user py-5"
			>
				<feather-icon
					icon="AwardIcon"
					class="
						p-6
						mb-8
						bg-primary
						inline-flex
						rounded-full
						text-white
						shadow
					"
					svgClasses="h-8 w-8"
				></feather-icon>
				<h1 class="mb-6 text-white">Error Loading Survey Details,</h1>
				<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">
					Please contact our consultant to resolve the issue.
				</p>
			</div>
			<vx-card v-if="can_proceed" class="mb-base h-full flex flex-col">
				<form-wizard
					color="rgba(var(--vs-primary), 1)"
					title=""
					:subtitle="null"
					finishButtonText="Submit"
					@on-complete="formSubmitted"
					class="bg-white"
				>
					<tab-content
						title="Process Breakdown"
						class="mb-5"
						icon="feather icon-briefcase"
						:before-change="submit_responses"
					>
						<div class="vx-row w-full align-middle">
							<div class="vx-col w-full">
								<div
									class="vx-row"
									v-for="process in levers"
									:key="process.process_id"
								>
									<vx-card
										:title="process.process_name"
										collapse-action
									>
										<div class="flex justify-between mr-4">
											<p class="text-grey">
												{{
													process.process_description
												}}
											</p>
											<div>
												<p>
													<span class="font-semibold"
														>{{
															process.completed_levers
														}}
														completed</span
													>
													out of
													{{ process.levers.length }}
												</p>
												<vs-progress
													:percent="
														get_process_pct(process)
													"
													color="primary"
												></vs-progress>
											</div>
										</div>
										<vs-collapse
											accordion
											class="w-full"
											type="margin"
										>
											<vs-collapse-item
												style="overflow: -webkit-page-y"
												v-for="(
													item, item_index
												) in process.levers"
												:key="item.lever_value_id"
												fill-height
											>
												<div
													slot="header"
													class="
														flex
														justify-between
														mr-4
													"
												>
													<span
														class="
															flex
															items-center
															px-2
															py-1
															rounded
														"
													>
														<div
															class="
																h-3
																w-3
																rounded-full
																mr-2
															"
															:class="
																item.lever_status ===
																0
																	? 'bg-warning'
																	: 'bg-success'
															"
														></div>
														{{ item.lever_name }}
													</span>
													<div>
														<span
															v-if="
																item.lever_status >
																0
															"
														>
															<vs-chip
																:class="
																	get_score_colour(
																		item.lever_opportunity_score
																	)
																"
															>
																{{
																	get_ops_score_label(
																		item.lever_opportunity_score
																	)
																}}
															</vs-chip>
														</span>
														<span>
															<vs-chip
																:class="
																	item.lever_status ===
																	0
																		? 'bg-warning'
																		: 'bg-success'
																"
															>
																{{
																	item.lever_status ===
																	0
																		? "Pending"
																		: "Completed"
																}}
															</vs-chip>
														</span>
													</div>
												</div>
												<div
													class="
														vx-row
														w-full
														no-gutter
														mb-20
													"
												>
													<div class="vx-col w-full">
														<div
															v-for="(
																q_item, index
															) in item.question_groups"
															:key="index"
														>
															<div
																class="
																	vx-row
																	pb-5
																"
																v-if="
																	q_item
																		.questions
																		.length >
																	0
																"
															>
																<div
																	class="
																		vx-col
																		w-full
																	"
																>
																	<div
																		class="
																			flex
																			justify-between
																			px-3
																			mr-4
																		"
																	>
																		<span
																			class="
																				font-medium
																				text-lg
																				leading-none
																			"
																		>
																			{{
																				q_item.name
																			}}
																		</span>
																	</div>
																	<vs-divider />
																	<div
																		class="
																			vx-row
																		"
																	>
																		<div
																			v-for="(
																				q,
																				q_index
																			) in q_item.questions"
																			:key="
																				q.question_id
																			"
																			class="
																				vx-col
																				justify-between
																				flex
																				mb-2
																				w-full
																			"
																		>
																			<small
																				class="
																					label
																					mr-2
																					ops_survey_q_text
																					w-1/2
																				"
																			>
																				{{
																					q_index +
																					1
																				}}.
																				{{
																					q.question
																				}}
																			</small>
																			<vs-input
																				v-if="
																					q.answer_type ===
																					2
																				"
																				name="score"
																				class="
																					w-1/2
																					required
																				"
																				v-model="
																					q.score
																				"
																				@change="
																					question_input_change(
																						q,
																						item
																					)
																				"
																				label
																			/>

																			<v-select
																				v-if="
																					q.answer_type ===
																					1
																				"
																				class="
																					ops_survey_select
																					w-1/2
																				"
																				:options="
																					q.option_select
																				"
																				label="name"
																				:reduce="
																					(
																						qs
																					) =>
																						qs.id
																				"
																				v-model="
																					q.score
																				"
																				:dir="
																					$vs.rtl
																						? 'rtl'
																						: 'ltr'
																				"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>

													<div
														v-if="item.show_scores"
														class="
															vx-col
															w-full
															flex flex-col
															items-end
															mt-2
														"
													>
														<div
															class="
																flex
																justify-between
															"
														>
															<span
																class="
																	font-medium
																	text-lg
																	mr-2
																"
																>Annual Hours
																:</span
															>
															<span
																class="
																	font-light
																	text-lg
																"
																>{{
																	item.annual_hours_saved
																}}
															</span>
														</div>
														<div
															class="
																flex
																justify-between
															"
														>
															<span
																class="
																	font-medium
																	text-lg
																	mr-2
																"
																>Suitability
																Score :</span
															>
															<span
																class="
																	font-light
																	text-lg
																"
																>{{
																	item.process_suitability_score *
																	100
																}}%
															</span>
														</div>

														<div
															class="
																flex
																justify-between
															"
														>
															<span
																class="
																	font-medium
																	text-lg
																	mr-2
																"
																>Complexity
																Score :</span
															>
															<span
																class="
																	font-light
																	text-lg
																"
																>{{
																	item.process_complexity_score *
																	100
																}}%
															</span>
														</div>
													</div>
													<div
														class="
															vx-col
															w-full
															flex
															justify-between
															mt-2
														"
													>
														<vs-button
															class="
																mt-4
																mr-2
																shadow-lg
																flex-grow-0
															"
															type="gradient"
															color="#7367F0"
															gradient-color-secondary="#CE9FFC"
															@click="
																save_lever_response(
																	process,
																	item,
																	item_index
																)
															"
															>Save
														</vs-button>
														<div
															v-if="
																item.opportunity_id >
																0
															"
															class="
																flex-grow flex
																justify-between
																items-center
															"
														>
															<div
																class="
																	flex-grow
																	flex
																	justify-center
																"
															>
																<span
																	class="
																		font-bold
																		text-lg
																		leading-none
																		mr-5
																	"
																>
																	Opportunity
																	Identified :
																</span>
																<div
																	class="
																		flex
																		flex-col
																	"
																>
																	<span
																		class="
																			font-medium
																			text-lg
																			leading-none
																			mr-2
																		"
																	>
																		{{
																			item.opportunity_name
																		}}
																	</span>
																	<span
																		class="
																			font-light
																			text-sm
																			leading-none
																			mt-1
																			mr-2
																		"
																	>
																		{{
																			item.opportunity_description
																		}}
																	</span>
																</div>
															</div>
															<div class="flex">
																<vs-button
																	class="
																		mr-2
																		shadow-lg
																	"
																	type="border"
																	icon-pack="feather"
																	icon="icon-edit"
																	color="primary"
																	size="small"
																	@click="
																		add_lever_opportunity(
																			item
																		)
																	"
																>
																</vs-button>

																<vs-button
																	class="
																		mr-2
																		shadow-lg
																	"
																	type="border"
																	icon-pack="feather"
																	icon="icon-trash"
																	color="danger"
																	size="small"
																	@click="
																		remove_lever_opportunity(
																			item
																		)
																	"
																>
																</vs-button>
															</div>
														</div>
														<div
															v-if="
																item.lever_opportunity_score >
																	1 &&
																item.opportunity_id <=
																	0
															"
														>
															<vs-button
																class="
																	mt-4
																	mr-2
																	shadow-lg
																"
																type="gradient"
																color="success"
																@click="
																	add_lever_opportunity(
																		item
																	)
																"
																>Add as
																Opportunity
															</vs-button>
														</div>
														<!-- <div
															v-if="
																item.lever_opportunity_score ==
																	1 &&
																item.opportunity_id <=
																	0
															"
														>
															<vs-button
																class="
																	mt-4
																	mr-2
																	shadow-lg
																"
																type="gradient"
																color="success"
																@click="
																	link_lever_opportunity(
																		item
																	)
																"
																>Link as
																Opportunity
															</vs-button>
														</div> -->
													</div>
												</div>
											</vs-collapse-item>
										</vs-collapse>
									</vx-card>
								</div>
							</div>
						</div>
					</tab-content>
					<tab-content
						title="Submission"
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
			<!-- close survey -->
			<vs-popup
				class="vs-con-loading__container"
				title="Thank You!"
				:active.sync="close_survey"
				:buttons-hidden="true"
			>
				<vx-card no-shadow>
					<div class="vx-row w-full align-middle">
						<div class="vx-col w-full">
							<h2 class="mb-3">
								You may close the window to exit the survey.
							</h2>
						</div>
					</div>
				</vx-card>
			</vs-popup>
			<!--Add oportunity form-->
			<vs-popup
				class="vs-con-loading__container"
				:title="lever_opps_dialog_title"
				:active.sync="lever_opps_dialog"
				:buttons-hidden="true"
			>
				<form id="create_opportunity_form">
					<vx-card no-shadow>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<small class="label">Name</small>
								<vs-input
									v-validate="'required|min:3'"
									name="name"
									v-model="opportunity.name"
									class="w-full required"
									type="text"
								/>
								<span
									class="text-danger text-sm"
									v-show="errors.has('name')"
									>{{ errors.first("name") }}</span
								>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<small class="label">Annual Hours Saved</small>
								<vs-input
									name="annual_hours_saved"
									v-model="opportunity.annual_hours_saved"
									class="w-full required"
									disabled
								/>
							</div>
						</div>
						<div class="vx-row mb-3">
							<div class="vx-col w-1/2">
								<small class="label">Suitability score</small>
								<vs-input
									name="process_suitability_score"
									v-validate="'required|decimal:2'"
									v-model="
										opportunity.process_suitability_score
									"
									class="w-full required"
									disabled
								/>
							</div>
							<div class="vx-col w-1/2">
								<small class="label">Complexity score</small>
								<vs-input
									name="process_complexity_score"
									v-model="
										opportunity.process_complexity_score
									"
									class="w-full required"
									disabled
								/>
							</div>
						</div>

						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<small class="label">Description</small>
								<vs-textarea
									v-validate="'required|min:3'"
									name="description"
									height="100px"
									v-model="opportunity.description"
									type="text"
								/>
								<span
									class="text-danger text-sm"
									v-show="errors.has('description')"
									>{{ errors.first("description") }}</span
								>
							</div>
						</div>
						<div
							class="flex flex-wrap items-center justify-end mt-8"
						>
							<vs-button
								@click="save_lever_opportunity($event)"
								class="ml-auto mt-2"
								>SAVE</vs-button
							>
							<vs-button
								@click="lever_opps_dialog = !lever_opps_dialog"
								class="ml-4 mt-2"
								type="border"
								color="warning"
								>CLOSE</vs-button
							>
						</div>
					</vx-card>
				</form>
			</vs-popup>
			<vs-popup
				class="vs-con-loading__container"
				:title="link_opps_dialog_title"
				:active.sync="link_opps_dialog"
				:buttons-hidden="true"
			>
				<form id="create_opportunity_form">
					<vx-card no-shadow>
						<div class="vx-row mb-3">
							<div class="vx-col w-full">
								<small class="label">Opportunity</small>
								<v-select
									v-validate="'required'"
									:options="opportunity_ids"
									label="name"
									name="opportunities"
									multiple
									v-model="opportunity.ids"
									:reduce="(process) => process.id"
									:dir="$vs.rtl ? 'rtl' : 'ltr'"
									class="w-full required"
								/>
							</div>
						</div>

						<div
							class="flex flex-wrap items-center justify-end mt-8"
						>
							<vs-button
								@click="save_link_opportunity($event)"
								class="ml-auto mt-2"
								>SAVE</vs-button
							>
							<vs-button
								@click="link_opps_dialog = !link_opps_dialog"
								class="ml-4 mt-2"
								type="border"
								color="warning"
								>CLOSE</vs-button
							>
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
import vSelect from "vue-select";
import VxCard from "@/components/vx-card/VxCard.vue";
import OpportunityService from "@/services/OpportunityService";

export default {
	data() {
		return {
			colorx: "#10163a",
			title: "OPS Assessment",
			can_proceed: false,
			loading: true,
			lever_opps_dialog: false,
			link_opps_dialog: false,
			close_survey: false,
			lever_opps_dialog_title: "Add as Opportunity",
			link_opps_dialog_title: "Link as Opportunity",
			average_volume: 0,
			frequency: "",
			levers: [],
			opportunity_ids: [],
			client: {},
			opportunity: Object.assign(
				{},
				OpportunityService.lever_opportunity
			),
			current_lever_item: {},
			survey_id: -1,
			employee_id: -1,
			survey: {
				assessment: {
					name: "",
					description: "",
					id: -1,
					client_assessment_id: -1,
				},
				assessment_employee: {
					id: -1,
					first_name: "",
					last_name: "",
					email: "",
					deparment: "",
					department_label: "",
					sub_function: "",
					job_title: "",
				},
				department: {},
				response: [],
				response_full: [],

				token: "",
				image: {},
				selected_processes: -1,
				total_pct_time: 0,
				total_min_process_time: 0,
				total_max_process_time: 0,
				total_avg_process_time: 0,
			},
		};
	},
	methods: {
		formSubmitted() {
			console.log("Thank you for submission");
			const _that = this;
			this.$vs.loading();
			SurveyService.submit_completion(this.survey_id, this.employee_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.close_survey = true;
							_that.$vs.loading.close();
						}
					}
				})
				.catch((e) => {
					_that.$vs.loading.close();
					console.log("Submission issue.");
					_this.$vs.notify({
						title: "Complete survey submission.",
						text: "Completions failed.",
						color: "warning",
						time: 4000,
					});
				});
		},
		submit_responses() {
			let proceed = true;
			this.levers.forEach((process) => {
				if (process.completed_levers < process.levers.length) {
					proceed = false;
				}
			});

			if (!proceed) {
				this.$vs.notify({
					title: "Incomplete Survey.",
					text: "Please check that all questions have been answered before continuning",
					color: "warning",
					time: 4000,
				});
				return false;
			} else {
				return true;
			}
		},
		add_lever_opportunity(item) {
			this.$validator.reset();
			this.opportunity = Object.assign(
				{},
				OpportunityService.lever_opportunity
			);
			this.opportunity.lever_value_id = item.lever_value_id;
			this.opportunity.employee_id = this.survey.assessment_employee.id;
			this.opportunity.token = this.token;
			this.current_lever_item = item;
			this.opportunity.annual_hours_saved = item.annual_hours_saved;
			this.opportunity.process_suitability_score =
				item.process_suitability_score;
			this.opportunity.process_complexity_score =
				item.process_complexity_score;

			if (item.opportunity_id > 0) {
				this.opportunity.description = item.opportunity_description;
				this.opportunity.name = item.opportunity_name;
				this.opportunity.opportunity_id = item.opportunity_id;
				this.lever_opps_dialog_title = "Update opportunity";
			} else {
				this.lever_opps_dialog_title = "Add as opportunity";
			}

			this.lever_opps_dialog = true;
		},
		link_lever_opportunity(item) {
			this.$validator.reset();
			this.opportunity = Object.assign(
				{},
				OpportunityService.lever_opportunity
			);
			this.opportunity.lever_value_id = item.lever_value_id;
			this.opportunity.employee_id = this.survey.assessment_employee.id;
			this.opportunity.token = this.token;
			this.current_lever_item = item;
			this.opportunity.annual_hours_saved = item.annual_hours_saved;
			this.opportunity.process_suitability_score =
				item.process_suitability_score;
			this.opportunity.process_complexity_score =
				item.process_complexity_score;
			this.opportunity_ids.push(item.opportunity_id);
			if (item.opportunity_id > 0) {
				this.opportunity.description = item.opportunity_description;
				this.opportunity.name = item.opportunity_name;
				this.opportunity.opportunity_id = item.opportunity_id;
				this.link_opps_dialog_title = "Update opportunity";
			} else {
				this.link_opps_dialog_title = "Link as opportunity";
			}

			this.link_opps_dialog = false; // will be activated later release.
		},
		remove_lever_opportunity(item) {
			if (item.opportunity_id > 0) {
				const _that = this;
				SurveyService.remove_lever_opportunity(item.opportunity_id)
					.then((response) => {
						const output = response.data;
						if (output && output !== undefined) {
							if (output.success) {
								(item.opportunity_id = -1),
									(item.opportunity_name = ""),
									(item.opportunity_description = ""),
									(_that.lever_opps_dialog = false);
								console.log("opportunity created");
							} else {
								_that.$vs.notify({
									title: "Remove lever opportunity",
									text: "Failed.",
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						_that.$vs.notify({
							title: "Remove lever opportunity",
							text: "Failed.",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		update_opps_process(process) {
			let process_obj = {
				annual_transaction_count: process.annual_transaction_count,
				process_time: process.process_time,
			};
			const _that = this;
			this.$vs.loading();
			SurveyService.update_ops_survey_process(
				this.survey_id,
				process.lever_value_id,
				process_obj
			)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							console.log("lever values updated");
							_that.$vs.loading.close();
						} else {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Update opportunity survey",
								text: "Invalid data",
								color: "warning",
								timing: 4000,
							});
						}
					}
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Update opportunity survey",
						text: "Invalid data",
						color: "warning",
						timing: 4000,
					});
				});
		},
		save_lever_opportunity(e) {
			e.preventDefault();
			const _that = this;

			this.$validator
				.validateAll("create_opportunity_form")
				.then((result) => {
					// console.log("this before validate"+ result);
					if (result) {
						if (this.opportunity.opportunity_id > 0) {
							this.$vs.loading();
							SurveyService.update_lever_opportunity(
								this.opportunity.opportunity_id,
								this.opportunity
							)
								.then((response) => {
									const output = response.data;
									if (output && output !== undefined) {
										if (output.success) {
											_that.current_lever_item.opportunity_name =
												output.data.name;
											_that.current_lever_item.opportunity_description =
												output.data.description;
											_that.lever_opps_dialog = false;
											console.log("opportunity created");
											_that.$vs.loading.close();
										} else {
											_that.$vs.loading.close();
											_that.$vs.notify({
												title: "Update lever opprtunity",
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
										title: "Update lever opprtunity",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								});
						} else {
							this.$vs.loading();
							SurveyService.create_lever_opportunity(
								this.opportunity
							)
								.then((response) => {
									const output = response.data;
									if (output && output !== undefined) {
										if (output.success) {
											_that.current_lever_item.opportunity_id =
												output.data.id;
											_that.current_lever_item.opportunity_name =
												output.data.name;
											_that.current_lever_item.opportunity_description =
												output.data.description;
											_that.lever_opps_dialog = false;
											console.log("opportunity created");
											_that.$vs.loading.close();
										} else {
											_that.$vs.loading.close();
											_that.$vs.notify({
												title: "Create lever opprtunity",
												text: "Invalid data",
												color: "warning",
												timing: 4000,
											});
										}
									}
								})
								.catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Create lever opprtunity",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								});
						}
					}
				});
		},
		question_input_change(q, lever) {
			console.log("in question value change.");
			if (q.question_type === 3) {
				if (q.question_sub_type === 1) {
					lever.transactions_val = parseFloat(q.score) || 0;
				}

				if (q.question_sub_type === 2) {
					lever.process_time_val = parseFloat(q.score) || 0;
				}

				lever.annual_hours_saved =
					lever.transactions_val * (lever.process_time_val / 60) * 12;
				if (lever.annual_hours_saved > 0) {
					lever.annual_hours_saved =
						Math.round(
							(lever.annual_hours_saved + Number.EPSILON) * 100
						) / 100;
				}
			}
		},
		save_lever_response(process, lever, item_index) {
			const _that = this;
			let has_error = false;
			let error_msg = [];
			let lever_item_index = item_index;
			let transaction_to_be_automated = 0;
			let pr_time_to_be_automated = 0;
			let compute_pr_transaction = false;
			let client_yearly_hours = this.client.standard_yearly_hours || 0;
			let opportunity_score = 0;

			lever.question_groups.forEach((qg) => {
				let question_score = 0;
				let type_max_value =
					qg.type_max_value === 0
						? qg.questions.length * 100
						: qg.type_max_value;
				let type_total = 0;
				let question_sub_type_count = 0;
				qg.questions.forEach((q) => {
					let question_sub_type =
						q.question_sub_type !== undefined
							? parseInt(q.question_sub_type, 10)
							: -1;

					if (q.question_sub_type === 1) {
						transaction_to_be_automated = parseFloat(q.score) || 0;
						lever.transactions_val = parseFloat(q.score) || 0;
						compute_pr_transaction = true;
						question_sub_type_count++;
					}

					if (q.question_sub_type === 2) {
						pr_time_to_be_automated = parseFloat(q.score) || 0;
						lever.process_time_val = parseFloat(q.score) || 0;
						compute_pr_transaction = true;
						question_sub_type_count++;
					}

					if (q.question_sub_type === 0) {
						type_total += parseFloat(q.score) || 0;
					}
				});

				if (qg.question_type === 1) {
					lever.process_suitability_score = parseFloat(
						type_total /
							(type_max_value - question_sub_type_count * 100)
					).toFixed(2);
				}

				if (qg.question_type === 2) {
					lever.process_complexity_score = parseFloat(
						type_total / type_max_value
					).toFixed(2);
				}
			});

			if (
				compute_pr_transaction &&
				(lever.transactions_val <= 0 || lever.process_time_val <= 1)
			) {
				has_error = true;
				error_msg.push(
					"Number of Transcation and Process times per transactions are required "
				);
			}

			if (!has_error) {
				let survey_id = this.survey.assessment.id || -1;
				let client_employee_id =
					this.survey.assessment_employee.id || -1;
				let obj = {
					lever: lever,
					client_employee_id: client_employee_id,
					ops_survey_id: survey_id,
				};
				obj.token = this.token ? this.token : null;

				// console.log("Annual hours "+  lever.annual_hours_saved);
				// console.log("Client Std yearly hours "+ client_yearly_hours);
				// console.log("Suitablity Score "+  lever.process_suitability_score);
				// console.log("Complexity Score "+  lever.process_complexity_score);

				if (compute_pr_transaction) {
					lever.annual_hours_saved =
						lever.transactions_val *
						(lever.process_time_val / 60) *
						12;
					if (lever.annual_hours_saved > 0) {
						lever.annual_hours_saved =
							Math.round(
								(lever.annual_hours_saved + Number.EPSILON) *
									100
							) / 100;
					}

					let client_half_hours = client_yearly_hours / 2;

					if (
						lever.annual_hours_saved > client_yearly_hours &&
						lever.process_suitability_score >= 0.5 &&
						lever.process_complexity_score <= 0.75
					) {
						lever.lever_opportunity_score = 3;
					} else if (
						lever.annual_hours_saved > client_half_hours &&
						lever.process_suitability_score >= 0.5 &&
						lever.process_complexity_score <= 0.75
					) {
						lever.lever_opportunity_score = 2;
						opportunity_score = 2;
					} else {
						lever.lever_opportunity_score = 1;
						opportunity_score = 1;
					}
				} else {
					if (lever.process_suitability_score > 0.75) {
						lever.lever_opportunity_score = 3;
					} else if (lever.process_suitability_score > 0.5) {
						lever.lever_opportunity_score = 2;
					} else {
						lever.lever_opportunity_score = 1;
					}
				}
				// console.log("oportunity score "+  lever.lever_opportunity_score);
				// console.log("opp id "+ lever.opportunity_id);

				if (this.token && this.token != undefined) {
					console.log("token authenticated.");
					SurveyService.submit_ops_survey_lever_response_token(
						lever.lever_id,
						obj
					)
						.then((response) => {
							const output = response.data;
							if (output.success) {
								lever.lever_status = output.data.lever_status;

								let completed_levers = 0;
								process.levers.forEach((lever) => {
									if (lever.lever_status > 0) {
										completed_levers += 1;
									}
								});
								process.completed_levers = completed_levers;
							} else {
								_that.$vs.notify({
									title: "Error submitting lever response",
									text: error_msg.join("<br/>"),
									color: "warning",
									time: 4000,
								});
							}
						})
						.catch((err) => {
							_that.$vs.notify({
								title: "Error submitting lever response",
								text: "No data returned.",
								color: "warning",
								timing: 4000,
							});
						});
				} else {
					SurveyService.submit_ops_survey_lever_response(
						lever.lever_id,
						obj
					)
						.then((response) => {
							const output = response.data;
							if (output.success) {
								lever.lever_status = output.data.lever_status;

								let completed_levers = 0;
								process.levers.forEach((lever) => {
									if (lever.lever_status > 0) {
										completed_levers += 1;
									}
								});
								process.completed_levers = completed_levers;
							} else {
								_that.$vs.notify({
									title: "Error submitting lever response",
									text: error_msg.join("<br/>"),
									color: "warning",
									time: 4000,
								});
							}
						})
						.catch((err) => {
							_that.$vs.notify({
								title: "Error submitting lever response",
								text: "No data returned.",
								color: "warning",
								timing: 4000,
							});
						});
				}
			} else {
				console.log("error " + error_msg.join("<br/>"));
				this.$vs.notify({
					title: "Incomplete submission",
					text: error_msg.join("<br/>"),
					color: "warning",
					time: 4000,
				});
			}
		},
		get_ops_score_label(score) {
			let ret_label = "";
			score = parseInt(score, 10);
			//console.log("get score label "+score);
			switch (score) {
				case 3:
					ret_label = "High";
					break;

				case 2:
					ret_label = "Medium";
					break;

				case 1:
					ret_label = "Low";
					break;

				default:
					break;
			}

			return ret_label;
		},
		get_score_colour(score) {
			let ret_class = "";
			score = parseInt(score, 10);
			//console.log("get score colour "+score);
			switch (score) {
				case 3:
					ret_class = "bg-primary";
					break;

				case 2:
					ret_class = "bg-warning";
					break;

				case 1:
					ret_class = "bg-danger";
					break;

				default:
					break;
			}

			return ret_class;
		},
		get_process_pct(process) {
			let ret_pct = 0;
			let process_levers = process.levers.length || 0;
			if (process_levers > 0) {
				ret_pct = process.completed_levers / process_levers;
			}

			return ret_pct;
		},
		get_survey_details() {
			const _that = this;
			_that.levers = [];
			if (this.employee_id > 0) {
				this.$vs.loading();
				SurveyService.get_ops_survey_details(
					this.survey_id,
					this.employee_id
				)
					.then((response) => {
						console.log("Assessment form submitted");
						const output = response.data;

						if (output && output !== undefined) {
							if (output.success) {
								_that.survey.assessment =
									output.data.ops_survey || {};
								_that.survey.assessment_employee =
									output.data.employee;
								_that.survey.department =
									output.data.department;
								console.log(
									"data",
									_that.survey.assessment_employee
								);
								_that.levers = output.data.survey || [];
								_that.client = output.data.client || {};

								_that.levers.forEach((process) => {
									let completed_levers = 0;
									process.levers.forEach((lever) => {
										if (lever.lever_status > 0) {
											completed_levers += 1;
										}
										let show_scores = false;
										lever.question_groups.forEach((qg) => {
											qg.questions.forEach((q) => {
												if (q.question_type === 3) {
													show_scores = true;
												}
											});
										});

										lever.show_scores = show_scores;
										lever.transactions_val = 0;
										lever.process_time_val = 0;
									});
									process.completed_levers = completed_levers;
								});
								_that.$vs.loading.close();
								_that.can_proceed = true;
								_that.loading = false;
								if (_that.levers.length === 0) {
									_that.$vs.notify({
										title: "Error Loading Survey Data",
										text: "Please contact our consultant to resolve the issue. Error : No Data",
										color: "warning",
										timing: 4000,
									});
									_that.can_proceed = false;
								}
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Error Loading Survey Data",
									text:
										"Please contact our consultant to resolve the issue. Error : " +
										output.error,
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Error loading Survey Details.",
							text: err.message,
							color: "warning",
							timing: 4000,
						});
					});
			} else {
				this.$vs.loading();
				SurveyService.get_ops_survey_token_details(this.token)
					.then((response) => {
						console.log("Assessment form submitted");
						const output = response.data;

						if (output && output !== undefined) {
							if (output.success) {
								_that.survey.assessment =
									output.data.ops_survey || {};
								_that.survey.assessment_employee =
									output.data.employee;
								_that.survey.department =
									output.data.department;
								console.log(
									"data",
									_that.survey.assessment_employee
								);
								_that.levers = output.data.survey || [];
								_that.client = output.data.client || {};

								_that.levers.forEach((process) => {
									let completed_levers = 0;
									process.levers.forEach((lever) => {
										if (lever.lever_status > 0) {
											completed_levers += 1;
										}
										let show_scores = false;
										lever.question_groups.forEach((qg) => {
											qg.questions.forEach((q) => {
												if (q.question_type === 3) {
													show_scores = true;
												}
											});
										});

										lever.show_scores = show_scores;
										lever.transactions_val = 0;
										lever.process_time_val = 0;
									});
									process.completed_levers = completed_levers;
								});
								_that.$vs.loading.close();
								_that.can_proceed = true;
								_that.loading = false;
								if (_that.levers.length === 0) {
									_that.$vs.notify({
										title: "Error Loading Survey Data",
										text: "Please contact our consultant to resolve the issue. Error : No Data",
										color: "warning",
										timing: 4000,
									});
									_that.can_proceed = false;
								}
							} else {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Get opportunity survey details.",
									text: "No data returned.",
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						_that.can_proceed = false;
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Get opportunitiy survey details.",
							text: err.message,
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
	},
	computed: {},
	components: {
		FormWizard,
		TabContent,
		vSelect,
		VxCard,
	},
	created() {
		this.survey_id = this.$route.params.survey_id || -1;
		this.employee_id = this.$route.params.emp_id || -1;
		this.token = this.$route.params.token || "";
		console.log(" survey details " + this.employee_id);
		this.get_survey_details();
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

.ops_survey_q_text {
	font-weight: 400;
	color: lightslategray;
	font-size: 1rem;
}

.vs__dropdown-menu {
	z-index: 99999999 !important;
}

// .ops_survey_select{

// z-index: 9999997  !important;
// .vs__dropdown-menu{
//  	z-index: 99999999  !important;
// }
// }
</style>
