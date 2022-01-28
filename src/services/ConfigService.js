import axios from "@/axios";
class ConfigService {	
	frequencies = [
		{
			id: -1,
			name: "Select",
		},
		{
			id: 1,
			name: "Daily",
		},
		{
			id: 2,
			name: "Weekly",
		},
		{
			id: 3,
			name: "Monthly",
		},
		{
			id: 4,
			name: "Quarterly",
		},
		{
			id: 5,
			name: "Yearly",
		},
	];

	unit_measures = [
		{ id: -1, name: "Select" },
		{ id: 1, name: "Minutes" },
		{ id: 2, name: "Hours" },
		{ id: 3, name: "Days" },
		{ id: 4, name: "Weeks" },
	];

	colors = [
		"#b8c2cc",
		"#e3342f",
		"#6574cd",
		"#38c172",
		"#4dc0b5",
		"#3490dc",
		"#9561e2",
		"#f66d9b",
		"#f6993f",
		"#ffed4a",
	];
}

export default new ConfigService();
