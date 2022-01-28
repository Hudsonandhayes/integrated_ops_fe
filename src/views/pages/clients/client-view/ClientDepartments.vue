<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="Client Departments" class="mb-8">
				<template slot="actions">
					<span class="pr-3">
						<vs-button
							@click="add_department"
							class
							color="primary"
							type="filled"
							>Add Department</vs-button
						>
					</span>
					<vs-button
						@click.native="add_process_departments(client_id)"
						color="primary"
						type="filled"
						>Department Process
					</vs-button>
				</template>
				<div slot="no-body" class="mx-2">
					<vs-table
						search
						max-items="10"
						pagination
						:data="departments"
						stripe
						class="
							table-dark-inverted
							table-autovs-con-loading__container
						"
					>
						>
						<template slot="thead">
							<vs-th>NAME</vs-th>
							<vs-th>SUB-DEPARTMENT</vs-th>
							<vs-th class="float-left">REGION</vs-th>
							<vs-th>STATUS</vs-th>
							<vs-th>ACTION</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr :key="indextr" v-for="(tr, indextr) in data">
								<vs-td :data="tr.department_label">{{
									tr.department_label
								}}</vs-td>

								<vs-td :data="tr.sub_function">{{
									tr.sub_function
								}}</vs-td>

								<vs-td :data="tr.region">{{ tr.region }}</vs-td>

								<vs-td :data="tr.status">
									<vs-chip
										v-if="tr.status == 1"
										transparent
										color="primary"
										>active</vs-chip
									>
									<vs-chip
										v-if="tr.status != 1"
										transparent
										color="danger"
										>deactive</vs-chip
									>
								</vs-td>
								<vs-td>
									<div class="vx-row justify-evenly">
										<vx-tooltip text="Edit" position="left">
											<vs-button
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
												@click="
													edit_department(tr, indextr)
												"
											></vs-button>
										</vx-tooltip>
										<vx-tooltip
											text="Delete"
											position="left"
										>
											<vs-button
												radius
												color="danger"
												type="border"
												icon-pack="feather"
												icon="icon-delete"
												@click="
													confirm_delete_department(
														tr
													)
												"
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
		<!--ADD DEPARTMENT FORM-->
		<vs-popup
			class="vs-con-loading__container clinic-create-popup"
			:title="popup_title"
			:active.sync="popupActive"
			:buttons-hidden="true"
			@close="close_dept_dialog"

		>
			<form
				class="w-1/2vw"
				data-vv-scope="department_form"
				id="department_form"
			>
				<small>* indicates required fields</small>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Department*</small>
							<v-select
								v-validate="'required|min_value:1'"
								:options="department_master_list"
								label="name"
								name="department_id"
								required
								:reduce="(dept) => dept.id"
								v-model="department.department_id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has('department_form.department_id')
								"
							>
								{{
									errors.first(
										"department_form.department_id"
									)
								}}
							</span>
						</div>
						<div class="vx-col w-full">
							<small class="label">Sub-department*</small>
							<vs-input
								v-validate="'required|min:3|alpha'"
								required
								name="sub_function"
								v-model="department.sub_function"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has('department_form.sub_function')
								"
							>
								{{
									errors.first("department_form.sub_function")
								}}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Region*</small>
							<vs-input
								v-validate="'required|alpha'"
								name="region"
								v-model="department.region"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('department_form.region')"
							>
								{{ errors.first("department_form.region") }}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Location*</small>
							<vs-input
								v-validate="'required|min:3|alpha'"
								required
								name="location"
								v-model="department.location"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('department_form.location')"
							>
								{{ errors.first("department_form.location") }}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Country*</small>
							<vs-input
								v-validate="'required|alpha'"
								name="country"
								v-model="department.country"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('department_form.country')"
							>
								{{ errors.first("department_form.country") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Notes</small>
							<vs-textarea v-model="department.notes" />
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Status</small>
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="department.status"
								>Status</vs-checkbox
							>
						</div>

						<div class="vx-col w-1/2"></div>
					</div>

					<!--Save & Reset Button-->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_department($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							@click="reset_department($event)"
							class="ml-4 mt-2"
							type="border"
							color="warning"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
		<vs-popup
			class="
				vs-con-loading__container
				client-process-create-popup
				add_process
			"
			title="Add Process Department"
			:active.sync="client_process_dept_dialog"
			:buttons-hidden="true"
		>
			<form
				data-vv-scope="proces_department_form"
				id="proces_department_form"
			>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Departments</small>
							<v-select
								v-validate="'required'"
								required
								:options="departments"
								label="name"
								name="departments"
								v-model="
									client_department_processes.department_id
								"
								:reduce="(dept) => dept.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has(
										'proces_department_form.departments'
									)
								"
							>
								{{
									errors.first(
										"proces_department_form.departments"
									)
								}}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Process Name</small>
							<v-select
								v-validate="'required'"
								required
								:options="client_processes"
								label="name"
								name="processes"
								multiple
								v-model="
									client_department_processes.process_ids
								"
								:reduce="(process) => process.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								class="w-full required"
							/>

							<span
								class="text-danger text-sm"
								v-show="
									errors.has(
										'proces_department_form.processes'
									)
								"
							>
								{{
									errors.first(
										"proces_department_form.processes"
									)
								}}
							</span>
						</div>
					</div>
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_department_process($event)"
							class="ml-auto mt-2"
							>Save</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
	</div>
</template>

<script>
import vSelect from "vue-select";
import ClientService from "@/services/ClientService.js";
import DepartmentService from "@/services/DepartmentService.js";
import { localize } from "vee-validate";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
	custom: {
		department: {
			required: "The department field is  required",
		},
		sub_function: {
			required: "The sub-department field is  required",
		},
		sub_department: {
			required: "The function field is  required",
		},
		total_fte: {
			required: "total fte is a required field ",
		},
		region: {
			required: "region is a required field",
		},
		location: {
			required: "location is a required field",
		},
		country: {
			required: "country is a required field",
		},
	},
};
// register custom messages
Validator.localize("en", dict);

export default {
	name: "clinic-departments",
	data() {
		return {
			popupActive: false,
			editActive: false,
			client_process_dept_dialog: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			department_id: -1,
			selected_dept_index: -1,
			client_id: 0,
			department: {},
			selected_department: {},
			old_department: {},
			departments: [],
			department_val: {},
			department_master_list: [],
			client_processes: [],
			client_department_processes: {},
			popup_title: "",
		};
	},
	components: {
		"v-select": vSelect,
	},
	methods: {
		get_client_departments() {
			const _that = this;
			this.departments = [];
			this.$vs.loading();

			ClientService.get_client_departments(this.client_id)
				.then((response) => {
					const data = response.data;
					if (data && data !== undefined) {
						if (data.success) {
							_that.departments = data.data || {};
						} else {
							_that.$vs.notify({
								title: "Get client departments",
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
						title: "Get client departments",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		add_department() {
			if (this.department_master_list.length > 0) {
				this.popup_title = "Add Client Department";
				this.department = this.department = Object.assign(
					{},
					ClientService.client_department
				);
				this.selected_department = Object.assign(
					{},
					ClientService.client_department
				);
				this.department.client_id = this.client_id;
				this.selected_dept_index = -1;
				this.popupActive = true;
				this.$validator.reset();
			} else {
				this.$vs.notify({
					title: "Create client departments",
					text: "No deparment master list returned.",
					color: "warning",
					timing: 4000,
				});
			}
		},
		edit_department(dept, index) {
			this.popup_title = "Edit Client Department";
			this.department = dept;
			this.selected_department = Object.assign({}, this.department);
			this.selected_dept_index = index;
			this.old_department = Object.assign({}, this.department);
			this.popupActive = true;
		},
		close_edit_department(){
			if(this.selected_dept_index >= 0){
				this.departments.splice(this.selected_dept_index, 1, this.old_department);
			}

		},
		save_department(e) {
			e.preventDefault();
			try {
				const _that = this;

				this.$validator
					.validateAll("department_form")
					.then((result) => {
						if (result) {
							_that.$vs.loading();
							if (_that.department.id === -1) {
								ClientService.create_client_department(
									_that.department
								)
									.then((response) => {
										const data = response.data;
										let deps = _that.departments;
										if (data && data !== undefined) {
											if (data.success) {
												data.data.name =
													data.data.department_sub_function;
												_that.departments.push(
													data.data
												);

												_that.popupActive = false;
												_that.$vs.loading.close();
												_that.$vs.notify({
													title: "Save successful",
													text: "Client Department has been created!",
													color: "success",
													time: 3000,
													position: "top-right",
												});
											} else {
												_that.$vs.loading.close();
												_that.$vs.notify({
													title: "Save department",
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
											title: "Save department",
											text: "Create department failed.",
											color: "warning",
											timing: 4000,
										});
									});
							} else if (_that.department.id > 0) {
								ClientService.update_client_department(
									_that.department.id,
									_that.department
								)
									.then((response) => {
										const data = response.data;

										if (data && data !== undefined) {
											if (data.success) {
												if (
													_that.departments[
														_that
															.selected_dept_index
													] &&
													_that.departments[
														_that
															.selected_dept_index
													] !== undefined
												) {
													_that.departments.splice(
														_that.selected_dept_index,
														1,
														data.data
													);
												}

												_that.popupActive = false;

												_that.$vs.notify({
													title: "Save successful",
													text: "Client Department has been updated!",
													color: "success",
													time: 3000,
													position: "top-right",
												});
											} else {
												_that.$vs.notify({
													title: "Update department",
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
											title: "Error: Update department",
											text: err.message,
											color: "warning",
											timing: 4000,
										});
									});
							}
						}
					});
			} catch (error) {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Error Update department",
					text: error.message,
					color: "warning",
					timing: 4000,
				});
			}
		},
		get_department_master_list() {
			const _that = this;
			DepartmentService.get_all_departments().then((response) => {
				const data = response.data;
				if (data && data !== undefined) {
					if (data.success) {
						_that.department_master_list = data.data || {};
					}
				}
			});
		},
		reset_department() {
			this.department = Object.assign({}, this.selected_department);
			this.department.client_id = this.client_id;
			this.$validator.reset();
		},
		close_dept_dialog() {
			this.$validator.reset();
			this.departments.splice(this.selected_dept_index, 1, this.old_department);
		},
		confirm_delete_department(department) {
			this.$vs.dialog({
				type: "confirm",
				color: "danger",
				title: `Confirm Department Delete`,
				text: "Please confirm that you wish to delete the Department? Any previous data stored for the department may also get deleted.",
				accept: this.delete_department,
				parameters: department,
			});
		},
		delete_department(department) {
			const _that = this;
			ClientService.delete_client_department(department.id)
				.then((response) => {
					const data = response.data;
					if (data && data != undefined && data.success) {
						department.status = 0;
						_that.$vs.notify({
							title: "Delete successful",
							text: "Client Department has been marked for deletion!",
							color: "success",
							time: 3000,
							position: "top-right",
						});
					} else {
						_that.$vs.notify({
							title: "Delete department",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					}
				})
				.catch((err) => {
					_that.$vs.notify({
						title: "Delete department",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		setSelected(value) {
			this.department.department_id = value.id;
			this.department.department_label = value.name;
		},
		get_client_processes() {
			this.client_processes = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_processes(this.client_id)
				.then((response) => {
					const output = response.data;
					// console.log(output, "client processses");
					if (output && output !== undefined) {
						if (output.success) {
							_that.client_processes = output.data || {};
						} else {
							_that.$vs.notify({
								title: "Get client processes",
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
						title: "Get client process",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		add_process_departments() {
			this.client_department_processes = Object.assign(
				{},
				DepartmentService.client_department_processes
			);
			if (
				this.departments.length > 0 &&
				this.client_processes.length > 0
			) {
				this.client_process_dept_dialog = true;
			} else {
				this.$vs.notify({
					title: "Create process departments",
					text: "Client process or Client departments missing.",
					color: "warning",
					timing: 4000,
				});
			}
		},
		save_department_process(e) {
			e.preventDefault();
			try {
				const _that = this;
				this.$validator
					.validateAll("proces_department_form")
					.then((result) => {
						if (
							_that.client_department_processes.process_ids !=
								undefined &&
							_that.client_department_processes.process_ids
								.length > 0 &&
							_that.client_department_processes.department_id !=
								undefined &&
							_that.client_department_processes.department_id > 0
						) {
							_that.client_department_processes.client_id =
								this.client_id;
							_that.$vs.loading();
							ClientService.create_client_department_processes(
								_that.client_department_processes.department_id,
								_that.client_department_processes
							)
								.then((response) => {
									const output = response.data;
									if (output && output !== undefined) {
										if (output.success) {
											_that.client_process_dept_dialog = false;
											_that.$vs.notify({
												title: "Save successful",
												text: "Department Process info has been saved!",
												color: "success",
												time: 3000,
												position: "top-right",
											});
											_that.get_client_processes();
										} else {
											_that.$vs.notify({
												title: "Save department process",
												text: output.error,
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
										title: "Save department process",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								});
						}
					});
			} catch (error) {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Error saving Department process",
					text: "Invalid data",
					color: "warning",
					timing: 4000,
				});
			}
		},
	},
	created() {
		this.client_id = this.$route.params.id || -1;
		this.department = Object.assign({}, ClientService.client_department);
		this.department.client_id = this.client_id;
		this.get_department_master_list();
		this.get_client_departments();
		this.get_client_processes();
	},
};
</script>

<style scoped></style>
