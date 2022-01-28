<template>
	<div>
		<div class="vx-row"> 
			<vx-card
				ref="filterCard"
				title="Filters"
				class="assement-filters mb-8"
				collapseAction
			>
			<div class="vx-row mb-3">
				<div class="vx-col w-1/3">
					<small class="label">Group By</small>
					<v-select
						:options="filters"
						label="name"
						
						persistent
						v-model="report_options.dimension"
						:reduce="(opt) => opt.name"
						:dir="$vs.rtl ? 'rtl' : 'ltr'"
						@input="change_dimension"
					/>
				</div>
				<div class="vx-col w-1/3">
					<small class="label">Filter By</small>
					<v-select
						:options="sub_filters"
						label="name"
						
						v-model="report_options.dimension_id"
						:reduce="(opt) => opt.id"
						:dir="$vs.rtl ? 'rtl' : 'ltr'"
					/>
				</div>
				<div class="vx-col w-1/3">
					<vs-button
						@click="filter_results"
						class="mr-3"
						color="primary"
						type="filled"
						>Submit</vs-button
					>
				</div>
			</div>
			</vx-card>

		</div>
		
		<div class="vx-row">
			<!-- CARD 9: DISPATCHED ORDERS -->
			<div class="vx-col w-full">
				<vx-card title="VAS Calculations">
					<div v-if="vas_cal_data" class="mt-4">
						<div v-show= "show_header == true" >
						<vs-table
							:data="vas_cal_data"
							stripe
							class="table-dark-inverted table-auto vs-con-loading__container"
						>
							<template slot="thead">
								
								<vs-th>{{ this.headers[0] }}</vs-th>
								<vs-th>{{ this.headers[1] }}</vs-th>
								<vs-th>{{ this.headers[2] }}</vs-th>
							
								<vs-th>Avg Process Time(Min)</vs-th>
								<vs-th>Avg Process Time(Max)</vs-th>
								<vs-th>Avg Process Time(Avg)</vs-th>
								<vs-th>Avg Rework Time(Min)</vs-th>
								<vs-th>Avg Rework Time(Max)</vs-th>
								<vs-th>Avg Rework Time(Avg)</vs-th>
								<vs-th>Volume</vs-th>
								<vs-th>Total work content(Min)</vs-th>
								<vs-th>Total work content(Max)</vs-th>
								<vs-th>Total work content(Avg)</vs-th>
								<vs-th
									>Total work content per year in
									hours(Min)</vs-th
								>
								<vs-th
									>Total work content per year in
									hours(Max)</vs-th
								>
								<vs-th
									>Total work content per year in
									hours(Avg)</vs-th
								>
								<vs-th>Total FTE requirement (Min)</vs-th>
								<vs-th>Total FTE requirement (Max)</vs-th>
								<vs-th>Total FTE requirement (Avg)</vs-th>
							</template>

							<template slot-scope="{ data }">
								<vs-tr
									:key="indextr"
									v-for="(tr, indextr) in vas_cal_data"
									class="cursor-pointer"
								>
									<vs-td v-if='tr.header1' :data="tr.header1">{{
										tr.header1
									}}</vs-td>
									<vs-td v-if='tr.header2'  :data="tr.header2">{{
										tr.header2
									}}</vs-td>
									<vs-td v-if='tr.header3'  :data="tr.header3">{{
										tr.header3
									}}</vs-td>
									<vs-td
										:data="tr.min_time_spent"
										>{{
											tr.min_time_spent
										}}</vs-td
									>
									<vs-td
										:data="tr.max_time_spent"
										>{{
											tr.max_time_spent
										}}</vs-td
									>
									<vs-td
										:data="tr.avg_time_spent"
										>{{
											tr.avg_time_spent
										}}</vs-td
									>

									<vs-td
										:data="tr.min_time_waste"
										>{{
											tr.min_time_waste
										}}</vs-td
									>
									<vs-td
										:data="tr.max_time_waste"
										>{{
											tr.max_time_waste
										}}</vs-td
									>
									<vs-td
										:data="tr.avg_time_waste"
										>{{
											tr.avg_time_waste
										}}</vs-td
									>
									<vs-td :data="tr.volume">{{
										tr.volume
									}}</vs-td>
									<vs-td
										:data="
											tr.total_work_content_min
										"
										>{{
											tr.total_work_content_min
										}}</vs-td
									>
									<vs-td
										:data="
											tr.total_work_content_max
										"
										>{{
											tr.total_work_content_max
										}}</vs-td
									>
									<vs-td
										:data="
											tr.total_work_content_avg
										"
										>{{
											tr.total_work_content_avg
										}}</vs-td
									>

									<vs-td
										:data="
											tr.min_work_content_year
										"
										>{{
											tr.min_work_content_year
										}}</vs-td
									>
									<vs-td
										:data="
											tr.max_work_content_year
										"
										>{{
											tr.max_work_content_year
										}}</vs-td
									>
									<vs-td
										:data="
											tr.avg_work_content_year
										"
										>{{
											tr.avg_work_content_year
										}}</vs-td
									>

									<vs-td
										:data="
											tr.total_fte_requirement_min
										"
										>{{
											tr.total_fte_requirement_min
										}}</vs-td
									>
									<vs-td
										:data="
											tr.total_fte_requirement_max
										"
										>{{
											tr.total_fte_requirement_max
										}}</vs-td
									>
									<vs-td
										:data="
											tr.total_fte_requirement_avg
										"
										>{{
											tr.total_fte_requirement_avg
										}}</vs-td
									>
								</vs-tr>
							</template>
						</vs-table>
						</div>
					</div>
				</vx-card>
			</div>
		</div>
	</div>
</template>

<script>
import ClientService from "@/services/ClientService.js";
import SurveyService from "@/services/SurveyService.js";
import ConstantsService from "@/services/ConstantsService.js";
import VxCard from "../../../components/vx-card/VxCard.vue";
import vSelect from "vue-select";

export default {
	name: "vsa-calculations",
	data() {
		return {
			popupActive: false,
			rework_dialog: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			survey_id: -1,
			selected_survey_index: -1,
			client_id: -1,
			department_options: [],
			process_options: [],
			department_options: [],
			filters: [
				{ id: 1, name: "Department" },
				{ id: 2, name: "Sub Department" },
				{ id: 3, name: "Process" },
				{ id: -1, name: "Select Filter" }
			],
			sub_filters: [{ id: -1, name: "Filter By" }],
			process_filters: [],
			sub_dept_filters:[],
			dept_filters:[],
			report_options: {
				dimension: null,
				dimension_id: null,
			},
			headers: ["Header 1", "Header 2", "Header 3"],
			vas_cal_data: [
				{
					id: -1,
					department_name: -1,
					sub_department_name: "None",
					process_name: "Process 1",
					avg_process_time_min: 1,
					avg_process_time_max: 1,
					avg_process_time_avg: 1,
					avg_rework_time_min: 1,
					avg_rework_time_max: 1,
					avg_rework_time_avg: 1,
					volume: 0,
					total_work_content_min: 1,
					total_work_content_max: 1,
					total_work_content_avg: 1,
					total_work_content_per_year_min: 1,
					total_work_content_per_year_max: 1,
					total_work_content_per_year_avg: 1,
					total_fte_requirement_min: 1,
					total_fte_requirement_max: 1,
					total_fte_requirement_avg: 1,
				},
			],
			survey: {
				name: "",
				client_id: -1,
				particpants: 1,
				fte: 40,
				completed_participants: 0,
				description: "",
				start_date: "",
				end_date: "",
				notes: "",
				status: 0,
			},
			vas: {},
			statuses: ConstantsService.get_statuses(),
			clinic_id: -1,
			show_header :false,
		};
	},
	components: { VxCard, vSelect },
	computed: {},
	methods: {
		get_employee_timing_report() {
			const _that = this;
			this.$vs.loading();
			SurveyService.get_employee_timing_report(
				this.survey_id,
				"None",
				0
			).then((resp) => {
				if (resp.data.data) {
					_that.process_filters = resp.data.data.client_processes;
					_that.sub_dept_filters = resp.data.data.sub_departments;
					_that.dept_filters = resp.data.data.departments;
				}else{
					_that.$vs.notify({
						title: "Get employee timing report",
						text: "No data returned",
						color: "warning",
						timing: 4000,				
					});	
				}
				_that.$vs.loading.close();
				// this.filters = resp.data.filters;
				console.log("dep",_that.dept_filters);
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get employee timing report",
					text: "No data returned.",
					color: "warning",
					timing: 4000,				
				});		
			});
		},
		change_dimension() {
			const dept_filters = this.dept_filters;
			const sub_dept_filters = this.sub_dept_filters;
			const process_filters = this.process_filters;

			switch (this.report_options.dimension) {
				case "Sub Department":
					this.sub_filters = sub_dept_filters;
					break;

				case "Process":
					this.sub_filters = process_filters;
					break;

				default:
					this.sub_filters = dept_filters;
					break;
			}

			this.report_options.dimension_id = 0;
		},
		filter_results() {
			// call filter  API submission
			const _that = this;
			this.$vs.loading();
			_that.vas_cal_data = [];

			SurveyService.get_employee_timing_report(
				this.survey_id,
				this.report_options.dimension,
				this.report_options.dimension_id
			).then((resp) => {
				if (resp.data.data && resp.data.data!= undefined) {
					_that.vas_cal_data = resp.data.data.vas_data;
					_that.headers = resp.data.data.vas_headers;
					console.log('getting data and headers.'+ _that.vas_cal_data);
					if ((_that.report_options.dimension !=null)&&(_that.report_options.dimension_id !=null)) {
							_that.show_header =true;
					}
					if(_that.vas_cal_data.length <= 0){
						_that.$vs.notify({
							title: "Get employee timing report",
							text: "No data returned",
							color: "warning",
							timing: 4000,				
						});	
					}
				}else{
					_that.$vs.notify({
						title: "Get employee timing report",
						text: "No data returned",
						color: "warning",
						timing: 4000,				
					});	
				}
				_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get employee timing report",
					text: "No data returned",
					color: "warning",
					timing: 4000,				
				});		
			});
			
			console.log(
				"filtering results" +
					this.report_options.dimension +
					" filter value " +
					this.report_options.dimension_id
			);
			
		},
	},
	created() {
		this.client_id = this.$route.params.client_id || -1;
		this.survey_id = this.$route.params.id || -1;
		this.get_employee_timing_report();
		//this.show_header =false
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
<style lang="scss">

.assement-filters ul {
	flex-direction: column !important;
}
</style>
