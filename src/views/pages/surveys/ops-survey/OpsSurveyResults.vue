<template>
	<vs-tabs
		position="top"
		class="tabs-shadow-none"
		id="assessment_results_tabs"
	>
		<vs-tab
			icon-pack="feather"
			icon="icon-user"
			:label="!isSmallerScreen ? 'Survey Data' : ''"
		>
			<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
				<ops-survey-raw-data />
			</div>
		</vs-tab>
	</vs-tabs>
</template>

<script>
import OpsSurveyRawData from "@/views/pages/surveys/ops-survey/OpsSurveyRawData.vue";

export default {
	name: "ops-survey-results",
	components: {				
		OpsSurveyRawData
	},
	data() {
		return {};
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

#assessment_results_tabs ul {
	display: flex;
}
</style>
