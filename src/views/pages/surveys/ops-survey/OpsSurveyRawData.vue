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
				<div class="vx-col w-1/4">
					<small class="label">Filter by Employee</small>
					<v-select
						:options="emp_filters"
						label="name"						
						v-model="report_options.employee_id"
						:reduce="(opt) => opt.id"
						:dir="$vs.rtl ? 'rtl' : 'ltr'"
						@input="change_filter"
					/>
				</div>
				<div class="vx-col w-1/4">
					<small class="label">Filter by Process</small>
					<v-select
						:options="process_filters"
						label="name"						
						v-model="report_options.process_id"
						:reduce="(opt) => opt.id"
						:dir="$vs.rtl ? 'rtl' : 'ltr'"
						@input="change_filter"
					/>
				</div>
				<div class="vx-col w-1/4">
					<small class="label">Filter by Lever</small>
					<v-select
						:options="lever_filters"
						label="name"						
						v-model="report_options.lever_id"
						:reduce="(opt) => opt.id"
						:dir="$vs.rtl ? 'rtl' : 'ltr'"
						@input="change_filter"
					/>
				</div>
				<div class="vx-col w-1/4 flex justify-end self-end">
					<vs-button
						@click="get_ops_survey_data"
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
			<div class="vx-col w-full">
				<vx-card title="Ops Survey Data">
					<template slot="actions">
						<vs-button
							@click="download_results(survey_id)"
							class="mr-3"
							color="primary"
							type="filled"
							>Download Results</vs-button
						>
					</template>
					<div slot="no-body" class="mt-4">
						<vs-table
							:data="survey_data"
							stripe
							class="table-dark-inverted table-auto vs-con-loading__container"
						>
							<template slot="thead">
								<vs-th sort-key="process_name">Process</vs-th>
								<vs-th sort-key="lever_name">Lever</vs-th>
								<vs-th sort-key="employee_name">Employee</vs-th>							 
								<vs-th>Question Type</vs-th>
								<vs-th>Question</vs-th>
								<vs-th>Answer</vs-th>								 
							</template>
							<template slot-scope="{ data }">
								<vs-tr :key="indextr" v-for="(tr, indextr) in survey_data" class="cursor-pointer">
									<vs-td :data="tr.process_name">{{tr.process_name}}</vs-td>
									<vs-td :data="tr.lever_name">{{tr.lever_name}}</vs-td>
									<vs-td :data="tr.employee_name">{{tr.employee_name}}</vs-td>
									<vs-td :data="tr.question_type">{{tr.question_type}}</vs-td>
									<vs-td :data="tr.question">{{tr.question}}</vs-td>
									<vs-td :data="tr.selection">{{tr.selection}}</vs-td>
								</vs-tr>
							</template>
						</vs-table>
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
import VxCard from "@/components/vx-card/VxCard.vue";
import vSelect from "vue-select";

export default {
	name: "survey-employee-results",
	data() {
		return {
			emp_filters:[
				{id:-1,name:"Select Employee"},
			
			],
			process_filters:[
				{id:-1,name:"Select Process"},
				{id:1,name:"process 1"},
				{id:2,name:"process 2"},
			],
			lever_filters:[
				{id:-1,name:"Select Lever"},
				{id:1,name:"lever 1"},
				{id:2,name:"lever 2"},
			],
			survey_id: -1,	 
			client_id: -1,
			report_options:{
				employee_id:-1,
				process_id:-1,
				lever_id:-1,
			},
			survey_data: [
				{
					id: 1,
					process_name: "process 1",
					process_id: 1,
					employee_name: "employee 1",
					employee_id: 1,
					lever_name: "lever 1",
					lever_id: 1,
					question_type: 1,
					question: "",
					answer: ""
				},
				{
					id: 2,
					process_name: "process 1",
					process_id: 1,
					employee_name: "employee 1",
					employee_id: 1,
					lever_name: "lever 1",
					lever_id: 1,
					question_type: 1,
					question: "",
					answer: ""
				},
			],			 
			statuses: ConstantsService.get_statuses(),
			clinic_id: -1,
			filters: {

			},
			employee_process_lookup: {},

			
		};
	},
	components: { VxCard ,vSelect},
	computed: {},	
	methods: {
		download_results(survey_id) {
			const _that = this;
			this.$vs.loading();
			console.log("downloading survey results ");
			if (survey_id > 0) {
				SurveyService.get_process_timing_link(survey_id)
					.then(function(response) {
						let res_data = response.data;	
						if (res_data.success) {
							let url = `/ops-survey/${res_data.data.token}/result`;
							SurveyService.open_xlsx_link(url);
							_that.$vs.loading.close();
						}else{
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Download results",
								text: "Failed",
								color: "warning",
								timing: 4000,				
							});	
							
						}
				})
				.catch(function(error) {
					console.log(error);
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Download results",
						text: "Failed",
						color: "warning",
						timing: 4000,				
					});	
				});
			}
			_that.$vs.loading.close();
		},
		change_filter(){
			console.log("change filter");
			let employee_selected = this.report_options.employee_id;
			this.process_filters = this.employee_process_lookup[employee_selected].processes;

		},
		reset_filters() {},
		
		status_label(id) {
			return this.statuses[id] !== undefined ? this.statuses[id] : "N/A";
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
						_that.vas_data = this.surveys.response_full || {};
					}else{
						_that.$vs.notify({
							title: "Get client survey",
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
					title: "Get client survey",
					text: "No data returned.",
					color: "warning",
					timing: 4000,				
				});		
			});
		},
		get_ops_survey_data() {
			const _that = this;			
			this.$vs.loading();
			
			SurveyService.get_ops_survey_report(
				this.survey_id,
				this.report_options
			).then((response) => {
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						
						_that.survey_data = data.data.survey_data;
						// this.emp_filters = data.data.employees_array;
						// this.lever_filters = data.data.levers_array;
					}else{
						_that.$vs.notify({
							title: "Get opportunity survey",
							text: "No data returned.",
							color: "warning",
							timing: 4000,				
						});
					}
				}
				_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get opportunity survey",
					text: "No data returned.",
					color: "warning",
					timing: 4000,				
				});
			
			});
		},
		get_survey_results() {
			const _that = this;			
			this.$vs.loading();
			
			SurveyService.get_ops_survey_report(
				this.survey_id,
				this.filters
			).then((response) => {
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						
						_that.survey_data = data.data.survey_data;
						_that.emp_filters = data.data.employees_array;
						_that.lever_filters = data.data.levers_array;
						_that.employee_process_lookup = data.data.employees;
					}else{
							_that.$vs.notify({
								title: "Get survey results",
								text: "No data returned.",
								color: "warning",
								timing: 4000,				
							});	
					}
				}
				_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get survey results",
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
		console.log(this.client_id, " what clininc id");
		console.log(this.survey_id, " what survey id");
		this.vas = SurveyService.vas;
		this.get_survey_results();
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
 