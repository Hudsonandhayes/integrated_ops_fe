<template>
	
	<div @dblclick="$emit('on_card_edit', task)" class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
		<div class="flex justify-between">
			<p
				class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
			>
				{{ task.name }}
			</p>

		</div>
		<div class="flex mt-4 justify-between">
			
			<vs-chip v-if="task.lever_name">
				<vs-avatar />
				{{ task.lever_name }}
			</vs-chip>
			<!-- <badge  :color="badgeColor">{{ task.type }}</badge> -->
		</div>
		<span class="text-sm text-gray-600">{{ task.date }}</span>
	</div>
</template>
<script>
export default {
  name: 'kanban-card',
	components: {},
	props: {
		task: {
			type: Object,
			default: () => ({}),
		},
	},
	computed: {
		badgeColor () {
			const mappings = {
				Design: "purple",
				"Feature Request": "teal",
				Backend: "blue",
				QA: "green",
				default: "teal",
			};
      return mappings[this.task.type] || mappings.default
		},
	}
}
</script>
