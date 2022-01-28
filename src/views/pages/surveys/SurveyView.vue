<template>
	<div>
		<vs-breadcrumb class="ml-4" :items="breadcrumbs"></vs-breadcrumb>
		<vs-tabs
			position="left"
			class="tabs-shadow-none"
			id="profile-tabs"
			:key="isSmallerScreen"
		>
		<!-- GENERAL -->
			<!-- <vs-tab
				icon-pack="feather"
				icon="icon-user"
				:label="!isSmallerScreen ? 'General' : ''"
			>
				<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
					<survey-general />
				</div>
			</vs-tab> -->
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Participants' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<survey-participants />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Process Timing Results' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<survey-results />
				</div>
			</vs-tab>		 
			<!-- <vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Assessment Reports' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<survey-report />
				</div>
			</vs-tab> -->
			<!-- <vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Assessment Processes' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<SurveyProcess />
				</div>
			</vs-tab> -->
		</vs-tabs>

	</div>
	
</template>

<script>
import SurveyParticipants from "@/views/pages/surveys/SurveyParticipants.vue";
import SurveyProcess from "@/views/pages/surveys/SurveyProcess.vue";
import SurveyDepartments from "@/views/pages/surveys/SurveyDepartments.vue";
import SurveyGeneral from "@/views/pages/surveys/SurveyGeneral.vue";
import SurveyReport from "@/views/pages/surveys/SurveyReport.vue";
import SurveyOpportunityPipeline from "@/views/pages/surveys/SurveyOpportunityPipeline.vue";
import SurveyOpportunities from "@/views/pages/surveys/SurveyOpportunities.vue";
import SurveyResults from "@/views/pages/surveys/SurveyResults.vue";
import SurveyService from "@/services/SurveyService.js";

export default {
	components: {
		SurveyDepartments,
		SurveyResults,
		SurveyGeneral,
		SurveyOpportunities,
		SurveyOpportunityPipeline,
		SurveyParticipants,
		SurveyProcess,
		SurveyReport,
	},
	data() {
		return {
			survey_id: -1,
			survey:{
				client_id:-1
			},
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{ title: "Clients", url: `/pages/client/${this.$route.params.client_id}` },
				{ title: "Survey",active: true }
			],
		};

	},
	methods:{
	

	},
	computed: {
		isSmallerScreen() {
			return this.$store.state.windowWidth < 768;
		},
	} 
};
</script>

<style lang="scss">
#profile-tabs {
	.vs-tabs--content {
		padding: 0;
	}
}
</style>
