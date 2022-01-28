<template>
	<div class="vx-col w-full">
		<vs-breadcrumb class="ml-4" :items="breadcrumbs" separator="chevron_right"></vs-breadcrumb>
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
					<ops-survey-general />
				</div>
			</vs-tab> -->
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Participants' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<ops-survey-participants />
				</div>
			</vs-tab>
			<vs-tab
				icon-pack="feather"
				icon="icon-lock"
				:label="!isSmallerScreen ? 'Assessment Results' : ''"
			>
				<div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
					<ops-survey-results />
				</div>
			</vs-tab>
		</vs-tabs>
	</div>
</template>

<script>
import OpsSurveyParticipants from "@/views/pages/surveys/OpsSurveyParticipants.vue";
import OpsSurveyGeneral from "@/views/pages/surveys/ops-survey/OpsSurveyGeneral.vue";
import OpsSurveyResults from "@/views/pages/surveys/ops-survey/OpsSurveyResults.vue";

export default {
	name: "ops-survey-view",
	components: {
		OpsSurveyResults,
		OpsSurveyGeneral,
		OpsSurveyParticipants,
	},
	data() {
		return {
			breadcrumbs: [
				{ title: "Home", url: "/" },
				{ title: "Clients", url: `/pages/client/${this.$route.params.client_id}` },
				{ title: "Assessment Info", url: `/pages/client/:client_id/ops-survey/:id`,active: true }
			],
		};
	},
	computed: {
		isSmallerScreen() {
			return this.$store.state.windowWidth < 768;
		},
	},
};
</script>

<style lang="scss">
#profile-tabs {
	.vs-tabs--content {
		padding: 0;
	}
}
</style>
