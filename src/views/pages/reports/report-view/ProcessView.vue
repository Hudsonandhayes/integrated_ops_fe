<template>
	<vs-tabs
		:position="isSmallerScreen ? 'top' : 'left'"
		class="tabs-shadow-none"
		id="profile-tabs"
		:key="isSmallerScreen"
	>
		<!-- GENERAL -->
		<vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? 'General' : ''">
			<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0"></div>
		</vs-tab>
		<vs-tab icon-pack="feather" icon="icon-folder" :label="!isSmallerScreen ? 'Users' : ''">
			<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0"></div>
		</vs-tab>
		<vs-tab icon-pack="feather" icon="icon-folder" :label="!isSmallerScreen ? 'Address' : ''">
			<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0"></div>
		</vs-tab>
		<vs-tab
			icon-pack="feather"
			icon="icon-folder"
			:label="!isSmallerScreen ? '3rd Party Prescribers' : ''"
		>
			<div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0"></div>
		</vs-tab>
	</vs-tabs>
</template>

<script>
export default {
	components: {},
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
</style>
