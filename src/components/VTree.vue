<template>
	<vx-card title="Async Tree" code-toggler>
		<v-tree
			ref="tree"
			:data="treeData"
			:multiple="false"
			@node-check="nodechecked"
			@async-load-nodes="asyncLoad"
		/>
	</vx-card>
</template>
<script>
import { VTree, VSelectTree } from "vue-tree-halower";
export default {
	data() {
		return {
			initSelected: ["node-1"],
			treeData: [
				{
					title: "node1",
					expanded: false,
					async: true,
				},
			],
		};
	},
	methods: {
		nodechecked(node, v) {
			alert("that a node-check envent ..." + node.title + v);
		},
		async asyncLoad(node) {
			const { checked = false } = node;
			this.$set(node, "loading", true);
			let pro = await new Promise((resolve) => {
				setTimeout(resolve, 2000, [
					{ title: "test1", async: true },
					{ title: "test2", async: true },
					{ title: "test3" },
				]);
			});
			if (!node.hasOwnProperty("children")) {
				this.$set(node, "children", []);
			}
			node.children.push(...pro);
			this.$set(node, "loading", false);
			if (checked) {
				this.$refs.tree.childCheckedHandle(node, checked);
			}
		},
	},
	components: {
		VTree,
		VSelectTree,
	},
};
</script>
