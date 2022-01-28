import axios from "@/axios";

class OpportunityService {
	opportunity = {
		id: -1,
		name: "",
		short_name: "",
		description: "",
		notes: "",
		status: 1,
	};

	get_opportunity_labels() {
		let opts = [];
		opts[-1] = "N/A";
		opts[1] = "RPA";
		opts[2] = "OCR";
		opts[3] = "Machine Learning";
		opts[4] = "NLP";
		opts[5] = "Cognitive agent";
		opts[6] = "Smart workflow";
		return opts;
	}

	opportunity_pipeline = {
		id: -1,
		date: "",
		title: "",
		type: "",
	};

	lever_opportunity = {
		opportunity_id: -1,
		lever_value_id: -1,
		employee_id: -1,
		name: "",
		description: "",
		token: "",
	};

	opportunity_options = [
		{
			id: 1,
			label: "RPA",
		},
		{
			id: 2,
			label: "OCR",
		},
		{
			id: 3,
			label: "Machine Learning",
		},
		{
			id: 4,
			label: "NLP",
		},
		{
			id: 5,
			label: "Cognitive agent",
		},
		{
			id: 6,
			label: "Smart workflow",
		},
	];

	opportunities = [
		{
			id: 1,
			name: "Robotic Process Automation",
			short_name: "RPA",
			description: "Robotic Process Automation",
			notes: "",
			status: 1,
		},
		{
			id: 2,
			name: "Outsource/Offshoring",
			short_name: "OCR",
			description: "Outsource/Offshoring",
			notes: "",
			status: 1,
		},
		{
			id: 3,
			name: "Machine Learning",
			short_name: "Machine Learning",
			description: "Machine Learning",
			notes: "",
			status: 1,
		},
		{
			id: 4,
			name: "NLP",
			short_name: "NLP",
			description: "NLP",
			notes: "",
			status: 1,
		},
		{
			id: 5,
			name: "Cognitive agent",
			short_name: "Cognitive agent",
			description: "Cognitive agent",
			notes: "",
			status: 1,
		},
		{
			id: 6,
			name: "Smart workflow",
			short_name: "Smart workflow",
			description: "Smart workflow",
			notes: "",
			status: 1,
		},
	];

	get_levers() {
		return axios.get("/levers");
	}

	get_opportunities() {
		return axios.get("/opportunities");
	}

	get_client_opportunities(client_id) {
		return axios.get(`/client/${client_id}/opportunity-board`);
	}

	create_opportunity(item) {
		return axios.post("/opportunity", item);
	}

	update_opportunity(id, item) {
		return axios.put(`/opportunity/${id}`, item);
	}

	delete_opportunity(id){
		return axios.delete(`/opportunity/${id}`);
	}

	update_client_opportunity(id, item) {
		return axios.post(`/opportunity/${id}`, item);
	}

	move_client_opportunity(id, item) {
		return axios.post(`/client-opportunity/${id}`, item);
		
	}

	remove_opportunity_document(id){
		return axios.delete(`/client-opportunity-document/${id}`);
	}


	create_client_opportunity(item) {
		return axios.post(`/opportunity`, item);
	}

	open_oppportunity_file(link_url, external = false) {
		if (external) {
			window.open(link_url, "_blank");
		} else {
			let link = process.env.VUE_APP_BASE_URL + '/client-opportunity/public/'+link_url;
			window.open(link, "_blank");
		}
	}

	download_oppportunity_report(token){
		let link = process.env.VUE_APP_BASE_URL + `/client-opportunity/${token}/kanban`;
		window.open(link, "_blank");
	}

	save_opportunity_file(opportunity_id, document, doc_file) {
		try {
			let formData = new FormData();
			if (doc_file && doc_file !== undefined) {
				formData.append("document_link", doc_file);
			
				console.log("document file attached!");
			} else {
				formData.append("link", document.link);
			}
			formData.append("name", document.name);
			formData.append('opportunity_stage_id', document.opportunity_stage_id);

			return axios.post(
				`/client-opportunity/${opportunity_id}/document`,
				formData
			);
		} catch (e) {
			return false;
		}
	}

	add_opportunity_comment(opportunity_id, comment) {
		let formData = new FormData();
		formData.append('comment', comment);

		return axios.post(`/client-opportunity/${opportunity_id}/comment`, formData);

	}

	remove_opportunity_comment(id){
		return axios.delete(`/client-opportunity-comment/${id}`);
	}
}

export default new OpportunityService();
