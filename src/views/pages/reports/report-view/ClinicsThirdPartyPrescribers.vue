<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="3RD PARTY PRESCRIBERS">
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
							<vs-th>INVITE STATUS</vs-th>
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
								<vs-td :data="data[indextr].invite_status">
									<vs-chip v-if="data[indextr].invite_status === 'active'" transparent color="primary">active</vs-chip>
									<vs-chip
										v-if="data[indextr].invite_status === 'pending'"
										transparent
										color="danger"
									>pending</vs-chip>
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
	name: "ClinicsThirdPartyPrescribers",
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
					invite_status: "pending",
				},
				{
					id: 2,
					name: "Hync Yraham",
					email: "jobblog@hnh.com",
					clinic: "Affatc",
					profession: "yarn.org",
					verified: true,
					role: "Nurse",
					invite_status: "pending",
				},
				{
					id: 3,
					name: "Leanne Graham",
					email: "Sincere@hnh.com",
					clinic: "Bret",
					profession: "hildegard.org",
					verified: false,
					role: "Doctor",
					invite_status: "active",
				},
				{
					id: 4,
					name: "Leanne Graham",
					email: "singer@hnh.com",
					clinic: "Dentist",
					profession: "kalin.org",
					verified: false,
					role: "Doctor",
					invite_status: "active",
				},
			],
		};
	},
};
</script>

<style scoped>
</style>
