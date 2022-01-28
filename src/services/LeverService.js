import axios from "@/axios";

class LeverService{

	get_process_levers() {
		return axios.get(`/levers`);
	}

	post_process_levers(client_id,ops_survey_id, items){
		return axios.post(`/client/${client_id}/ops-survey/${ops_survey_id}/process-levers`, items);
	}

	get_saved_process_levers(client_id, ops_survey_id) {
		return axios.get(`/client/${client_id}/ops-survey/${ops_survey_id}/process-levers`);
	}

}

export default new LeverService();