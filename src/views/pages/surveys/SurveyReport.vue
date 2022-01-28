<template>
	<div class="vx-row">
		<div class="vx-col w-full">
			<vx-card title="Assessment Report">
				<div class="vx-row">
					<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
						<statistics-card-line
							hideChart
							class="mb-base"
							icon="CpuIcon"
							icon-right
							statistic="44"
							statisticTitle="Total no of Intelligent Automation opportunities"
						/>
					</div>

					<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
						<statistics-card-line
							hideChart
							class="mb-base"
							icon="ServerIcon"
							icon-right
							statistic="50.1"
							statisticTitle="Total Automation opportunity in FTE"
							color="success"
						/>
					</div>

					<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
						<statistics-card-line
							hideChart
							class="mb-base"
							icon="ActivityIcon"
							icon-right
							statistic="22%"
							statisticTitle="Proportion of work with Intellgient automation opportunity"
							color="danger"
						/>
					</div>

					<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
						<statistics-card-line
							hideChart
							class="mb-base"
							icon="AlertOctagonIcon"
							icon-right
							statistic="£1.1m"
							statisticTitle="Total opportunities in £"
							color="warning"
						/>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
						<vx-card title="Top 10 processes with 'High' automation opportunity">
							<vue-apex-charts
								type="bar"
								height="350"
								:options="barChart.chartOptions"
								:series="barChart.series"
							></vue-apex-charts>
						</vx-card>
					</div>

					<div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
						<vx-card title="Automation opportunity by capability">
							<vue-apex-charts
								type="donut"
								height="350"
								:options="donutChart.chartOptions"
								:series="donutChart.series"
							></vue-apex-charts>
						</vx-card>
					</div>
				</div>
				<div class="vx-row">
					<div class="vx-col w-full">
						<vx-card title="Proportion of opportunities across each improvement lever">
							<vue-apex-charts type="bar" height="500" :options="chartOptions" :series="series"></vue-apex-charts>
						</vx-card>
					</div>
				</div>
			</vx-card>
		</div>
	</div>
</template>

<script>
import DepartmentService from "@/services/DepartmentService.js";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import VueApexCharts from "vue-apexcharts";
import { VTree, VSelectTree } from "vue-tree-halower";

export default {
	name: "SurveyReport",
	data() {
		return {
			main_tab: null,
			treeData: [
				{
					title: "node1",
					expanded: true,
					children: [
						{
							title: "node 1-1",
							expanded: true,
							children: [
								{
									title: "node 1-1-1",
								},
								{
									title: "node 1-1-2",
								},
								{
									title: "node 1-1-3",
								},
							],
						},
					],
				},
			],
			panel: 0,
			tab_items: ["General", "Client Details", "Summary"],
			interval: {},
			circle_value: 0,
			with: 2,
			radius: 10,
			padding: 8,
			lineCap: "round",
			// gradient: gradients[5],
			value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
			gradientDirection: "top",
			// gradients,
			fill: false,
			trend_type: "trend",
			autoLinewWidth: false,
			arrayEvents: null,
			date2: new Date().toISOString().substring(0, 10),
			spark_labels: [
				"12am",
				"3am",
				"6am",
				"9am",
				"12pm",
				"3pm",
				"6pm",
				"9pm",
			],
			options: {
				chart: {
					id: "vuechart-example",
					width: "90%",
					height: "400",
				},
				xaxis: {
					categories: [
						"Jan",
						"Feb",
						"Mar",
						"Apr",
						"May",
						"Jun",
						"Jul",
						"Aug",
						"Sep",
						"Oct",
						"Nov",
						"Dec",
					],
				},
				title: {
					text: "Top processes with 'High automation' opportunities",
					align: "center",
					style: {
						fontSize: "16px",
						fontWeight: "bold",
						fontFamily: undefined,
						color: "#424b8a",
					},
				},
			},
			series: [
				{
					name: "series-1",
					data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139],
				},
			],
			pie_series: [5, 25, 10, 60],
			pie_options: {
				chart: {
					width: "90%",
					type: "pie",
				},
				title: {
					text: "Automation opportunity by capability",
					align: "center",
					style: {
						fontSize: "16px",
						fontWeight: "bold",
						fontFamily: undefined,
						color: "#424b8a",
					},
				},

				labels: ["RPA", "Smart Workflow", "NLP", "Cognitive agents"],
				responsive: [
					{
						breakpoint: 480,
						options: {
							chart: {
								width: "90%",
							},
							legend: {
								position: "bottom",
							},
						},
					},
				],
			},
			focus: "",
			type: "month",
			typeToLabel: {
				month: "Month",
				week: "Week",
				day: "Day",
				"4day": "4 Days",
			},
			selectedEvent: {},
			selectedElement: null,
			selectedOpen: false,
			events: [],
			colors: [
				"blue",
				"indigo",
				"deep-purple",
				"cyan",
				"green",
				"orange",
				"grey darken-1",
			],
			names: ["Meeting", "Holiday", "PTO", "Travel", "Conference"],
			themeColors: [
				"#7367F0",
				"#28C76F",
				"#EA5455",
				"#FF9F43",
				"#1E1E1E",
			],
			barChart: {
				series: [
					{
						data: [15.1, 12.1, 5.2, 4.5, 4, 1.4, 0.5, 0.2, 0.15],
					},
				],
				chartOptions: {
					colors: this.themeColors,
					plotOptions: {
						bar: {
							horizontal: true,
						},
					},
					dataLabels: {
						enabled: false,
					},
					xaxis: {
						categories: [
							"Raise invoice",
							"Approve Purchase Order",
							"Create master data change request",
							"Conduct business needs assessment",
							"Update Master data record",
							"Process Payment",
							"Maintain master data policy",
							"Maintain data",
							"Process goods receipt",
							"Conduct master data audit",
						],
					},
				},
			},
			donutChart: {
				series: [32, 4, 14, 2],
				chartOptions: {
					labels: [
						"RPA",
						"Smart Workflow",
						"NLP",
						"Cognitive agents",
					],
					colors: this.themeColors,
					responsive: [
						{
							breakpoint: 480,
							options: {
								chart: {
									width: 200,
								},
								legend: {
									position: "bottom",
								},
							},
						},
					],
				},
			},
			series: [
				{
					name: "Low",
					data: [13, 3, 19, 20, 26, 22, 6],
				},
				{
					name: "Medium",
					data: [2, 2, 3, 1, 0, 0, 4],
				},
				{
					name: "High",
					data: [15, 25, 8, 9, 4, 8, 20],
				},
			],
			chartOptions: {
				chart: {
					type: "bar",
					height: 350,
					stacked: true,
					toolbar: {
						show: true,
					},
					zoom: {
						enabled: true,
					},
				},
				responsive: [
					{
						breakpoint: 480,
						options: {
							legend: {
								position: "bottom",
								offsetX: -10,
								offsetY: 0,
							},
						},
					},
				],
				plotOptions: {
					bar: {
						horizontal: false,
					},
				},
				xaxis: {
					type: "category",
					categories: [
						"Standardisation",
						"Simplification",
						"RPA",
						"Machine Learning",
						"NLP",
						"Cognitive Agent",
						"Outsource/Transition",
					],
				},
				legend: {
					position: "top",
				},
				fill: {
					opacity: 1,
				},
			},
		};
	},
	components: {
		StatisticsCardLine,
		VueApexCharts,
		VTree,
		VSelectTree,
	},
	methods: {
		process_label(id) {
			return this.processes[id] !== undefined
				? this.processes[id]
				: "N/A";
		},
		on_survey_view(id) {
			this.$router.push({ path: `/pages/survey/${id}` });
		},
		save_department(e) {
			e.preventDefault();

			if (this.department_id === -1) {
				const _that = this;
				DepartmentService.create_department(this.department).then(
					(response) => {
						const data = response.data;

						if (data && data !== undefined) {
							if (data.success) {
								_that.departments.push(data.department);
								_that.popupActive = false;
							}
						}
					}
				);
			} else if (this.department_id > 0) {
				const _that = this;
				DepartmentService.update_department(
					this.department_id,
					this.department
				).then((response) => {
					const data = response.data;
					
					if (data && data !== undefined) {
						if (data.success) {
							if (
								_that.departments[
									_that.selected_department_index
								]
							) {
								_that.departments[
									_that.selected_department_index
								] = data.department;
							}
							_that.popupActive = false;
						}
					}
				});
			}
		},
		reset_department() {
			this.department.name = "";
			this.department.description = "";
			this.department.notes = "";
			this.department.status = 0;
		},
		create_department() {
			this.selected_department_index = -1;
			this.department_id = -1;
			this.reset_department();
			this.popupActive = true;
		},
		update_department(department, department_index) {
			this.department_id = department.id || -1;
			this.selected_department_index = department_index;
			this.department = department;
			this.popupActive = true;
		},
		get_survey_processes() {
			this.departments = [];
			const _that = this;
			DepartmentService.get_all_departments().then((response) => {
				const data = response.data;
				
				if (data && data !== undefined) {
					if (data.success) {
						_that.departments = data.data || {};
					}
				}
			});
		},
	},
	created() {
		this.survey_id = this.$route.params.id || -1;
		this.processes[-1] = "N/A";
		this.processes[1] = "Source to contract";
		this.processes[2] = "Procure to invoice";
		this.processes[3] = "Invoice to pay";
		this.processes[4] = "Spend-category strategy";
		this.processes[5] = "Vendor selection and negotiation";
		this.processes[6] = "Vendor management";
		this.processes[7] = "Analyze & plan needs";
		this.processes[8] = "Analyze supply market";
		this.processes[9] = "Execute tender and select supplier";
		this.processes[10] = "Manage contract and relationship";
		this.processes[11] = "Master data management";
		this.processes[12] = "Manage demand for purchases";
		this.processes[13] = "Analyze & plan needs";
		this.processes[14] = "Analyze supply market";
		this.processes[15] = "Execute tender and select supplier";
		this.processes[16] = "Award contract";
		this.processes[17] = "Manage contract and relationship";
		this.processes[18] = "Category wise need identification";
		this.processes[19] = "Market research";
		this.processes[20] = "Request for quote";
		this.processes[21] = "Request for proposal";
		this.processes[22] = "Supplier assessment";
		this.processes[23] = "E-auction";
		this.get_survey_processes();
	},
};
</script>
<style scoped>
.rounded {
	border-top-left-radius: 50px;
	border-bottom-left-radius: 50px;
}

.engx-panel-card {
	border-radius: 0.5rem !important;
	box-sizing: border-box;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.engx-bright-red {
	background: rgb(233, 30, 99) !important;
	border: rgb(233, 30, 99) !important;
}

.engx-bright-blue {
	background: #00cae3 !important;
	border: #00cae3 !important;
}

.engx-bright-green {
	background: #4caf50 !important;
	border: #4caf50 !important;
}

.engx-bright-orange {
	background: #fb8c00 !important;
	border: #fb8c00 !important;
}

.engx-panel-h1 {
	font-size: 4rem;
	font-weight: bold;
	color: #fff;
	flex-grow: 1;
}

.engx-panel-h3 {
	font-size: 1rem;
	line-height: 150%;
	color: #fff !important;
	display: flex;
	align-items: flex-end;
}
.chart-row {
	max-height: 50vh;
}

.hh-bg-purple {
	background-color: #424b8a !important;
	border-color: #424b8a !important;
}

.hh-bg-gold {
	background-color: #c3b68f !important;
	border-color: #c3b68f !important;
}

.hh-bg-light-blue {
	background-color: #97eef9 !important;
	border-color: #97eef9 !important;
}

.hh-bg-light-grey {
	background-color: #85a7b0 !important;
	border-color: #85a7b0 !important;
}

.hh-bg-grey {
	background-color: #6b6b6b !important;
	border-color: #6b6b6b !important;
}

.statistic_title {
	word-wrap: break-word !important;
}
@media only screen and (max-width: 768px) {
	.chart-row {
		max-height: 50vh;
	}
}
</style>