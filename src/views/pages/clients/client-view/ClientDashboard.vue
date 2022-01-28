<template>
	<vx-card no-shadow>	 
		<div class="vx-row">		
			<div class="vx-col w-full md:w-1/3 sm:w-1/2 mb-base" v-for="item in kb" :key="item.id">
				<vx-card class="text-center cursor-pointer h-full">
					<div class="survey_img_container">
						<vs-chip class="number survey_step" color="primary">{{ item.id}}</vs-chip>
						<img :src="item.graphic" alt="graphic" width="180" class="mx-auto mb-4" />
					</div>
					<h4 class="mb-2">{{ item.title.toUpperCase() }}</h4>
					<small>{{ item.description }}</small>
					<br />
					<small>{{ item.start_date }}</small>
				</vx-card>
			</div>
		
		</div>
	</vx-card>
</template>

<script>
import ClientService from "@/services/ClientService";
export default {
	data() {
		return {
			client_id: -1,
			client: {},
			old_client_data: {},
				kb: [
				{
					id: 1,
					title: "Setup",
					description:
						"We will walk through the process and capture the requirements.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-1.png",
					start_date: "01/11/2020",
				},
				{
					id: 2,
					title: "Activity analysis",
					description:
						"We will conduct an assessment of time spent on each process so that we can understand the FTE distribution.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-2.png",
					start_date: "15/11/2020",
				},
				{
					id: 3,
					title: "Value Stream Assessment",
					description:
						"We will conduct a detailed Value Stream Assessment.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-4.png",
					start_date: "10/12/2020",
				},
				{
					id: 4,
					title: "Automation Assessment",
					description:
						"We will conduct an automation assessment to understand automation opportunities across each process.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-3.png",
					start_date: "05/12/2020",
				},
				{
					id: 5,
					title: "Opportunity Pipeline",
					description:
						"We will create opportunity pipeline with improvements across multiple improvement levers",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-5.png",
					start_date: "15/12/2020",
				},
				{
					id: 6,
					title: "Opportunity Dashboard",
					description:
						"We will provide a visualization of all opportunities.",
					graphic:
						"https://raw.githubusercontent.com/id1945/vuexy-admin/master/vuexy-vuejs-admin/full-version/src/assets/images/pages/graphic-6.png",
					start_date: "20/12/2020",
				},
			],
		}
	},
	components: {},
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
						ClientService.update_client(_that.client_id,_that.client).then((response) => {
								const output = response.data;
								if (output && output != undefined &&output.success) {

									_that.old_client_data = Object.assign({},_that.client);

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
	computed: {},

	created() {
		this.client_id = this.$route.params.id || -1;
		this.get_client();
	},
};
</script>
