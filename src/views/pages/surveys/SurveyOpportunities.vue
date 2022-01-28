<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="Assessment Opportunities">
				<template slot="actions">
					<vs-button
						@click="create_opportunity"
						class
						color="primary"
						type="filled"
						>Add Opportunities</vs-button
					>
				</template>
				<div slot="no-body" class="mt-4">
					<vs-table
						max-items="10"
						pagination
						:data="opportunities"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>Department</vs-th>
							<vs-th>Description</vs-th>
							<vs-th>Status</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								@click.native="
									update_department(data[indextr], indextr)
								"
								class="cursor-pointer"
							>
								<vs-td :data="data[indextr].description">{{
									data[indextr].description
								}}</vs-td>

								<vs-td :data="data[indextr].status">
									<vs-chip
										v-if="data[indextr].status === 0"
										transparent
										color="warning"
										>disabled</vs-chip
									>
									<vs-chip
										v-if="data[indextr].status === 1"
										transparent
										color="primary"
										>enabled</vs-chip
									>
								</vs-td>
								<vs-td>
									<vx-tooltip text="Edit" position="left">
										<vs-button
											@click="
												on_survey_view(data[indextr].id)
											"
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
			class="vs-con-loading__container survey-opportunity-create-popup"
			title="Add Opportunities"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label"> Name</small>
							<vs-input
								v-validate="'required|min:3'"
								name="name"
								v-model="opportunity.name"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('name')"
								>{{ errors.first("name") }}</span
							>
						</div>
						<div class="vx-col w-1/2">
							<small class="label"> Description</small>
							<vs-input
								v-validate="'required|min:3'"
								name="description"
								v-model="opportunity.description"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('description')"
								>{{ errors.first("description") }}</span
							>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="opportunity.status"
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
							@click="save_opportunity($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							type="border"
							color="warning"
							@click="reset_opportunity($event)"
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
	name: "survey-opportunities",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			opportunities: [],
			opportunity_id: -1,
			selected_opportunity_index: -1,
			opportunity: {
				name: "",
				status: 0,
				description: "",
			},
		};
	},
	components: {},
	methods: {
		on_survey_view(id) {
			this.$router.push({ path: `/pages/survey/${id}` });
		},
		save_opportunity(e) {
			e.preventDefault();
			this.$validator.validateAll().then((result) => {
				if (result) {
					console.log("Validated");
				}
			});

			// if (this.department_id === -1) {
			// 	DepartmentService.create_department(this.department).then(
			// 		response => {
			// 			const data = response.data;

			// 			const _that = this;
			// 			if (data && data !== undefined) {
			// 				if (data.success) {
			// 					this.departments.push(data.department);
			// 					_that.popupActive = false;
			// 				}
			// 			}
			// 		}
			// 	);
			// } else if (this.department_id > 0) {
			// 	DepartmentService.update_department(
			// 		this.department_id,
			// 		this.department
			// 	).then(response => {
			// 		const data = response.data;
			// 		const _that = this;
			// 		if (data && data !== undefined) {
			// 			if (data.success) {
			// 				if (
			// 					_that.departments[
			// 						_that.selected_department_index
			// 					]
			// 				) {
			// 					_that.departments[
			// 						_that.selected_department_index
			// 					] = data.department;
			// 				}
			// 				_that.popupActive = false;
			// 			}
			// 		}
			// 	});
			// }
		},
		reset_opportunity() {
			this.opportunity.name = "";
			this.opportunity.description = "";
			this.opportunity.notes = "";
			this.opportunity.status = 0;
		},
		create_opportunity() {
			this.selected_department_index = -1;
			this.opportunity_id = -1;
			this.reset_opportunity();
			this.popupActive = true;
		},
		update_opportunity(opportunity, opportunity_index) {
			this.opportunity_id = opportunity.id || -1;
			this.selected_opportunity_index = opportunity_index;
			this.opportunity = opportunity;
			this.popupActive = true;
		},
		get_opportunities() {
			// this.departments = [];
			// DepartmentService.get_all_departments().then(response => {
			// 	const data = response.data;
			// 	const _that = this;
			// 	if (data && data !== undefined) {
			// 		if (data.success) {
			// 			this.departments = data.data || {};
			// 		}
			// 	}
			// });
		},
	},
	created() {
		this.get_opportunities();
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
