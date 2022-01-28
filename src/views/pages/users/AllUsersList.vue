<template>
	<div class="vx-row">
		<div class="vx-col w-full">
			<vx-card title="USERS">
				<template slot="actions">
					<vs-button
						@click="create_user"
						class
						color="primary"
						type="filled"
						>Create User</vs-button
					>
				</template>
				<div slot="no-body" class="mt-4">
					<vs-table
						max-items="10"
						pagination
						:data="users"
						stripe
						class="
							table-dark-inverted table-auto
							vs-con-loading__container
						"
					>
						<template slot="thead">
							<vs-th>NAME</vs-th>
							<vs-th>EMAIL</vs-th>
							<vs-th>ROLE</vs-th>
							<vs-th>STATUS</vs-th>
							<vs-th>ACTION</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr :key="indextr" v-for="(tr, indextr) in data">
								<vs-td :data="tr.name">{{ tr.name }}</vs-td>

								<vs-td :data="tr.email">{{ tr.r_email }}</vs-td>

								<vs-td :data="tr.role_id">{{
									get_role_label(tr.role_id)
								}}</vs-td>
								<vs-td :data="tr.status">{{
									get_status_label(tr.status)
								}}</vs-td>
								<vs-td>
									<vx-tooltip text="Edit" position="left">
										<vs-button
											@click="edit_user(tr, indextr)"
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-edit"
										></vs-button>
									</vx-tooltip>
									<vx-tooltip
										text="Change Password"
										position="left"
									>
										<vs-button
											@click="change_password(tr.id)"
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-edit"
										></vs-button>
									</vx-tooltip>
									<!-- <vx-tooltip
										text="Add Client"
										position="left"
									>
										<vs-button
											@click="add_client(tr.indextr)"
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-edit"
										></vs-button>
									</vx-tooltip> -->
								</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</div>
			</vx-card>
		</div>
		<vs-popup
			class="vs-con-loading__container user-create-popup"
			:title="user_form_title"
			:active.sync="user_create_dialog"
			:buttons-hidden="true"
			@close="close_edit_user_dialog"
		>
			<form data-vv-scope="user_form" id="user_form">
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Name*</small>
							<vs-input
								v-validate="'required|min:3'"
								name="name"
								class="w-full required"
								v-model="user.name"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('user_form.name')"
								>{{ errors.first("user_form.name") }}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Email*</small>
							<vs-input
								v-validate="'required|email'"
								class="w-full"
								name="email"
								type="text"
								v-model="user.email"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('user_form.email')"
							>
								{{ errors.first("user_form.email") }}
							</span>
						</div>
					</div>
					<div v-if="user.id === -1" class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Password*</small>
							<vs-input
								ref="user_password"
								v-validate="'required|min:8'"
								name="password"
								class="w-full required"
								v-model="user.password"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('user_form.password')"
								>{{ errors.first("user_form.password") }}</span
							>
						</div>
					</div>
					<div v-if="user.id === -1" class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Confirm Password*</small>
							<vs-input
								v-validate="
									'required|confirmed:user_password|min:8'
								"
								name="confirm_password"
								class="w-full required"
								v-model="user.confirm_password"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has('user_form.confirm_password')
								"
								>{{
									errors.first("user_form.confirm_password")
								}}</span
							>
						</div>
					</div>
					<!-- <div class="vx-row mb-3">
			   		<div class="vx-col w-full">
						<small class="label"> Role</small>
						<v-select
							label="name"
							name="role_id"
							v-validate="'required'"
							required
							:closeOnSelect="false"
							:options="user_roles"
							:reduce="(role) => role.id"
							v-model="user.role_id"
							:dir="$vs.rtl ? 'rtl' : 'ltr'"
							class="w-full required"
						/>
						<span
							class="text-danger text-sm"
							v-show="errors.has('department_id')"
							>{{ errors.first("department_id") }}
						</span>
					</div>
				</div> -->

					<div class="vx-row mb-3">
						<div class="vx-col w-1/2">
							<small class="label"></small>
							<vs-checkbox
								v-model="user.status"
								v-validate="'required'"
								name="status"
								>Status</vs-checkbox
							>
							<span
								class="text-danger text-sm"
								v-show="errors.has('user_form.status')"
							>
								{{ errors.first("user_form.status") }}
							</span>
						</div>
					</div>
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button class="ml-auto mt-2" v-on:click="save_user"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							type="border"
							v-on:click="reset_user"
							color="warning"
							>Reset</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>

		<vs-popup
			class="vs-con-loading__container change_password_dialog"
			title="Change Password"
			:active.sync="change_password_dialog"
			:buttons-hidden="true"
		>
			<form data-vv-scope="change_pass_form" id="change_pass_form">
				<vx-card no-shadow>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Current Password</small>
							<vs-input
								v-validate="'required|min:8'"
								name="current_password"
								class="w-full required"
								v-model="user_pass.current_password"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has(
										'change_pass_form.current_password'
									)
								"
								>{{
									errors.first(
										"change_pass_form.current_password"
									)
								}}</span
							>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">New Password</small>
							<vs-input
								ref="new_password"
								v-validate="'required|min:8'"
								class="w-full"
								name="password"
								type="text"
								v-model="user_pass.password"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="errors.has('change_pass_form.password')"
							>
								{{ errors.first("change_pass_form.password") }}
							</span>
						</div>
					</div>
					<div class="vx-row mb-3">
						<div class="vx-col w-full">
							<small class="label">Confirm Password</small>
							<vs-input
								v-validate="
									'required|confirmed:new_password|min:8'
								"
								class="w-full"
								name="confirm_password"
								type="text"
								v-model="user_pass.confirm_password"
								label
							/>
							<span
								class="text-danger text-sm"
								v-show="
									errors.has(
										'change_pass_form.confirm_password'
									)
								"
							>
								{{
									errors.first(
										"change_pass_form.confirm_password"
									)
								}}
							</span>
						</div>
					</div>
					<div class="flex flex-wrap items-center justify-end mt-8">
						<vs-button
							class="ml-auto mt-2"
							v-on:click="save_user_password"
							>Save Changes</vs-button
						>
						<vs-button
							class="ml-4 mt-2"
							type="border"
							v-on:click="
								change_password_dialog = !change_password_dialog
							"
							color="warning"
							>Close</vs-button
						>
					</div>
				</vx-card>
			</form>
		</vs-popup>

		<vs-popup
			class="vs-con-loading__container client_add_dialog"
			title="Add Client"
			:active.sync="client_add_dialog"
			:buttons-hidden="true"
		>
		</vs-popup>
	</div>
</template>

<script>
import AuthService from "@/services/AuthService.js";
import vSelect from "vue-select";

export default {
	name: "AllUsersList",
	data() {
		return {
			user_form_title: "Create Consultant",
			user_create_dialog: false,
			change_password_dialog: false,
			client_add_dialog: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			selected_user_index: -1,
			user: {},
			old_user: {},
			users: [],
			user_roles: [],
			user_pass: {},
			roles_arr: AuthService.get_user_roles(),
			status_arr: AuthService.get_user_status(),
		};
	},
	components: {
		"v-select": vSelect,
	},
	methods: {
		get_status_label(id) {
			return this.status_arr[id] !== undefined
				? this.status_arr[id]
				: "N/A";
		},
		get_role_label(id) {
			return this.roles_arr[id] !== undefined
				? this.roles_arr[id]
				: "N/A";
		},
		reset_user() {
			this.user = Object.assign({}, this.old_user);
			this.$validator.reset();
		},
		create_user() {
			this.old_user = Object.assign({}, AuthService.user);
			this.user = Object.assign({}, AuthService.user);
			this.user_create_dialog = true;
			this.user_form_title = "Create New Consultant";
			this.reset_user();
		},
		edit_user(item, index) {
			this.user = item;
			this.selected_user_index = index;
			this.user_create_dialog = true;
			this.user_form_title = "Edit Consultant";
			this.old_user = Object.assign({}, item);
		},
		close_edit_user_dialog(){
			if(this.selected_user_index >= 0){
				this.users.splice(this.selected_user_index, 1, this.old_user);
			}
		},
		change_password(item) {
			this.user_pass = Object.assign({}, AuthService.user_pass);
			this.user_pass.id = item;
			this.change_password_dialog = true;
		},
		add_client(item, index) {
			this.user = item;
			this.selected_user_index = index;
			this.client_add_dialog = true;
			this.old_user = Object.assign({}, item);
		},
		save_user() {
			try {
				const _that = this;

				this.$validator.validateAll("user_form").then((result) => {
					if (result) {
						_that.$vs.loading();
						if (_that.user.id === -1) {
							AuthService.create_user(_that.user)
								.then((response) => {
									const output = response.data;

									if (output && output !== undefined) {
										if (output.success) {
											_that.users.push(output.data);
											_that.user_create_dialog = false;
										} else {
											_that.$vs.notify({
												title: "Error Creating User",
												text: output.data.info,
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
										title: "Error Creating User",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								});
						} else if (_that.user.id > 0) {
							AuthService.update_user(_that.user.id, _that.user)
								.then((response) => {
									const output = response.data;

									if (output && output !== undefined) {
										if (output.success) {
											if (
												_that.users[
													_that.selected_user_index
												]
											) {
												_that.users.splice(
													_that.selected_user_index,
													1,
													output.data
												);
											}
											_that.user_create_dialog = false;
										} else {
											_that.$vs.notify({
												title: "Error Updating User",
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
										title: "Error Updating User",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								});
						}
					}
				});
			} catch (error) {
				console.log("error during form submission");
			}
		},
		save_user_password() {
			try {
				const _that = this;
				this.$validator
					.validateAll("change_pass_form")
					.then((result) => {
						if (result) {
							_that.$vs.loading();

							AuthService.change_password(
								_that.user_pass.id,
								_that.user_pass
							)
								.then((response) => {
									const output = response.data;

									if (output && output !== undefined) {
										if (output.success) {
											_that.$vs.notify({
												title: "Password changed",
												text: "Password changed successfully",
												color: "success",
												timing: 4000,
											});

											_that.change_password_dialog = false;
										} else {
											_that.$vs.notify({
												title: "Error Creating User",
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
										title: "Error Creating User",
										text: "Invalid data",
										color: "warning",
										timing: 4000,
									});
								});
						}
						console.log("no error");
					});
			} catch (error) {
				console.log("error during form submission");
			}
		},
		get_users() {
			const _that = this;
			this.$vs.loading();
			AuthService.get_users()
				.then((response) => {
					const data = response.data;
					if (data && data !== undefined) {
						if (data.success) {
							_that.users = data.data || [];
						} else {
							_that.$vs.notify({
								title: "Failed to get list of Users",
								text: "Failed",
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
						title: "Error while loading list of users",
						text: "Failed.",
						color: "warning",
						timing: 4000,
					});
				});
		},
	},
	created() {
		this.user = Object.assign({}, AuthService.user);
		this.user_roles = AuthService.user_roles;
		this.get_users();
	},
};
</script>

<style scoped>
/* .user-edit-popup >>> .vs-popup {
	min-height: 80% !important;
	min-width: 50% !important;
}

@media (min-width: 768px) and (max-width: 1319px) {
	.user-edit-popup >>> .vs-popup {
		min-height: 80% !important;
		min-width: 65% !important;
	}
} */
</style>
