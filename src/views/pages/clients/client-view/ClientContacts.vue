<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="Client Employees">
				<template slot="actions">
					<vs-button
						@click="add_contact"
						class
						color="primary"
						type="filled"
						>Add Contact</vs-button
					>
				</template>
				<div slot="no-body" class="mt-4">
					<vs-table
						:data="contacts"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>NAME</vs-th>
							<vs-th>EMAIL</vs-th>
							<vs-th class="float-left">VERIFIED</vs-th>
							<vs-th>ROLE</vs-th>
							<vs-th>STATUS</vs-th>
							<vs-th>ACTION</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr :key="indextr" v-for="(tr, indextr) in data">
								<vs-td :data="data[indextr].name">{{
									data[indextr].name
								}}</vs-td>

								<vs-td :data="data[indextr].email">{{
									data[indextr].email
								}}</vs-td>

								<vs-td :data="data[indextr].role">{{
									data[indextr].role
								}}</vs-td>

								<vs-td :data="data[indextr].verified">
									<vs-chip
										v-if="data[indextr].verified"
										transparent
										color="primary"
										>verified</vs-chip
									>
									<vs-chip
										v-if="!data[indextr].verified"
										transparent
										color="danger"
										>not verified</vs-chip
									>
								</vs-td>
								<vs-td :data="data[indextr].role">{{
									data[indextr].role
								}}</vs-td>
								<vs-td :data="data[indextr].status">
									<vs-chip
										v-if="data[indextr].status === 1"
										transparent
										color="primary"
										>active</vs-chip
									>
									<vs-chip
										v-if="data[indextr].status !== 1"
										transparent
										color="danger"
										>deactive</vs-chip
									>
								</vs-td>
								<vs-td>
									<vx-tooltip text="Delete" position="left">
										<!--                    <vs-button @click="popupActive=true"-->
										<vs-button
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-delete"
										></vs-button>
									</vx-tooltip>
								</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</div>
			</vx-card>
		</div>

		<!--ADD CLIENT CONTACT FORM-->
		<vs-popup
			class="vs-con-loading__container clinic-create-popup"
			title="Create Contacts"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<form>
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name</small>
							<vs-input
								v-validate="'required|min:3'"
								required
								name="name"
								v-model="contact.name"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('name')"
								>{{ errors.first("name") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Email</small>
							<vs-input
								v-validate="'required|email'"
								name="email"
								v-model="contact.email"
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
						<div class="vx-col w-1/2">
							<small class="label">Role</small>
							<vs-input
								v-validate="'required'"
								name="role"
								v-model="contact.role"
								class="w-full required"
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('role')"
							>
								{{ errors.first("role") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label">Phone</small>
							<vs-input
								v-validate="'required|min:4'"
								name="phone1"
								v-model="contact.phone1"
								class="w-full required"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('phone')"
							>
								{{ errors.first("phone") }}
							</span>
						</div>
						<div class="vx-col w-1/2">
							<vs-input
								name="client_id"
								:value="clinic_id"
								class="w-full required"
								v-model="contact.client_id"
								type="hidden"
							/>
						</div>
					</div>

					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Status</small>
							<vs-checkbox
								false-value="0"
								true-value="1"
								v-model="contact.status"
								>Status</vs-checkbox
							>
						</div>
					</div>

					<!--Save & Reset Button-->
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							@click="save_contact($event)"
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
import ClientService from "@/services/ClientService.js";

export default {
	name: "Clinic Contacts",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			contact_id: -1,
			selected_contact_index: -1,
			clinic_id: -1,
			contact: {
				id: -1,
				name: "",
				email: "",
				verified: 0,
				role: "",
				status: 0,
				action: 0,
				phone1: "",
				client_id: this.$route.params.id,
			},
			contacts: [],
		};
	},
	methods: {
		get_client_contacts() {
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_contact(this.clinic_id).then(
				(response) => {
					const data = response.data;
					// console.log(response, "contacts");
					if (data && data !== undefined) {
						if (data.success) {
							_that.contacts = data.data || {};
						}
					}
					_that.$vs.loading.close();
				}
			);
		},
		add_contact() {
			// console.log("create contact");
			this.selected_contact_index = -1;
			this.contact_id = -1;
			this.contact;
			this.popupActive = true;
		},
		save_contact(e) {
			e.preventDefault();
			try {
				const _that = this;
				this.$validator.validateAll().then((result) => {
					if (result) {
						this.$vs.loading();
						// console.log(result, "result");
						// console.log(this.contact, "contact");
						ClientService.create_client_contact(
							this.clinic_id,
							this.contact
						).then((response) => {
							const data = response.data;
							// console.log(response, "new conatct");
							if (data && data !== undefined) {
								if (data.success) {
									_that.contacts.push(data.data);
									_that.popupActive = false;
								} else {
									// console.log("new contact is not added");
								}
							}
							_that.$vs.loading.close();
						});
					}
				});
			} catch (error) {
				console.log("error during form submission");
			}
		},
	},
	created() {
		this.clinic_id = this.$route.params.id;
		this.get_client_contacts();

		// console.log(this.clinic_id, "clinic id");
	},
};
</script>

<style scoped></style>
