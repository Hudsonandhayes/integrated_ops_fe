import axios from "@/axios";
class ProcessService {
	process = {
		id: -1,
		description: "",
		inputs: "",
		outputs: "",
		description: "",
		process_inputs: "",
		process_outputs: "",
		status: 1,
	};

	get_all_processes() {
		return axios.get("/processes/all");
	}

	get_processes() {
		return axios.get("/processes");
	}

	create_process(client_id, item, doc_file) {
		try {
			let formData = new FormData();
			if (doc_file && doc_file !== undefined) {
				formData.append("document_link", doc_file);
				console.log("document file found!");
			}
			formData.append("name", item.name);
			formData.append("description", item.description);
			formData.append("frequency_id", item.frequency_id);
			formData.append("unit_measure_id", item.unit_measure_id);
			formData.append("average_volume", item.average_volume);
			formData.append("parent_process_id", item.parent_process_id);

			formData.append("process_inputs", item.process_inputs);
			formData.append("process_outputs", item.process_outputs);
			formData.append("department_ids", item.department_ids);
			

			let status_val =(!item.status  || item.status  === 'false' ? 0 : 1);
			formData.append("status",status_val);

			return axios.post(`/client-process-tree/${client_id}`, formData);
		} catch (e) {
			return false;
		}

		//return axios.post(`/client-process-tree/${client_id}`, item);
	}


	create_master_process(process){
		console.log(process);
		return axios.post(`/process`, process);
	}

	import_client_processes(client_id, doc_file) {
		try {
			let formData = new FormData();
			if (doc_file && doc_file !== undefined) {
				formData.append("csv_file", doc_file);
				console.log("document file found!");
			}
			return axios.post(
				`/client/${client_id}/processes/upload`,
				formData
			);
		} catch (e) {
			return false;
		}
	}

	update_master_process(process_id, item) {
		return axios.post(`/process/${process_id}`, item);
	}

	update_client_process(client_process_id, client_update_process, doc_file) {
		try {
			let formData = new FormData();
			if (doc_file && doc_file !== undefined) {
				formData.append("document_link", doc_file);
				console.log("document file found!");
			}

			formData.append("name", client_update_process.name);
			formData.append("description", client_update_process.description);
			formData.append("frequency_id", client_update_process.frequency_id);
			formData.append(
				"unit_measure_id",
				client_update_process.unit_measure_id
			);
			formData.append(
				"average_volume",
				client_update_process.average_volume
			);
			formData.append(
				"parent_process_id",
				client_update_process.parent_process_id
			);

			formData.append(
				"process_inputs",
				client_update_process.process_inputs
			);
			formData.append(
				"process_outputs",
				client_update_process.process_outputs
			);

			formData.append(
				"department_ids",
				client_update_process.department_ids
			);
			let status_val =(!client_update_process.status  || client_update_process.status  === 'false' ? 0 : 1);
			formData.append("status",status_val);

			return axios.post(`/client-process/${client_process_id}`, formData);
		} catch (e) {
			return false;
		}

		//return axios.post(`/client-process/${client_process_id}`, client_update_process);
	}

	add_process_segmentation(process_id, item) {
		return axios.post(`/process/${process_id}/segmentation`, item);
	}

	get_processes_list() {
		processes = [];
		processes[-1] = "N/A";
		processes[1] = "Source to contract";
		processes[2] = "Procure to invoice";
		processes[3] = "Invoice to pay";
		processes[4] = "Spend-category strategy";
		processes[5] = "Vendor selection and negotiation";
		processes[6] = "Vendor management";
		processes[7] = "Analyze & plan needs";
		processes[8] = "Analyze supply market";
		processes[9] = "Execute tender and select supplier";
		processes[10] = "Manage contract and relationship";
		processes[11] = "Master data management";
		processes[12] = "Manage demand for purchases";
		processes[13] = "Analyze & plan needs";
		processes[14] = "Analyze supply market";
		processes[15] = "Execute tender and select supplier";
		processes[16] = "Award contract";
		processes[17] = "Manage contract and relationship";
		processes[18] = "Category wise need identification";
		processes[19] = "Market research";
		processes[20] = "Request for quote";
		processes[21] = "Request for proposal";
		processes[22] = "Supplier assessment";
		processes[23] = "E-auction";
		return process;
	}

	find_tree_item(id, items = null) {
		if (!items) {	
			items = this.items;
		}

		return items.reduce((acc, item) => {
			if (acc) {
				return acc;
			}

			if (item.id === id) {
				return item;
			}

			if (item.children) {
				return this.find_tree_item(id, item.children);
			}

			return acc;
		}, null);
	}

	update_tree_level(item = null, level_id) {
		if (!item) {
			item = item;
		}

		item.level = level_id;
		let next_level = 1 + parseInt(level_id);

		if (item.children) {
			item.children.forEach((i) => {
				return this.update_tree_level(i, next_level);
			});
		}

		return item;
	}
}

export default new ProcessService();
