<template>
	<div class="w-full">
		<vs-breadcrumb class="ml-4" :items="breadcrumbs"></vs-breadcrumb>
		<!-- <vs-button class="my-2" :to="opportunity_link" color="primary"  size="medium" icon="ballot">
			Opportunity Pipeline
		</vs-button> -->

		<vs-tabs
			:position="isSmallerScreen ? 'top' : 'left'"
			class="tabs-shadow-none"
			id="client-tabs"
			:key="isSmallerScreen"
		>
			<vs-tab
				icon-pack="feather"
				icon="icon-user"
				:label="!isSmallerScreen ? 'Dashboard' : ''"
			>
				<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
					<client-dashboard />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-user"
				:label="!isSmallerScreen ? 'General' : ''"
			>
				<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
					<client-general-view />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Client Departments' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<client-departments />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Client Resources' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<client-employees />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Client Processes' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<client-processes />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Process Timing Assessment' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<survey-list />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Opportunity Assessment' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<opportunity-survey-list />
				</div>
			</vs-tab>
			<vs-tab
				@click="open_opps_pipeline"
				icon-pack="feather"
				icon="icon-user"
				:label="!isSmallerScreen ? 'Opportunity Pipeline' : ''"
			>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Reports' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<client-reports />
				</div>
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import ClientsList from "./ClientsList";
import SurveyList from "@/views/pages/surveys/SurveyList.vue";
import OpportunitySurveyList from "@/views/pages/surveys/OpportunitySurveyList.vue";
import ClientGeneralView from "@/views/pages/clients/client-view/ClientGeneralView.vue";
import ClientDashboard from "@/views/pages/clients/client-view/ClientDashboard.vue";
import ClientEmployees from "@/views/pages/clients/client-view/ClientEmployees.vue";
import ClientContacts from "@/views/pages/clients/client-view/ClientContacts.vue";
import ClientDepartments from "@/views/pages/clients/client-view/ClientDepartments.vue";
import ClientProcesses from "@/views/pages/clients/client-view/ClientProcesses.vue";
import ClientReports from "@/views/pages/clients/client-view/ClientReports.vue";
import Kanban from "@/views/pages/clients/client-view/Kanban.vue";

// import Drag from "@/views/pages/clients/client-view/Drag.vue";
// import Kanban from '../../../components/Kanban.vue';

export default {
	components: {
		ClientContacts,
		ClientDashboard,
		ClientDepartments,
		ClientEmployees,
		ClientProcesses,
		ClientsList,
		ClientGeneralView,
		ClientReports,
		Kanban,
		SurveyList,
		OpportunitySurveyList,
		// Drag,
	},
	data() {
		return {
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{ title: "Clients", url: `/pages/clients`, active: true },
			],
			client_id: -1,
			opportunity_link: "",
		};
	},
	computed: {
		isSmallerScreen() {
			return this.$store.state.windowWidth < 768;
		},
	},
	methods: {
		open_opps_pipeline() {
			// console.log("ops pipepine click");
			this.$router.push({ path: this.opportunity_link });
		},
	},
	created() {
		this.client_id = this.$route.params.id || -1;
		this.opportunity_link = `/pages/client/${this.client_id}/opportunity-pipeline`;
		// console.log("opportunity link " + this.opportunity_link);
	},
};
</script>

<style lang="scss">
#client-tabs {
	.vs-tabs--content {
		padding: 0;
	}
}
</style>
