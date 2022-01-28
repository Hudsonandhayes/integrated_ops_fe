<template>
	<div>
		<div class="vx-row mb-3">	 
			<div class="vx-col w-1/3">
				 
				<div id="ptree-container" class="overflow-hidden">

					<vs-sidebar class="items-no-padding" parent="#ptree-container" :hidden-background="sidebar_hide_bg" id="ptree-sidebar" v-model="process_sidebar">
						<VuePerfectScrollbar class="ptree-scroll-area pt-4" :settings="vscroll_settings" :key="$vs.rtl">
							<vs-list>
								<vs-list-header title="Process tree heirarchy" color="primary"></vs-list-header>

								<draggable :list="all_processes" group="people" class="p-2 cursor-move" onEnd="after_drop">
									<vs-list-item v-for="(process, index) in all_processes" :key="index" :title="process.name">
									</vs-list-item>
								</draggable>
							</vs-list>
						</VuePerfectScrollbar>
					</vs-sidebar>
				</div>
				 
			</div>
			<div class="vx-col w-2/3">
				<vx-card title="Current Process Hierarchy" class="tree-view-card">
					<vs-button v-if="show_tree_update"  @click="update_process_tree" color="primary" type="filled">
						Update Tree
					</vs-button>
					<draggable :list="tree_view" group="people" class="p-2 cursor-move" onEnd="after_drop" >							
						<v-tree ref='tree' @drag-node-end="drop_event" :canDeleteRoot="true" :tpl="tpl" :data='tree_view' :draggable='true'/>
					</draggable>
				</vx-card>
			</div>
	 	</div>
	</div>
</template>
<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import vSelect from "vue-select";
import ClientService from "@/services/ClientService.js";
import ProcessService from "@/services/ProcessService.js";
import TreeView from "@/components/TreeView.vue";
import ConfigService from "@/services/ConfigService.js";
import draggable from 'vuedraggable';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { VTree, VSelectTree}  from 'vue-tree-halower'

export default {
	name: "process-tree",
	components: {
		FormWizard,
		TabContent,
		vSelect,
		TreeView,
		draggable,
		VuePerfectScrollbar,
		VTree, 
		VSelectTree
	},
	data() {
		return {
			all_processes: [],
			client_process: {},
			client_processes: [],
			tree_view: [],
			selected_processes: 0,
			selected_parent_process: 0,
			parent_processes: [],
			p_processes: [{ id: 0, name: "None", level: 1 }],
			new_parent_process: {},
			available_process_levels: [1, 2, 3],
			frequency: [],
			unit_measure: [],
			process_dialog:false,
			process:{},
			process_sidebar:true,
			sidebar_hide_bg:true,
			vscroll_settings : {
				maxScrollbarLength : 60,
				wheelSpeed         : 0.70,
			},
			expanded: false,
			show_tree_update:false,
		};
	},

	methods: {
		get_all_processes() {
			this.all_processes = [];
			let _that = this;
			ProcessService.get_all_processes().then((response) => {
				const output = response.data;
				// console.log(output, "client processses");
				if (output && output !== undefined) {
					if (output.success) {
						let all_p_list = output.data || [];
					
						all_p_list.forEach((p) => {
							_that.all_processes.push({
								id:parseInt(p.id)+1000 ,
								name: `${p.name}`,
								title: `${p.name}`,
								level: -1,
								expanded: false,
								children: [],

							});
						});

						// console.log("setting all processes "+_that.all_processes);
						
					}
				}
			});
		},
		get_client_processes() {
			this.client_processes = [];
			this.$vs.loading();
			const _that =this;
			ClientService.get_client_processes(this.client_id).then(
				(response) => {
					const output = response.data;
					// console.log(output, "client processses");
					if (output && output !== undefined) {
						if (output.success) {
							_that.client_processes = output.data || {};
						}else{
							_that.$vs.notify({
								title: "Get client process",
								text: "No data returned.",
								color: "warning",
								timing: 4000,				
							});	
						}
					}
					_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Get client process",
					text: "No data returned.",
					color: "warning",
					timing: 4000,				
				});	
				
			});
		},

		get_client_process_tree() {
			//	this.client_processes = [];
			const _that = this;
			this.$vs.loading();
			ClientService.get_client_process_tree(this.client_id).then(
				(response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.process_tree_data(output.data);
						}else{
							_that.$vs.notify({
								title: "Load process tree",
								text: "No data returned.",
								color: "warning",
								timing: 4000,				
							});
						}
					}
					_that.$vs.loading.close();
			}).catch((err) => {
				_that.$vs.loading.close();
				_that.$vs.notify({
					title: "Load process tree",
					text: "No data returned.",
					color: "warning",
					timing: 4000,				
				});	
				
			});
		},

		go_to_clients_page(id) {
			const client_id = parseInt(id, 10);
			this.$router.push(`/pages/client/${client_id}`);
		},
		// // tree-view
		// setTreeProcess(value) {
		// 	// this.t_p.name = value.name;
		// 	// this.t_p.id = value.id;
		// 	this.new_parent_process = {
		// 		id: value.id,
		// 		name: value.name,
		// 		level: value.level,
		// 	};
		// 	this.client_process.parent_client_process_id = this.new_parent_process.id;
		// 	this.client_process.process_lable = this.new_parent_process.name;
		// },
		add_new_process(){
			this.process = Object.assign({},ProcessService.process);			
			this.process_dialog = true;
		},
		save_process(e){
			e.preventDefault();
			const _that=this;
			this.$validator.validateAll("process_form").then((result) => {
				if (result) {
					if (_that.process.id === -1) {
						ProcessService.create_process(_that.process).then(
							(response) => {
								const data = response.data;								
								if (data && data !== undefined) {
									if (data.success) {
										_that.all_processes.push(data.data);
										_that.process_dialog = false;
									}
								}
							}
						);
					}  
				} else {
					console.log("form validation error");
				}
			});
		},

		create_client_process(event) {
			const _that = this;

			this.tree_view = [];
			this.$vs.loading();
			if (this.selected_processes.length > 0) {
				this.client_process.process_ids = this.selected_processes || [];

				ClientService.create_client_processes(
					this.client_id,
					this.client_process
				).then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.process_tree_data(output.data.process_tree);
							_that.client_process = Object.assign(
								{},
								ClientService.client_process
							);
						}else{
							_that.$vs.notify({
								title: "Create client process",
								text: "Invalid data",
								color: "warning",
								timing: 4000,				
							});
						}
					}
					_that.$vs.loading.close();
				}).catch((err) => {
					_that.$vs.loading.close();
					_that.$vs.notify({
						title: "Create client process",
						text: "Failed",
						color: "warning",
						timing: 4000,				
					});	
					
				});

				this.new_parent_processes = {};
				this.new_processes = [];
				this.selected_processes = 0;
				this.selected_parent_process = 0;
			}
			
		},
		process_tree_data(data) {
			let temp_tree = [];
			this.available_process_levels = [];

			// 			id: 2
			// level_id: 1
			// name: "Reporting and analytics"
			// parent_process_tree_id: 0
			// process_label: "Reporting and analytics"

			let tree_item = this.tree_view;
			this.p_processes = [{ id: 0, name: "None ", level: 1 }];

			data.forEach((item) => {
				if (
					this.available_process_levels[item.level_id] === undefined
				) {
					this.available_process_levels[item.level_id] = {
						id: item.id,
						name: `Level ${item.level_id}`,
					};
				}
				const t_obj = {
					id: item.id,
					name: `${item.name} - level ${item.level_id}`,
					title: `${item.name}`,
					level: `${item.level_id}`,
					expanded: true,
					children: [],
				};
				let parent_obj = {
					id: item.id,
					name: `${item.name} - level ${item.level_id}`,
					level: item.level_id,
				};

				this.p_processes.push(parent_obj);

				if (item.parent_process_tree_id > 0) {
					const tree_item = ProcessService.find_tree_item(
						item.parent_process_tree_id,
						this.tree_view
					);
					tree_item.children.push(t_obj);
				} else {
					this.tree_view.push(t_obj);
				}
			});
		},

		done() {
			this.go_to_clients_page(this.client_id);
		},
		after_drop(evt){

			console.log(evt)
			const element = evt.moved.element;
			const oldIndex = evt.moved.oldIndex;
			console.log("moved element "+element);

		},
		after_drop1(evt){
			console.log("after drop1 "+evt)

		},
		delete_node(node, parent, index){
			// console.log("node is "+node);
			// console.log("parent is "+parent);
			// console.log("index is "+index);
			let node_id = node.id || -1;
			const _that = this;
	
			if(node_id > 0){
				ClientService.delete_client_process(node_id).then((response) => {
					const output = response.data;
					if (output && output !== undefined) {
						if (output.success) {
							_that.$refs.tree.delNode(node, parent, index);
						}else{
							_that.$vs.notify({
								title: "Delete client process",
								text: "Failed",
								color: "warning",
								timing: 4000,				
							});
						}
					}
				}).catch((err) => {
					_that.$vs.notify({
						title: "Delete client process",
						text: "Failed",
						color: "warning",
						timing: 4000,				
					});	
					
				});
			}
		},
		drop_event(node){
			
			try{

				let drag_node_id = node.dragNode.id || -1;
				let new_parent_id = node.targetNode.id || -1;
				let new_level = (parseInt(node.targetNode.level,10)) || -1;
				
				if(drag_node_id > 0 && new_parent_id > 0){

					if(new_level > 0){

						new_level+=1;
						let tree_item = ProcessService.find_tree_item(
							drag_node_id,
							this.tree_view
						);


						tree_item = ProcessService.update_tree_level(tree_item,new_level) ;
						console.log("tree element  "+tree_item);

						node.dragNode = tree_item;
						//node.dragNode.level = new_level;

						//call service to update or maybe enable a button so the user can select whether to update or not
						console.log("showing the tree "+this.tree_view);
						this.show_tree_update=true;
					}
				}

			}catch(e){
				console.log("error while doing drop and drap");
			}
			
		},
		update_process_tree(){

			this.show_tree_update=false;

		},
		expand_node(node){			
			node.expanded = !node.expanded;
		},
		tpl (...args) {
			
			let {0: node, 2: parent, 3: index} = args
			// console.log("node is "+node);
			// console.log("parent is "+parent);
			// console.log("index is "+index);
			let title_class = node.selected ? 'node-title node-selected' : 'node-title';
			if (node.searched) titleClass += ' node-searched';			
			let is_parent = node.children.length > 0 ? true : false;
			let leaf_class = is_parent ? "" : " leaf_class ";
			title_class+=leaf_class;
			// console.log("is parent node "+is_parent)
			let node_title = node.title + " - Level " + node.level;
			return <span>
				{ 
					is_parent ? 	
					<span class="tree-expand" onClick={() => {this.expand_node(node)}}  >
						<vs-icon icon="arrow_right"></vs-icon>
					</span>  : ''
				
				}
				<span class={title_class} domPropsInnerHTML={node_title} onClick={() => {
					this.$refs.tree.nodeSelected(node)
				}}></span>

			
				<vx-tooltip class="inline-block ml-2" text="Delete" position="left">
					<vs-button onClick={() => {this.delete_node(node, parent, index)}} size="small" radius color="primary" type="border" icon="delete">
					</vs-button>
				</vx-tooltip>
					
			</span>
		}
	
	},
	created() {
		this.client_id = this.$route.params.client_id || -1;
		this.client_process = Object.assign({}, ClientService.client_process);
		this.frequency = ConfigService.frequencies;
		this.unit_measure = ConfigService.unit_measures;
		this.get_all_processes();
		this.get_client_processes();

		this.get_client_process_tree();
	},
};
</script>
<style scoped lang="scss">
@mixin btn-style {
	border: none;
	color: #fff;
	font-weight: bold;
	width: 140px;
	height: 35px;
	border-radius: 4px;
}
.add-btn {
	@include btn-style;
	background-color: #10163a;
}
.save-btn {
	@include btn-style;
	background-color: #ff8c00;
	position: relative;
	top: 8vh;
	left: 15vw;
	font-size: 14px;
}


#ptree-container {
    .vs-sidebar--background {
        position: absolute;
        z-index: 40000;
    }

    #ptree-sidebar,
    #chat-profile-sidebar{
        .vs-sidebar{
            max-width: 400px;
        }
    }

    #ptree-sidebar {

        .ptree-scroll-area {
            position: relative;
            margin: auto;
            width: 100%;
            height: calc(100% - 70px);

            .ptree__contact {
                transition: background-color .1s;
                &:hover{
                    background-color: #eee;
                }
            }
        }
    }


    .chat__bg{
        background-color: #DFDBE5;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260' viewBox='0 0 260 260'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M24.37 16c.2.65.39 1.32.54 2H21.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06A5 5 0 0 1-17.45 28v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H-20a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1L.9 19.22a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0L2.26 23h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM-13.82 27l16.37 4.91L18.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H-13.1z'/%3E%3Cpath id='path6_fill-copy' d='M284.37 16c.2.65.39 1.32.54 2H281.17l1.17 2.34.45.9-.24.11V28a5 5 0 0 1-2.23 8.94l-.02.06a8 8 0 0 1-7.75 6h-20a8 8 0 0 1-7.74-6l-.02-.06a5 5 0 0 1-2.24-8.94v-6.76l-.79-1.58-.44-.9.9-.44.63-.32H240a23.01 23.01 0 0 1 44.37-2zm-36.82 2a1 1 0 0 0-.44.1l-3.1 1.56.89 1.79 1.31-.66a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .9 0l2.21-1.1a3 3 0 0 1 2.69 0l2.2 1.1a1 1 0 0 0 .86.02l2.88-1.27a3 3 0 0 1 2.43 0l2.88 1.27a1 1 0 0 0 .85-.02l3.1-1.55-.89-1.79-1.42.71a3 3 0 0 1-2.56.06l-2.77-1.23a1 1 0 0 0-.4-.09h-.01a1 1 0 0 0-.4.09l-2.78 1.23a3 3 0 0 1-2.56-.06l-2.3-1.15a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01a1 1 0 0 0-.44.1l-2.21 1.11a3 3 0 0 1-2.69 0l-2.2-1.1a1 1 0 0 0-.45-.11h-.01zm0-2h-4.9a21.01 21.01 0 0 1 39.61 0h-2.09l-.06-.13-.26.13h-32.31zm30.35 7.68l1.36-.68h1.3v2h-36v-1.15l.34-.17 1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.69 0l1.36-.68h2.59l1.36.68a3 3 0 0 0 2.56.06l1.67-.74h3.23l1.67.74a3 3 0 0 0 2.56-.06zM246.18 27l16.37 4.91L278.93 27h-32.75zm-.63 2h.34l16.66 5 16.67-5h.33a3 3 0 1 1 0 6h-34a3 3 0 1 1 0-6zm1.35 8a6 6 0 0 0 5.65 4h20a6 6 0 0 0 5.66-4H246.9z'/%3E%3Cpath d='M159.5 21.02A9 9 0 0 0 151 15h-42a9 9 0 0 0-8.5 6.02 6 6 0 0 0 .02 11.96A8.99 8.99 0 0 0 109 45h42a9 9 0 0 0 8.48-12.02 6 6 0 0 0 .02-11.96zM151 17h-42a7 7 0 0 0-6.33 4h54.66a7 7 0 0 0-6.33-4zm-9.34 26a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-4.34a8.98 8.98 0 0 0 3.34-7h-2a7 7 0 0 1-7 7h-7a7 7 0 1 1 0-14h42a7 7 0 1 1 0 14h-9.34zM109 27a9 9 0 0 0-7.48 4H101a4 4 0 1 1 0-8h58a4 4 0 0 1 0 8h-.52a9 9 0 0 0-7.48-4h-42z'/%3E%3Cpath d='M39 115a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6-8a6 6 0 1 1-12 0 6 6 0 0 1 12 0zm-3-29v-2h8v-6H40a4 4 0 0 0-4 4v10H22l-1.33 4-.67 2h2.19L26 130h26l3.81-40H58l-.67-2L56 84H42v-6zm-4-4v10h2V74h8v-2h-8a2 2 0 0 0-2 2zm2 12h14.56l.67 2H22.77l.67-2H40zm13.8 4H24.2l3.62 38h22.36l3.62-38z'/%3E%3Cpath d='M129 92h-6v4h-6v4h-6v14h-3l.24 2 3.76 32h36l3.76-32 .24-2h-3v-14h-6v-4h-6v-4h-8zm18 22v-12h-4v4h3v8h1zm-3 0v-6h-4v6h4zm-6 6v-16h-4v19.17c1.6-.7 2.97-1.8 4-3.17zm-6 3.8V100h-4v23.8a10.04 10.04 0 0 0 4 0zm-6-.63V104h-4v16a10.04 10.04 0 0 0 4 3.17zm-6-9.17v-6h-4v6h4zm-6 0v-8h3v-4h-4v12h1zm27-12v-4h-4v4h3v4h1v-4zm-6 0v-8h-4v4h3v4h1zm-6-4v-4h-4v8h1v-4h3zm-6 4v-4h-4v8h1v-4h3zm7 24a12 12 0 0 0 11.83-10h7.92l-3.53 30h-32.44l-3.53-30h7.92A12 12 0 0 0 130 126z'/%3E%3Cpath d='M212 86v2h-4v-2h4zm4 0h-2v2h2v-2zm-20 0v.1a5 5 0 0 0-.56 9.65l.06.25 1.12 4.48a2 2 0 0 0 1.94 1.52h.01l7.02 24.55a2 2 0 0 0 1.92 1.45h4.98a2 2 0 0 0 1.92-1.45l7.02-24.55a2 2 0 0 0 1.95-1.52L224.5 96l.06-.25a5 5 0 0 0-.56-9.65V86a14 14 0 0 0-28 0zm4 0h6v2h-9a3 3 0 1 0 0 6H223a3 3 0 1 0 0-6H220v-2h2a12 12 0 1 0-24 0h2zm-1.44 14l-1-4h24.88l-1 4h-22.88zm8.95 26l-6.86-24h18.7l-6.86 24h-4.98zM150 242a22 22 0 1 0 0-44 22 22 0 0 0 0 44zm24-22a24 24 0 1 1-48 0 24 24 0 0 1 48 0zm-28.38 17.73l2.04-.87a6 6 0 0 1 4.68 0l2.04.87a2 2 0 0 0 2.5-.82l1.14-1.9a6 6 0 0 1 3.79-2.75l2.15-.5a2 2 0 0 0 1.54-2.12l-.19-2.2a6 6 0 0 1 1.45-4.46l1.45-1.67a2 2 0 0 0 0-2.62l-1.45-1.67a6 6 0 0 1-1.45-4.46l.2-2.2a2 2 0 0 0-1.55-2.13l-2.15-.5a6 6 0 0 1-3.8-2.75l-1.13-1.9a2 2 0 0 0-2.5-.8l-2.04.86a6 6 0 0 1-4.68 0l-2.04-.87a2 2 0 0 0-2.5.82l-1.14 1.9a6 6 0 0 1-3.79 2.75l-2.15.5a2 2 0 0 0-1.54 2.12l.19 2.2a6 6 0 0 1-1.45 4.46l-1.45 1.67a2 2 0 0 0 0 2.62l1.45 1.67a6 6 0 0 1 1.45 4.46l-.2 2.2a2 2 0 0 0 1.55 2.13l2.15.5a6 6 0 0 1 3.8 2.75l1.13 1.9a2 2 0 0 0 2.5.8zm2.82.97a4 4 0 0 1 3.12 0l2.04.87a4 4 0 0 0 4.99-1.62l1.14-1.9a4 4 0 0 1 2.53-1.84l2.15-.5a4 4 0 0 0 3.09-4.24l-.2-2.2a4 4 0 0 1 .97-2.98l1.45-1.67a4 4 0 0 0 0-5.24l-1.45-1.67a4 4 0 0 1-.97-2.97l.2-2.2a4 4 0 0 0-3.09-4.25l-2.15-.5a4 4 0 0 1-2.53-1.84l-1.14-1.9a4 4 0 0 0-5-1.62l-2.03.87a4 4 0 0 1-3.12 0l-2.04-.87a4 4 0 0 0-4.99 1.62l-1.14 1.9a4 4 0 0 1-2.53 1.84l-2.15.5a4 4 0 0 0-3.09 4.24l.2 2.2a4 4 0 0 1-.97 2.98l-1.45 1.67a4 4 0 0 0 0 5.24l1.45 1.67a4 4 0 0 1 .97 2.97l-.2 2.2a4 4 0 0 0 3.09 4.25l2.15.5a4 4 0 0 1 2.53 1.84l1.14 1.9a4 4 0 0 0 5 1.62l2.03-.87zM152 207a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-11 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-6 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-8 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm3 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm0 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm6-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm4-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-5-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-24 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm16 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm7-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm86-29a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1 246 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM275 214a29 29 0 0 0-57.97 0h57.96zM72.33 198.12c-.21-.32-.34-.7-.34-1.12v-12h-2v12a4.01 4.01 0 0 0 7.09 2.54c.57-.69.91-1.57.91-2.54v-12h-2v12a1.99 1.99 0 0 1-2 2 2 2 0 0 1-1.66-.88zM75 176c.38 0 .74-.04 1.1-.12a4 4 0 0 0 6.19 2.4A13.94 13.94 0 0 1 84 185v24a6 6 0 0 1-6 6h-3v9a5 5 0 1 1-10 0v-9h-3a6 6 0 0 1-6-6v-24a14 14 0 0 1 14-14 5 5 0 0 0 5 5zm-17 15v12a1.99 1.99 0 0 0 1.22 1.84 2 2 0 0 0 2.44-.72c.21-.32.34-.7.34-1.12v-12h2v12a3.98 3.98 0 0 1-5.35 3.77 3.98 3.98 0 0 1-.65-.3V209a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-24c.01-1.53-.23-2.88-.72-4.17-.43.1-.87.16-1.28.17a6 6 0 0 1-5.2-3 7 7 0 0 1-6.47-4.88A12 12 0 0 0 58 185v6zm9 24v9a3 3 0 1 0 6 0v-9h-6z'/%3E%3Cpath d='M-17 191a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm19 9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm-14 5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-25 1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm5 4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm9 0a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm12-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H4zm-11-14a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-19 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1zm-25 15c0-.47.01-.94.03-1.4a5 5 0 0 1-1.7-8 3.99 3.99 0 0 1 1.88-5.18 5 5 0 0 1 3.4-6.22 3 3 0 0 1 1.46-1.05 5 5 0 0 1 7.76-3.27A30.86 30.86 0 0 1-14 184c6.79 0 13.06 2.18 18.17 5.88a5 5 0 0 1 7.76 3.27 3 3 0 0 1 1.47 1.05 5 5 0 0 1 3.4 6.22 4 4 0 0 1 1.87 5.18 4.98 4.98 0 0 1-1.7 8c.02.46.03.93.03 1.4v1h-62v-1zm.83-7.17a30.9 30.9 0 0 0-.62 3.57 3 3 0 0 1-.61-4.2c.37.28.78.49 1.23.63zm1.49-4.61c-.36.87-.68 1.76-.96 2.68a2 2 0 0 1-.21-3.71c.33.4.73.75 1.17 1.03zm2.32-4.54c-.54.86-1.03 1.76-1.49 2.68a3 3 0 0 1-.07-4.67 3 3 0 0 0 1.56 1.99zm1.14-1.7c.35-.5.72-.98 1.1-1.46a1 1 0 1 0-1.1 1.45zm5.34-5.77c-1.03.86-2 1.79-2.9 2.77a3 3 0 0 0-1.11-.77 3 3 0 0 1 4-2zm42.66 2.77c-.9-.98-1.87-1.9-2.9-2.77a3 3 0 0 1 4.01 2 3 3 0 0 0-1.1.77zm1.34 1.54c.38.48.75.96 1.1 1.45a1 1 0 1 0-1.1-1.45zm3.73 5.84c-.46-.92-.95-1.82-1.5-2.68a3 3 0 0 0 1.57-1.99 3 3 0 0 1-.07 4.67zm1.8 4.53c-.29-.9-.6-1.8-.97-2.67.44-.28.84-.63 1.17-1.03a2 2 0 0 1-.2 3.7zm1.14 5.51c-.14-1.21-.35-2.4-.62-3.57.45-.14.86-.35 1.23-.63a2.99 2.99 0 0 1-.6 4.2zM15 214a29 29 0 0 0-57.97 0h57.96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        // background-image: url('../../../assets/images/backgrounds/chat-bg.png');
    }

    .chat__log {
      .msg-time {
        .vs-divider--text {
          border-radius: .3rem;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
        }
      }
    }

    .chat-content-area {
        position: relative;


        .chat-content-scroll-area {
            position: relative;
            margin: auto;
            width: 100%;
            height: calc(100% - 134px);

            .chat__input {
                position: absolute;
                bottom: 0;
                width: 100%;
            }
        }
    }

    // MEDIA QUIRIES
    @screen sm {
        .user-profile-container .vs-sidebar {
            // @apply w-full
            width: 100%;
        }
    }
    @screen md{
        .user-profile-container .vs-sidebar{
            // @apply w-1/3;
            width: 33.33333%;
        }
    }

	
}

</style>
<style scoped>
#process_tree >>> ul.halo-tree{
	margin-left: 15px !important;
	
}

.leaf_class{
	opacity: 0.8 !important;
	color: blue !important;
}

</style>
