<template>
	<div class="vx-row">
		<div class="vx-col w-full">
			<vx-card title="Opportunity Pipeline">
				<template slot="actions">
					<!--          <vs-button  @click="popupActive=true"  class="ml-auto mt-3 mb-3  cursor-pointer btn-sm" color="primary" type="border" icon-pack="feather" icon="icon-plus"-->
					<!--          >Add User </vs-button>-->
					<vs-button
						@click="create_opportunity_pipeline"
						class
						color="primary"
						type="filled"
						>Add Opportunity</vs-button
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
						<template slot="thead">
							<vs-th>Opportunity Name</vs-th>
							<vs-th>Opportunity Description</vs-th>
							<vs-th>Estimate FTE Saving</vs-th>
							<vs-th>Improvement Lever</vs-th>
							<vs-th>Status</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								@click.native="
									update_opportunity(data[indextr], indextr)
								"
								class="cursor-pointer"
							>
								<vs-td :data="data[indextr].name">{{
									data[indextr].name
								}}</vs-td>
								<vs-td :data="data[indextr].description">{{
									data[indextr].description
								}}</vs-td>
								<vs-td
									:data="data[indextr].estimated_fte_saving"
									>{{
										data[indextr].estimated_fte_saving
									}}</vs-td
								>
								<vs-td
									:data="data[indextr].automation_capability"
									>{{
										opportunity_labels[
											data[indextr].automation_capability
										] !== undefined
											? opportunity_labels[
													data[indextr]
														.automation_capability
											  ]
											: data[indextr]
													.automation_capability
									}}</vs-td
								>

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
												update_opportunity(
													data[indextr],
													indextr
												)
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
			class="vs-con-loading__container clinic-create-popup"
			title="Opportunity"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<form id="opportunity_form">
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name</small>
							<vs-input
								v-validate="'required'"
								name="name"
								v-model="opportunity.name"
								class="w-full required"
								
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('name')"
								>{{ errors.first("name") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-validate="'required'"
								v-model="opportunity.description"
								name="description"
								height="100px"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('discription')"
								>{{ errors.first("discription") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						
						<div class="vx-col w-1/2">
							<small class="label">Estimated FTE Saving</small>
							<vs-input
								name="estimated_fte_saving"
								v-validate="'required'"
								v-model="opportunity.estimated_fte_saving"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('estimated_fte_saving')"
								>{{ errors.first("estimated_fte_saving") }}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Improvement Lever</small>
							<v-select
								v-validate="'required'"
								:options="opportunity_options"
								label="short_name"
								v-model="opportunity.estimated_fte_saving"
								:value="$store.myValue"
								@input="setDepartment"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('function')"
								>{{ errors.first("function") }}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="opportunity.status"
								>Status</vs-checkbox
							>
						</div>
					</div>
					<!-- Save & Reset Button -->
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
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
	</div>
</template>

<script>
import OpportunityPipelineService from "@/services/OpportunityPipelineService.js";
import ConfigService from "@/services/ConfigService.js";
import vSelect from "vue-select";

export default {
	name: "OpportunityPipeline",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			opportunities: [],
			opportunity_pipeline_id: -1,
			selected_index: -1,
			opportunity: OpportunityPipelineService.opportunity,
			opportunity_options: ConfigService.opportunities,
			opportunity_labels: [],
		};
	},
	components: {
		vSelect,
	},
	methods: {
		create_opportunity_pipeline() {
			this.popupActive = true;
		},
		// save_opportunity(e) {
		// 	e.preventDefault();

		// 	if (this.opportunity_id === -1) {
		// 		ProcessService.create_opportunity(this.opportunity).then(
		// 			(response) => {
		// 				const data = response.data;

		// 				const _that = this;
		// 				if (data && data !== undefined) {
		// 					if (data.success) {
		// 						this.opportunities.push(data.opportunity);
		// 						_that.popupActive = false;
		// 					}
		// 				}
		// 			}
		// 		);
		// 	} else if (this.opportunity_id > 0) {
		// 		ProcessService.update_opportunity(
		// 			this.opportunity_id,
		// 			this.opportunity
		// 		).then((response) => {
		// 			const data = response.data;
		// 			const _that = this;
		// 			if (data && data !== undefined) {
		// 				if (data.success) {
		// 					if (
		// 						_that.opportunities[
		// 							_that.selected_opportunity_index
		// 						]
		// 					) {
		// 						_that.opportunities[
		// 							_that.selected_opportunity_index
		// 						] = data.opportunity;
		// 					}
		// 					_that.popupActive = false;
		// 				}
		// 			}
		// 		});
		// 	}
		// },
		save_opportunity(e) {
			e.preventDefault();
			try {
				this.$validator.validateAll().then((result) => {
					if (result) {
						if (this.opportunity_id == -1) {
							ProcessService.create_opportunity(this.opportunity).then(
								(response) => {
									const output = response.data;
									const _that = this;
									console.log(output, "add opportunity ");
									if (output && output !== undefined) {
										if (output.success) {
											this.opportunity.push(output.data);
											_that.popupActive = false;
										}
									}
								}
							);
						} else if (this.opportunity_id > 0) {
							console.log("opportunity id greater than -1");
							ProcessService.update_opportunity(
								this.opportunityy_id,
								this.opportunityy
							).then((response) => {
								const output = response.data;
								const _that = this;
								console.log(
									_that.selected_opportunityy_index,
									"opportunityy index"
								);
								if (output && output !== undefined) {
									if (output.success) {
										if (
											_that.opportunities[
												_that.selected_opportunityye_index
											]
										) {
											_that.opportunities[
												_that.selected_opportunityy_index
											] = output.opportunityy;
										}
										_that.popupActive = false;
									}
								}
								console.log(output, "edit opportunityy data");
							});
						}

						// if (result) {
						// 	console.log("Validate all");
						// }
					}
				});
			} catch (error) {
				console.log("error during form submission");
			}
			
		},
		reset_opportunity() {
			this.opportunity = OpportunityPipelineService.opportunity;
		},
		create_opportunity() {
			this.selected_opportunity_index = -1;
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
			this.opportunities = OpportunityPipelineService.opportunities;
			// ProcessService.get_all_opportunityes().then((response) => {
			// 	const data = response.data;
			// 	const _that = this;
			// 	if (data && data !== undefined) {
			// 		if (data.success) {
			// 			this.opportunities = data.data || {};
			// 		}
			// 	}
			// });
		},
	},
	created() {
		this.get_opportunities();
		this.opportunity_labels = ConfigService.get_opportunity_labels();
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
