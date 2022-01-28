<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="USERS">
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
							<vs-th>CLINIC</vs-th>
							<vs-th>PROFESSION</vs-th>
							<vs-th class="float-left">VERIFIED</vs-th>
							<vs-th>ROLE</vs-th>
							<vs-th>ROLE STATUS</vs-th>
							<vs-th>ACTION</vs-th>
						</template>

						<template slot-scope="{data}">
							<vs-tr :key="indextr" v-for="(tr, indextr) in data">
								<vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

								<vs-td :data="data[indextr].email">{{ data[indextr].email }}</vs-td>

								<vs-td :data="data[indextr].clinic">{{ data[indextr].clinic }}</vs-td>

								<vs-td :data="data[indextr].profession">{{ data[indextr].profession }}</vs-td>

								<vs-td :data="data[indextr].verified">
									<vs-chip v-if="data[indextr].verified" transparent color="primary">verified</vs-chip>
									<vs-chip v-if="!data[indextr].verified" transparent color="danger">not verified</vs-chip>
								</vs-td>
								<vs-td :data="data[indextr].role">{{ data[indextr].role }}</vs-td>
								<vs-td :data="data[indextr].role_status">
									<vs-chip v-if="data[indextr].role_status === 'Active'" transparent color="primary">active</vs-chip>
									<vs-chip v-if="data[indextr].role_status !== 'Active'" transparent color="danger">deactive</vs-chip>
								</vs-td>
								<vs-td>
									<vx-tooltip text="Delete" position="left">
										<!--                    <vs-button @click="popupActive=true"-->
										<vs-button radius color="primary" type="border" icon-pack="feather" icon="icon-delete"></vs-button>
									</vx-tooltip>
								</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</div>
			</vx-card>
		</div>
	</div>
</template>

<script>
export default {
	name: "ClinicUsers",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			users: [
				{
					id: 1,
					name: "Leanne Graham",
					email: "Sincere@hnh.com",
					clinic: "Bret",
					profession: "hildegard.org",
					verified: true,
					role: "Doctor",
					role_status: "Active",
				},
				{
					id: 2,
					name: "Hync Yraham",
					email: "joeblog@hnh.com",
					clinic: "Affatc",
					profession: "yarn.org",
					verified: true,
					role: "Nurse",
					role_status: "Deactive",
				},
				{
					id: 3,
					name: "Leanne Graham",
					email: "Sincere@hnh.com",
					clinic: "Bret",
					profession: "hildegard.org",
					verified: false,
					role: "Doctor",
					role_status: "Deactive",
				},
				{
					id: 4,
					name: "Leanne Graham",
					email: "singer@hnh.com",
					clinic: "Dentist",
					profession: "kalin.org",
					verified: false,
					role: "Doctor",
					role_status: "Active",
				},
			],
		};
	},
};
</script>

<style scoped>
</style>
