<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="USERS">
				<template slot="actions">
					<!--          <vs-button  @click="popupActive=true"  class="ml-auto mt-3 mb-3  cursor-pointer btn-sm" color="primary" type="border" icon-pack="feather" icon="icon-plus"-->
					<!--          >Add User </vs-button>-->
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
						:data="users"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>NAME</vs-th>
							<vs-th>EMAIL</vs-th>
							<vs-th>REGISTRATION STATUS</vs-th>
							<vs-th>INVITE STATUS</vs-th>
							<vs-th class="float-left">STATUS</vs-th>
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

								<vs-td
									:data="data[indextr].registration_status"
								>
									<vs-chip
										v-if="
											data[indextr]
												.registration_status ===
											'Active'
										"
										transparent
										color="primary"
										>active</vs-chip
									>
									<vs-chip
										v-if="
											data[indextr]
												.registration_status !==
											'Active'
										"
										transparent
										color="danger"
										>deactive</vs-chip
									>
								</vs-td>

								<vs-td :data="data[indextr].invite_status">{{
									data[indextr].invite_status
								}}</vs-td>

								<vs-td :data="data[indextr].status">
									<vs-chip
										v-if="data[indextr].status === 'Active'"
										transparent
										color="primary"
										>active</vs-chip
									>
									<vs-chip
										v-if="data[indextr].status !== 'Active'"
										transparent
										color="danger"
										>deactive</vs-chip
									>
								</vs-td>
								<vs-td>
									<vx-tooltip
										text="Resend Invite"
										position="left"
									>
										<!--                    <vs-button @click="popupActive=true"-->
										<vs-button
											@click="
												onClickUserEdit(
													data[indextr].id
												)
											"
											radius
											color="primary"
											type="border"
											icon-pack="feather"
											icon="icon-send"
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
			class="vs-con-loading__container user-edit-popup"
			title="INVITE A NEW PRESCRIBER"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<vx-card no-shadow>
				<div class="vx-row mb-3">
					<div class="vx-col w-1/2">
						<small class="label">First Name</small>
						<vs-input
							v-validate="'required|min:3'"
							name="name"
							class="w-full required"
							v-model="new_user.name"
							label
						/>
						<span
							class="text-danger text-sm"
							v-show="errors.has('name')"
							>{{ errors.first("name") }}</span
						>
					</div>
					<div class="vx-col w-1/2">
						<small class="label">Last Name</small>
						<vs-input
							v-validate="'required|min:3'"
							name="lastName"
							class="w-full required"
							v-model="new_user.lastName"
							label
						/>
						<span
							class="text-danger text-sm"
							v-show="errors.has('lastName')"
							>{{ errors.first("lastName") }}</span
						>
					</div>
				</div>
				<div class="vx-row mb-3">
					<div class="vx-col w-full">
						<small class="label">Notes</small>
						<vs-textarea height="200px" />
					</div>
				</div>
				<!-- Save & Reset Button -->
				<div class="flex flex-wrap items-center justify-end mt-8">
					<vs-button class="ml-auto mt-2">Save Changes</vs-button>
					<vs-button class="ml-4 mt-2" type="border" color="warning"
						>Reset</vs-button
					>
				</div>
			</vx-card>
		</vs-popup>
	</div>
</template>

<script>
export default {
	name: "PendingUsersList",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			new_user: {
				firstName: "",
				lastName: "",
			},
			users: [
				{
					id: 1,
					name: "Leanne Graham",
					email: "Sincere@hnh.com",
					registration_status: "Active",
					invite_status: "Accept",
					status: "Active",
				},
				{
					id: 2,
					name: "Hync Yraham",
					email: "tim@hnh.com",
					registration_status: "Active",
					invite_status: "N/A",
					status: "Active",
				},
				{
					id: 3,
					name: "Leanne Graham",
					email: "Sincere@hnh.com",
					registration_status: "Active",
					invite_status: "Accept",
					status: "Active",
				},
				{
					id: 4,
					name: "Leanne Graham",
					email: "singer@hnh.com",
					registration_status: "Active",
					invite_status: "N/A",
					status: "Active",
				},
			],
		};
	},
	components: {},
	methods: {
		onClickUserEdit(id) {
			this.$router.push({ path: `/pages/users/${id}` });
		},
		create_user() {
			this.popupActive = true;
			this.resetInput();
		},
		resetInput() {
			this.new_user.name = "";
			this.new_user.lastName = "";
			this.$validator.reset();
		},
	},
};
</script>

<style scoped>
.user-edit-popup >>> .vs-popup {
	min-height: 50% !important;
	min-width: 50% !important;
}

@media (min-width: 768px) and (max-width: 1319px) {
	.user-edit-popup >>> .vs-popup {
		min-height: 50% !important;
		min-width: 65% !important;
	}
}
</style>
