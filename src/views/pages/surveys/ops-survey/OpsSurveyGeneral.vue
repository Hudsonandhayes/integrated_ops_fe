<template>
	<div id="dashboard-analytics">
		<div class="vx-row">
			<!-- CARD 1: CONGRATS -->
			<div class="vx-col w-full lg:w-1/2 mb-base">
				<vx-card
					slot="no-body"
					class="text-center bg-primary-gradient greet-user"
				>
					<h1 class="mb-6 text-white">{{this.survey.name}}</h1>
					<p
						class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"
					>
						{{this.survey.description}}
					</p>
					<div class="mt-5 text-white">
						<h6 class="text-white">H&H Consultant:</h6>
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

			<!-- CARD 2: SUBSCRIBERS GAINED -->
			<div
				class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
			>
				<statistics-card-line
					icon="UsersIcon"
					statistic="50"
					statisticTitle="Inivited Participants"
					:chartData="subscribersGained.series"
					type="area"
				></statistics-card-line>
			</div>

			<!-- CARD 3: ORDER RECIEVED -->
			<div
				class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"
			>
				<statistics-card-line
					icon="ShoppingBagIcon"
					statistic="30"
					statisticTitle="Completed"
					:chartData="ordersRecevied.series"
					color="warning"
					type="area"
				></statistics-card-line>
			</div>
		</div>
		<div class="vx-row">
			<div
				class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base"
				v-for="item in kb"
				:key="item.id"
			>
				<vx-card class="text-center cursor-pointer">
					<div class="survey_img_container">
						<vs-chip class="number survey_step" color="primary">{{
							item.id
						}}</vs-chip>
						<img
							:src="item.graphic"
							alt="graphic"
							width="180"
							class="mx-auto mb-4"
						/>
					</div>
					<h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
					<small>{{ item.description }}</small>
					<br />
					<small>{{ item.start_date }}</small>
				</vx-card>
			</div>
		</div>
	</div>
</template>

<script>
import DepartmentService from "@/services/DepartmentService.js";
import AnalyticsData from "@/views/pages/surveys/AnalyticsData.js";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import VxTimeline from "@/components/timeline/VxTimeline";
import SurveyService from "@/services/SurveyService.js";

export default {
	name: "hnh-survey-general",
	data() {
		return {
			survey_id: -1,
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			departments: [],
			survey:[],
			department_id: -1,
			selected_department_index: -1,
			department: {
				name: "",
				description: "",
			},
			checkpointReward: {},
			subscribersGained: {
				series: [
					{
						name: "Invites",
						data: [10, 20, 25, 35, 42, 50],
					},
				],
				analyticsData: {
					Invites: 50,
				},
			},
			ordersRecevied: {
				series: [
					{
						name: "Completed",
						data: [30, 30, 18, 10, 5, 5],
					},
				],
				analyticsData: {
					Completed: 30,
				},
			},
			salesBarSession: {},
			supportTracker: {},
			productsOrder: {},
			salesRadar: {},
			analyticsData: AnalyticsData,
			dispatchedOrders: [],
			kb: [
				{
					id: 1,
					title: "Setup",
					description:
						"We will walk through the process and capture the requirements.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-1.png",
					start_date: "01/11/2020",
				},
				{
					id: 2,
					title: "Activity analysis",
					description:
						"We will conduct an assessment of time spent on each process so that we can understand the FTE distribution.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-2.png",
					start_date: "15/11/2020",
				},
				{
					id: 3,
					title: "Value Stream Assessment",
					description:
						"We will conduct a detailed Value Stream Assessment.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-4.png",
					start_date: "10/12/2020",
				},
				{
					id: 4,
					title: "Automation Assessment",
					description:
						"We will conduct an automation assessment to understand automation opportunities across each process.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-3.png",
					start_date: "05/12/2020",
				},
				{
					id: 5,
					title: "Opportunity Pipeline",
					description:
						"We will create opportunity pipeline with improvements across multiple improvement levers",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-5.png",
					start_date: "15/12/2020",
				},
				{
					id: 6,
					title: "Opportunity Dashboard",
					description:
						"We will provide a visualization of all opportunities.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-6.png",
					start_date: "20/12/2020",
				},
			],
		};
	},
	components: {
		VueApexCharts,
		StatisticsCardLine,
		ChangeTimeDurationDropdown,
		VxTimeline,
	},
	methods: {
	
		edit_survey() {
			this.$router.push({
				path: `/pages/client/${this.survey.client_id}/ops-assessment/${this.survey_id}`,
			});
		},
		survey_processes() {
			const _that = this;
			this.departments = [];
			DepartmentService.get_all_departments().then((response) => {
				const data = response.data;
				
				if (data && data !== undefined) {
					if (data.success) {
						_that.departments = data.data || {};
					}
				}
			});
		},

		get_client_ops_survey() {
			this.survey = [];
			const _that = this;
			this.$vs.loading();
			SurveyService.get_client_ops_survey(this.survey_id).then((response) => {

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

		send_survey() {
			this.$vs.loading();
			const _that =this;
			console.log(this.survey_id, "survey id");
			SurveyService.send_ops_survey(_that.survey_id).then((response) => {
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
		this.survey_id = this.$route.params.id || -1;
		this.survey_processes();
		this.get_client_ops_survey()
	},
};
</script>

<style scoped>
.survey_img_container {
	display: flex;
}
.survey_step {
	font-size: 2rem;
	vertical-align: middle;
	text-align: center;
	justify-items: center;
	display: flex;
	height: 30px;
	width: 30px;
}
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
