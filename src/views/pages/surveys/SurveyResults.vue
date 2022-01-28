<template>
	<vs-tabs
		position="top"
		class="tabs-shadow-none"
		id="assessment_results_tabs"
	>
		<vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'Employee Results' : ''">
			<survey-employee-results />
		</vs-tab>

		<vs-tab
			icon-pack="feather"
			icon="icon-user"
			:label="!isSmallerScreen ? 'VAS Calculations' : ''"
		>
			<div class="tab-general p-4">
				<vsa-calculations />
			</div>
		</vs-tab>
	</vs-tabs>
</template>

<script>
import SurveyEmployeeResults from "@/views/pages/surveys/SurveyEmployeeResults.vue";
import VsaCalculations from "@/views/pages/surveys/VsaCalculations.vue";

export default {
	components: {
		SurveyEmployeeResults,
		VsaCalculations,
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
