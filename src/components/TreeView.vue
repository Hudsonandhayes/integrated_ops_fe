<template>
	<div id="tree-view" class="pt-2 pb-2">
		<div
			class="node"
			:style="{ 'margin-left': `${depth * 20}px` }"
			v-on:click="expandTree"
		>
			<span v-if="hasChildren" class="type">
				<span v-if="expanded">
					<vs-icon icon="arrow_drop_down"></vs-icon>
				</span>
				<span v-else>
					<vs-icon icon="arrow_right"></vs-icon>
				</span>
			</span>
			<span v-else
				><vs-icon
					icon="radio_button_checked"
					class="no-branch-icon"
				></vs-icon
			></span>
			<span class="process-title">
				{{ node.name }}
			</span>
		</div>
		<span v-if="expanded">
			<tree-view
				v-for="child in node.children"
				:key="child.id"
				:node="child"
				:depth="depth + 1"
			>
			</tree-view>
		</span>

		<!-- <div class="node" :style="{'margin-left':`${depth*20}px`}" v-for="p in process" :key="p.id" >
        <span v-if="hasChildren" class="type">{{expanded ? '&#9660;':'&#9658;'}}</span>
        <span v-else>&#9671;</span>
					
       <button  v-on:click="expandTree"><h1>{{p.parent_process_id}} {{expanded}} {{counter}}</h1> </button>
    </div>
    <div v-if="expanded">
        <tree-view v-for="child in node.children" :key="child.name" :node="child" :depth="depth+1"> </tree-view>
    </div> -->
	</div>
</template>
<script>
export default {
	name: "tree-view",
	props: {
		node: Object,
		depth: {
			type: Number,
			default: 0,
		},
	},
	data() {
		return {
			expanded: false,
		};
	},
	methods: {
		expandTree: function (event) {
			// `this` inside methods points to the Vue instance

			if (this.expanded) {
				console.log("rue");
				this.expanded = false;
			} else {
				this.expanded = true;
				console.log(this.expanded);
			}
		},
		nodeExpanded() {
			this.expanded != this.expanded;
		},
	},
	computed: {
		hasChildren() {
			return this.node.children;
		},
	},
};
</script>
<style scoped lang="scss">
.node {
	text-align: left;
	font-size: 18px;
	cursor: pointer;
	.process-title {
		font-size: 15px;
	}
	.no-branch-icon {
		position: relative;
		top: 0.1rem;
	}
}
</style>
