<template>
	<div class="vx-row">
		<div class="vx-col w-full">
			<vs-breadcrumb class="ml-4" :items="breadcrumbs"></vs-breadcrumb>

			<vx-card title="Opportunities Master List">
				<template slot="actions">
					<vs-button
						@click="create_opportunity"
						class
						color="primary"
						type="filled"
						>Create Opportunity</vs-button
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
							<vs-th>Name</vs-th>
							<vs-th>Short Name</vs-th>
							<vs-th>Description</vs-th>
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
								<vs-td :data="data[indextr].short_name">{{
									data[indextr].short_name
								}}</vs-td>
								<vs-td :data="data[indextr].description">{{
									data[indextr].description
								}}</vs-td>

								<vs-td :data="data[indextr].status">
									<vs-chip
										v-if="data[indextr].status == 0"
										transparent
										color="warning"
										>disabled</vs-chip
									>
									<vs-chip
										v-if="data[indextr].status == 1"
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
							<vs-tr>
								<vs-td>Total</vs-td>
								<vs-td>100</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</div>
			</vx-card>
		</div>
		<vs-popup
			class="vs-con-loading__container clinic-create-popup"
			title="Create Opportunity"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<form id="opportunity_form">
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name</small>
							<vs-input
								v-validate="'alpha_spaces|min:2'"
								placeholder="Process Name"
								name="name"
								v-model="opportunity.name"
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
							<small class="label">Short Name</small>
							<vs-input
								v-validate="'alpha_spaces|min:2'"
								placeholder="Short Name"
								name="short_name"
								v-model="opportunity.short_name"
								class="w-full required"
							/>
							<span
								v-show="errors.has('short_name')"
								class="text-danger text-sm"
								>{{ errors.first("short_name") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description</small>
							<vs-textarea
								v-validate="'alpha_spaces|min:10'"
								v-model="opportunity.description"
								name="description"
								height="100px"
							/>
							<span
								v-show="errors.has('description')"
								class="text-danger text-sm"
							>
								{{ errors.first("description") }}
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
import ProcessService from "@/services/ProcessService.js";
import ConfigService from "@/services/ConfigService.js";
import OpportunityService from "@/services/OpportunityService.js";

export default {
	name: "OpportunityList",
	data() {
		return {
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{ title: "Streams List", url: `/pages/opportunities`,active: true }
			],
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			opportunities: [],
			opportunity_id: -1,
			selected_opportunity_index: -1,
			opportunity: OpportunityService.opportunity,
		};
	},
	components: {},
	methods: {
		on_opportunity_click(id) {
			this.$router.push({ path: `/pages/opportunity/${id}` });
		},
		save_opportunity(e) {
			e.preventDefault();
			this.$validator.validateAll().then((result) => {
				if (result) {
					if (this.opportunity_id === -1) {
						OpportunityService.create_opportunity(
							this.opportunity
						).then((response) => {
							const data = response.data;

							const _that = this;
							if (data && data !== undefined) {
								if (data.success) {
									this.opportunities.push(data.opportunity);
									_that.popupActive = false;
								}
							}
						});
					} else if (this.opportunity_id > 0) {
						OpportunityService.update_opportunity(
							this.opportunity_id,
							this.opportunity
						).then((response) => {
							const data = response.data;
							const _that = this;
							if (data && data !== undefined) {
								if (data.success) {
									if (
										_that.opportunities[
											_that.selected_opportunity_index
										]
									) {
										_that.opportunities[
											_that.selected_opportunity_index
										] = data.opportunity;
									}
									_that.popupActive = false;
								}
							}
						});
					}
				} else {
					console.log("form validation error");
				}
			});
		},
		reset_opportunity() {
			this.opportunity.name = "";
			this.opportunity.short_name = "";
			this.opportunity.description = "";
			this.opportunity.status = 0;
			this.$validator.reset();
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
			//const _that = this;
			//this.opportunities = [];
			//this.$vs.loading();
			// ProcessService.get_all_opportunityes().then((response) => {
			// 	const data = response.data;
			// 	const _that = this;
			// 	if (data && data !== undefined) {
			// 		if (data.success) {
			// 			this.opportunities = data.data || {};
			// 		}
			// 	}
			//_that.$vs.loading.close();
			// }).catch((err) => {
			// 	_that.$vs.loading.close();
			// 	_that.$vs.notify({
			// 		title: "Something wrong with the api call.",
			// 		text: "No data returned.",
			// 		color: "primary",
			// 		fixed: true,
			// 	});	
				
			// });
		},
	},
	created() {
		this.get_opportunities();
	
		const opportunities = localStorage.getItem("opportunities");
		console.log("opportunities ");
		if (opportunities) {
			this.opportunities = JSON.parse(
				localStorage.getItem("opportunities")
			);
		} else {
			this.opportunities = JSON.stringify(
				OpportunityService.opportunities
			);
			localStorage.setItem("opportunities", this.opportunities);
			
		}
		
		
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
