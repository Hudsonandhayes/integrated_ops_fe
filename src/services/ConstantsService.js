class ConstantsService {


	get_statuses() {
		let status = [];
		status[0] = "Not Started";
		status[1] = "In Progress";
		status[2] = "Completed";
		status[3] = "Stopped";
		status[4] = "Cancelled";
		return status;
	}

}

export default new ConstantsService();