<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vs-breadcrumb class="ml-4" :items="breadcrumbs"></vs-breadcrumb>
			<vx-card title="Department Master List">
				<template slot="actions">
					<!--          <vs-button  @click="popupActive=true"  class="ml-auto mt-3 mb-3  cursor-pointer btn-sm" color="primary" type="border" icon-pack="feather" icon="icon-plus"-->
					<!--          >Add User </vs-button>-->
					<vs-button
						@click="create_department"
						class
						color="primary"
						type="filled"
						>Create Department</vs-button
					>
				</template>
				<div slot="no-body" class="mx-2">
					<vs-table
					    search 
						max-items="10"
						pagination
						:data="departments"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>Name</vs-th>
							<vs-th>Description</vs-th>
							<vs-th>Status</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								@click.native="update_department(tr, indextr)"
								class="cursor-pointer"
							>
								<vs-td :data="tr.name">
									{{tr.name}}
								</vs-td>

								<vs-td :data="tr.description">
									{{tr.description}}
								</vs-td>

								<vs-td :data="tr.status">
									<vs-chip
										v-if="tr.status == 0 || tr.status === false"
										transparent
										color="warning"
										>disabled</vs-chip
									>
									<vs-chip
										v-if="tr.status == 1 || tr.status === true"
										transparent
										color="primary"
										>enabled</vs-chip
									>
								</vs-td>
								<vs-td>
									<vx-tooltip text="Edit" position="left">
										<vs-button
											@click="update_department(tr,indextr)"
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-edit"
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
			class="vs-con-loading__container clinic-create-popup"
			:title="create_department_dialog_title"
			:active.sync="popupActive"
			:buttons-hidden="true"
			@close="close_edit_department_dialog"
		>
			<form id="department_form">
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name</small>
							<vs-input
								name="name"
								v-validate="'required|min:3'"
								v-model="department.name"
								class="w-full required"
							/>
							<span class="text-danger text-sm" v-show="errors.has('name')">
								{{ errors.first("name") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-model="department.description"
								v-validate="'required'"
								name="description"
								height="100px"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('description')"
								>{{ errors.first("description") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="department.status"
								>Status</vs-checkbox
							>
						</div>
					</div>
					<!-- Save & Reset Button -->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_department($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							@click="reset_department()"
							class="ml-4 mt-2"
							type="border"
							color="warning"
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
export default {
	name: "department-list",
	data() {
		return {
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{ title: "Department List", url: `/pages/departments`,active: true }
			],
			create_department_dialog_title: "Create Department",
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			departments: [],
			department_id: -1,
			selected_department_index: -1,
			department: DepartmentService.department,
			selected_dept:{},
		};
	},
	components: {},
	methods: {
		onClickClinicEdit(id) {
			this.$router.push({ path: `/pages/client/${id}` });
		},
		save_department(e) {
			e.preventDefault();
			// console.log("save dept");
			
			try {
				const _that = this;
				this.$validator.validateAll().then((result) => {
					
					if (result) {

					// console.log("result is positive");
					// console.log(this.department, "department");
					_that.$vs.loading();
					if (_that.department_id === -1) {
						DepartmentService.create_department(_that.department).then((response) => {
							const data = response.data;

							if (data && data !== undefined) {
								if (data.success) {
									_that.departments.push(data.data);
									_that.popupActive = false;
									 
									_that.$vs.notify({
										position: "top-right",
										title: "Create department",
										text: "Saved successfully",
										color: "success",
										timing: 4000,
									});
								}else{
									 
									_that.$vs.notify({
										title: "Create department",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});	
								}
							}
							_that.$vs.loading.close();
						}).catch((err) => {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Create department",
								text: "Failed.Invalid data",
								color: "warning",
								timing: 4000,		
							});		
						});
					} else if (_that.department_id > 0) {
						_that.$vs.loading();
						DepartmentService.update_department(_that.department_id,_that.department).then((response) => {
							const data = response.data;
								
							if (data && data !== undefined) {
								if (data.success) {
									if (_that.departments[_that.selected_department_index]) {
										_that.departments.splice(_that.selected_department_index,1,data.data);										
									}
									_that.popupActive = false;
									_that.$vs.loading.close();
									_that.$vs.notify({
										position: "top-right",
										title: "Update department",
										text: "Saved successfully",
										color: "success",
										timing: 4000,
									});
								}else{
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Update department",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});	
								}
							}
						_that.$vs.loading.close();
						}).catch((err) => {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Update department",
								text: "Failed.Invalid data",
								color: "warning",
								timing: 4000,		
							});		
						});
					}
				}
			});
			}catch (error) {
				console.log("error during form submission");
			}
		},
		reset_department() {
			this.department = Object.assign({},this.selected_dept);											
			this.$validator.reset();
		},
		create_department() {
			this.department = Object.assign({}, DepartmentService.department);	
			this.selected_dept = Object.assign({}, DepartmentService.department);	
			this.selected_department_index = -1;
			this.department_id = -1;
			this.reset_department();
			this.popupActive = true;
		},
		update_department(department, department_index) {
			this.department_id = department.id || -1;
			this.create_department_dialog_title = "Edit department";
			this.selected_department_index = department_index;
			this.selected_dept = Object.assign({},department);	
			this.department = department;
			this.popupActive = true;
		},
		close_edit_department_dialog(){
			if(this.selected_department_index >= 0){
				this.departments.splice(this.selected_department_index, 1, this.selected_dept);
			}
		},
		get_departments() {
			//this.departments = DepartmentService.departments;
			const _that = this;
			this.departments = [];
			this.$vs.loading();
			DepartmentService.get_departments().then((response) => {
				const data = response.data;

				if (data && data !== undefined) {
					if (data.success) {
						_that.departments = data.data || {};
					}else{
						_that.$vs.notify({
							title: "Get departments",
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
					title: "Get departments",
					text: "No data returned.",
					color: "warning",
					timing: 4000,	
				});	
				
			});
		},
	},
	created() {
		this.get_departments();
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
