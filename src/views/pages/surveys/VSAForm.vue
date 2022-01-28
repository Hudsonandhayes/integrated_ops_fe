<template>
	<div id="vsa-form">
		<vx-card>
			<form-wizard
				title="Opportunity Survey"
				:subtitle="null"
				finish-button-text="Send Opportunity survey"
			>
				<tab-content title="Process">
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Select Processes</small>
							<v-select
								:options="survey_processes"
								label="process_label"
								v-model="vsa.process_name"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label"
								>Frequency of the process</small
							>
							<v-select
								:options="process_frequency"
								label="name"
								v-model="vsa.process_frequency"
							/>
						</div>
						<div class="vx-col w-1/2">
							<small class="label"
								>Average Volumes per frequency</small
							>
							<vs-input
								v-validate="'required'"
								name="volume_per_frequency"
								class="w-full required"
								type="text"
								v-model="vsa.volume_per_frequency"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Multiplier </small>
							<vs-input
								v-validate="'required'"
								name="multiplier"
								class="w-full required"
								type="text"
								v-model="vsa.multiplier"
							/>
						</div>
					</div>
				</tab-content>
				<tab-content title="Employees">
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Select Employee</small>
							<v-select
								:options="survey_employees"
								label="process_label"
								v-model="vsa.employee_id"
							/>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Total FTE</small>
							<vs-input
								v-validate="'required'"
								name="total_fte"
								class="w-full required"
								type="text"
								v-model="vsa.total_fte"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Departments</small>
							<v-select
								:options="survey_departments"
								label="process_label"
								v-model="vsa.employee_id"
							/>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Sub function</small>
							<v-select
								:options="survey_sub_departments"
								label="process_label"
								v-model="vsa.employee_id"
							/>
						</div>
					</div>
				</tab-content>
				<tab-content title="Summary"> </tab-content>
			</form-wizard>
		</vx-card>
	</div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import SurveyService from "@/services/SurveyService.js";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import vSelect from "vue-select";

export default {
	name: "vsa-form",
	components: {
		FormWizard,
		TabContent,
		vSelect,
	},
	data() {
		return {
			client_id: -1,
			survey_processes: [],
			process_frequency: [
				{
					id: 1,
					name: "Daily",
				},
				{
					id: 2,
					name: "Weekly",
				},
				{
					id: 3,
					name: "Monthly",
				},
				{
					id: 4,
					name: "Quarterly",
				},
				{
					id: 5,
					name: "Yearly",
				},
			],
			vsa: {
				process_name: "",
				process_id: 0,
				process_frequency: "",
				volume_per_frequency: 0,
				multiplier: 0,
			},
		};
	},
	methods: {
		get_survey_processes() {
			const _that = this;
			this.$vs.loading();
			this.survey_processes = [];
			SurveyService.get_survey_processes(this.client_id).then(
				(response) => {
					const output = response.data;
					// console.log(output.data, "get survey data");
					if (output && output !== undefined) {
						if (output.success) {
							this.survey_processes =
								output.data.survey_processes || {};
							this.parent_processes =
								output.data.root_processes || {};
						}else{
							_that.$vs.notify({
								title: "Get survey process",
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
					title: "Get survey process",
					text: "No data returned.",
					color: "warning",
					timing: 4000,				
				});		
			});
		},
	},
	created() {
		this.client_id = this.$route.params.client_id;
		this.get_survey_processes();
	},
};
</script>
<style lang="sass"></style>
