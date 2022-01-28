<template>
	<div class="vx-row">
		<div class="vx-col w-full">
			<vx-card title="Client Processes" class="mb-8">
				<template slot="actions">
					<span class="pr-3">
						<vs-button
							v-cloak
							@click="
								import_process_dialog = !import_process_dialog
							"
							class="mb-2"
							color="primary"
							type="filled"
							>Import Processes</vs-button
						>
					</span>
					<span class="pr-3">
						<vs-button
							@click.native="add_new_process()"
							color="primary"
							type="filled"
							>New Process
						</vs-button>
					</span>
					<span class="pr-3">
						<vs-button
							@click.native="add_process_departments(client_id)"
							color="primary"
							type="filled"
							>Process Departments
						</vs-button>
					</span>
					<span class="pt-3">
						<vs-button
							@click.native="process_tree(client_id)"
							color="primary"
							type="filled"
							>Update Process Hierarchy
						</vs-button>
					</span>
				</template>
				<div slot="no-body" class="mx-2">
					<vs-table
						search
						max-items="10"
						pagination
						:data="client_processes"
						stripe
						class="
							table-dark-inverted table-fixed
							vs-con-loading__container
						"
					>
						<template slot="thead">
							<vs-th class="w-1/6">NAME</vs-th>
							<vs-th class="w-1/6 float-left">DESCRIPTION</vs-th>
							<vs-th class="w-1/6">DEPARTMENTS</vs-th>
							<vs-th class="w-1/12">FREQUENCY</vs-th>
							<vs-th class="w-1/12">UNIT MEASURE</vs-th>
							<vs-th class="w-1/12">VOLUME</vs-th>
							<vs-th class="w-1/12">STATUS</vs-th>
							<vs-th class="w-1/12">ACTION</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr :key="indextr" v-for="(tr, indextr) in data">
								<vs-td :data="tr.name">
									{{ tr.name }}
								</vs-td>

								<vs-td :data="tr.description">
									{{ tr.description }}
								</vs-td>
								<vs-td :data="tr.department_csv">
									{{
										get_process_department_label(
											tr.department_csv
										)
									}}
								</vs-td>
								<vs-td :data="tr.frequncy">
									{{ tr.frequency }}
								</vs-td>
								<vs-td :data="tr.unit_measure">
									{{ tr.unit_measure }}
								</vs-td>
								<vs-td :data="tr.average_volume">
									{{ tr.average_volume }}
								</vs-td>
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
												@click="
													update_client_process(
														tr,
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
										<!-- <vx-tooltip text="Edit Process department" >
											<vs-button
												@click="update_client_process_department(tr,indextr)"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
											></vs-button>
										</vx-tooltip> -->

										<vx-tooltip
											text="Document"
											position="left"
										>
											<vs-button
												v-if="
													tr.document_link &&
													tr.document_link !==
														undefined &&
													tr.document_link.length > 0
												"
												@click="
													on_document_view(
														tr.document_link
													)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-book-open"
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
				class="w-1/2vw"
				data-vv-scope="create_process_dep_form"
				id="create_process_dep_form"
			>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<div class="vx-row mb-3">
								<div class="vx-col w-full">
									<small class="label">Process Name</small>
									<v-select
										v-validate="'required'"
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
												'create_process_dep_form.processes'
											)
										"
									>
										{{
											errors.first(
												"create_process_dep_form.processes"
											)
										}}
									</span>
								</div>
							</div>
							<div class="vx-row mb-3">
								<div class="vx-col w-full">
									<small class="label">Departments</small>
									<v-select
										v-validate="'required'"
										:options="client_departments"
										label="department_sub_function"
										name="department"
										v-model="
											client_department_processes.department_id
										"
										:reduce="(dept) => dept.id"
										:dir="$vs.rtl ? 'rtl' : 'ltr'"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'create_process_dep_form.department'
											)
										"
									>
										{{
											errors.first(
												"create_process_dep_form.department"
											)
										}}
									</span>
								</div>
							</div>
							<div
								class="
									flex flex-wrap
									items-center
									justify-end
									mt-8
								"
							>
								<vs-button
									@click="save_department_process"
									class="ml-auto mt-2"
									>Save</vs-button
								>
								<vs-button
									class="ml-4 mt-2"
									type="border"
									color="warning"
									@click="client_process_dept_dialog = false"
									>Close</vs-button
								>
							</div>
						</div>
					</div>
				</vx-card>
			</form>
		</vs-popup>

		<!--FORM-->
		<vs-popup
			class="
				vs-con-loading__container
				client-process-create-popup
				add_process
			"
			title="Add Client Process"
			:active.sync="popupActive1"
			:buttons-hidden="true"
		>
			<form
				class="w-1/2vw"
				data-vv-scope="client_process_form"
				id="client_process_form"
			>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<div slot="no-body" class="mx-2">
								<vs-table
									search
									max-items="10"
									pagination
									v-model="selected"
									multiple
									stripe
									class="
										table-dark-inverted
										add_process_table
									"
									:data="processes"
								>
									<template slot="thead">
										<vs-th>NAME</vs-th>
										<!-- <vs-th
											>Link to process
											documnetation</vs-th
										>
										<vs-th>Process Input</vs-th>
										<vs-th>Process Output</vs-th> -->
										<vs-th>Description</vs-th>
									</template>

									<template slot-scope="{ data }">
										<vs-tr
											:data="tr"
											:key="indextr"
											v-for="(tr, indextr) in data"
										>
											<vs-td :data="tr.name">
												{{ tr.name }}
											</vs-td>

											<vs-td :data="tr.description">
												{{ tr.description }}
											</vs-td>
										</vs-tr>
									</template>
								</vs-table>
							</div>
						</div>
					</div>
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="add_process($event)"
							class="ml-auto mt-2"
							>Add Process</vs-button
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
		<vs-popup
			class="
				vs-con-loading__container
				client-process-edit-popup
				edit_process
			"
			title="Edit Client Process"
			:active.sync="edit_client_process_dialog"
			:buttons-hidden="true"
			@close="close_edit_client_process"
		>
			<form
				class="w-1/2vw"
				data-vv-scope="edit_process_form"
				id="edit_process_form"
			>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Process Name*</small>
							<vs-input
								v-validate="'required|min:2'"
								name="name"
								v-model="client_update_process.name"
								class="w-full required"
							/>
							<span
								v-show="errors.has('edit_process_form.name')"
								class="text-danger text-sm"
							>
								{{ errors.first("edit_process_form.name") }}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div
							class="
								vx-col
								w-full
								flex
								justify-items-center
								align-middle
							"
						>
							<div class="w-4/5">
								<small class="label">Documentation</small>
								<vs-input
									class="w-full"
									name="document-upload"
									type="file"
									@change="doc_select"
									accept="image/png, image/jpeg, image/webp"
								/>
							</div>
							<div class="w-1/5 flex justify-center items-center">
								<vs-button
									v-if="
										client_update_process.document_link !==
										null
									"
									@click="
										on_document_view(
											client_update_process.document_link
										)
									"
									radius
									color="primary"
									type="border"
									icon-pack="feather"
									icon="icon-book-open"
								></vs-button>
							</div>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Process Input</small>
							<vs-input
								name="process_inputs"
								v-model="client_update_process.process_inputs"
								class="w-full required"
							/>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Process Output</small>
							<vs-input
								name="process_outputs"
								v-model="client_update_process.process_outputs"
								class="w-full required"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Frequency*</small>
							<v-select
								v-validate="'required'"
								name="frequency"
								:options="frequency"
								label="name"
								:reduce="(f) => f.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								v-model="client_update_process.frequency_id"
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has('edit_process_form.frequency')
								"
							>
								{{
									errors.first("edit_process_form.frequency")
								}}
							</span>
						</div>

						<div class="vx-col w-1/2">
							<small class="label">Unit of Measure*</small>
							<v-select
								v-validate="'required'"
								name="unit_measure"
								:options="unit_measure"
								label="name"
								:reduce="(measure) => measure.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								v-model="client_update_process.unit_measure_id"
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has('edit_process_form.unit_measure')
								"
							>
								{{
									errors.first(
										"edit_process_form.unit_measure"
									)
								}}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Average Volume*</small>
							<vs-input
								v-validate="'required|numeric'"
								name="average_volume"
								v-model="client_update_process.average_volume"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has(
										'edit_process_form.average_volume'
									)
								"
							>
								{{
									errors.first(
										"edit_process_form.average_volume"
									)
								}}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Description*</small>
							<vs-textarea
								v-validate="'required'"
								v-model="client_update_process.description"
								name="description"
								height="100px"
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has('edit_process_form.description')
								"
							>
								{{
									errors.first(
										"edit_process_form.description"
									)
								}}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Departments*</small>
							<v-select
								:options="client_departments"
								v-validate="'required'"
								label="department_sub_function"
								name="department"
								v-model="client_update_process.department_ids"
								:reduce="(dept) => dept.id"
								:dir="$vs.rtl ? 'rtl' : 'ltr'"
								multiple
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has('edit_process_form.department')
								"
							>
								{{
									errors.first("edit_process_form.department")
								}}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Status</small>
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="client_update_process.status"
								>Status
							</vs-checkbox>
						</div>
					</div>
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="add_process($event)"
							class="ml-auto mt-2"
							>Edit Process
						</vs-button>
						<vs-button
							@click="reset_process()"
							class="ml-4 mt-2"
							type="border"
							color="warning"
							>Reset
						</vs-button>
					</div>
				</vx-card>
			</form>
		</vs-popup>
		<vs-popup
			class="vs-con-loading__container client-process-segmentation-popup"
			title="Add Process Segmentation"
			:active.sync="popupActive3"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<div class="vx-row mb-3">
								<div class="vx-col w-full">
									<small class="label">Segmentation</small>
									<vs-input
										name="segmenation"
										v-validate="'required'"
										class="w-full required"
										v-model="
											process_segmentation.segmentation
										"
									/>
								</div>
							</div>

							<div class="vx-row mb-3">
								<div class="vx-col w-full">
									<small class="label">Description</small>
									<vs-textarea
										name="description"
										v-model="
											process_segmentation.description
										"
										class="w-full required"
										height="100px"
									/>
								</div>
							</div>

							<div class="vx-row mb-3">
								<div class="vx-col w-1/2">
									<small class="label">Status</small>
									<vs-checkbox
										false-value="0"
										true-value="1"
										v-model="process_segmentation.status"
										>Status
									</vs-checkbox>
								</div>
							</div>
							<div
								class="
									flex flex-wrap
									items-center
									justify-end
									mt-8
								"
							>
								<vs-button
									@click="add_segmentation($event)"
									class="ml-auto mt-2"
								>
									Add Segmentation
								</vs-button>
								<vs-button
									class="ml-4 mt-2"
									type="border"
									color="warning"
									>Reset</vs-button
								>
							</div>
						</div>
					</div>
				</vx-card>
			</form>
		</vs-popup>
		<vs-popup
			class="vs-con-loading__container clinic-create-popup"
			title="Create Process"
			:active.sync="process_dialog"
			:buttons-hidden="true"
			fullscreen
		>
			<form
				class="w-1/2vw"
				data-vv-scope="process_form"
				id="process_form"
			>
				<vx-card no-shadow fixedHeight>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<div class="vx-row mb-3">
								<div class="vx-col w-full">
									<small class="label">Name*</small>
									<vs-input
										v-validate="'required|min:2'"
										placeholder="Process Name"
										name="name"
										v-model="process.name"
										class="w-full required"
									/>
									<span
										v-show="errors.has('process_form.name')"
										class="text-danger text-sm"
									>
										{{ errors.first("process_form.name") }}
									</span>
								</div>

								<div class="vx-col w-full">
									<small class="label">Documentation</small>
									<vs-input
										class="w-full"
										name="document-upload"
										type="file"
										@change="doc_select"
										accept="image/png, image/jpeg, image/webp"
									/>
								</div>

								<div class="vx-col w-1/2">
									<small class="label">Inputs</small>
									<vs-input
										name="process_inputs"
										placeholder="Process Inputs"
										v-model="process.process_inputs"
										class="w-full required"
									/>
								</div>

								<div class="vx-col w-1/2">
									<small class="label">Outputs</small>
									<vs-input
										name="process_outputs"
										placeholder="Process Outputs"
										v-model="process.process_outputs"
										class="w-full required"
									/>
								</div>

								<div class="vx-col w-1/2">
									<small class="label">Frequency*</small>
									<v-select
										v-validate="'required'"
										:options="frequency"
										label="name"
										:reduce="(f) => f.id"
										:dir="$vs.rtl ? 'rtl' : 'ltr'"
										v-model="process.frequency_id"
										name="frequency"
									/>

									<span
										class="text-danger text-sm"
										v-show="
											errors.has('process_form.frequency')
										"
									>
										{{
											errors.first(
												"process_form.frequency"
											)
										}}
									</span>
								</div>

								<div class="vx-col w-1/2">
									<small class="label"
										>Unit of Measure*</small
									>
									<v-select
										v-validate="'required'"
										:options="unit_measure"
										label="name"
										:reduce="(measure) => measure.id"
										:dir="$vs.rtl ? 'rtl' : 'ltr'"
										v-model="process.unit_measure_id"
										name="unit measure"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'process_form.unit measure'
											)
										"
									>
										{{
											errors.first(
												"process_form.unit measure"
											)
										}}
									</span>
								</div>
								<div class="vx-col w-1/2">
									<small class="label">Average Volume*</small>
									<vs-input
										v-validate="'required|numeric'"
										placeholder="Average Volume"
										v-model="process.average_volume"
										class="w-full required"
										name="average_volume"
									/>

									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'process_form.average_volume'
											)
										"
									>
										{{
											errors.first(
												"process_form.average_volume"
											)
										}}
									</span>
								</div>
								<div class="vx-col w-full">
									<small class="label">Description*</small>
									<vs-textarea
										v-validate="'required'"
										v-model="process.description"
										name="description"
										height="100px"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'process_form.description'
											)
										"
									>
										{{
											errors.first(
												"process_form.description"
											)
										}}
									</span>
								</div>
								<div class="vx-col w-full">
									<small class="label">Parent Process*</small>
									<v-select
										:options="p_processes"
										label="name"
										name="parent process"
										v-validate="'required'"
										required
										:reduce="(process) => process.id"
										v-model="process.parent_process_id"
										:dir="$vs.rtl ? 'rtl' : 'ltr'"
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'process_form.parent process'
											)
										"
									>
										{{
											errors.first(
												"process_form.parent process"
											)
										}}
									</span>
								</div>

								<div class="vx-col w-full">
									<small class="label">Departments*</small>
									<v-select
										:options="client_departments"
										v-validate="'required'"
										required
										label="department_sub_function"
										name="department"
										v-model="process.department_ids"
										:reduce="(dept) => dept.id"
										:dir="$vs.rtl ? 'rtl' : 'ltr'"
										multiple
									/>
									<span
										class="text-danger text-sm"
										v-show="
											errors.has(
												'process_form.department'
											)
										"
									>
										{{
											errors.first(
												"process_form.department"
											)
										}}
									</span>
								</div>

								<div class="vx-col w-full mt-3">
									<vs-checkbox
										false-value="0"
										true-value="1"
										v-model="process.status"
										>Status</vs-checkbox
									>
								</div>
							</div>
						</div>
						<div class="vx-col w-1/2 mt-3">
							<vx-card
								title="Current Process Hierarchy"
								class="tree-view-card"
							>
								<div>
									<ul class="tree-view">
										<li
											class="pt-4 pb-4"
											v-for="tree in tree_view"
											:key="tree.id"
										>
											<tree-view :node="tree"></tree-view>
										</li>
									</ul>
								</div>
							</vx-card>
						</div>
					</div>

					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_process($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							@click="reset_process()"
							class="ml-4 mt-2"
							type="border"
							color="warning"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
		<!--IMPORT PROCESS FORM-->
		<vs-popup
			class="vs-con-loading__container"
			title="Import Processes"
			:active.sync="import_process_dialog"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2 ml-10">
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
							<vs-button class="ml-auto" v-on:click="load_process"
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
import DepartmentService from "@/services/DepartmentService.js";
import ProcessService from "@/services/ProcessService.js";
import ClientService from "@/services/ClientService.js";
import { VTree, VSelectTree } from "vue-tree-halower";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
	custom: {
		name: {
			required: "Name is a required field",
			alpha: "Your Name may only contain alphabetic characters",
		},

		description: {
			required: "Description is a required field",
		},

		processes: {
			required: "Process Name is a required field",
		},

		department: {
			required: "Departments is a required field",
		},
	},
};
// register custom messages
Validator.localize("en", dict);

import TreeView from "@/components/TreeView.vue";
import ConfigService from "@/services/ConfigService.js";
import vSelect from "vue-select";

export default {
	name: "ClinicProcesses",
	components: {
		"v-select": vSelect,
		TreeView,
		VTree,
		VSelectTree,
	},
	data() {
		return {
			client_id: -1,
			client_process_id: -1,
			process_dialog: false,
			popupActive1: false,
			edit_client_process_dialog: false,
			popupActive3: false,
			import_process_dialog: false,
			client_process_dept_dialog: false,
			processes: [],
			selected: [],
			available_process_levels: [1, 2, 3],
			tree_view: [],
			p_processes: [{ id: 0, name: "None", level: 1 }],
			client_departments: [],
			sub_departments: [],
			client_processes: [],

			selected_client_process_index: -1,
			client_process: {
				process_ids: [],
				status: 1,
			},
			client_update_process: {},
			old_client_process: {},
			process_segmentation: {
				// segmentation: "",
				description: "",
				status: 1,
			},
			client_department_processes: {},
			process: {},
			selected_process: {},
			doc_file: null,
			frequency: [],
			process_uploads: [],
		};
	},
	methods: {
		//getting master process
		get_processes() {
			this.processes = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_processes(this.client_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.processes.splice(
								0,
								_that.processes.length,
								...output.data
							);
							_that.client_processes = output.data || [];

							_that.$vs.loading.close();
						} else {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Get client process",
								text: "No data returned",
								color: "warning",
								timing: 4000,
							});
						}
					}
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
		get_client_processes() {
			const _that = this;
			this.client_processes = [];
			this.$vs.loading();

			ClientService.get_client_processes(this.client_id)
				.then((response) => {
					const output = response.data;
					// console.log(output, "client processses");
					if (output && output !== undefined) {
						if (output.success) {
							_that.client_processes = output.data || [];
							_that.$vs.loading.close();
						} else {
							_that.$vs.loading.close();
							_that.$vs.notify({
								title: "Get client process",
								text: output.error,
								color: "warning",
								timing: 4000,
							});
						}
					}
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

		getSelectedProcesses() {
			let selected_processes_id = [];

			this.selected.forEach((p) => {
				selected_processes_id.push(p.id);
				// console.log(this.selected_processes_id, "processes id");
			});
			this.client_process.process_ids = selected_processes_id;
		},
		get_client_departments() {
			const _that = this;
			this.client_departments = [];
			this.$vs.loading();
			ClientService.get_client_departments(this.client_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.client_departments = output.data;
							output.data.forEach((dept) => {
								_that.sub_departments.push(dept.sub_function);
							});
						} else {
							_that.$vs.notify({
								title: "Get client department",
								text: "No data returned",
								color: "warning",
								timing: 4000,
							});
						}
						// console.log(_that.sub_departments, "sub function");
					}
					_that.$vs.loading.close();
				})
				.catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Get client department",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
		create_client_process() {
			this.doc_file = null;
			this.selected_client_process_index = -1;
			this.client_process_id = -1;

			this.popupActive1 = true;
			this.resetClientProcess();
		},
		update_client_process(item, index) {
			this.doc_file = null;
			this.client_process_id = item.id || -1;
			this.selected_client_process_index = index;
			item.department_ids = [];
			if (item.departments && item.departments !== undefined) {
				item.departments.forEach((d) => {
					item.department_ids.push(d.client_department_id);
				});
			}
			this.selected_process = Object.assign(
				{},
				this.client_update_process
			);
			this.client_update_process = item;
			this.old_client_process = Object.assign(
				{},
				this.client_update_process
			);
			// this.client_update_process.process_id = this.client_process_id;
			this.edit_client_process_dialog = true;
			// console.log(this.client_update_process, "client edit");
		},

		update_client_process_department(item, index) {
			this.doc_file = null;
			this.client_process_id = item.id || -1;
			this.selected_client_process_index = index;
			item.department_ids = [];
			if (item.departments && item.departments !== undefined) {
				item.departments.forEach((d) => {
					item.department_ids.push(d.id);
				});
			}
			this.client_update_process = item;
			this.old_client_process = Object.assign(
				{},
				this.client_update_process
			);
			// this.client_update_process.process_id = this.client_process_id;
			this.edit_client_process_dialog = true;
			// console.log(this.client_update_process, "client edit");
		},
		close_edit_client_process(){
			if(this.selected_client_process_index >= 0){
				this.client_processes.splice(this.selected_client_process_index, 1, this.old_client_process);
			}
			
		},
		add_process_segmentation(item, index) {
			this.client_process_id = item.id || -1;

			this.selected_client_process_index = index;
			this.popupActive3 = true;
		},
		reset_process() {
			// console.log("reset edit add form");
			if (this.client_process_id != -1) {
				this.client_update_process = Object.assign(
					{},
					this.old_client_process
				);
			}
			this.process = Object.assign({}, this.selected_process);

			this.$validator.reset();
		},
		save_department_process() {
			const _that = this;
			// console.log("save department");

			this.$validator
				.validateAll("create_process_dep_form")
				.then((result) => {
					if (result) {
						if (
							_that.client_department_processes.process_ids
								.length > 0 &&
							_that.client_department_processes.department_id > 0
						) {
							_that.$vs.loading();
							_that.client_department_processes.client_id =
								_that.client_id;
							ClientService.create_client_department_processes(
								_that.client_department_processes.department_id,
								_that.client_department_processes
							)
								.then((response) => {
									const output = response.data;
									if (output && output !== undefined) {
										if (output.success) {
											_that.client_process_dept_dialog = false;
											_that.get_client_processes();
											_that.$vs.notify({
												title: "Save sucessful",
												text: "Department process has been added.",
												color: "success",
												timing: 4000,
											});
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
										title: "Error: Saving department process",
										text: err.message,
										color: "warning",
										timing: 4000,
									});
								});
						}
					}
				});
		},

		delete_client_process(index) {
			const _that = this;
			this.$vs.loading();
			ProcessService.delete_client_process(index)
				.then((response) => {
					const output = response.data;

					if (output && output !== undefined) {
						if (output.success) {
							_that.get_client_processes();
							_that.$vs.notify({
								title: "Delete sucessful",
								text: "Department process has been removed.",
								color: "success",
								timing: 4000,
							});
						} else {
							_that.$vs.notify({
								title: "Error: Saving department process",
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
						title: "Error: Deleting department process",
						text: err.message,
						color: "warning",
						timing: 4000,
					});
				});
		},
		process_tree(client_id) {
			if (this.client_processes.length > 0) {
				this.$router.push({
					path: `/pages/client/${client_id}/processtree`,
				});
			} else {
				this.$vs.notify({
					title: "Create process hierarchy",
					text: "No client processes found.",
					color: "warning",
					timing: 4000,
				});
			}
		},
		add_new_process() {
			this.process = Object.assign({}, ProcessService.process);
			if (this.client_departments.length === 0) {
				// console.log("No departments in the system");
				this.$vs.notify({
					title: "No department created for this client.",
					text: "Please create a department.",
					color: "warning",
					timing: 4000,
				});
			} else {
				this.$validator.reset();
				this.process_dialog = true;
			}
		},
		// reset_process() {
		// 	this.process = Object.assign({},this.selected_process);
		// 	this.$validator.reset();
		// },
		save_process(e) {
			e.preventDefault();
			try {
				// console.log("save new process from client process ");
				const _that = this;
				this.$validator.validateAll("process_form").then((result) => {
					if (result) {
						if (_that.client_process_id === -1) {
							_that.$vs.loading();
							ProcessService.create_process(
								_that.client_id,
								_that.process,
								_that.doc_file
							)
								.then((response) => {
									const data = response.data;
									// console.log(response, "process");
									if (data && data !== undefined) {
										if (data.success) {
											_that.client_processes.push(
												data.data
											);

											_that.process_dialog = false;
											_that.$vs.loading.close();
											_that.get_client_process_tree();
											_that.$vs.notify({
												position: "top-right",
												title: "Create process",
												text: "Process created successfully",
												color: "success",
												timing: 4000,
											});
											// location.reload();
										} else {
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
								})
								.catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Create process",
										text: "Failed.Invalid data",
										color: "warning",
										timing: 4000,
									});
								});
						}
					} else {
						_that.$vs.loading.close();
						// console.log("form validation error");
					}
				});
			} catch (error) {
				_that.$vs.loading();
				// console.log("error in validation");
			}
		},

		add_process_departments() {
			this.client_department_processes = Object.assign(
				{},
				DepartmentService.client_department_processes
			);
			this.$validator.reset();
			if (
				this.client_departments.length > 0 &&
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
		add_process(e) {
			e.preventDefault();
			try {
				const _that = this;
				if (this.client_process_id === -1) {
					this.$vs.loading();
					this.getSelectedProcesses();
					ProcessService.create_client_processes(
						this.client_id,
						this.client_process,
						this.doc_file
					)
						.then((response) => {
							// console.log(response);

							const output = response.data;
							// console.log(output.data.latest, "data output");
							if (output && output !== undefined) {
								if (output.success) {
									output.data.latest.forEach((p) => {
										_that.client_processes.push(p);
									});
									// _that.client_processes.push(output.data.latest);
									_that.popupActive1 = false;
									_that.$vs.loading.close();
									_that.$vs.notify({
										position: "top-right",
										title: "Create client process",
										text: "Saved successfully",
										color: "success",
										timing: 4000,
									});
								} else {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Create client process",
										text: "Invalid data",
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
								title: "Create client process",
								text: "Failed.Invalid data",
								color: "warning",
								timing: 4000,
							});
						});
				} else {
					this.$vs.loading();
					ProcessService.update_client_process(
						this.client_process_id,
						this.client_update_process,
						this.doc_file
					)
						.then((response) => {
							const output = response.data;

							// console.log(response, "edit client process");
							if (output && output !== undefined) {
								if (output.success) {
									if (
										_that.client_processes[
											_that.selected_client_process_index
										]
									) {
										//_that.client_processes[_that.selected_client_process_index] = output.data;

										_that.client_processes.splice(
											_that.selected_client_process_index,
											1,
											output.data
										);
									}
									_that.edit_client_process_dialog = false;
									_that.$vs.loading.close();
									_that.$vs.notify({
										position: "top-right",
										title: "Edit client process",
										text: "Saved successfully",
										color: "success",
										timing: 4000,
									});
								} else {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Edit client process",
										text: "Invalid data",
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
								title: "Edit client process",
								text: "Failed.Invalid data",
								color: "warning",
								timing: 4000,
							});
						});
					// console.log("update process");
				}
			} catch (error) {
				// console.log("error during form submission");
				this.$vs.loading.close();
			}
		},
		add_segmentation() {
			const _that = this;
			// console.log("Segmentation data");
			ProcessService.add_process_segmentation(
				this.client_process_id,
				this.process_segmentation
			).then((response) => {
				const output = response.data;

				if (output && output !== undefined) {
					if (output.success) {
						_that.process_segmentation = output.data;
						_that.popupActive3 = false;
					}
				}
			});
		},
		setProcess(value) {
			this.client_update_process.name = value.name;
		},
		setDepartment(value) {
			this.client_update_process.functions = value.department_label;
			// console.log(value, "department");
		},
		setSubdepartment(value) {
			this.client_update_process.sub_functions = value.department_label;
			// console.log(value, "sub	department");
		},
		resetClientProcess() {
			// this.items = this.items.filter((i) => !this.selected.includes(i));
			this.selected = [];
		},
		get_process_department_label(item) {
			let ret_label = "";

			if (item && item !== undefined) {
				ret_label = item.join(",");
			}

			return ret_label;
		},

		get_client_process_tree() {
			//	this.client_processes = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_process_tree(this.client_id)
				.then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.process_tree_data(output.data);
						} else {
							_that.$vs.notify({
								title: "Get client processes",
								text: "No data returned",
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
						title: "Get client processes",
						text: "No data returned",
						color: "warning",
						timing: 4000,
					});
				});
		},

		process_tree_data(data) {
			let temp_tree = [];
			this.available_process_levels = [];

			// 			id: 2
			// level_id: 1
			// name: "Reporting and analytics"
			// parent_process_tree_id: 0
			// process_label: "Reporting and analytics"

			// let tree_item = this.tree_view;
			this.p_processes = [{ id: 0, name: "None ", level: 1 }];

			data.forEach((item) => {
				if (
					this.available_process_levels[item.level_id] === undefined
				) {
					this.available_process_levels[item.level_id] = {
						id: item.id,
						name: `Level ${item.level_id}`,
					};
				}
				const t_obj = {
					id: item.id,
					name: item.name,
					children: [],
				};
				let parent_obj = {
					id: item.id,
					name: `${item.name} - level ${item.level_id}`,
					level: item.level_id,
				};

				this.p_processes.push(parent_obj);

				if (item.parent_process_tree_id > 0) {
					const tree_item = ProcessService.find_tree_item(
						item.parent_process_tree_id,
						this.tree_view
					);
					tree_item.children.push(t_obj);
				} else if (this.tree_view.length == 0) {
					this.tree_view.push(t_obj);
				}
			});
		},
		doc_select(e) {
			const files = e.target.files;
			// console.log("doc selected");
			if (files.length === 0) {
				return;
			}

			this.doc_file = files[0];
		},
		on_document_view(id) {
			let route =
				process.env.VUE_APP_BASE_URL + `/client-process-document/${id}`;
			window.open(route, "_blank");
			//this.$router.push({ path: `/survey/${id}/form/${token}` });
		},

		load_process(e) {
			e.preventDefault();
			try {
				// client_processes
				// this.process_uploads=[];
				this.$vs.loading();
				this.client_processes = [];
				const _that = this;
				if (this.client_id > 0) {
					ProcessService.import_client_processes(
						this.client_id,
						this.doc_file
					)
						.then((response) => {
							// console.log("response", response);
							const output = response.data;
							if (output && output !== undefined) {
								if (output.success) {
									_that.get_client_processes();
									_that.import_process_dialog = false;
									_that.$vs.loading.close();
									_that.$vs.notify({
										position: "top-right",
										title: "Import client process",
										text: "Processes imported successfully",
										color: "success",
										timing: 4000,
									});
								} else {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Import client process",
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
								title: "Import client process",
								text: "Invalid data",
								color: "warning",
								timing: 4000,
							});
						});
				} else {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Invalid client",
						color: "warning",
						timing: 4000,
					});
				}
			} catch (error) {
				_that.$vs.loading.close();
				// console.log("error while uploading form");
			}
		},
	},
	created() {
		this.client_id = this.$route.params.id || -1;
		this.frequency = ConfigService.frequencies;
		this.unit_measure = ConfigService.unit_measures;
		this.client_department_processes = Object.assign(
			{},
			DepartmentService.client_department_processes
		);
		this.get_processes();
		// this.get_client_processes();
		this.get_client_departments();
		this.get_client_process_tree();
	},
};
</script>
<style lang="scss">
.add_process.con-vs-popup .vs-popup {
	width: 70% !important;
}

#edit_process_form {
	.con-vs-popup .vs-popup {
		width: 50vw !important;
	}
}
</style>
