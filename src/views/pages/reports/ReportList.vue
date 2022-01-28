<template>
	<div class="vx-row">
		<!-- CARD 9: DISPATCHED ORDERS -->
		<div class="vx-col w-full">
			<vx-card title="Process Master List">
				<template slot="actions">
					<!--          <vs-button  @click="popupActive=true"  class="ml-auto mt-3 mb-3  cursor-pointer btn-sm" color="primary" type="border" icon-pack="feather" icon="icon-plus"-->
					<!--          >Add User </vs-button>-->
					<vs-button
						@click="popupActive = true"
						class
						color="primary"
						type="filled"
						>Create Process</vs-button
					>
				</template>
				<div slot="no-body" class="mt-4">
					<vs-table
						max-items="10"
						pagination
						:data="processes"
						stripe
						class="table-dark-inverted table-auto vs-con-loading__container"
					>
						>
						<template slot="thead">
							<vs-th>Name</vs-th>
							<vs-th>Description</vs-th>
							<vs-th>NOTES</vs-th>
							<vs-th>STATUS</vs-th>
							<vs-th>ACTION</vs-th>
						</template>

						<template slot-scope="{ data }">
							<vs-tr
								:key="indextr"
								v-for="(tr, indextr) in data"
								@click.native="
									onClickClinicEdit(data[indextr].id)
								"
								class="cursor-pointer"
							>
								<vs-td :data="data[indextr].name">{{
									data[indextr].name
								}}</vs-td>

								<vs-td :data="data[indextr].description">{{
									data[indextr].description
								}}</vs-td>

								<vs-td :data="data[indextr].notes">{{
									data[indextr].notes
								}}</vs-td>

								<vs-td :data="data[indextr].status">
									<vs-chip
										v-if="
											data[indextr].status === 'pending'
										"
										transparent
										color="warning"
										>pending</vs-chip
									>
									<vs-chip
										v-if="
											data[indextr].status !== 'pending'
										"
										transparent
										color="primary"
										>approved</vs-chip
									>
								</vs-td>
								<vs-td>
									<vx-tooltip text="Edit" position="left">
										<!--                    <vs-button @click="popupActive=true"-->
										<vs-button
											@click="
												onClickClinicEdit(
													data[indextr].id
												)
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
				</div>
			</vx-card>
		</div>
		<vs-popup
			class="vs-con-loading__container clinic-create-popup"
			title="Create Process"
			:active.sync="popupActive"
			:buttons-hidden="true"
		>
			<vx-card no-shadow>
				<div class="vx-row mb-3">
					<div class="vx-col w-1/2">
						<small class="label">Name</small>
						<vs-input
							required
							name="name"
							class="w-full required"
							label
						/>
						<span class="text-danger text-sm">Name required</span>
					</div>
					<div class="vx-col w-1/2">
						<small class="label">Description</small>
						<vs-input
							required
							name="description"
							class="w-full required"
							label
						/>
					</div>
				</div>
				<div class="vx-row mb-3">
					<div class="vx-col w-full">
						<small class="label">Notes</small>
						<vs-textarea name="notes" height="100px" />
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
	name: "ProcessList",
	data() {
		return {
			popupActive: false,
			editActive: false,
			edit: null,
			editProp: {},
			checkBox1: false,
			processes: [
				{
					id: 1,
					name: "Process 1",
					description: "Process Desc 1",
					notes: "Process 1 note",
					status: 1,
				},
				{
					id: 2,
					name: "Process 2",
					description: "Process Desc 2",
					notes: "Process 2 note",
					status: 0,
				},
				{
					id: 3,
					name: "Process 3",
					description: "Process Desc 3",
					notes: "Process 3 note",
					status: 1,
				},
				{
					id: 4,
					name: "Process 4",
					description: "Process Desc 4",
					notes: "Process 4 note",
					status: 1,
				},
			],
		};
	},
	components: {},
	methods: {
		onClickClinicEdit(id) {
			this.$router.push({ path: `/pages/client/${id}` });
		},
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
