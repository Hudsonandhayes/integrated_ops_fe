<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="Client Resources" class="mb-8">
				<template slot="actions">
					<vs-button
						@click="add_employee"
						class
						color="primary"
						type="filled"
						>Add Resource</vs-button
					>
					<vs-button
						@click="import_employees"
						class="ml-2"
						color="primary"
						type="filled"
						>Import Resources</vs-button
					>
				</template>
				<div slot="no-body" class="mx-2">
					<vs-table
						search 
						max-items="10"
						pagination	
						:data="employees"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>NAME</vs-th>
							<vs-th>EMAIL</vs-th>
							<vs-th>PHONE</vs-th>
							<vs-th>DEPARTMENT</vs-th>
							<vs-th>SUB FUNCTION</vs-th>
							<vs-th class="float-left">TITLE</vs-th>

							<vs-th>STATUS</vs-th>
							<vs-th>ACTION</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr :key="indextr" v-for="(tr, indextr) in data">
								<vs-td :data="data[indextr].name">
									{{ data[indextr].first_name }}
									{{ data[indextr].last_name }}
								</vs-td>

								<vs-td :data="data[indextr].email">{{
									data[indextr].email
								}}</vs-td>
								<vs-td :data="data[indextr].phone">{{
									data[indextr].phone
								}}</vs-td>

								<vs-td
									:data="data[indextr].client_department_id"
									>{{ data[indextr].department_label }}</vs-td
								>
								<vs-td :data="data[indextr].sub_function">{{
									data[indextr].sub_function
								}}</vs-td>

								<vs-td :data="data[indextr].job_title">{{
									data[indextr].job_title
								}}</vs-td>

								<vs-td :data="data[indextr].status">
									<vs-chip
										v-if="data[indextr].status == 1"
										transparent
										color="primary"
										>active</vs-chip
									>
									<vs-chip
										v-if="data[indextr].status != 1"
										transparent
										color="danger"
										>deactive</vs-chip
									>
								</vs-td>
								<vs-td>
									<div class="vx-row justify-evenly">
										<vx-tooltip text="Edit" position="left">
											<vs-button
												@click="update_employee(tr, indextr)"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
											></vs-button>
										</vx-tooltip>
										<vx-tooltip text="Delete" position="left">										
											<vs-button
												radius
												color="danger"
												type="border"
												icon-pack="feather"
												icon="icon-delete"
												@click="confirm_delete_employee(tr)"
											></vs-button>
										</vx-tooltip>
									</div>
								</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</div>
			</vx-card>
		</div>

		<!--ADD EMPLOYEE FORM-->
		<vs-popup
			class="vs-con-loading__container"
			:title="popup_title"
			:active.sync="popupActive"
			:buttons-hidden="true"
			@close="close_employee_dialog"
		>
			<form
				data-vv-scope="create_employee_form"
				id="create_employee_form"
			>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">First Name*</small>
							<vs-input
								v-validate="'required|alpha_spaces'"
								name="first_name"
								v-model="employee.first_name"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.first_name')">
									{{errors.first("create_employee_form.first_name")}}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Last Name*</small>
							<vs-input
								v-validate="'required|alpha_spaces'"
								name="last_name"
								v-model="employee.last_name"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.last_name')">
									{{errors.first("create_employee_form.last_name")}}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Email*</small>
							<vs-input
								v-validate="'required|email'"
								name="email"
								v-model="employee.email"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.email')">
								{{errors.first("create_employee_form.email")}}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Phone*</small>
							<vs-input
								v-validate="'required|digits:10'"
								name="phone"
								v-model="employee.phone"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.phone')">
								{{errors.first("create_employee_form.phone")}}
							</span>
						</div>

						<div class="vx-col w-1/2">
							<small class="label">Region*</small>
							<vs-input
								v-validate="'required'"
								name="region"
								v-model="employee.region"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.region')">
									{{errors.first("create_employee_form.region")}}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Location*</small>
							<vs-input
								v-validate="'required'"
								name="location"
								v-model="employee.location"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.location')">
								{{errors.first("create_employee_form.location")}}
							</span>
						</div>

						<div class="vx-col w-1/2">
							<small class="label">Country*</small>
							<vs-input
								v-validate="'required'"
								name="country"
								v-model="employee.country"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.country')">
								{{errors.first("create_employee_form.country")}}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Department*</small>
							<v-select
								v-validate="'required'"
								required
								:options="departments"
								name="function"
								label="department_sub_function"
								v-model="employee.client_department_id"
								:reduce="(dept) => dept.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.function')"
								>{{errors.first("create_employee_form.function")}}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Job title*</small>
							<vs-input
								v-validate="'required'"
								name="job_title"
								data-vv-scope="create_employee_form"
								v-model="employee.job_title"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.job_title')">
									{{errors.first("create_employee_form.job_title")}}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/3">
							<small class="label">Job Type*</small>
							<v-select
								v-validate="'required'"
								:options="job_types"
								required
								label="name"
								name="job_type"
								v-model="employee.work_type"
								:reduce="(type) => type.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.job_type')">
									{{errors.first("create_employee_form.job_type")}}
							</span>
						</div>
						<div class="vx-col w-1/3">
							<small class="label">FTE*</small>
							<vs-input
								v-validate="'required|between:0.1,1'"
								name="fte"
								v-model="employee.fte"
								data-vv-scope="create_employee_form"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('create_employee_form.fte')"
								>{{ errors.first("create_employee_form.fte") }}
							</span>
						</div>
						<div class="vx-col w-1/3">
							<small class="label">Std Hrs/Week*</small>
							<vs-input
								v-validate="'required|between:1,48'"
								name="standard_work_hour"
								v-model="employee.standard_work_hour"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm" 
								v-show="errors.has('create_employee_form.standard_work_hour')">
									{{errors.first("create_employee_form.standard_work_hour")}}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Status</small>
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="employee.status"
								>Status</vs-checkbox
							>
						</div>
					</div>

					<!--Save & Reset Button-->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_employee($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							@click="reset_employee"
							class="ml-4 mt-2"
							type="border"
							color="warning"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>

		<!--IMPORT EMPLOYEE FORM-->
		<vs-popup
			class="vs-con-loading__container"
			title="Import Employees"
			:active.sync="popupActive1"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2 ml-10">
							<!-- <vs-input
								class="w-full"
								v-validate="'required'"
								@change="validate_employee_file"
								name="import_employee"
								type="file"
								v-model="employees_upload"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('import_employee')"
							>
								{{ errors.first("import_employee") }}
							</span> -->
							<vs-input
								class="w-full"
								name="document-upload"
								type="file"
								@change="doc_select"
								accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
							/>
						</div>
						<div
							class="flex flex-wrap items-center justify-end ml-5"
						>
							<vs-button
								class="ml-auto"
								v-on:click="load_employee"
								>Upload</vs-button
							>
						</div>

						<div class="vx-col w-1/2">
							<vs-input
								type="hidden"
								name="client_id"
								:value="client_id"
							/>
						</div>
					</div>
				</vx-card>
			</form>
		</vs-popup>
	</div>
</template>

<script>
import ClientService from "@/services/ClientService.js";
import DepartmentService from "@/services/DepartmentService.js";
import vSelect from "vue-select";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
	custom: {
		first_name: {
			required: "First Name is a required field",
			alpha: "Your Name may only contain alphabetic characters",
		},
		last_name: {
			required: "Last Name is is a required field",
			alpha: "Your Name may only contain alphabetic characters",
		},
		email: {
			required: "Email is a required field ",
			email: "The Email should be in proper form ",
		},
		phone: {
			required: "Phone is a required field",
			num: "The Phone field should contain only numbers",
		},
		functions: {
			required: "Department is a required field",
		},
		sub_function: {
			required: "Sub Department is a required field",
		},
		job_title: {
			required: "Job Title is a required field",
		},
		job_type: {
			required: "Job type is a required field",
		},
		standard_work_hour: {
			required: "Std Hrs/Week is a required field",
		},
		fte: {
			required: "FTE is a required field",
		},
	},
};
// register custom messages
Validator.localize("en", dict);

export default {
	name: "ClinicEmployees",
	components: {
		"v-select": vSelect,
	},
	data() {
		return {
			popupActive: false,
			popupActive1: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			employees_upload: "",
			employee_id: -1,
			selected_employee_index: -1,
			client_id: 0,
			employee_uploads: [],
			employee: {},
			old_employee: {},
			employees: [],
			departments: [],
			sub_functions: [],
			job_type_val: {},
			job_types: [
				{ id: 1, name: "Full Time" },
				{ id: 2, name: "Part Time" },
			],
			popup_title: "Create Employee",
			doc_file: null,
		};
	},
	methods: {
		get_client_employees() {
			const _that = this;
			this.employees = [];
			this.$vs.loading();

			ClientService.get_client_employees(this.client_id)
				.then((response) => {
					const output = response.data;
					// console.log(output.data, "employees");
					if (output && output !== undefined) {
						if (output.success) {
							_that.employees = output.data || {};
						} else {
							_that.$vs.notify({
								title: "Get client employees",
								text: "No data returned.",
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
						title: "Get client employess",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		reset_employee() {
			this.employee = Object.assign({}, this.old_employee);
			this.employee.client_id = this.client_id;
			this.$validator.reset();
		},
		close_employee_dialog(){			
			this.$validator.reset();
			if(this.selected_employee_index >= 0) {
				this.employees.splice(this.selected_employee_index, 1, this.old_employee);
			}
		

		},
		import_employees() {
			this.selected_employee_index = -1;
			this.employee_id = -1;
			this.reset_employee();
			this.employee.client_id = this.client_id;
			this.popupActive1 = true;
		},
		add_employee() {
			if (this.departments.length <= 1) {
				this.$vs.notify({
					title: "No department created for this client.",
					text: "Please create a department.",
					color: "warning",
					timing: 4000,
				});
			} else {
				this.popup_title = "Add Resource";
				this.selected_employee_index = -1;
				this.employee_id = -1;
				this.employee = this.empoloyee = Object.assign({},ClientService.client_employee);
				this.employee.client_id = this.client_id;
				this.old_employee = Object.assign({},this.employee);
				this.popupActive = true;
			}
		},
		update_employee(employee, employee_index) {
			this.employee_id = employee.id || -1;
			this.popup_title = "Update Resource";
			this.selected_employee_index = employee_index;
			this.employee = employee;
			this.old_employee = Object.assign({}, employee);
			this.popupActive = true;
		},
		confirm_delete_employee(employee) {
			this.$vs.dialog({
				type: "confirm",
				color: "danger",
				title: `Confirm Resource Delete`,
				text: "Please confirm that you wish to delete the Resource? Any previous data stored for the Resource may also get deleted.",
				accept: this.delete_employee,
				parameters: employee,
			});
		},
		delete_employee(employee) {
			const _that = this;
			this.$vs.loading();
			ClientService.delete_employee(employee.id).then((response) => {

				const data = response.data;
				if (data && data != undefined && data.success) {
					employee.status = 0;
					_that.$vs.notify({
						title: "Delete successful",
						text: "Resource has been updated!",
						color: "success",
						time: 3000,
						position: "top-right",
					});
				} else {
					_that.$vs.notify({
						title: "Delete employee",
						text: "No data retuned.",
						colot: "warning",
						timing: 4000,
					});
				}

				_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Delete employee",
					text: "No data returned.",
					color: "primary",
					timing: 4000,
				});
			});
		},
		save_employee(e) {
			e.preventDefault();
			try {
				const _that = this;

				this.$validator.validateAll("create_employee_form").then((result) => {
					if (result) {

						if (_that.employee.id === -1) {
							_that.$vs.loading();
							ClientService.create_client_employee(_that.employee).then((response) => {
								const output = response.data;

								if (output && output !== undefined) {
									if (output.success) {
										_that.employees.push(output.data);
										_that.popupActive = false;
										_that.$vs.loading.close();
										_that.$vs.notify({
											title: "Save successful",
											text: "Resource has been added!",
											color: "success",
											time: 3000,
											position: "top-right",
										});
									} else {
										_that.$vs.loading.close();
										_that.$vs.notify({
											title: "Create Failed,",
											text: output.error,
											color: "warning",
											fixed: true,
										});
									}
								}
								_that.$vs.loading.close();
							}).catch((error) => {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Create Failed,",
									text: error.message,
									color: "warning",
									fixed: true,
								});
							});
						} else if (_that.employee.id > 0) {
							_that.$vs.loading();
							ClientService.update_employee(_that.employee_id,_that.employee).then((response) =>{

								const output = response.data;

								if (output && output !== undefined) {
									if (output.success) {
										if (_that.employees[_that.selected_employee_index]) {
											_that.employees.splice(_that.selected_employee_index,1,output.data);
										}
										_that.popupActive = false;
											
										_that.$vs.notify({
											title: "Save successful",
											text: "Resource has been updated!",
											color: "success",
											time: 4000,
											position: "top-right",
										});
									} else {
											
										_that.$vs.notify({
											title: "Update Resource",
											text: "Invalid data",
											color: "warning",
											timing: 4000,
										});
									}
									_that.popupActive = false;
								}
								_that.$vs.loading.close();
							}).catch((error) => {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Failed : Update Resource",
									text: error.message,
									color: "warning",
									timing: 4000,
								});
							});
						}
					}
				});
			} catch (error) {
				_that.$vs.loading.close();
				console.log("error during form submission");
			}
		},

		get_departments() {
			this.departments = [];
			const _that = this;
			DepartmentService.get_all_client_departments(this.client_id).then(
				(response) => {
					const data = response.data;
					if (data && data !== undefined) {
						if (data.success) {
							_that.departments = data.data || {};
							_that.departments.unshift({
								id: -1,
								name: "Select All",
								id: -1,
							});
						}
					}
				}
			);
			this.dept_name();
		},
		get_sub_function() {
			this.sub_functions = [];
			const _that = this;
			this.$vs.loading();
			DepartmentService.get_client_sub_functions(this.client_id).then(
				(response) => {
					const data = response.data;
					if (data && data !== undefined) {
						if (data.success) {
							data.data.forEach((sub_function) => {
								_that.sub_functions.unshift({
									id: sub_function.sub_function,
									name: sub_function.sub_function,
								});
							});
						} else {
							_that.$vs.notify({
								title: "Get clients",
								text: data.error,
								color: "warning",
								timing: 4000,
							});
						}
						_that.$vs.loading.close();
					}
				}
			);
		},
		dept_name(id) {
			this.departments.forEach((dept) => {
				// console.log(dept.id, "dept");
				if (dept.id == id) {
					return dept.name;
				}
			});
		},
		doc_select(e) {
			const files = e.target.files;
			// console.log("selected file");
			if (files.length === 0) {
				return;
			}
			this.doc_file = files[0];
		},
		load_employee(e) {
			e.preventDefault();
			try {
				this.$vs.loading();
				this.employee_uploads = [];
				const _that = this;
				if (this.client_id > 0) {
					ClientService.import_client_employee(
						this.client_id,
						this.doc_file
					)
						.then((response) => {
							// console.log("response", response);
							const output = response.data;
							if (output && output !== undefined) {
								if (output.success) {
									_that.get_client_employees();
									//_that.employee_uploads.push(output.data);
									_that.$vs.notify({
										title: "Import completed",
										text: "Employee import has been completed",
										color: "success",
										timing: 4000,
									});
									_that.popupActive1 = false;
								} else {
									_that.$vs.notify({
										title: "Import employee",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								}
							}
							_that.doc_file = null;
							_that.$vs.loading.close();
						})
						.catch((err) => {
							_that.doc_file = null;
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Import employee",
								text: "Failed.Invalid data",
								color: "warning",
								timing: 4000,
							});
						});
				} else {
					_that.doc_file = null;
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Invalid Client",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				}
			} catch (error) {
				_that.$vs.loading.close();
				console.log("error while uploading form");
			}
		},
		dept_selected(value) {
			// console.log("selected dept " + value);
		},
	},
	created() {
		this.client_id = this.$route.params.id || -1;
		this.employee.client_id = this.$route.params.id || -1;
		// console.log(this.employee.client_id, "client id");
		this.get_client_employees();
		this.get_departments();
		this.get_sub_function();
	},
};
</script>

<style>
.con-vs-popup .vs-popup {
	width: auto !important;
}
</style>
