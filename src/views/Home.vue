<template>
	<div id="dashboard-analytics">
		<div class="vx-row flex flex-1">
			<div class="vx-col w-full flex-1 flex-wrap sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
				<statistics-card-line
					hideChart
					class="mb-base flex-1 "
					icon="CpuIcon"
					icon-right
					statistic="10"
					statisticTitle="OPS Assessments"
				/>
			</div>

			<div class="vx-col w-full flex-1 flex-wrap sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
				<statistics-card-line
					hideChart
					class="mb-base flex-1 "
					icon="ServerIcon"
					icon-right
					statistic="300"
					statisticTitle="Employee Surveys"
					color="success"
				/>
			</div>

			<div class="vx-col w-full flex-1 flex-wrap sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
				<statistics-card-line
					hideChart
					class="mb-base flex-1 "
					icon="ActivityIcon"
					icon-right
					statistic="23%"
					statisticTitle="Average business process improvements"
					color="danger"
				/>
			</div>

			<div class="vx-col w-full flex-1 flex-wrap sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
				<statistics-card-line
					hideChart
					class="mb-base flex-1 "
					icon="AlertOctagonIcon"
					icon-right
					statistic="£250,000"
					statisticTitle="Total opportunities in £"
					color="warning"
				/>
			</div>
		</div>
		<div class="vx-row">
			<div class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base" v-for="item in kb" :key="item.id">
				<vx-card class="text-center cursor-pointer">
					<img :src="item.graphic" alt="graphic" width="180" class="mx-auto mb-4" />
					<h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
					<small>{{ item.description }}</small>
				</vx-card>
			</div>
		</div>
	</div>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import analyticsData from "@/views/pages/surveys/AnalyticsData.js";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
export default {
	data() {
		return {
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
						data: [5, 5, 10, 18, 20, 30],
					},
				],
				analyticsData: {
					Completed: 30,
				},
			},
			revenueGenerated: {},
			quarterlySales: {},
			revenueComparisonLine: {},
			goalOverview: {},
			browserStatistics: [],
			clientRetentionBar: {},
			sessionsData: {},
			chatLog: [],
			chatMsgInput: "",
			customersData: {},
			analyticsData: analyticsData,
			settings: {
				// perfectscrollbar settings
				maxScrollbarLength: 60,
				wheelSpeed: 0.6,
			},
			kb: [
				{
					id: 1,
					title: "OPS Assessment Tool",
					description:
						"OUR ONLINE TOOL FOR HELPING TRANSFROM & OPTIMISE YOUR BUSINESS PROCESSES.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-1.png",
					url: "01/11/2020",
				},
				{
					id: 2,
					title: "OPERATING MODEL DESIGN",
					description:
						"HELPING TO FUTURE-PROOF YOUR OPERATING MODEL TO DRIVE GROWTH, UNLOCK EFFICIENCY AND ENABLE AGILITY.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-2.png",
					start_date:
						"https://www.hudsonandhayes.co.uk/copy-of-business-transformation",
				},
				{
					id: 3,
					title: "LEARNING AND DEVELOPMENT",
					description:
						"HELPING TO BUILD YOUR INTERNAL CAPABILITIES AND SELF SUFFICIENCY IN CHANGE & OPERATIONAL EXCELLENCE.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-6.png",
					start_date: "20/12/2020",
				},
				{
					id: 4,
					title: "INTELLIGENT AUTOMATION",
					description:
						"HELPING TO UNLOCK VALUE FROM MULTIPLE AUTOMATION CAPABILITIES AND COMPLEMENTARY TECHNOLOGIES SO THAT YOU CAN FOCUS ON THE THINGS THAT MATTER.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-3.png",
					start_date: "05/12/2020",
				},
				{
					id: 5,
					title: "END-TO-END PROCESS TRANSFORMATION",
					description:
						"HELPING TO SHIFT RESOURCES TO DIFFERENTIATING/VALUE-ADD AREAS OF THE BUSINESS AND REVEALING DIGITAL OPPORTUNITIES ACROSS MULTIPLE DIGITAL CAPABILITIES LIKE RPA, AI AND PREDICTIVE ANALYTICS.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-4.png",
					start_date: "10/12/2020",
				},
				{
					id: 6,
					title: "INTEGRATED OPERATIONAL IMPROVEMENT STRATEGY",
					description:
						"HELPING TO FUTURE-PROOF YOUR APPROACH TO OPERATIONAL IMPROVEMENT AND CREATE A CULTURE OF CONTINUOUS IMPROVEMENT IN A DIGITAL WORLD",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-5.png",
					start_date: "15/12/2020",
				},
			],
		};
	},
	components: {
		VueApexCharts,
		StatisticsCardLine,
		VuePerfectScrollbar,
		ChangeTimeDurationDropdown,
	},
	mounted() {
		this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
	}
};
</script>

<style lang="scss">
.chat-card-log {
	height: 400px;
	.chat-sent-msg {
		background-color: #f2f4f7 !important;
	}
}
</style>