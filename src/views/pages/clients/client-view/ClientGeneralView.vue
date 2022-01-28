<template>
	<vx-card no-shadow>
		<form data-vv-scope="client_form" id="client_form">
			<div class="vx-row mb-3">
				<div class="vx-col w-1/2">
					<small class="label">Name*</small>
					<vs-input
						v-validate="'required|min:3'"
						name="name"
						class="w-full required"
						v-model="client.name"
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.name')"
					>
						{{ errors.first("client_form.name") }}
					</span>
				</div>
				<div class="vx-col w-1/2">
					<small class="label">Industry</small>
					<vs-input
						v-validate="'alpha_spaces'"
						name="industry"
						class="w-full"
						v-model="client.industry"
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.industry')"
					>
						{{ errors.first("client_form.industry") }}
					</span>
				</div>
			</div>
			<div class="vx-row mb-3">
				<div class="vx-col w-1/2">
					<small class="label">Phone*</small>
					<vs-input
						v-validate="'required'"
						name="phone1"
						v-model="client.phone1"
						class="w-full required"
						label
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.phone1')"
					>
						{{ errors.first("client_form.phone1") }}
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
						v-show="errors.has('client_form.email')"
					>
						{{ errors.first("client_form.email") }}
					</span>
				</div>
			</div>
			<div class="vx-row mb-3">
				<div class="vx-col w-full">
					<small class="label">Address*</small>
					<vs-textarea
						height="100px"
						v-validate="'required|min:2'"
						name="address"
						v-model="client.address"
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.address')"
					>
						{{ errors.first("client_form.address") }}
					</span>
				</div>
			</div>
			<div class="vx-row mb-3 pl-5">
				<span>Std FTE (hrs)</span>
				<div class="vx-col w-1/6">
					<small class="label">Weekly*</small>
					<vs-input
						v-validate="'required'"
						name="standard_weekly_hours"
						v-model="client.standard_weekly_hours"
						class="w-full required"
						label
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.standard_weekly_hours')"
					>
						{{ errors.first("client_form.standard_weekly_hours") }}
					</span>
				</div>
				<div class="vx-col w-1/6">
					<small class="label">Monthly*</small>
					<vs-input
						v-validate="'required'"
						name="standard_monthly_hours"
						v-model="client.standard_monthly_hours"
						class="w-full required"
						label
					/>
					<span
						class="text-danger text-sm"
						v-show="
							errors.has('client_form.standard_monthly_hours')
						"
					>
						{{ errors.first("client_form.standard_monthly_hours") }}
					</span>
				</div>
				<div class="vx-col w-1/6">
					<small class="label">Quarterly*</small>
					<vs-input
						v-validate="'required'"
						name="standard_quarterly_hours"
						v-model="client.standard_quarterly_hours"
						class="w-full required"
						label
					/>
					<span
						class="text-danger text-sm"
						v-show="
							errors.has('client_form.standard_quarterly_hours')
						"
					>
						{{
							errors.first("client_form.standard_quarterly_hours")
						}}
					</span>
				</div>
				<div class="vx-col w-1/6">
					<small class="label">Yearly*</small>
					<vs-input
						v-validate="'required'"
						name="standard_yearly_hours"
						v-model="client.standard_yearly_hours"
						class="w-full required"
						label
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.standard_yearly_hours')"
					>
						{{ errors.first("client_form.standard_yearly_hours") }}
					</span>
				</div>
				<div class="vx-col w-1/6">
					<small class="label">Utilisation Rate*</small>
					<vs-input
						v-validate="'required'"
						name="utilisation_rate"
						v-model="client.utilisation_rate"
						class="w-full required"
						label
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.utilisation_rate')"
					>
						{{ errors.first("client_form.utilisation_rate") }}
					</span>
				</div>
			</div>
			<div class="vx-row mb-3">
				<div class="vx-col w-full">
					<small class="label">Notes</small>
					<vs-textarea
						height="100px"
						v-validate="'min:2'"
						name="notes"
						v-model="client.notes"
					/>
					<span
						class="text-danger text-sm"
						v-show="errors.has('client_form.notes')"
					>
						{{ errors.first("client_form.notes") }}
					</span>
				</div>
			</div>
			<!-- Save & Reset Button -->
			<div class="flex flex-wrap items-center justify-end">
				<vs-button @click="save_client($event)" class="ml-auto mt-2"
					>Save Changes</vs-button
				>
				<vs-button
					@click="reset_client()"
					class="ml-4 mt-2"
					type="border"
					color="warning"
					>Reset</vs-button
				>
			</div>
		</form>
	</vx-card>
</template>

<script>
import ClientService from "@/services/ClientService";
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
		},
		standard_monthly_hours: {
			required: "Monthly field is required",
		},
		standard_quarterly_hours: {
			required: "Quarterly field is required",
		},
		standard_yearly_hours: {
			required: "Yearly field is required",
		},
		utilisation_rate: {
			required: "Utilisation Rate field is required",
		},
	},
};
// register custom messages
Validator.localize("en", dict);

export default {
	data() {
		return {
			client_id: -1,
			client: {},
			old_client_data: {},
		};
	},
	methods: {
		get_client() {
			const _that = this;
			this.$vs.loading();
			if (this.client_id > 0) {
				ClientService.get_client(this.client_id)
					.then((response) => {
						const data = response.data;
						if (data && data !== undefined) {
							if (data.success) {
								_that.client = data.data || {};
								_that.old_client_data = Object.assign(
									{},
									data.data
								);
							} else {
								_that.$vs.notify({
									title: "Get client",
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
							title: "Get client",
							text: "No data returned",
							color: "warning",
							timing: 4000,
						});
					});
			}
		},
		reset_client() {
			this.client = Object.assign({}, this.old_client_data);
			this.$validator.reset();
		},

		save_client() {
			try {
				const _that = this;
				this.$validator.validateAll("client_form").then((result) => {
					if (result) {
						_that.$vs.loading();
						ClientService.update_client(
							_that.client_id,
							_that.client
						)
							.then((response) => {
								const output = response.data;
								if (
									output &&
									output != undefined &&
									output.success
								) {
									_that.old_client_data = Object.assign(
										{},
										_that.client
									);

									_that.$vs.notify({
										title: "Save successful",
										text: "Client details has been updated!",
										color: "success",
										time: 3000,
										position: "top-right",
									});
								} else {
									_that.$vs.notify({
										title: "Edit client details",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								}
								_that.$vs.loading.close();
							})
							.catch((err) => {
								_that.$vs.loading.close();
								_that.$vs.notify({
									title: "Edit client details",
									text: "Invalid data",
									color: "warning",
									timing: 4000,
								});
							});
					}
				});
			} catch (error) {
				_that.$vs.loading.close();
				console.log("update client failed." + error.message);
			}
		},
	},
	computed: {
		activeUserInfo() {
			return this.$store.state.AppActiveUser;
		},
	},

	created() {
		this.client_id = this.$route.params.id || -1;
		this.get_client();
	},
};
</script>
