<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="Assessment Departments">
				<template slot="actions">
					<vs-button
						@click="create_survey_department"
						class
						color="primary"
						type="filled"
						>Add Department</vs-button
					>
				</template>
				<div slot="no-body" class="mt-4">
					<vs-table
						max-items="10"
						pagination
						:data="survey_departments"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>Department</vs-th>
							<vs-th>FTE</vs-th>
							<vs-th>Location</vs-th>
							<vs-th>Region</vs-th>
							<vs-th>Notes</vs-th>
							<vs-th>Status</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								:data="tr"
								class="cursor-pointer"
							>
								<vs-td>{{
									departments[tr.department_id - 1].name
								}}</vs-td>
								<vs-td>
									{{ tr.total_fte }}
								</vs-td>
								<vs-td>
									{{ tr.location }}
								</vs-td>
								<vs-td>
									{{ tr.region }}
								</vs-td>
								<vs-td>
									{{ tr.notes }}
								</vs-td>

								<vs-td>
									<vs-chip
										v-if="tr.status == 0"
										transparent
										color="warning"
										>disabled</vs-chip
									>
									<vs-chip
										v-if="tr.status == 1"
										transparent
										color="primary"
										>enabled</vs-chip
									>
								</vs-td>
								<vs-td>
									<vx-tooltip text="Edit" position="left">
										<vs-button
											@click="
												update_survey_department(
													tr,
													tr.id
												)
											"
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-edit"
										></vs-button>
									</vx-tooltip>
									<vx-tooltip text="Delete" position="left">
										<vs-button
											@click="
												delete_survey_department(tr.id)
											"
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-delete"
										></vs-button>
									</vx-tooltip>
								</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</div>
			</vx-card>
		</div>
		<vs-popup
			class="vs-con-loading__container survey-department-create-popup"
			title="Add Departments"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label"> Department</small>
							<v-select
								label
								name="department_id"
								v-validate="'required'"
								required
								:closeOnSelect="false"
								:options="departments"
								:reduce="(department) => department.id"
								v-model="survey_department.department_id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('department_id')"
								>{{ errors.first("department_id") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Sub function</small>
							<!-- <v-select
								label="sub_function"
								:closeOnSelect="false"
								:options="sub_departments"
								v-model="survey_department.sub_function"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/><br /> -->
							<vs-input
								v-model="survey_department.sub_function"
								name="Sub function"
								v-validate="'required'"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('Sub function')"
								>{{ errors.first("Sub function") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label"> Total FTE</small>
							<vs-input
								v-validate="'required'"
								name="total FTE"
								label
								v-model="survey_department.total_fte"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('total FTE')"
								>{{ errors.first("total FTE") }}</span
							>
						</div>

						<div class="vx-col w-1/2">
							<small class="label">Region</small>
							<v-select
								v-validate="'required'"
								label="name"
								name="region"
								:closeOnSelect="false"
								:options="region"
								v-model="survey_department.region"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('region')"
								>{{ errors.first("region") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Country</small>

							<vs-input
								v-validate="'required'"
								name="country"
								v-model="survey_department.country"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('country')"
								>{{ errors.first("country") }}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Location</small>
							<vs-input
								v-validate="'required'"
								name="location"
								v-model="survey_department.location"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('location')"
								>{{ errors.first("location") }}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Notes</small>
							<vs-textarea
								height="100px"
								v-model="survey_department.notes"
							/>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="survey_department.status"
								>Status</vs-checkbox
							>
						</div>
						<!-- <div class="vx-col w-1/2">
							<vs-input
								type="hidden"
								name="client_id"
								:value="client_id"
							/>
						</div> -->
					</div>

					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_department($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							type="border"
							color="warning"
							@click="reset_department($event)"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
	</div>
</template>

<script>
import DepartmentService from "@/services/DepartmentService.js";
import SurveyService from "@/services/SurveyService.js";
import vSelect from "vue-select";
export default {
	name: "DepartmentList",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			departments: [],
			survey_departments: [],
			survey_department_id: -1,
			selected_department_index: -1,
			client_id: -1,
			survey_department: {
				department_id: 0,
				id: 0,
				name: "",
				status: 0,
				sub_function: "",
				region: "",
				location: "",
				country: "",
				total_fte: 0,
				notes: "",
			},
			region: ["EMEA", "APAC", "N/A"],
		};
	},
	components: {
		"v-select": vSelect,
	},
	methods: {
		save_department(e) {
			e.preventDefault();
			const _that = this;
			this.$vs.loading();
			this.$validator.validateAll().then((result) => {
				if (result) {
					if (this.survey_department_id === -1) {
						SurveyService.create_survey_department(
							this.client_id,
							this.survey_department
						).then((response) => {
							const output = response.data;
							console.log(output, "survey department");
							if (output && output !== undefined) {
								if (output.success) {
									_that.survey_departments.push(output.data);
									_that.popupActive = false;
								}else{
									_that.$vs.notify({
										title: "Create survey department",
										text: "Invalid data",
										color: "warning",
										timing: 4000,				
									});
								}
							}
						}).catch((err) => {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Create survey department",
								text: "Invalid data",
								color: "warning",
								timing: 4000,				
							});		
						});
					} else if (this.survey_department_id > 0) {
						SurveyService.update_survey_department(
							this.survey_department_id,
							this.survey_department
						).then((response) => {
							const data = response.data;
							// console.log(data, "edit survey dept data");
							if (data && data !== undefined) {
								if (data.success) {
									if (
										_that.survey_departments[
											_that.selected_department_index
										]
									) {
										_that.survey_departments[
											_that.selected_department_index
										] = data.data;
										// console.log("dept index");
									}
									_that.popupActive = false;
								}else{
									_that.$vs.notify({
										title: "Update department",
										text: "Invalid data.",
										color: "warning",
										timing: 4000,				
									});
								}
							}
						}).catch((err) => {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Update department",
								text: "Invalid data.",
								color: "warning",
								timing: 4000,				
							});		
						});
					}
				}
				_that.$vs.loading.close();
			});
		},

		create_survey_department() {
			this.selected_department_index = -1;
			this.survey_department_id = -1;
			this.survey_department;
			this.popupActive = true;
		},
		update_survey_department(item, index) {
			this.survey_department_id = item.id || -1;
			// console.log(this.survey_department_id, "updated survey department");
			this.selected_department_index = index;
			this.survey_department = item;
			this.popupActive = true;
		},
		delete_survey_department(index) {
			const _that = this;
			this.$vs.loading();
			SurveyService.delete_survey_department(index).then((response) => {
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						_that.get_survey_departments();
					}else{
						_that.$vs.notify({
							title: "Delete survey department",
							text: "Failed",
							color: "warning",
							timing: 4000,				
						});	
					}
				}
				_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Delete survey department",
					text: "Failed.",
					color: "warning",
					timing: 4000,				
				});		
			});
		},
		get_survey_departments() {
			const _that = this;
			this.survey_departments = [];
			this.$vs.loading();
			SurveyService.get_survey_departments(this.client_id).then(
				(response) => {
					const data = response.data;
					// console.log(data, "departments list");
					if (data && data !== undefined) {
						if (data.success) {
							_that.survey_departments = data.data || {};
						}else{
							_that.$vs.notify({
								title: "Get survey departments",
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
					title: "Get survey departments",
					text: "No data returned",
					color: "warning",
					timing: 4000,				
				});		
			});
		},
		get_departments() {
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
		this.client_id = this.$route.params.client_id || -1;
		this.get_departments();
		this.get_survey_departments();
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
