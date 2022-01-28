<template>
	<vx-card no-shadow>
		<div class="vx-row mb-10">
			<div class="vx-col w-1/3">
				<vx-card
					class="
						rounded-xl
						shadow-lg-primary
						mb-0
						h-32
						px-4
						mr-2
						justify-center
						text-white
						bg-blue-500
					"
				>
					<div
						class="
							text-white text-4xl text-center
							font-extrabold
							uppercase
						"
					>
						{{ report_data.op.hours_saved }}
					</div>
					<div
						class="
							text-white text-xl text-center
							font-bold
							uppercase
						"
					>
						Hours Saved
					</div>
				</vx-card>
			</div>
			<div class="vx-col w-1/3">
				<vx-card
					class="
						rounded-xl
						shadow-lg-primary
						mb-0
						h-32
						px-4
						mr-2
						justify-center
						text-white
						grid
						items-center
						bg-yellow-600
					"
				>
					<div
						class="
							text-white text-4xl text-center
							font-extrabold
							uppercase
						"
					>
						{{ report_data.op.opportunities }}
					</div>
					<div
						class="
							text-white text-xl text-center
							font-bold
							uppercase
						"
					>
						Opportunities
					</div>
				</vx-card>
			</div>
			<div class="vx-col w-1/3">
				<vx-card
					class="
						rounded-xl
						shadow-lg-primary
						mb-0
						h-32
						px-4
						mr-2
						justify-center
						text-white
						grid
						items-center
						bg-pink-600
					"
				>
					<div
						class="
							text-white text-4xl text-center
							font-extrabold
							uppercase
						"
					>
						£ {{ report_data.op.benefits }}
					</div>
					<div
						class="
							text-white text-xl text-center
							font-bold
							uppercase
						"
					>
						Benefits
					</div>
				</vx-card>
			</div>
		</div>

		<div class="vx-row mb-10">
			<div class="vx-col w-full sm:w-1/2 h-full">
				<vx-card title="Number of opportunities at each stage" class="h-full">
					<!-- <template slot="actions" class="flex-grow justify-between">
						<vs-dropdown  vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
							<span>{{filter_ops_by_stage.stage_name }}</span>
							<feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
							</small>
							<vs-dropdown-menu  class="w-32">
								<vs-dropdown-item  v-for="ts in ops_by_stage.stages_options" :key="ts.id" @click="filter_ops_by_stage_change(ts)">{{ts.name}}</vs-dropdown-item>
								
							</vs-dropdown-menu>
						</vs-dropdown>
					</template> -->
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
								<span>Status</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in statuses"
									:key="ts.id"
									@click="on_status_change_stage(ts)"
									>{{ ts.name }}
								</vs-dropdown-item>
							</vs-dropdown-menu>
						</vs-dropdown>
					</template>
					<vue-apex-charts
						type="bar"
						height="350"
						:options="ops_by_stage.chart_options"
						:series="ops_by_stage.series"
					></vue-apex-charts>
				</vx-card>
			</div>
			<div class="vx-col w-full sm:w-1/2 h-full">
				<vx-card title="Percentage of opportunities by lever" class="h-full">
					<!-- <template slot="actions" class="flex-grow justify-between">
						<vs-dropdown vs-trigger-click class="cursor-pointer mr-2">
							<small class="flex cursor-pointer">
							<span>All Levers</span>
							<feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item v-for="ts in timing_surveys" :key="ts.id" @click="timing_survey_chart_survey_change(ts.id)">{{ts.name}}</vs-dropdown-item>
								
							</vs-dropdown-menu>
						</vs-dropdown>
					</template> -->
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
								<span>Status</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in statuses"
									:key="ts.id"
									@click="on_status_change_lever(ts)"
									>{{ ts.name }}
								</vs-dropdown-item>
							</vs-dropdown-menu>
						</vs-dropdown>
					</template>
					<vue-apex-charts
						ref="ops_by_lever"
						type="donut"
						height="350"
						:options="ops_by_lever_options"
						:series="ops_by_lever_series"
					></vue-apex-charts>
				</vx-card>
			</div>
		</div>
		<!-- <div
			class="vx-row h-full mb-10 min-h-full"
			v-if="timing_surveys.length > 1"
		>
			<div class="w-full h-full">
				<vx-card title="Value stream Assessment" class="h-full">
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown
							vs-trigger-click
							class="cursor-pointer mr-5"
						>
							<small class="flex cursor-pointer">
								<span>All Surveys</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in timing_surveys"
									:key="ts.id"
									@click="vas_chart_survey_change(ts)"
									>{{ ts.name }}</vs-dropdown-item
								>
							</vs-dropdown-menu>
						</vs-dropdown>
					</template>
					<div>
						<ValueStreamChart :data="val_stream_assess.data" />
					</div>
				</vx-card>
			</div>
		</div> -->
		<div class="vx-row mb-10">
			<!-- <div class="vx-col">
				 <div id="scatter_chart">
       				 <vue-apex-charts type="scatter" height="350" :options="scatter_chart_options" :series="scatter_series"></vue-apex-charts>
     			 </div>
			</div> -->
			<div class="vx-col w-full h-full" v-if="ops_surveys.length > 1">
				<vx-card
					id="ops-pipe-snc-score"
					title="Automation opportunity -  Suitability Vs Complexity"
				>
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
								<span>All Surveys</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in ops_surveys"
									:key="ts.id"
									@click="select_opportunity_lever_survey(ts)"
									>{{ ts.name }}
								</vs-dropdown-item>
							</vs-dropdown-menu>
						</vs-dropdown>
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
								<span>Status</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in statuses"
									:key="ts.id"
									@click="
										select_opportunity_survey_status(ts)
									"
									>{{ ts.name }}
								</vs-dropdown-item>
							</vs-dropdown-menu>
						</vs-dropdown>
					</template>

					<vue-apex-charts
						type="bubble"
						height="350"
						:options="ops_snc_options"
						:series="ops_snc_series"
					></vue-apex-charts>
				</vx-card>
			</div>
			<!-- <div class="vx-col w-full lg:w-4/5 md:w-full sm:w-4/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6">
				 <div id="ops-pipe-snc-score">
       				 <vue-apex-charts type="bubble" height="350" :options="snc_score_options" :series="snc_score_series"></vue-apex-charts>
     			 </div>
			</div> -->
		</div>
		<div class="vx-row mb-10" v-if="timing_surveys.length > 1">
			<div class="vx-col w-full h-full">
				<vx-card
					id="stacked_bar_chart"
					title="Saving split by lever"
				>
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown
							vs-trigger-click
							class="cursor-pointer mr-5"
						>
							<small class="flex cursor-pointer">
								<span>All Processes</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ps in processes"
									:key="ps.id"
									@click="on_process_change(ps)"
									>{{ ps.name }}</vs-dropdown-item
								>
							</vs-dropdown-menu>
						</vs-dropdown>
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
								<span>Status</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in statuses"
									:key="ts.id"
									@click="on_status_change(ts)"
									>{{ ts.name }}
								</vs-dropdown-item>
							</vs-dropdown-menu>
						</vs-dropdown>
						<!-- <vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
							<span>All Processes</span>
							<feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item v-for="drf in data_range_filter" :key="drf.id" @click="timing_survey_chart_dt_change(ts.id)">{{drf.name}}</vs-dropdown-item>								 
							</vs-dropdown-menu>
						</vs-dropdown> -->
					</template>

					<vue-apex-charts
						type="bar"
						height="350"
						:options="process_options"
						:series="process_series"
					></vue-apex-charts>
				</vx-card>
			</div>
		</div>

		<!-- <div class="vx-row mb-10">
			<div class="vx-col w-full h-full">
				<vx-card id='stacked_bar_chart' title="Effort for each process">
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown vs-trigger-click class="cursor-pointer mr-5">
							<small class="flex cursor-pointer">
							<span>All Processes</span>
							<feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item v-for="ts in timing_surveys" :key="ts.id" @click="timing_survey_chart_survey_change(ts.id)">{{ts.name}}</vs-dropdown-item>
								 
							</vs-dropdown-menu>
						</vs-dropdown>
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
							<span>All Processes</span>
							<feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="ml-1" />
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item v-for="drf in data_range_filter" :key="drf.id" @click="timing_survey_chart_dt_change(drf)">{{drf.name}}</vs-dropdown-item>								 
							</vs-dropdown-menu>
						</vs-dropdown>
					</template>
				
					<vue-apex-charts
						type="bar" height="350"
						:options="process_effort_bar_chart.options"
						:series="process_effort_bar_chart.series"
					></vue-apex-charts>
				</vx-card>
			</div>
		</div> -->

		<!-- <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
				<vx-card title="Opportunity Survey">
					<template slot="actions">
						<change-time-duration-dropdown />
					</template>

					<div slot="no-body">
						<div class="vx-row text-center">
							<div class="vx-col w-full lg:w-1/5 md:w-full sm:w-1/5 flex flex-col justify-between mb-4 lg:order-first md:order-last sm:order-first order-last">
								<div class="lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6">
									<h1 class="font-bold text-5xl">10</h1>
									<small>Surveys</small>
								</div>
							</div>

						 
							<div class="vx-col w-full lg:w-4/5 md:w-full sm:w-4/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6">
								<vue-apex-charts type=radialBar height=385 :options="supportTrackerRadialBar.options" :series="support_series" />
							</div>
						</div>

					 

					 
						<div class="flex flex-row justify-between px-8 pb-4 mt-4">
							<p class="text-center" v-for="(val, key) in support_data" :key="key">
								<span class="block">{{ key }}</span>
								<span class="text-2xl font-semibold">{{ val }}</span>
							</p>
						</div>
					</div>
				</vx-card>
			</div> -->

		<!-- <div class="vx-row mb-10">
			<div
				class="vx-col w-full sm:w-1/2 flex flex-col"
				v-if="ops_surveys.length > 1"
			>
				<vx-card title="Process Timing Surveys">
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown
							vs-trigger-click
							class="cursor-pointer mr-5"
						>
							<small class="flex cursor-pointer">
								<span>All Surveys</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in timing_surveys"
									:key="ts.id"
									@click="
										timing_survey_chart_survey_change(ts)
									"
									>{{ ts.name }}</vs-dropdown-item
								>
							</vs-dropdown-menu>
						</vs-dropdown>
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
								<span>Frequency</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="drf in data_range_filter"
									:key="drf.id"
									@click="timing_survey_chart_dt_change(drf)"
									>{{ drf.name }}</vs-dropdown-item
								>
							</vs-dropdown-menu>
						</vs-dropdown>
					</template>

					<vue-apex-charts
						type="donut"
						height="350"
						:options="assessment_options"
						:series="assessment_series"
					></vue-apex-charts>
				</vx-card>
			</div>

			<div class="vx-col w-full sm:w-1/2">
				<vx-card title="Opportunity Surveys">
					<template slot="actions" class="flex-grow justify-between">
						<vs-dropdown
							vs-trigger-click
							class="cursor-pointer mr-5"
						>
							<small class="flex cursor-pointer">
								<span>{{
									op_survey_chart.sel_survey_name
								}}</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="ts in ops_surveys"
									:key="ts.id"
									@click="ops_survey_chart_survey_change(ts)"
									>{{ ts.name }}</vs-dropdown-item
								>
							</vs-dropdown-menu>
						</vs-dropdown>
						<vs-dropdown vs-trigger-click class="cursor-pointer">
							<small class="flex cursor-pointer">
								<span>{{ op_survey_chart.sel_time_name }}</span>
								<feather-icon
									icon="ChevronDownIcon"
									svgClasses="h-4 w-4"
									class="ml-1"
								/>
							</small>
							<vs-dropdown-menu class="w-32">
								<vs-dropdown-item
									v-for="drf in data_range_filter"
									:key="drf.id"
									@click="ops_survey_chart_dt_change(drf)"
									>{{ drf.name }}</vs-dropdown-item
								>
							</vs-dropdown-menu>
						</vs-dropdown>
					</template>

					<vue-apex-charts
						type="donut"
						height="350"
						:options="ops_survey_options"
						:series="ops_survey_series"
					></vue-apex-charts>
				</vx-card>
			</div>
		</div> -->

		<!-- <div class="vx-row mb-10">
			<div id="chart" class="vx-col w-full">				
				<vue-apex-charts type="bar" height="350" :options="test_chartOptions" :series="test_series"></vue-apex-charts>
			</div>
		</div> -->
	</vx-card>
</template>

<script>
import ClientService from "@/services/ClientService";
import { Validator } from "vee-validate";
import VueApexCharts from "vue-apexcharts";
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import ChangeTimeDurationDropdown from "@/components/ChangeTimeDurationDropdown.vue";
import VxTimeline from "@/components/timeline/VxTimeline";
import { Bubble } from "vue-chartjs";
import ValueStreamChart from "@/components/statistics-cards/ValueStreamChart.vue";
import SurveyService from "@/services/SurveyService";

const dict = {
	custom: {
		// name: {
		//   required: 'This is a required field',
		//   alpha: "Your name may only contain alphabetic characters"
		// },
		phone1: {
			required: "Phone field is  required ",
		},
		standard_weekly_hours: {
			required: "Weekly field is required",
		},
		standard_monthly_hours: {
			required: "Monthly field is required",
		},
		standard_quarterly_hours: {
			required: "Quarterly field is required",
		},
		standard_yearly_hours: {
			required: "Yearly field is required",
		},
		utilisation_rate: {
			required: "Utilisation Rate field is required",
		},
	},
};
// register custom messages
Validator.localize("en", dict);

export default {
	data() {
		return {
			client_id: -1,
			client: {},
			old_client_data: {},
			vas_filter: [],
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
			assessment_filter: {
				survey_id: -1,
				time_period: -1,
				status: -1,
			},
			ops_survey_filter: {
				survey_id: -1,
				time_period: -1,
			},
			ops_lever_filter: {
				survey_id: -1,
				processes: [],
				status: -1,
			},
			ops_filter: {
				client_process_id: -1,
				processes: [],
			},
			ops_by_lever_series: [],
			ops_by_lever_options: {},
			assessment_series: [],
			assessment_options: {},
			ops_survey_series: [],
			ops_survey_options: {},
			op_survey_chart: {
				sel_survey_id: -1,
				sel_survey_name: "All Surveys",
				sel_time_id: -1,
				sel_time_name: "Frequency",
			},
			ops_by_lever: {
				series: [],
				options: {
					chart: {
						type: "donut",
					},
					plotOptions: {
						pie: {
							donut: {
								labels: {
									show: true,
									name: {
										show: true,
										fontSize: "22px",
										fontFamily: "Rubik",
										color: "#dfsda",
										offsetY: -10,
									},
									value: {
										show: true,
										fontSize: "16px",
										fontFamily:
											"Helvetica, Arial, sans-serif",
										color: undefined,
										offsetY: 16,
										formatter: function (val) {
											return val;
										},
									},
									total: {
										show: true,
										label: "Total",
										color: "#373d3f",
										formatter: function (w) {
											return w.globals.seriesTotals.reduce(
												(a, b) => {
													return a + b;
												},
												0
											);
										},
									},
								},
							},
						},
					},
					labels: [],
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
			support_series: [76, 67, 61, 90],
			support_data: [],
			supportTrackerRadialBar: {
				// chartData: {
				//
				// },
				// series: [83],
				options: {
					plotOptions: {
						radialBar: {
							size: 158,
							offsetY: -30,
							startAngle: -150,
							endAngle: 150,
							hollow: {
								size: "65%",
							},
							track: {
								background: "rgba(0,0,0,0)",
								strokeWidth: "100%",
							},
							dataLabels: {
								total: {
									show: true,
									label: "TOTAL",
								},
								value: {
									offsetY: 30,
									color: "#99a2ac",
									fontSize: "2rem",
								},
							},
						},
					},
					colors: ["#EA5455"],
					fill: {
						type: "gradient",
						gradient: {
							// enabled: true,
							shade: "dark",
							type: "horizontal",
							shadeIntensity: 0.5,
							gradientToColors: ["#7367F0"],
							inverseColors: true,
							opacityFrom: 1,
							opacityTo: 1,
							stops: [0, 100],
						},
					},
					stroke: {
						dashArray: 8,
					},
					chart: {
						sparkline: {},
					},
					labels: ["Completed Tickets"],
				},
			},
			scatter_chart_options: {},
			scatter_series: [
				{
					name: "SAMPLE A",
					data: [
						[16.4, 5.4],
						[21.7, 2],
						[25.4, 3],
						[19, 2],
						[10.9, 1],
						[13.6, 3.2],
						[10.9, 7.4],
						[10.9, 0],
						[10.9, 8.2],
						[16.4, 0],
						[16.4, 1.8],
						[13.6, 0.3],
						[13.6, 0],
						[29.9, 0],
						[27.1, 2.3],
						[16.4, 0],
						[13.6, 3.7],
						[10.9, 5.2],
						[16.4, 6.5],
						[10.9, 0],
						[24.5, 7.1],
						[10.9, 0],
						[8.1, 4.7],
						[19, 0],
						[21.7, 1.8],
						[27.1, 0],
						[24.5, 0],
						[27.1, 0],
						[29.9, 1.5],
						[27.1, 0.8],
						[22.1, 2],
					],
				},
				{
					name: "SAMPLE B",
					data: [
						[36.4, 13.4],
						[1.7, 11],
						[5.4, 8],
						[9, 17],
						[1.9, 4],
						[3.6, 12.2],
						[1.9, 14.4],
						[1.9, 9],
						[1.9, 13.2],
						[1.4, 7],
						[6.4, 8.8],
						[3.6, 4.3],
						[1.6, 10],
						[9.9, 2],
						[7.1, 15],
						[1.4, 0],
						[3.6, 13.7],
						[1.9, 15.2],
						[6.4, 16.5],
						[0.9, 10],
						[4.5, 17.1],
						[10.9, 10],
						[0.1, 14.7],
						[9, 10],
						[12.7, 11.8],
						[2.1, 10],
						[2.5, 10],
						[27.1, 10],
						[2.9, 11.5],
						[7.1, 10.8],
						[2.1, 12],
					],
				},
				{
					name: "SAMPLE C",
					data: [
						[21.7, 3],
						[23.6, 3.5],
						[24.6, 3],
						[29.9, 3],
						[21.7, 20],
						[23, 2],
						[10.9, 3],
						[28, 4],
						[27.1, 0.3],
						[16.4, 4],
						[13.6, 0],
						[19, 5],
						[22.4, 3],
						[24.5, 3],
						[32.6, 3],
						[27.1, 4],
						[29.6, 6],
						[31.6, 8],
						[21.6, 5],
						[20.9, 4],
						[22.4, 0],
						[32.6, 10.3],
						[29.7, 20.8],
						[24.5, 0.8],
						[21.4, 0],
						[21.7, 6.9],
						[28.6, 7.7],
						[15.4, 0],
						[18.1, 0],
						[33.4, 0],
						[16.4, 0],
					],
				},
			],
			ops_snc_options: {
				chart: {
					height: 350,
					type: "bubble",
				},
				dataLabels: {
					enabled: false,
				},
				fill: {
					opacity: 0.8,
				},
				xaxis: {
					type: "numeric",
					// categories: [0.0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0],
					tickPlacement: "between",
					min: 0.01,
					max: 1.2,
					decimalsInFloat: 2,
					title: {
						text: "Complexity Score",
					},
				},
				yaxis: {
					max: 1.2,
					title: {
						text: "Suitability Score",
					},
				},
				zaxis: {
					min: 1,
					max: 10,
				},
			},
			ops_snc_series: [],

			filter_ops_by_stage: {
				stage_id: -1,
				stage_name: "All Stages",
				status: -1,
			},
			timing_surveys: [],
			ops_surveys: [],
			statuses: [
				{ id: -1, name: "All" },
				{ id: 1, name: "Open" },
				{ id: 0, name: "Closed" },
			],
			sel_timing_survey_id: -1,
			sel_timing_survey_time_range: -1,
			data_range_filter: [
				{ id: -1, name: "All" },
				{ id: 1, name: "1 Month" },
				{ id: 2, name: "6 Months" },
				{ id: 3, name: "1 Year" },
			],

			process_series: [
				{
					name: "Low",
					data: [44],
				},
				{
					name: "Medium",
					data: [53],
				},
			
			],
			process_options: {},
			processes: [{ id: -1, name: "All" }],
			ops_by_stage: {
				stages_options: [],
				chart_options: {
					chart: {
						type: "bar",
						height: 350,
					},
					plotOptions: {
						bar: {
							borderRadius: 4,
							horizontal: true,
						},
					},
					dataLabels: {
						enabled: false,
					},
					xaxis: {
						categories: [],
					},
				},
				series: [
					{
						data: [400, 430, 448, 470, 540, 580],
					},
				],
			},
			val_stream_assess: {
				data: [["Process1", "Min", "AvgS", "AvgE", "Max"]],
			},
			process_effort_bar_chart: {
				options: {
					chart: {
						height: 350,
						type: "bar",
					},
					plotOptions: {
						bar: {
							horizontal: true,
						},
					},
					colors: ["#00E396"],
					dataLabels: {
						formatter: function (val, opt) {
							const goals =
								opt.w.config.series[opt.seriesIndex].data[
									opt.dataPointIndex
								].goals;

							if (goals && goals.length) {
								return `${val} / ${goals[0].value}`;
							}
							return val;
						},
					},
					legend: {
						show: true,
						showForSingleSeries: true,
						customLegendItems: ["Actual", "Expected"],
						markers: {
							fillColors: ["#00E396", "#775DD0"],
						},
					},
				},
				series: [
					{
						name: "Label 1",
						data: [
							{
								x: "2011",
								y: 12,
								goals: [
									{
										name: "Expected",
										value: 14,
										strokeWidth: 10,
										strokeColor: "#775DD0",
									},
								],
							},
							{
								x: "2012",
								y: 44,
								goals: [
									{
										name: "Expected",
										value: 54,
										strokeWidth: 10,
										strokeColor: "#775DD0",
									},
								],
							},
							{
								x: "2013",
								y: 54,
								goals: [
									{
										name: "Expected",
										value: 52,
										strokeWidth: 10,
										strokeColor: "#775DD0",
									},
								],
							},
							{
								x: "2014",
								y: 66,
								goals: [
									{
										name: "Expected",
										value: 65,
										strokeWidth: 5,
										strokeColor: "#775DD0",
									},
								],
							},
							{
								x: "2015",
								y: 81,
								goals: [
									{
										name: "Expected",
										value: 66,
										strokeWidth: 5,
										strokeColor: "#775DD0",
									},
								],
							},
							{
								x: "2016",
								y: 67,
								goals: [
									{
										name: "Expected",
										value: 70,
										strokeWidth: 5,
										strokeColor: "#775DD0",
									},
								],
							},
						],
					},
				],
			},
			report_data: {
				op: {
					hours_saved: 20,
					opportunities: 10,
					benefits: "200,000",
					ops_by_stage: {
						series: [
							"Idea",
							"Assessment",
							"Process Design",
							"Solution Design",
							"Development",
							"Testing",
							"Implementation",
							"Hypercare",
						],
						options: {},
					},
				},
			},

			test_series: [
				{
					name: "Label1",
					data: [
						{
							x: "2011",
							y: 12,
							goals: [
								{
									name: "Expected",
									value: 14,
									strokeWidth: 10,
									strokeColor: "#775DD0",
								},
							],
						},
						{
							x: "2012",
							y: 44,
							goals: [
								{
									name: "Expected",
									value: 54,
									strokeWidth: 10,
									strokeColor: "#775DD0",
								},
							],
						},
						{
							x: "2013",
							y: 54,
							goals: [
								{
									name: "Expected",
									value: 52,
									strokeWidth: 10,
									strokeColor: "#775DD0",
								},
							],
						},
						{
							x: "2014",
							y: 66,
							goals: [
								{
									name: "Expected",
									value: 65,
									strokeWidth: 10,
									strokeColor: "#775DD0",
								},
							],
						},
						{
							x: "2015",
							y: 81,
							goals: [
								{
									name: "Expected",
									value: 66,
									strokeWidth: 10,
									strokeColor: "#775DD0",
								},
							],
						},
						{
							x: "2016",
							y: 67,
							goals: [
								{
									name: "Expected",
									value: 70,
									strokeWidth: 10,
									strokeColor: "#775DD0",
								},
							],
						},
					],
				},
			],
			test_chartOptions: {
				chart: {
					height: 350,
					type: "bar",
				},
				plotOptions: {
					bar: {
						horizontal: true,
					},
				},
				colors: ["#00E396", "#775DD0"],
				dataLabels: {
					formatter: function (val, opt) {
						return val;
					},
				},
				legend: {
					show: true,
					showForSingleSeries: true,
					customLegendItems: ["Legend1", "Legend2"],
					markers: {
						fillColors: ["#00E396", "#775DD0"],
					},
				},
			},
		};
	},
	components: {
		VueApexCharts,
		StatisticsCardLine,
		ChangeTimeDurationDropdown,
		VxTimeline,
		ValueStreamChart,
	},
	methods: {
		get_ops_summary() {
			const _that = this;
			this.$vs.loading();
			if (this.client_id > 0) {
				ClientService.get_report_ops_summary(this.client_id)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success) {
								_that.report_data.op.hours_saved =
									data.data.hours_saved;
								_that.report_data.op.benefits =
									data.data.benefits;
								_that.report_data.op.opportunities =
									data.data.opportunities;
								_that.timing_surveys = data.data.timing_surveys;
								_that.ops_surveys = data.data.ops_surveys;
								console.log(_that.timing_surveys);
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		filter_ops_by_stage_change(item) {
			this.filter_ops_by_stage.stage_id = item.id;
			this.filter_ops_by_stage.stage_name = item.name;
			this.get_ops_stages();
		},

		get_ops_stages() {
			const _that = this;
			this.$vs.loading();
			let filter = {
				stage_id: this.filter_ops_by_stage.stage_id,
				status: this.ops_by_stage.status,
			};
			if (this.client_id > 0) {
				ClientService.get_report_ops_stages(this.client_id, filter)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								_that.ops_by_stage.series.splice(0, 1, {
									data: data.data.data,
								});
								Object.assign(
									_that.ops_by_stage.chart_options.xaxis
										.categories,
									data.data.labels
								);
								// console.log(_that.ops_by_stage.series);
								_that.ops_by_stage.stages_options = [
									{ id: -1, name: "ALL Stages" },
									{ id: 1, name: "Idea" },
									{ id: 2, name: "Assessment" },
								];
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		get_ops_by_lever() {
			// console.log("getting ops by lever");
			const _that = this;

			this.$vs.loading();
			let filter = {
				status: this.ops_by_lever_series.status,
			};
			if (this.client_id > 0) {
				ClientService.get_report_ops_level_by_lever(
					this.client_id,
					filter
				)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								_that.ops_by_lever_series = data.data.data;
								_that.ops_by_lever_options = {
									labels: data.data.labels,
								};
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		get_assessment_completion() {
			const _that = this;

			this.$vs.loading();
			if (this.client_id > 0) {
				ClientService.get_assessment_completion(this.client_id)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								_that.assessment_series = data.data.data;
								_that.assessment_options = {
									labels: data.data.labels,
								};
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		get_ops_level_by_lever() {
			const _that = this;

			this.$vs.loading();
			if (this.client_id > 0) {
				ClientService.get_report_ops_level_by_lever(this.client_id)
					.then((response) => {
						// _that.ops_by_stage.series = [];
						// _that.ops_by_stage.chart_options.xaxis.categories = [];

						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								Object.assign(
									_that.ops_by_lever.series,
									data.data.data
								);
								Object.assign(
									_that.ops_by_lever.plotOptions.labels,
									data.data.labels
								);
								// console.log(_that.ops_by_lever);
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		get_ops_survey_completion_stats() {
			const _that = this;

			this.$vs.loading();
			if (this.client_id > 0) {
				let filter = {
					survey_id: this.ops_survey_filter.survey_id,
					time_period: this.ops_survey_filter.time_period,
				};

				console.log(filter);

				ClientService.get_report_ops_survey_completion_stats(
					this.client_id,
					filter
				)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								_that.ops_survey_series = data.data.data;
								_that.ops_survey_options = {
									labels: data.data.labels,
								};
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},

		get_timing_survey_completion_stats() {
			const _that = this;
			this.$vs.loading();

			let filter = {
				survey_id: this.assessment_filter.survey_id,
				time_period: this.assessment_filter.time_period,
				status: this.assessment_filter.status,
			};

			console.log(filter);

			if (this.client_id > 0) {
				ClientService.get_assessment_completion(this.client_id, filter)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								_that.assessment_series = data.data.data;
								_that.assessment_options = {
									labels: data.data.labels,
								};
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},

		get_report_ops_priority() {
			const _that = this;

			this.$vs.loading();
			if (this.client_id > 0) {
				let filter = {
					survey_id: this.assessment_filter.survey_id,
					time_period: this.assessment_filter.time_period,
					status: this.assessment_filter.status,
				};

				ClientService.get_report_ops_priority(this.client_id, filter)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								_that.ops_snc_series = data.data;
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		get_ops_by_process() {
			const _that = this;

			this.$vs.loading();
			if (this.client_id > 0) {
				let filter = {
					client_process_id: this.ops_filter.client_process_id,
					processes: this.ops_filter.processes,
					status: this.ops_filter.status,
				};

				ClientService.get_ops_by_process(this.client_id, filter)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success == true) {
								// console.log(data.data.series);

								Object.assign(
									_that.processes,
									data.data.processes
								);
								Object.assign(
									_that.process_series,
									data.data.series
								);
								_that.process_options = {
									chart: {
										type: "bar",
										height: 350,
										stacked: false,
									},
									plotOptions: {
										bar: {
											horizontal: false,
										},
									},
									stroke: {
										width: 1,
										colors: ["#fff"],
									},
									xaxis: {
										categories: ["Process 1", "Process 2"],
										labels: {
											// formatter: function (val) {
											//   return val + "K"
											// }
										},
									},
									yaxis: {
										title: {
											text: "Savings in £",
										},
									},
									tooltip: {
										y: {
											formatter: function (val) {
												return "£ " + val ;
											},
										},
									},
									fill: {
										opacity: 1,
									},
									legend: {
										position: "top",
										horizontalAlign: "left",
										offsetX: 40,
									},
									dataLabels: {
										enabled: true,
										enabledOnSeries: undefined,
										formatter: function (val, opts) {
											return "£ " + val
										},
									}
								};
								// _that.process_series = data.data.series;
								// _that.process_options = stacked_bar_chart.options;
								_that.process_options.xaxis.categories =
									data.data.categories;
							} else {
								_that.$vs.notify({
									title: "Get client report",
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
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		get_vas_data() {
			const _that = this;
			this.$vs.loading();
			let filter = {};
			if (this.vas_filter.survey_id) {
				filter.survey_id = this.vas_filter.survey_id;
			}
			console.log(filter.survey_id);
			SurveyService.get_vas_data(this.client_id, filter)
				.then((response) => {
					const data = response.data;

					if (data && data !== undefined) {
						if (data.success == true) {
							_that.val_stream_assess.data = [
								["Process", "Min", "AvgS", "AvgE", "Max"],
							];
							data.data.forEach((e) => {
								_that.val_stream_assess.data.push([
									e[0],
									parseFloat(e[1]),
									parseFloat(e[2]),
									parseFloat(e[3]),
									parseFloat(e[4]),
								]);
							});

							console.log(_that.val_stream_assess);
							_that.$vs.loading.close();
						}
					} else {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Get client report",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					}
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Get client report",
						text: "No data returned",
						color: "warning",
						timing: 4000,
					});
				});
		},
		reset_client() {
			this.client = Object.assign({}, this.old_client_data);
			this.$validator.reset();
		},

		generate_data(baseval, count, yrange) {
			var i = 0;
			var series = [];
			while (i < count) {
				var x = Math.random();
				var y =
					Math.floor(
						Math.random() * (yrange.max - yrange.min + 0.11)
					) + yrange.min;
				var z = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

				series.push([x, y, z]);
				baseval += 86400000;
				i++;
			}
			return series;
		},

		ops_survey_chart_survey_change(item) {
			this.ops_survey_filter.survey_id = item.id;
			this.get_ops_survey_completion_stats();
		},

		ops_survey_chart_dt_change(item) {
			this.ops_survey_filter.time_period = item.id;
			this.get_ops_survey_completion_stats();
		},

		timing_survey_chart_survey_change(ts) {
			this.assessment_filter.survey_id = ts.id;
			this.get_timing_survey_completion_stats();
		},
		vas_chart_survey_change(ts) {
			this.vas_filter.survey_id = ts.id;
			this.get_vas_data();
		},
		// ops_survey_change(ts) {
		// 	this.ops_filter.survey_id = ts.id;
		// 	this.get_ops_by_process();
		// },

		on_process_change(ps) {
			this.ops_filter.client_process_id = ps.id;

			this.get_ops_by_process();
		},
		on_status_change(ps) {
			this.ops_filter.status = ps.id;
			this.get_ops_by_process();
		},
		on_status_change_lever(ts) {
			this.ops_by_lever_series.status = ts.id;
			this.get_ops_by_lever();
		},
		on_status_change_stage(ts) {
			this.ops_by_stage.status = ts.id;
			this.get_ops_stages();
		},
		select_opportunity_lever_survey(ts) {
			this.ops_lever_filter.survey_id = ts.id;
			this.get_report_ops_priority();
		},

		select_opportunity_survey_status(ts) {
			this.assessment_filter.status = ts.id;
			this.get_report_ops_priority();
		},

		timing_survey_chart_dt_change(drf) {
			this.assessment_filter.time_period = drf.id;
			this.get_timing_survey_completion_stats();
		},
	},
	computed: {
		activeUserInfo() {
			return this.$store.state.AppActiveUser;
		},
	},

	created() {
		this.client_id = this.$route.params.id || -1;

		this.support_data["completed"] = 5;
		this.support_data["inprogress"] = 3;
		this.support_data["pending"] = 2;

		this.get_ops_summary();
		this.get_ops_stages();
		this.get_ops_by_lever();
		this.get_ops_by_process();
		// this.get_assessment_completion();
		// this.get_ops_level_by_lever();
		this.get_ops_survey_completion_stats();

		this.get_timing_survey_completion_stats();
		this.get_report_ops_priority();
		this.get_vas_data();
	},
};
</script>
