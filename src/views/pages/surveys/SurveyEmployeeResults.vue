<template>
	<div>
		<vx-card class="p-2 mb-8">
			<div slot="no-body">
				<vx-card ref="assesment_filter" no-shadow title="Filters" class="assement-filters by-2" collapseAction>
					<div class="vx-row">
						<div class="vx-col w-1/4">
							<small class="label">Process</small>
							<v-select
								:options="process_filters"
								label="name"						
								v-model="filter_options.process_id"
								:reduce="(opt) => opt.process_tree_id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							
							/>
						</div>
						<div class="vx-col w-1/4">
							<small class="label">Employee</small>
							<v-select
								:options="emp_filters"
								label="name"						
								v-model="filter_options.employee_id"
								:reduce="(opt) => opt.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								
							/>
						</div>
						<div class="vx-col w-1/4">
							<small class="label">Department</small>
							<v-select
								:options="dept_filters"
								label="name"						
								v-model="filter_options.department_id"
								:reduce="(opt) => opt.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								
							/>
						</div>
						<div class="vx-col w-1/4 flex justify-end self-end">
							<vs-button
								@click="change_filter"
								class="mr-3"
								color="primary"
								type="filled"
								>Submit</vs-button
							>
						</div>
					</div>
				</vx-card>
			</div>
		</vx-card>		
		<vx-card  class="p-2 mb-8">
			<template slot="actions">
				<vs-button
					@click="download_results(survey_id)"
					class="mr-3"
					color="primary"
					type="filled"
					>Download Results</vs-button
				>

			</template>
			<vs-table
				:data="vas_data"
				stripe
				class="table-dark-inverted table-auto vs-con-loading__container"
			>
					<template slot="thead">
						<vs-th sort-key="process_name">Process</vs-th>
						<vs-th sort-key="name">Employee</vs-th>
						<vs-th sort-key="department_label">Department</vs-th>
						<vs-th sort-key="sub_department">Sub Department</vs-th>
						<vs-th>FTE</vs-th>
						<vs-th>Unit of Measure</vs-th>
						<vs-th>% of time spent</vs-th>
						<vs-th>Process Time (Min)</vs-th>
						<vs-th>Process Time (Max)</vs-th>
						<vs-th>Process Time (Avg)</vs-th>
						<vs-th>Rework Time(min)</vs-th>
						<vs-th>Rework Time(max)</vs-th>
						<vs-th>Rework Time(avg)</vs-th>
						<vs-th>Status</vs-th>
						<!-- <vs-th>Action</vs-th> -->
					</template>

					<!-- sub_department_id: -1, total_fte: 0, : 0,
				: 0, : 0,
				: 0, process_freq_id: -1,
				avg_freq_volume: 0, yearly_timings_multiplier: 0,
				unit_of_measure_id: -1, notes: "", status: 1, -->

					<template slot-scope="{ data }">
						<vs-tr
							:key="indextr"
							v-for="(tr, indextr) in vas_data"
							class="cursor-pointer"
						>
							<vs-td :data="data[indextr].process_name">{{
								data[indextr].process_name
							}}</vs-td>

							<vs-td :data="data[indextr].name">{{
								data[indextr].name
							}}</vs-td>
							<vs-td
								:data="data[indextr].department_label"
								>{{
									data[indextr].department_label
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].sub_department"
								>{{
									data[indextr].sub_department
								}}</vs-td
							>
							<vs-td :data="data[indextr].fte">{{
								data[indextr].fte
							}}</vs-td>
							<vs-td
								:data="data[indextr].unit_of_measure"
								>{{
									data[indextr].unit_of_measure
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].pc_time_spent"
								>{{
									data[indextr].pc_time_spent
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].min_time_spent"
								>{{
									data[indextr].min_time_spent
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].max_time_spent"
								>{{
									data[indextr].max_time_spent
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].avg_time_spent"
								>{{
									data[indextr].avg_time_spent
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].min_time_waste"
								>{{
									data[indextr].min_time_waste
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].max_time_waste"
								>{{
									data[indextr].max_time_waste
								}}</vs-td
							>
							<vs-td
								:data="data[indextr].avg_time_waste"
								>{{
									data[indextr].avg_time_waste
								}}</vs-td
							>
							<vs-td :data="data[indextr].status">
								<vs-chip
									v-if="data[indextr].status === 0"
									transparent
									color="warning"
									>Disabled</vs-chip
								>
								<vs-chip
									v-if="data[indextr].status === 1"
									transparent
									color="primary"
									>Active</vs-chip
								>
							
							</vs-td>

							
						</vs-tr>
					</template>
				</vs-table>
			
		</vx-card>
		 
		<vs-popup
			class="vs-con-loading__container clinic-create-popup"
			title="Rework"
			:active.sync="rework_dialog"
			:buttons-hidden="true"
		>
			<vx-card title="Rework breakdown">
				<div class="flex flex-wrap items-center justify-end mt-8">
					<vs-button @click="save_client($event)" class="ml-auto mt-2"
						>Save Changes</vs-button
					>
					<vs-button
						class="ml-4 mt-2"
						type="border"
						color="warning"
						@click="reset_client"
						>Reset</vs-button
					>
				</div>
			</vx-card>
		</vs-popup>
	</div>
</template>

<script>
import ClientService from "@/services/ClientService.js";
import SurveyService from "@/services/SurveyService.js";
import ConstantsService from "@/services/ConstantsService.js";
import VxCard from "../../../components/vx-card/VxCard.vue";
import vSelect from "vue-select";

export default {
	name: "survey-employee-results",
	data() {
		return {
			filter_options:{
				process_id : -1,
				employee_id : -1,
				department_id: -1
			},
			dept_filters:[],
			emp_filters:[],
			process_filters:[],
			popupActive: false,
			rework_dialog: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			survey_id: -1,
			selected_survey_index: -1,
			client_id: -1,
			vas_data: [
				{
					id: -1,
					process_name: "this long process name",
					employee_name: "employee 1",
					department_label: "department 1",
					sub_department: "sub department",
					total_fte: 1,
					pc_time_spent: 10,
					min_time_spent: 5,
					max_time_spent: 6,
					avg_time_spent: 7,
					frequency_id: 1,
					average_volume: 100,
					yearly_timings_multiplier: 12,
					unit_measure_id: 1,
					notes: "",
					status: 1,
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
		};
	},
	components: { VxCard , vSelect},
	computed: {},	
	methods: {
		change_filter(){
			console.log("submit filter ");
			this.get_employee_timing_results();
		},
		reset_filter(){
			this.filter_options = {
				process_id : -1,
				employee_id : -1,
				department_id: -1
			};
		},
		download_results(survey_id) {
			console.log("downloading survey results ");
			const _that = this;
			this.$vs.loading();
			if (survey_id > 0) {
				SurveyService.get_process_timing_link(survey_id)
					.then(function(response) {
						let res_data = response.data;	
						if (res_data.success) {
							let url = `/assessment/${res_data.data.token}/timing_result`;
							SurveyService.open_xlsx_link(url);
							_that.$vs.loading.close();
						}else{
							_that.$vs.notify({
								title: "Download results",
								text: "Failed.",
								color: "warning",
								timing: 4000,				
							});	
						}
				}).catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Download results",
						text: "Failed.",
						color: "warning",
						timing: 4000,				
					});		
				});
			}
			_that.$vs.loading.close();
		},
		reset_client() {},
		status_label(id) {
			return this.statuses[id] !== undefined ? this.statuses[id] : "N/A";
		},
		view_rework(client_id, id) {
			console.log("values " + client_id + " id " + id);
			this.rework_dialog = true;
		},
		create_opportunity_survey(client_id, survey_id) {
			console.log(client_id, "client id on button click");
			this.$router.push({
				path: `/pages/client/${client_id}/survey/${survey_id}/vsaform`,
			});
		},

		get_client_surveys() {
			const _that = this;
			this.$vs.loading();
			SurveyService.get_client_surveys(
				this.client_id,
				this.survey_id
			).then((response) => {
				const data = response.data;
				
				if (data && data !== undefined) {
					if (data.success) {
						_that.surveys = data.data || {};
						console.log("going to update vas data");
						_that.vas_data = _that.surveys.response_full || {};
					}else{
						_that.$vs.notify({
							title: "Get client surveys",
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
					title: "Get client surveys",
					text: "No data returned",
					color: "warning",
					timing: 4000,				
				});		
			});
		},
		get_employee_timing_results() {
			const _that = this;
			this.surveys = [];
			this.vas_data = [];
			this.$vs.loading();
			SurveyService.get_employee_timing_result(
				this.client_id,
				this.survey_id, 
				this.filter_options,
			).then((response) => {
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						_that.surveys = data.data || {};
						console.log(_that.surveys, " vas data");
						console.log("going to update vas data");
						_that.vas_data = _that.surveys.response_full || {};

						_that.process_filters = _that.surveys.client_processes;
						_that.emp_filters = _that.surveys.assessment_employees;

						_that.dept_filters = [];

						_that.surveys.departments.forEach(e => {
							if(e.client_department_id && e.client_department_id != undefined){
								_that.dept_filters.push({ id: e.client_department_id, name: e.name });
							}
							
						});
					    _that.dept_filters.push({id: -1, name: "Select Department"});
						
					}else{
						_that.$vs.notify({
							title: "Get employee timing results",
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
					title: "Get employee timing result.",
					text: "No data returned.",
					color: "warning",
					timing: 4000,	
				});	
				
			});
		},
	},
	created() {		
		this.client_id = this.$route.params.client_id || -1;
		this.survey_id = this.$route.params.id || -1;
		// console.log(this.client_id, " what clininc id");
		// console.log(this.survey_id, " what survey id");
		this.vas = SurveyService.vas;
	
		this.get_employee_timing_results();
	},
	async mounted () {
		this.$refs.assesment_filter.isContentCollapsed = true;
    	this.$refs.assesment_filter.maxHeight = '1.5rem';
	}
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
 