import axios from '@/axios';

class OpportunityPipelineService {

	opportunity = {
		id: -1,
		name: "",
		description: "",
		estimated_fte_saving: "",
		automation_capability: "",
		status: 1,
	};

	opportunities = [

		{
			id: 1,
			name: "Supplier set up automation",
			description:
				"Use RPA to automate the set up of suppliers in SAP",
			estimated_fte_saving: 5,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 2,
			name: "Bid sheet automation",
			description:
				"ML to recognize bid sheets and recomend decisions",
			estimated_fte_saving: 2,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 3,
			name: "Supplier set up automation",
			description:
				"Automate creation of supplier data during supplier onboarding",
			estimated_fte_saving: 2.1,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 4,
			name: "Purchase Requisition automation",
			description:
				"Automate the creation of the PR from spreadsheet to the ERP",
			estimated_fte_saving: 1.2,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 5,
			name: "Auto approval follow up",
			description:
				"Automate the auto-notifications for approvals. Automate the chasing of approvals",
			estimated_fte_saving: 0.7,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 6,
			name: "RFQ creation automation",
			description:
				"Automate the copying of data from a spreadsheet that contains material, supplier name, contact name then input the data into a template bid sheet and email to the supplier. Automate follow up to suppliers after sending a quote e.g. every 3 days",
			estimated_fte_saving: 4,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 7,
			name: "Purchase order creation automation",
			description:
				"Automate the routine, repetitive task converting purchase requests to purchase orders. Typically done by buyers or buying assistantsAutomate",
			estimated_fte_saving: 10,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 8,
			name: "AP invoice sorting automation",
			description:
				"Opening emails & attachments Logging into applications Filling out forms and spreadsheets Copying data between screens Extracting data from multiple sources Calculations Logic-based decisions",
			estimated_fte_saving: 1,
			automation_capability: 1,
			status: 1,
		},
		{
			id: 9,
			name: "Market research and supplier discovery using ML",
			description:
				"1.)Connecting differrent local subsidiaries of a supplier to single international supplier. 2.) machine learning to enhance supplier discovery based on information gained, cleansed and enriched from the Internet",
			estimated_fte_saving: 0.5,
			automation_capability: 3,
			status: 1,
		},
		{
			id: 10,
			name: "Auto-classification of spend data",
			description:
				"Opening emails & attachments Logging into applications Filling out forms and spreadsheets Copying data between screens Extracting data from multiple sources Calculations Logic-based decisions",
			estimated_fte_saving: 2,
			automation_capability: 3,
			status: 1,
		},
		{
			id: 11,
			name: "Improve accuracy of data captured from invoices",
			description:
				"ML to improve accuracy in recognizing invoice data captured through optical character recognition (OCR)",
			estimated_fte_saving: 0.5,
			automation_capability: 3,
			status: 1,
		},
		{
			id: 12,
			name: "Fraud detection in automated payments",
			description:
				"ML payment tracker to identify errors of potential fraud in large amounts of automated payments",
			estimated_fte_saving: 0.5,
			automation_capability: 3,
			status: 1,
		},
		{
			id: 13,
			name: "Anomalis identification",
			description:
				"Identify any anomalies in sudden changes of price by supplier or per commodity",
			estimated_fte_saving: 0.5,
			automation_capability: 3,
			status: 1,
		},
		{
			id: 14,
			name: "Supplier risk identification from public information",
			description:
				"Track publictly available information or social media for signals about suppliers risk positions.",
			estimated_fte_saving: 0.6,
			automation_capability: 4,
			status: 1,
		},
		{
			id: 15,
			name: "Contract scanning to identify savings",
			description:
				"Scan and interpret lengthy and verbose contract documents for potential savings opportunities.",
			estimated_fte_saving: 1.2,
			automation_capability: 4,
			status: 1,
		},
		{
			id: 16,
			name: "Extraction of invoice data",
			description:
				"Extract information from invoices.",
			estimated_fte_saving: 1.5,
			automation_capability: 4,
			status: 1,
		},
		{
			id: 17,
			name: "Smart workflow for invoice processsing",
			description:
				"Smart workflows to simplify invoice allocation.",
			estimated_fte_saving: 1,
			automation_capability: 6,
			status: 1,
		},
		{
			id: 18,
			name: "Smart workflow for invoice approval",
			description:
				"Smart workflows to simplify approval process and decision making assistance.",
			estimated_fte_saving: 2,
			automation_capability: 6,
			status: 1,
		},
		{
			id: 19,
			name: "Market research",
			description:
				"Outsource market research to identify potentail supplier globally and alternate material sourcing.",
			estimated_fte_saving: 2,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 20,
			name: "RFX support",
			description:
				"Outsource RFX document process.",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 21,
			name: "Supplier evaluation",
			description:
				"Outsource supplier evaluation process using information given.",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 22,
			name: "E-Auction",
			description:
				"Outsource e-auction set up and documentation for selected categories.",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 23,
			name: "Supplier performance reporting",
			description:
				"Outsource  supplier KPI reporting and dashboard activities.",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 24,
			name: "Contract admin",
			description:
				"Outsource contract admin and management activitities.",
			estimated_fte_saving: 3,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 25,
			name: "Master data management",
			description:
				"Outsource MDM activitites.",
			estimated_fte_saving: 2,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 26,
			name: "RFQ process",
			description:
				"Outsource end to RFQ process (Buyer support).",
			estimated_fte_saving: 5,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 27,
			name: "PO Creation process",
			description:
				"Outsource end to purchase order creation process (Buyer support).",
			estimated_fte_saving: 5,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 28,
			name: "Expediting",
			description:
				"Outsource order confimration and expediting activities (Helpdesk model).",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 29,
			name: "Goods receiept helpdesk",
			description:
				"Outsource goods reciept and issue resolution activities (Helpdesk model).",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 30,
			name: "Issue resolution helpdesk",
			description:
				"Outsource follow up activities (Helpdesk model).",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 31,
			name: "AP support",
			description:
				"Outsource Account payable activities (AP support).",
			estimated_fte_saving: 5,
			automation_capability: 2,
			status: 1,
		},
		{
			id: 32,
			name: "Spend Analytics",
			description:
				"Outsource Spend Analytics to a spend management/automation solution provider.",
			estimated_fte_saving: 1,
			automation_capability: 2,
			status: 1,
		},

	]

}

export default new OpportunityPipelineService();