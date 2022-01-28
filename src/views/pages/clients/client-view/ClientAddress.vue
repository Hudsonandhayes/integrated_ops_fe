<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="ADDRESS">
				<div slot="no-body" class="mt-4">
					<vs-table
						:data="users"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>NAME</vs-th>
							<vs-th>ADDRESS</vs-th>
							<vs-th>NUMBER</vs-th>
							<vs-th>STATUS</vs-th>
						</template>

						<template slot-scope="{data}">
							<vs-tr :key="indextr" v-for="(tr, indextr) in data">
								<vs-td :data="data[indextr].name">{{ data[indextr].name }}</vs-td>

								<vs-td :data="data[indextr].address">{{ data[indextr].address }}</vs-td>

								<vs-td :data="data[indextr].number">{{ data[indextr].number }}</vs-td>

								<vs-td :data="data[indextr].status">
									<vs-chip v-if="data[indextr].status === 'active'" transparent color="primary">active</vs-chip>
									<vs-chip v-if="data[indextr].status !== 'active'" transparent color="danger">deactive</vs-chip>
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
	name: "ClientAddress",
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
					address: "Sincere, april.biz, UK",
					number: "0754258745",
					status: "active",
				},
				{
					id: 1,
					name: "Joe Blog Graham",
					address: "Sincere, april.biz, UK",
					number: "0487541254",
					status: "active",
				},
				{
					id: 1,
					name: "John Graham",
					address: "Sincere, april.biz, UK",
					number: "456741254",
					status: "active",
				},
			],
		};
	},
};
</script>

<style scoped>
</style>
