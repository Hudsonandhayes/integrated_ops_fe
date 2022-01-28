<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vs-breadcrumb class="ml-4" :items="breadcrumbs"></vs-breadcrumb>

			<vx-card title="Process Master List">
				<template slot="actions">
					<vs-button
						@click="create_process"
						class
						color="primary"
						type="filled"
						>Create Process</vs-button
					>
				</template>
				<div slot="no-body" class="mx-2">
					<vs-table 
						search 
						max-items="10"
						pagination
						:data="processes"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						<template slot="thead">
							<vs-th>Name</vs-th>
							<vs-th>Description</vs-th>
							<vs-th>Status</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template slot-scope="{ data }" :style="[{transitionDelay: (indextr * 0.1) + 's'}]">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								@click.native="update_process(tr, indextr)"
								class="cursor-pointer"
							>
								<vs-td :data="tr.name">{{tr.name}}</vs-td>

								<vs-td :data="tr.description">{{tr.description}}</vs-td>

								<vs-td :data="tr.status">
									<vs-chip
										v-if="tr.status === 0 || tr.status === false"
										transparent
										color="warning"
										>disabled</vs-chip
									>
									<vs-chip
										v-if="tr.status === 1 || tr.status === true"
										transparent
										color="primary"
										>enabled</vs-chip
									>
								</vs-td>
								<vs-td>
									<vx-tooltip text="Edit" position="left">
										<vs-button
											@click="update_process(tr,indextr)"
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
			title="Create Process"
			:active.sync="popupActive"
			:buttons-hidden="true"
			@close="close_edit_process_dialog"
		>
			<form id="process_form">
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name</small>
							<vs-input
								v-validate="'required|min:2'"
								placeholder="Process Name"
								name="name"
								v-model="process.name"
								class="w-full required"
							/>
							<span
								v-show="errors.has('name')"
								class="text-danger text-sm"
								>{{ errors.first("name") }}</span
							>
						</div>
					</div>					
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-validate="'required'"
								v-model="process.description"
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
								v-model="process.status"
								>Status</vs-checkbox
							>
						</div>
					</div>
					<!-- Save & Reset Button -->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_process($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							type="border"
							color="warning"
							@click="reset_process"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
	</div>
</template>

<script>
import ProcessService from "@/services/ProcessService.js";
export default {
	name: "ProcessList",
	data() {
		return {
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{ title: "Process List", url: `/pages/process`,active: true }
			],
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			processes: [],
			process_id: -1,
			selected_process_index: -1,
			selected_process:{},
			process: {},
		};
	},
	components: {},
	methods: {
		onClickClinicEdit(id) {
			this.$router.push({ path: `/pages/client/${id}` });
		},
		save_process(e) {
			e.preventDefault();
		 
			const _that = this;
			this.$validator.validateAll().then((result) => {
				if (result) {
					_that.$vs.loading();
					if (_that.process_id === -1) {
						ProcessService.create_master_process(_that.process).then((response) => {
							const data = response.data;
							console.log(response, "process");
							if (data && data !== undefined) {
								if (data.success) {
									_that.processes.push(data.data);
									_that.popupActive = false;
									_that.$vs.loading.close();
									_that.$vs.notify({
										position: "top-right",
										title: "Create department",
										text: "Saved successfully",
										color: "success",
										timing: 4000,
									});
								}else{
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Create Process",
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
								title: "Create Process",
								text: "Failed.Invalid data",
								color: "warning",
								timing: 4000,		
							});		
						});
					} else if (_that.process_id > 0) {
						// console.log(_that.process, "process");
						ProcessService.update_master_process(_that.process_id,_that.process).then((response) => {

							const data = response.data;
					 
							if (data && data !== undefined) {
								if (data.success) {
									// console.log(data.data, "edit data");
									if (_that.processes[_that.selected_process_index]) {

										_that.processes.splice(_that.selected_process_index,1, data.data);
									}
									_that.popupActive = false;
									 
									_that.$vs.notify({
										position: "top-right",
										title: "Update department",
										text: "Saved successfully",
										color: "success",
										timing: 4000,
									});
								}else{
									 
									_that.$vs.notify({
										title: "Update Process",
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
								title: "Update Process",
								text: "Failed.Invalid data",
								color: "warning",
								timing: 4000,		
							});		
						});
					}
				} else {
					console.log("form validation error");
				}
			});
		},
		reset_process() {
			this.process = Object.assign({},this.selected_process);
			this.$validator.reset();
		},
		create_process() {
			this.$validator.reset();
			this.process = Object.assign({},ProcessService.process);
			this.selected_process_index = -1;
			this.process_id = -1;
			this.selected_process = Object.assign({},this.process);
			this.popupActive = true;
			//this.resetInput();
		},
		update_process(process, process_index) {
			this.$validator.reset();
			this.process_id = process.id || -1;
			this.selected_process_index = process_index;
			this.process = process;
			this.selected_process = Object.assign({},process);
			this.popupActive = true;
		},
		close_edit_process_dialog(){
			console.log(this.selected_process);
			if(this.selected_process_index >= 0){
				this.processes.splice(this.selected_process_index,1,this.selected_process);
			}

		},
		get_processes() {
			const _that = this;
			this.processes = [];
			this.$vs.loading();
			
			ProcessService.get_all_processes().then((response) => {
				const data = response.data;
				
				if (data && data !== undefined) {
					if (data.success) {
						_that.processes = data.data || {};
						_that.$vs.loading.close();
					}else{
						_that.$vs.notify({
							title: "Get client processes.",
							text: "No data returned.",
							color: "warning",
							timing: 4000,	
						});	
						_that.$vs.loading.close();
					}
					
				}
				
				
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get client processes.",
					text: "No data returned.",
					color: "warning",
					timing: 4000,	
				});	
				
			});
		},
	},
	created() {
		this.get_processes();
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
