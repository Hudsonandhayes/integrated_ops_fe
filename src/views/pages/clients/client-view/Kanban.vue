<template>
	<div id="kanban-app">
		<div class="flex justify-end mb-5">
			<vs-breadcrumb
				class="flex-grow justify-start"
				:items="breadcrumbs"
			></vs-breadcrumb>
			<vs-button
				@click="export_opportunity"
				class="mr-2"
				color="primary"
				type="filled"
			>
				Download
			</vs-button>
			<vs-button
				@click="add_new_opportunity"
				class="mr-2"
				color="primary"
				type="filled"
			>
				New Opportunity
			</vs-button>
			<v-select
				v-if="current_item_view == 'item-list-view'"
				:options="stage_select"
				v-model="sel_col_select"
				label="name"
				:reduce="(col) => col.id"
				@input="changed_col_filter"
				:dir="$vs.rtl ? 'rtl' : 'ltr'"
				class="mr-2 w-1/2"
			/>
			<feather-icon
				icon="GridIcon"
				@click="switch_to_view(1)"
				class="
					p-2
					shadow-drop
					rounded-lg
					d-theme-dark-bg
					cursor-pointer
				"
				:svgClasses="{
					'text-primary stroke-current':
						current_item_view == 'item-grid-view',
				}"
			/>
			<feather-icon
				icon="ListIcon"
				@click="switch_to_view(2)"
				class="
					p-2
					ml-4
					shadow-drop
					rounded-lg
					d-theme-dark-bg
					cursor-pointer
					hidden
					sm:inline-flex
				"
				:svgClasses="{
					'text-primary stroke-current':
						current_item_view == 'item-list-view',
				}"
			/>

			<vs-button
				v-if="show_board_update"
				@click="update_process_tree"
				color="primary"
				type="filled"
			>
				Update Board
			</vs-button>
		</div>
		<div id="kanban-content">
			<template v-if="current_item_view == 'item-grid-view'">
				<div class="flex justify-start">
					<div
						class="
							min-h-screen
							flex
							px-4
							pb-8
							items-start
							overflow-x-scroll
						"
					>
						<div
							v-for="column in columns"
							:key="column.title_id"
							:data-id="column.title_id"
							class="
								rounded
								bg-grey-light
								flex-no-shrink
								w-64
								p-2
								mr-3
							"
						>
							<div class="text-center py-1">
								<h3 class="text-base font-bold text-gray-700">
									{{ column.title }}
								</h3>
							</div>

							<!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
							<draggable
								:list="column.tasks"
								:animation="200"
								ghost-class="ghost-card"
								:data-col="column.title_id"
								group="tasks"
								:empty-insert-threshold="100"
								@end="drop_end"
							>
								<!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
								<kanban-card
									v-for="task in column.tasks"
									:key="task.id"
									:task="task"
									class="mt-3 cursor-move"
									:data-id="task.id"
									v-on:on_card_edit="on_card_edit"
								></kanban-card>
								<!-- </transition-group> -->
							</draggable>
						</div>
					</div>
				</div>
			</template>
			<template v-if="current_item_view == 'item-list-view'">
				<vx-card
					title="List of Opportunities"
					class="flex flex-col bg-white justify-center mt-3"
				>
					<vs-table
						search
						max-items="10"
						pagination
						:data="opportunity_list"
					>
						<template slot="thead">
							<vs-th sort-key="name">Name</vs-th>
							<vs-th sort-key="opportunity_stage_id">Phase</vs-th>
							<vs-th sort-key="lever_name">Lever</vs-th>
							<vs-th sort-key="overall_goal">Overall Goal</vs-th>
							<vs-th sort-key="owner">Process Owner</vs-th>
							<vs-th sort-key="applications_impacted"
								>Applications Impacted</vs-th
							>
							<vs-th sort-key="annual_transaction_count"
								>Annual Transcation Count</vs-th
							>
							<vs-th sort-key="process_time">Process Time</vs-th>
							<vs-th sort-key="pc_saving">Saving</vs-th>
							<vs-th>Action</vs-th>
						</template>
						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								class="cursor-pointer"
								@click.native="update_opportunity(tr, indextr)"
							>
								<vs-td :data="tr.name">{{ tr.name }}</vs-td>
								<vs-td :data="tr.opportunity_stage_id">
									{{
										get_stage_label(tr.opportunity_stage_id)
									}}
								</vs-td>
								<vs-td :data="tr.lever_name">{{
									tr.lever_name
								}}</vs-td>
								<vs-td :data="tr.overall_goal">{{
									tr.overall_goal
								}}</vs-td>
								<vs-td :data="tr.owner">{{ tr.owner }}</vs-td>
								<vs-td :data="tr.applications_impacted">{{
									tr.applications_impacted
								}}</vs-td>
								<vs-td :data="tr.annual_transaction_count">{{
									tr.annual_transaction_count
								}}</vs-td>
								<vs-td :data="tr.process_time">{{
									tr.process_time
								}}</vs-td>
								<vs-td :data="tr.pc_saving">{{
									tr.pc_saving
								}}</vs-td>
								<vs-td>
									<vx-tooltip text="Edit" position="left">
										<vs-button
											@click="
												update_opportunity(tr, indextr)
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
				</vx-card>
			</template>
			<vs-sidebar
				position-right
				:hidden-background="true"
				parent="#kanban-content"
				color="primary"
				class="kanban-sidebar h-100 items-no-padding sidebarx w-100"
				spacer
				v-model="show_sidebar"
				:key="update_ops_key"
			>
				<div class="mt-6 flex items-center justify-between px-6">
					<h4>
						{{ this.edit_opportunity ? "UPDATE" : "ADD NEW" }}
						OPPORTUNITY
					</h4>
					<feather-icon
						icon="XIcon"
						@click.stop="on_close_sidebar"
						class="cursor-pointer"
					></feather-icon>
				</div>
				<vs-divider class="mb-0"></vs-divider>
				<vs-tabs class="overflow-y-scroll h-screen">
					<vs-tab label="Details">
						<div class="tab-text mb-10">
							<form data-vv-scope="opps_form" id="opps_form">
								<div class="m-5">
									<vs-input
										v-validate="'required|alpha_spaces'"
										label="Name*"
										v-model="opportunity.name"
										class="w-full required"
										name="name"
									/>
									<span
										class="text-danger text-sm"
										v-show="errors.has('opps_form.name')"
									>
										{{ errors.first("opps_form.name") }}
									</span>
								</div>
								<div class="m-5">
									<span class="vs-input--label">Phase*</span>
									<v-select
										v-validate="'required'"
										:options="column_select"
										v-model="
											opportunity.opportunity_stage_id
										"
										:reduce="(col) => col.id"
										:dir="$vs.rtl ? 'rtl' : 'ltr'"
										class="mr-2 w-full required"
										name="stage"
										label="name"
									/>
									<span
										class="text-danger text-sm"
										v-show="errors.has('opps_form.stage')"
									>
										{{ errors.first("opps_form.stage") }}
									</span>
								</div>

								<div class="m-5">
									<vs-input
										v-validate="'required|decimal'"
										label="Estimated Financial Benefit in £*"
										v-model="
											opportunity.est_financial_benefit
										"
										class="w-full required"
										name="est_financial_benefit"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'opps_form.est_financial_benefit'
											)
										"
									>
										{{
											errors.first(
												"opps_form.est_financial_benefit"
											)
										}}
									</span>
								</div>
								<div class="m-5">
									<div class="text-sm">Description</div>
									<vs-textarea
									
										v-model="opportunity.description"
										class="w-full"
										name="description"
										height="100px"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has('opps_form.description')
										"
									>
										{{
											errors.first(
												"opps_form.description"
											)
										}}
									</span>
								</div>
								<div class="m-5">
									<vs-input
										label="Overall Goal"
										v-model="opportunity.overall_goal"
										class="w-full required"
										name="overall_goal"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has('opps_form.overall_goal')
										"
									>
										{{
											errors.first(
												"opps_form.overall_goal"
											)
										}}
									</span>
								</div>

								<div class="m-5">
									<vs-input
										v-validate="'required'"
										label="Raised By*"
										v-model="opportunity.owner"
										class="w-full required"
										name="owner"
									/>
									<span
										class="text-danger text-sm"
										v-show="errors.has('opps_form.owner')"
									>
										{{ errors.first("opps_form.owner") }}
									</span>
								</div>
								<div class="m-5">
									<vs-input
										v-validate="'required'"
										label="Applications Impacted*"
										v-model="
											opportunity.applications_impacted
										"
										class="w-full required"
										name="applications_impacted"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'opps_form.applications_impacted'
											)
										"
									>
										{{
											errors.first(
												"opps_form.applications_impacted"
											)
										}}
									</span>
								</div>

								<!-- <div class="m-5">
									<vs-input
										v-validate="'required|decimal:2'"
										label="Annual Transaction Count*"
										v-model="
											opportunity.annual_transaction_count
										"
										class="w-full required"
										name="annual_transaction_count"
										type="number"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'opps_form.annual_transaction_count'
											)
										"
									>
										{{
											errors.first(
												"opps_form.annual_transaction_count"
											)
										}}
									</span>
								</div>

								<div class="m-5">
									<vs-input
										label="Process Time*"
										v-model="opportunity.process_time"
										class="w-full"
										name="process_time"
										type="number"
										v-validate="'decimal:2'"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has('opps_form.process_time')
										"
									>
										{{
											errors.first(
												"opps_form.process_time"
											)
										}}
									</span>
								</div> -->
								<div class="m-5">
									<vs-input
										label="Actual Financial Saving in £"
										v-model="opportunity.pc_saving"
										class="w-full"
										name="pc_saving"
										type="number"
										v-validate="'decimal:2'"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has('opps_form.pc_saving')
										"
									>
										{{
											errors.first("opps_form.pc_saving")
										}}
									</span>
								</div>

								<div class="m-5">
									<vs-input
										label="Annual Hours Saved"
										v-model="opportunity.annual_hours_saved"
										class="w-full"
										name="annual_hours_saved"
										type="number"
										v-validate="'decimal:2'"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'opps_form.annual_hours_saved'
											)
										"
									>
										{{
											errors.first(
												"opps_form.annual_hours_saved"
											)
										}}
									</span>
								</div>

								<div class="m-5">
									<vs-input
										label="Suitability Score"
										v-model="
											opportunity.process_suitability_score
										"
										class="w-full"
										name="process_suitability_score"
										type="number"
										v-validate="'decimal:2'"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'opps_form.process_suitability_score'
											)
										"
									>
										{{
											errors.first(
												"opps_form.process_suitability_score"
											)
										}}
									</span>
								</div>

								<div class="m-5">
									<vs-input
										label="Complexity Score"
										v-model="
											opportunity.process_complexity_score
										"
										class="w-full"
										name="process_complexity_score"
										type="number"
										v-validate="'decimal:2'"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'opps_form.process_complexity_score'
											)
										"
									>
										{{
											errors.first(
												"opps_form.process_complexity_score"
											)
										}}
									</span>
								</div>

								<div
									class="
										flex flex-wrap
										items-center
										p-3
										xl:p-6
										justify-evenly
									"
									slot="footer"
								>
									<vs-button
										class="mr-6"
										@click="
											update_client_opportunity(
												opportunity
											)
										"
										>Submit
									</vs-button>
									<vs-button
										type="border"
										color="warning"
										@click="show_sidebar = false"
									>
										Cancel
									</vs-button>
									<vs-button
										v-if="opportunity.id > 0"
										type="border"
										color="danger"
										@click="
											confirm_delete_opportunity(
												opportunity
											)
										"
									>
										Delete
									</vs-button>
								</div>
							</form>
						</div>
					</vs-tab>
					<vs-tab v-if="opportunity.id > 0" label="Documentation">
						<div class="tab-text">
							<vs-table :data="opportunity_documents">
								<template slot="thead">
									<vs-th class="w-4/5">Name*</vs-th>
									<!-- <vs-th>Document</vs-th> -->
									<vs-th>Actions</vs-th>
								</template>
								<template slot-scope="{ data }">
									<vs-tr
										:key="indextr"
										v-for="(tr, indextr) in data"
										class="cursor-pointer"
									>
										<vs-td :data="tr.name">
											{{ tr.name }}
										</vs-td>
										<!-- <vs-td :data="tr.document_link">
											{{tr.document_link}}
										</vs-td> -->
										<vs-td>
											<div class="flex">
												<vx-tooltip
													text="View"
													position="left"
												>
													<vs-button
														@click="
															view_opportunity_doc(
																tr
															)
														"
														color="primary"
														type="filled"
														icon-pack="feather"
														icon="icon-eye"
														class="ml-2"
														size="small"
													></vs-button>
												</vx-tooltip>
												<vx-tooltip
													text="Remove Doc"
													position="left"
												>
													<vs-button
														@click="
															confirm_delete_document(
																tr.id,
																indextr
															)
														"
														color="warning"
														type="filled"
														icon-pack="feather"
														icon="icon-archive"
														size="small"
														class="ml-2"
													>
													</vs-button>
												</vx-tooltip>
											</div>
										</vs-td>
									</vs-tr>
								</template>
							</vs-table>

							<div class="items-center my-4">
								<form
									data-vv-scope="add_doc_form"
									id="add_doc_form"
								>
									<div
										class="grid upload-img m-2 row w-full"
										v-if="!dataDoc"
									>
										<input
											type="file"
											class="hidden"
											ref="uploadImgInput"
											@change="update_opps_document"
											accept="image/*"
										/>
										<vs-button
											class="place-self-end"
											@click="
												$refs.uploadImgInput.click()
											"
											>Select File</vs-button
										>
									</div>
									<div class="grid m-2 row w-full">
										<div
											class="
												w-full
												px-2
												item-center
												place-self-end
											"
											v-if="dataDoc"
										>
											{{ dataDoc.name }}
										</div>
									</div>

									<div class="m-2 row w-full text-center">
										OR
									</div>
									<div class="m-2 row w-full">
										<vs-input
											label="External Link"
											v-model="document.link"
											class="w-full"
											name="document-link"
											v-validate="'url'"
										/>
									</div>

									<div class="m-2 row w-full">
										<span class="vs-input--label"
											>Stage</span
										>
										<v-select
											v-validate="'required'"
											name="opportunity_stage_id"
											:options="column_select"
											v-model="
												document.opportunity_stage_id
											"
											label="name"
											:reduce="(col) => col.id"
											:dir="$vs.rtl ? 'rtl' : 'ltr'"
											class="mr-2 w-full required"
										/>
										<span
											class="text-danger text-sm"
											v-show="
												errors.has(
													'add_doc_form.opportunity_stage_id'
												)
											"
											>{{
												errors.first(
													"add_doc_form.opportunity_stage_id"
												)
											}}
										</span>
									</div>
									<div class="m-2 row w-full">
										<div class="text-sm">Document Name*</div>
										<vs-textarea
											v-validate="'required'"
											name="document_name"
											v-model="document.name"
											class="w-full required"
										/>
										<span
											class="text-danger text-sm"
											v-show="
												errors.has(
													'add_doc_form.document_name'
												)
											"
											>{{
												errors.first(
													"add_doc_form.document_name"
												)
											}}
										</span>
									</div>
									<vs-button
										@click="add_opportunity_doc()"
										class="ml-auto mt-2"
									>
										Add Document
									</vs-button>
								</form>
							</div>
						</div>
					</vs-tab>
					<vs-tab v-if="opportunity.id > 0" label="Comments">
						<div class="tab-text">
							<div class="m-5">
								<div class="text-sm">Comment</div>
								<vs-textarea
									v-validate="'required'"
									label="Comment"
									v-model="comment"
									class="w-full"
								/>
							</div>
							<div
								class="flex flex-wrap items-center p-6"
								slot="footer"
							>
								<vs-button
									class="mr-6"
									:disabled="comment.length === 0"
									@click="update_opportunity_comment(comment)"
								>
									Submit
								</vs-button>
								<vs-button
									type="border"
									color="danger"
									@click="show_sidebar = false"
								>
									Cancel
								</vs-button>
							</div>

							<vs-table :data="opportunity_comments">
								<template slot="thead">
									<vs-th class="w-4/5">Comment</vs-th>
									<!-- <vs-th>Document</vs-th> -->
									<vs-th>Actions</vs-th>
								</template>
								<template slot-scope="{ data }">
									<vs-tr
										:key="indextr"
										v-for="(tr, indextr) in data"
										class="cursor-pointer"
									>
										<vs-td :data="tr.comment">
											{{ tr.comment }}
										</vs-td>
										<!-- <vs-td :data="tr.document_link">
											{{tr.document_link}}
										</vs-td> -->
										<vs-td>
											<div class="flex">
												<vx-tooltip
													text="Remove Doc"
													position="left"
												>
													<vs-button
														@click="
															confirm_delete_comment(
																tr.id,
																indextr
															)
														"
														color="warning"
														type="filled"
														icon-pack="feather"
														icon="icon-archive"
														size="small"
														class="ml-2"
													>
													</vs-button>
												</vx-tooltip>
											</div>
										</vs-td>
									</vs-tr>
								</template>
							</vs-table>
						</div>
					</vs-tab>
				</vs-tabs>
			</vs-sidebar>
		</div>
	</div>
</template>
<script>
import draggable from "vuedraggable";
import KanbanCard from "@/components/KanbanCard.vue";
import OpportunityService from "@/services/OpportunityService.js";
import vSelect from "vue-select";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

import { Validator } from "vee-validate";
const dict = {
	custom: {
		// name: {
		//   required: 'This is a required field',
		//   alpha: "Your name may only contain alphabetic characters"
		// },
		applications_impacted: {
			required: "The Applications Impacted field is required",
		},
		est_financial_benefit: {
			required: "The Estimated Financial Benefit  field is required",
		},
		overall_goal: { required: "The Overall Goal field is required" },
	},
};
// register custom messages
Validator.localize("en", dict);
export default {
	name: "kanban-board",
	components: {
		KanbanCard,
		draggable,
		vSelect,
		VuePerfectScrollbar,
	},
	data() {
		return {
			show_loading: false,
			update_from_list: false,
			new_op: false,
			update_ops_key: 0,
			client_id: -1,
			show_board_update: false,
			current_item_view: "item-grid-view",
			sel_col_select: -1,
			opportunities: [],
			opportunity_list: [],
			column_select: [],
			stage_select: [],
			columns: [],
			show_sidebar: false,
			edit_opportunity: false,
			opportunity: {
				name: null,
				opportunity_stage_id: null,
				est_financial_benefit: null,
				overall_goal: null,
				applications_impacted: null,
				annual_transaction_count: null,
				process_time: null,
				pc_saving: null,
				annual_hours_saved: null,
				process_suitability_score: null,
				process_complexity_score: null,
			},
			dataDoc: null,
			document: {
				name: "",
				opportunity_stage_id: 1,
			},
			token: "",
			comment: "",
			opportunity_comments: [],
			opportunity_documents: [],
			selected_opp_index: -1,
			selected_opp_col_index: -1,
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{
					title: "Clients",
					url: `/pages/client/${this.$route.params.client_id}`,
				},
				{ title: "Opportunity Pipeline", active: true },
			],
		};
	},
	methods: {
		get_stage_label(id) {
			let item = this.column_select.find((item) => item.id === id);

			return item ? item.name : "N/a";
		},
		add_opportunity_doc() {
			const _that = this;
			this.$validator.validateAll("add_doc_form").then((result) => {
				if (result) {
					OpportunityService.save_opportunity_file(
						this.opportunity.id,
						this.document,
						this.dataDoc
					).then((resp) => {
						let data = resp.data.data;
						if (data && data !== undefined) {
							_that.opportunity_documents.push(data);
							_that.document = [];
							_that.dataDoc = null;

							_that.$vs.notify({
								title: "Upload Successful",
								text: "Document has been added successfully.",
								iconPack: "feather",
								icon: "icon-alert-circle",
								color: "success",
								timing: 4000,
							});
							_that.$validator.reset();
						}
					});

					_that.$validator.reset();
				}
			});
		},
		update_opportunity_comment(comment) {
			const _that = this;

			if (this.comment.length > 0) {
				const _that = this;
				this.$vs.loading();
				OpportunityService.add_opportunity_comment(
					this.opportunity.id,
					this.comment
				)
					.then((resp) => {
						const data = resp.data;

						if (data && data !== undefined) {
							if (data.success) {
								_that.opportunity_comments.push(data.data);
								_that.comment = "";
								_that.$vs.notify({
									title: "Save Successful",
									text: "Comment has been added successfully.",
									iconPack: "feather",
									icon: "icon-alert-circle",
									color: "success",
									timing: 4000,
								});
							} else {
								_that.$vs.notify({
									title: "Update comment",
									text: data.error,
									iconPack: "feather",
									icon: "icon-alert-circle",
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
							title: "Failed : Opps Comment Save",
							text: err.message,
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		remove_opportunity_doc(id, index) {
			const _that = this;
			OpportunityService.remove_opportunity_document(id)
				.then((resp) => {
					console.log("remove document");
					let data = resp.data;
					if (data && data !== undefined) {
						if (data.success) {
							_that.opportunity_documents.splice(index, 1);

							_that.$vs.notify({
								title: "Delete Successful",
								text: "Opportunity Document has been deleted",
								iconPack: "feather",
								icon: "icon-alert-circle",
								color: "sucess",
								timing: 4000,
							});
						} else {
							_that.$vs.notify({
								title: "Remove opportunity document",
								text: data.error,
								iconPack: "feather",
								icon: "icon-alert-circle",
								color: "warning",
								timing: 4000,
							});
						}
					}
				})
				.catch((err) => {
					_that.$vs.notify({
						title: "Removing opportunity document",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},
		remove_opportunity_comment(id, index) {
			const _that = this;

			OpportunityService.remove_opportunity_comment(id)
				.then((resp) => {
					let data = resp.data;
					if (data && data !== undefined) {
						if (data.success) {
							_that.opportunity_comments.splice(index, 1);
							_that.$vs.notify({
								title: "Delete Successful",
								text: "Opportunity Comment has been deleted",
								iconPack: "feather",
								icon: "icon-alert-circle",
								color: "sucess",
								timing: 4000,
							});
						} else {
							_that.$vs.notify({
								title: "Remove comment",
								text: data.error,
								iconPack: "feather",
								icon: "icon-alert-circle",
								color: "warning",
								timing: 4000,
							});
						}
					}
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: err.message,
						text: "Failed",
						color: "warning",
						timing: 4000,
					});
				});
		},

		view_opportunity_doc(item) {
			OpportunityService.open_oppportunity_file(
				item.document_link,
				item.external
			);
		},
		get_client_opportunities_details() {
			const _that = this;

			OpportunityService.get_client_opportunities(this.client_id).then(
				(resp) => {
					let data = resp.data.data;
					if (data && data !== undefined) {
						_that.columns = data.columns;

						_that.token = data.token;
						console.log("opportunities list");
						if (data.columns.length > 0) {
							_that.stage_select.push({
								id: -1,
								name: "All Stages",
							});

							data.columns.forEach((d) => {
								let tasks = d.tasks || [];
								let title_id = d.title_id || -1;
								let title = d.title || "";

								if (title_id > -1 && title.length > 0) {
									_that.column_select.push({
										id: title_id,
										name: title,
									});
									_that.stage_select.push({
										id: title_id,
										name: title,
									});
								}

								if (tasks.length > 0) {
									_that.opportunity_list = tasks;
									_that.sel_col_select = d.title_id;
								}
							});
							console.log(_that.column_select);
						}
					}
				}
			);
		},
		drop_end: function (evt) {
			let new_col = parseInt(evt.to.getAttribute("data-col"), 10) || -1;
			let card_id = parseInt(evt.item.getAttribute("data-id"), 10) || -1;

			if (card_id > 0 && new_col > 0) {
				let card_obj = { column_id: new_col };
				const _that = this;
				//call API to save the new status of the card
				OpportunityService.move_client_opportunity(card_id, card_obj)
					.then((resp) => {
						let data = resp.data;
						if (data && data !== undefined) {
							if (data.success) {
								_that.columns.forEach((col) => {
									if (col.title_id === new_col) {
										col.tasks.forEach((task) => {
											if (task.id === card_id) {
												task.opportunity_stage_id =
													new_col;
											}
										});
									}
								});
							} else {
								_that.$vs.notify({
									title: "Move opportunity cards",
									text: "Error moving opportunity cards",
									iconPack: "feather",
									icon: "icon-alert-circle",
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						_that.$vs.notify({
							title: "Move opportunity cards",
							text: "Error moving opportunity cards",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		add_to_list(event) {
			//console.log("add event "+event);
		},
		on_card_edit(item) {
			this.edit_opportunity = true;
			this.opportunity = item;
			console.log("update opportunity");
			this.opportunity_documents = this.opportunity.documents;
			this.opportunity_comments = this.opportunity.comments;
			this.show_sidebar = true;
			this.update_ops_key += 1;
			this.update_from_list = false;
			this.new_op = false;
			this.selected_opp_col_index = item.opportunity_stage_id || -1;
			this.document.opportunity_stage_id = this.opportunity.stage_id;
			this.$validator.pause();

			this.$nextTick(() => {
				this.$validator.errors.clear();
				this.$validator.fields.items.forEach((field) => field.reset());
				this.$validator.fields.items.forEach((field) =>
					this.errors.remove(field)
				);
				this.$validator.resume();
			});
		},
		on_close_sidebar() {
			this.show_sidebar = false;
			this.dataDoc = null;
		},
		update_opportunity(item, index) {
			console.log("update opportunity");
			this.edit_opportunity = true;
			this.update_from_list = true;
			this.opportunity = item;
			this.selected_opp_index = index;
			this.opportunity_documents = this.opportunity.documents;
			this.opportunity_comments = this.opportunity.comments;
			this.selected_opp_col_index = item.opportunity_stage_id || -1;
			this.document.opportunity_stage_id = this.opportunity.stage_id;
			this.show_sidebar = true;
			this.new_op = false;
			this.update_ops_key += 1;
			this.$validator.reset();
			this.$validator.pause();
			this.$nextTick(() => {
				this.$validator.errors.clear();
				this.$validator.fields.items.forEach((field) => field.reset());
				this.$validator.fields.items.forEach((field) =>
					this.errors.remove(field)
				);
				this.$validator.resume();
			});
		},
		add_new_opportunity() {
			this.edit_opportunity = false;
			this.opportunity = Object.assign(
				{},
				OpportunityService.opportunity_pipeline
			);
			this.opportunity_documents = [];
			this.opportunity_comments = [];
			this.show_sidebar = true;
			this.new_op = true;
			this.update_ops_key += 1;
			this.$validator.reset();
			this.$validator.pause();
			this.$nextTick(() => {
				this.$validator.errors.clear();
				this.$validator.fields.items.forEach((field) => field.reset());
				this.$validator.fields.items.forEach((field) =>
					this.errors.remove(field)
				);
				this.$validator.resume();
			});
		},

		export_opportunity() {
			OpportunityService.download_oppportunity_report(this.token);
		},
		confirm_delete_document(id, index) {
			this.$vs.dialog({
				type: "confirm",
				color: "danger",
				title: `Confirm document delete`,
				text: "Please confirm that you wish to delete the document.",
				accept: this.remove_opportunity_doc,
				parameters: id, index,
			});
		},
		confirm_delete_comment(id, index) {
			this.$vs.dialog({
				type: "confirm",
				color: "danger",
				title: `Confirm comment delete`,
				text: "Please confirm that you wish to delete the comment.",
				accept: this.remove_opportunity_comment,
				parameters: id, index,
			});
		},
		move_opportunity(opportunity_item) {
			const _that = this;
			if (this.opportunity.id > 0) {
				OpportunityService.move_client_opportunity(
					this.opportunity.id,
					opportunity_item
				)
					.then((resp) => {
						let data = resp.data;
						if (data && data !== undefined) {
							if (data.success) {
							} else {
								_that.$vs.notify({
									title: "Move opportunity",
									text: "Error moving opportunity.",
									iconPack: "feather",
									icon: "icon-alert-circle",
									color: "warning",
									timing: 4000,
								});
							}
						}
					})
					.catch((err) => {
						_that.$vs.notify({
							title: "Move opportunity",
							text: "Error moving opportunity",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		update_client_opportunity(opportunity_item) {
			const _that = this;
			console.log("inside update client opp");
			this.$validator.validateAll("opps_form").then((result) => {
				if (result) {
					if (this.opportunity.opportunity_stage_id > 0) {
						if (_that.opportunity.id > 0) {
							_that.$vs.loading();
							OpportunityService.update_client_opportunity(
								_that.opportunity.id,
								opportunity_item
							)
								.then((resp) => {
									let data = resp.data;

									if (data && data !== undefined) {
										if (data.success) {
											let new_data = data.data;
											if (
												_that.selected_opp_col_index !==
												new_data.opportunity_stage_id
											) {
												_that.columns.forEach((col) => {
													if (
														col.title_id ===
														_that.selected_opp_col_index
													) {
														col.tasks.forEach(
															(task, index) => {
																if (
																	task.id ===
																	new_data.id
																) {
																	col.tasks.splice(
																		index,
																		1
																	);
																}
															}
														);
													}
													if (
														col.title_id ===
														new_data.opportunity_stage_id
													) {
														col.tasks.push(
															new_data
														);
													}
												});

												_that.selected_opp_col_index =
													new_data.opportunity_stage_id;
											} else if (_that.new_op) {
												_that.columns.forEach((col) => {
													if (
														col.title_id ===
														_that.selected_opp_col_index
													) {
														let upd_idx =
															col.tasks.findIndex(
																(element) =>
																	element.id ===
																	new_data.id
															);
														col.tasks.splice(
															upd_idx,
															1,
															new_data
														);
													}
												});
											}
											if (_that.update_from_list) {
												let update_index =
													_that.opportunity_list.findIndex(
														(element) =>
															element.id ===
															_that.opportunity.id
													);
												_that.opportunity_list.splice(
													update_index,
													1,
													new_data
												);
											} else {
											}

											if (
												_that.sel_col_select !==
												_that.selected_opp_col_index
											) {
												if (_that.sel_col_select > 0) {
													_that.sel_col_select =
														_that.selected_opp_col_index;
												}
												_that.changed_col_filter(
													_that.sel_col_select
												);
											}

											_that.show_sidebar = false;
											_that.$vs.loading.close();
										} else {
											_that.$vs.notify({
												title: "Update opportunity",
												text: "Invalid data",
												iconPack: "feather",
												icon: "icon-alert-circle",
												color: "warning",
												timing: 4000,
											});
											_that.$vs.loading.close();
										}
									}

									_that.$vs.loading.close();
								})
								.catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Update opportunity",
										text: err.message,
										color: "warning",
										timing: 4000,
									});
								});
						} else {
							_that.opportunity.client_id = _that.client_id;
							OpportunityService.create_client_opportunity(
								_that.opportunity
							)
								.then((resp) => {
									let data = resp.data;

									if (data && data !== undefined) {
										if (data.success) {
											_that.opportunity.id = data.data.id;
											_that.selected_opp_col_index =
												data.data.opportunity_stage_id;
											_that.edit_opportunity = true;

											_that.columns.forEach((col) => {
												if (
													col.title_id ===
													_that.opportunity
														.opportunity_stage_id
												) {
													col.tasks.push(data.data);
												}
											});

											if (
												_that.sel_col_select !==
												_that.opportunity
													.opportunity_stage_id
											) {
												if (_that.sel_col_select > 0) {
													_that.sel_col_select =
														_that.opportunity.opportunity_stage_id;
												}

												_that.changed_col_filter(
													_that.sel_col_select
												);
											}
										} else {
											_that.$vs.notify({
												title: "Create opportunity",
												text: data.error,
												iconPack: "feather",
												icon: "icon-alert-circle",
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
										title: "Create opportunity",
										text: err.message,
										color: "warning",
										timing: 4000,
									});
								});
						}
					}
					this.show_sidebar = false;
				} else {
					this.$vs.notify({
						title: "Select Stage",
						text: "Please select stage",
						color: "warning",
						timing: 4000,
					});
				}
			});
		},
		confirm_delete_opportunity(opportunity) {
			this.$vs.dialog({
				type: "confirm",
				color: "danger",
				title: `Confirm Opportunity Delete`,
				text: "Please confirm that you wish to delete the Opportunity? Any data related to the Opportunity may also get deleted.",
				accept: this.delete_opprtunity,
				parameters: opportunity,
			});
		},
		delete_opprtunity(opportunity) {
			const _that = this;

			if (this.opportunity.id > 0) {
				let stage_id = _that.opportunity.opportunity_stage_id;

				this.$vs.loading();
				OpportunityService.delete_opportunity(this.opportunity.id)
					.then((resp) => {
						let data = resp.data;

						if (data && data !== undefined) {
							if (data.success === true) {
								_that.columns.forEach((col) => {
									col.tasks.forEach((task, index) => {
										if (task.id === _that.opportunity.id) {
											col.tasks.splice(index, 1);
										}
									});
								});

								if (_that.update_from_list) {
									_that.opportunity_list.forEach(
										(value, key) => {
											if (
												_that.opportunity.id ===
												value.id
											) {
												_that.opportunity_list.splice(
													key,
													1
												);
											}
										}
									);
								} else {
									if (_that.sel_col_select > 0) {
										_that.sel_col_select = stage_id;
									}

									_that.changed_col_filter(
										_that.sel_col_select
									);
								}

								_that.$vs.notify({
									title: "Opportunity Removed",
									text: "Opportunity has been removed successfully",
									iconPack: "feather",
									icon: "icon-alert-circle",
									color: "primary",
									timing: 4000,
								});

								_that.show_sidebar = false;
								_that.$vs.loading.close();
							} else {
								_that.$vs.notify({
									title: "Error: Removing Opportunity",
									text: data.error,
									iconPack: "feather",
									icon: "icon-alert-circle",
									color: "warning",
									timing: 4000,
								});
								_that.$vs.loading.close();
							}
						}
					})
					.catch((err) => {
						_that.$vs.loading.close();
						_that.$vs.notify({
							title: "Error: Removing Opportunity",
							text: "Invalid data",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		switch_to_view(id) {
			if (id === 1) {
				this.current_item_view = "item-grid-view";
			} else if (id === 2) {
				this.current_item_view = "item-list-view";
			}
		},
		changed_col_filter(value) {
			console.log("change filter" + value);
			this.opportunity_list = [];
			let new_list = [];

			this.columns.forEach((c) => {
				let tasks = c.tasks || [];
				if (value == -1) {
					console.log("adding item to list");
					new_list = new_list.concat(tasks);
				} else {
					if (c.title_id === value) {
						if (tasks.length > 0) {
							new_list = tasks;
						}
					}
				}
			});

			this.opportunity_list = new_list;
		},
		update_opps_document(input) {
			this.document.opportunity_stage_id =
				this.opportunity.opportunity_stage_id;

			if (input.target.files && input.target.files[0]) {
				this.dataDoc = input.target.files[0];
			}
		},
	},
	created() {
		this.client_id = this.$route.params.client_id || -1;

		this.get_client_opportunities_details();
	},
};
</script>

<style scoped>
/* .column-width {
	min-width: 320px;
	width: 320px;
} */
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
	opacity: 0.5;
	background: #f7fafc;
	border: 1px solid #4299e1;
}

.kanban-col {
	border-right: 1px solid black;
	margin-right: 10px;
}
</style>
<style lang="scss" scoped>
.kanban-sidebar {
	::v-deep .vs-sidebar--background {
		z-index: 52010;
	}
	::v-deep .vs-sidebar {
		z-index: 52010;
		width: 100%;
		max-width: 35%;
		max-height: 100%;
		height: 100% !important;

		.img-upload {
			margin-top: 2rem;
			.con-img-upload {
				padding: 0;
			}
			.con-input-upload {
				width: 100%;
				margin: 0;
			}
		}
	}
}
.scroll-area--data-list-add-new {
	// height: calc(var(--vh, 1vh) * 100 - 4.3rem);
	height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
