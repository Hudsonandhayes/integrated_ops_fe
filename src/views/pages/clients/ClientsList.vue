<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vs-breadcrumb class="ml-4" :items="breadcrumbs"></vs-breadcrumb>
			<vx-card title="Clients">
				<template slot="actions">
					<vs-button
						@click="create_client"
						class
						color="primary"
						type="filled"
						>Create client</vs-button
					>
				</template>
				<div slot="no-body" class="mx-2">
					<vs-table
						search
						max-items="10"
						pagination
						:data="clients"
						stripe
						class="
							table-dark-inverted table-auto
							vs-con-loading__container
						"
					>
						>
						<template slot="thead">
							<vs-th>Name*</vs-th>
							<vs-th>Industry</vs-th>
							<vs-th>Address*</vs-th>
							<vs-th>FTE Weekly (hrs)*</vs-th>
							<vs-th>FTE Monthly (hrs)*</vs-th>
							<vs-th>FTE Quarterly (hrs)*</vs-th>
							<vs-th>FTE Yearly (hrs)*</vs-th>
							<vs-th>Utilisation Rate*</vs-th>
							<vs-th>Email*</vs-th>
							<vs-th>Phone*</vs-th>
							<!-- <vs-th>Notes</vs-th> -->
							<vs-th>Status*</vs-th>
							<vs-th>Action</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								class="cursor-pointer"
							>
								<vs-td :data="tr.name">{{ tr.name }}</vs-td>
								<vs-td :data="tr.industry">{{
									tr.industry
								}}</vs-td>

								<vs-td :data="tr.address">{{
									tr.address
								}}</vs-td>

								<vs-td :data="tr.standard_weekly_hours">{{
									tr.standard_weekly_hours
								}}</vs-td>

								<vs-td :data="tr.standard_monthly_hours">{{
									tr.standard_monthly_hours
								}}</vs-td>

								<vs-td :data="tr.standard_quarterly_hours">{{
									tr.standard_quarterly_hours
								}}</vs-td>

								<vs-td :data="tr.standard_yearly_hours">{{
									tr.standard_yearly_hours
								}}</vs-td>

								<vs-td :data="tr.utilisation_rate">{{
									tr.utilisation_rate
								}}</vs-td>

								<vs-td :data="tr.email">{{ tr.email }}</vs-td>

								<vs-td :data="tr.phone1">{{ tr.phone1 }}</vs-td>
								<!-- <vs-td :data="tr.notes">{{
									tr.notes
								}}</vs-td> -->

								<vs-td :data="tr.status">
									<vs-chip
										v-if="
											tr.status === false ||
											tr.status == 0
										"
										transparent
										color="warning"
										>pending</vs-chip
									>
									<vs-chip
										v-if="
											tr.status === true || tr.status == 1
										"
										transparent
										color="primary"
										>enabled</vs-chip
									>
								</vs-td>
								<vs-td>
									<div class="vx-row justify-evenly">
										<vx-tooltip text="Edit" position="left">
											<vs-button
												@click.native="
													update_client(tr, indextr)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-edit"
											></vs-button>
										</vx-tooltip>
										<vx-tooltip text="View" position="left">
											<vs-button
												@click.native="
													view_client(tr.id)
												"
												radius
												color="primary"
												type="border"
												icon-pack="feather"
												icon="icon-eye"
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
			class="vs-con-loading__container clinic-create-popup"
			:title="client_title"
			:active.sync="popupActive"
			:buttons-hidden="true"
			@close="close_edit_dialog"
		>
			<form>
				<small>* indicates required fields</small>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Name*</small>
							<vs-input
								v-validate="'required|alpha_spaces'"
								name="name"
								v-model="client.name"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('name')"
								>{{ errors.first("name") }}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Industry</small>
							<vs-input
								v-validate="'alpha_spaces'"
								name="industry"
								v-model="client.industry"
								class="w-full"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('industry')"
								>{{ errors.first("industry") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Phone*</small>
							<vs-input
								v-validate="'required|numeric'"
								name="phone1"
								v-model="client.phone1"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('phone1')"
							>
								{{ errors.first("phone1") }}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<small class="label">Email*</small>
							<vs-input
								v-validate="'required|email'"
								name="email"
								v-model="client.email"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('email')"
							>
								{{ errors.first("email") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Address*</small>
							<vs-textarea
								v-model="client.address"
								height="100px"
								name="address"
								v-validate="'required|min:2'"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('address')"
							>
								{{ errors.first("address") }}
							</span>
						</div>
					</div>

					<div class="vx-row mb-3">
						<span>Std FTE (hrs)</span>
						<div class="vx-col w-1/6">
							<small class="label">Weekly*</small>
							<vs-input
								v-model="client.standard_weekly_hours"
								v-validate="'required|decimal:3'"
								name="standard_weekly_hours"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('standard_weekly_hours')"
							>
								{{ errors.first("standard_weekly_hours") }}
							</span>
						</div>
						<div class="vx-col w-1/6">
							<small class="label">Monthly*</small>
							<vs-input
								v-validate="'required|decimal:3'"
								name="standard_monthly_hours"
								v-model="client.standard_monthly_hours"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('standard_monthly_hours')"
							>
								{{ errors.first("standard_monthly_hours") }}
							</span>
						</div>
						<div class="vx-col w-1/6">
							<small class="label">Quarterly*</small>
							<vs-input
								v-validate="'required|decimal:3'"
								name="standard_quarterly_hours"
								v-model="client.standard_quarterly_hours"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('standard_quarterly_hours')"
							>
								{{ errors.first("standard_quarterly_hours") }}
							</span>
						</div>
						<div class="vx-col w-1/6">
							<small class="label">Yearly*</small>
							<vs-input
								v-validate="'required|decimal:3'"
								name="standard_yearly_hours"
								v-model="client.standard_yearly_hours"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('standard_yearly_hours')"
							>
								{{ errors.first("standard_yearly_hours") }}
							</span>
						</div>
						<div class="vx-col w-1/6">
							<small class="label">Utilisation Rate*</small>
							<vs-input
								v-validate="'required|decimal:3'"
								name="utilisation_rate"
								v-model="client.utilisation_rate"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('utilisation_rate')"
							>
								{{ errors.first("utilisation_rate") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Notes</small>
							<vs-textarea
								v-model="client.notes"
								height="100px"
								name="notes"
							/>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="client.status"
								>Status</vs-checkbox
							>
						</div>
					</div>
					<!-- Save & Reset Button -->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_client($event)"
							class="ml-auto mt-2"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							type="border"
							color="warning"
							@click="reset_client"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>
	</div>
</template>

<script>
import ClientService from "@/services/ClientService.js";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
	custom: {
		// name: {
		//   required: 'This is a required field',
		//   alpha: "Your name may only contain alphabetic characters"
		// },
		phone1: {
			required: "Phone field is  required ",
		},
		standard_weekly_hours: {
			required: "Weekly field is required",
			decimal:
				"The Weekly Hours field must be numeric and may contain 3 decimal points",
		},
		standard_monthly_hours: {
			required: "Monthly field is required",
			decimal:
				"The Monthly Hours field must be numeric and may contain 3 decimal points",
		},
		standard_quarterly_hours: {
			required: "Quarterly field is required",
			decimal:
				"The Quarterly Hours field must be numeric and may contain 3 decimal points",
		},
		standard_yearly_hours: {
			required: "Yearly field is required",
			decimal:
				"The Yearly Hours field must be numeric and may contain 3 decimal points",
		},
		utilisation_rate: {
			required: "Utilisation Rate field is required",
			decimal:
				"The Utilisation Rate field must be numeric and may contain 3 decimal points",
		},
	},
};
// register custom messages
Validator.localize("en", dict);

export default {
	name: "AllUsersList",
	data() {
		return {
			client_title: "Create Client",
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{ title: "Clients List", url: `/pages/clients`, active: true },
			],
			client_id: -1,
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			selected_client_index: -1,
			client: {},
			old_clients: {},
			clients: [],
		};
	},
	components: {},
	methods: {
		view_client(id) {
			this.$router.push({ path: `/pages/client/${id}` });
		},

		save_client(e) {
			e.preventDefault();
			try {
				const _that = this;

				this.$validator.validateAll().then((result) => {
					if (result) {
						_that.$vs.loading();
						if (_that.client_id === -1) {
							ClientService.create_client(this.client)
								.then((response) => {
									const data = response.data;

									// console.log(response, "client return");

									if (data && data !== undefined) {
										if (data.success) {
											_that.clients.push(data.data);
											_that.popupActive = false;
											_that.$vs.notify({
												title: "Save successful",
												text: "Client has been created!",
												color: "success",
												time: 3000,
												position: "top-right",
											});
										} else {
											_that.$vs.notify({
												title: "Error creating new Client.",
												text: data.error,
												color: "warning",
												timing: 3000,
											});
										}
									}
									_that.$vs.loading.close();
								})
								.catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Error creating new Client",
										text: "Api Error",
										color: "warning",
										timing: 4000,
									});
								});
						} else if (_that.client_id > 0) {
							ClientService.update_client(
								_that.client_id,
								_that.client
							)
								.then((response) => {
									const data = response.data;

									if (data && data !== undefined) {
										if (data.success) {
											if (
												_that.clients[
													_that.selected_client_index
												]
											) {
												_that.clients.splice(
													_that.selected_client_index,
													1,
													data.data
												);
											}
											_that.popupActive = false;
											_that.$vs.notify({
												title: "Save successful",
												text: "Client details have been updated!",
												color: "success",
												time: 3000,
												position: "top-right",
											});
										} else {
											_that.$vs.notify({
												title: "Error updating new Client.",
												text: data.error,
												color: "warning",
												timing: 3000,
											});
										}
									}
									_that.$vs.loading.close();
								})
								.catch((err) => {
									_that.$vs.loading.close();
									_that.$vs.notify({
										title: "Error updating Client",
										text: "API Error.",
										color: "warning",
										timing: 4000,
									});
								});
						}
					}
				});
			} catch (error) {
				_that.$vs.loading();
				// console.log("error during form submission");
			}
		},
		create_client() {
			// console.log("creating client");
			this.selected_client_index = -1;
			this.client_id = -1;
			this.reset_client();
			this.client;
			this.client_title = "Create Client";
			// this.popupActive = true;
			this.client = Object.assign({}, ClientService.client);
			this.old_clients = Object.assign({}, this.client);
			this.popupActive = true;
		},
		close_edit_dialog() {
			if (this.selected_client_index >= 0) {
				this.clients.splice(
					this.selected_client_index,
					1,
					this.old_clients
				);
			}
		},

		update_client(client, index) {
			this.client_id = client.id || -1;
			this.client_title = "Edit client " + client.name;
			this.selected_client_index = index;
			this.client = client;
			this.old_clients = Object.assign({}, client);
			this.popupActive = true;
		},

		reset_client() {
			this.client = Object.assign({}, this.old_clients);
			this.$validator.reset();
		},

		get_clients() {
			this.clients = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_clients()
				.then((response) => {
					const data = response.data;
					//console.log(data, "clients");
					if (data && data !== undefined) {
						if (data.success) {
							_that.clients = data.data || {};
						} else {
							_that.$vs.notify({
								title: "Get clients",
								text: data.error,
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
						title: "Get clients",
						text: "No data returned.",
						color: "warning",
						timing: 4000,
					});
				});
		},
	},
	created() {
		this.get_clients();

		this.client = ClientService.client;
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
