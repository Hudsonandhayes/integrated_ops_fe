/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			// =============================================================================
			// MAIN LAYOUT ROUTES
			// =============================================================================
			path: "",
			component: () => import("./layouts/main/Main.vue"),
			children: [
				// =============================================================================
				// Theme Routes
				// =============================================================================
				{
					path: "/",
					name: "home",
					component: () => import("./views/Home.vue"),
				},
				{
					path: "/pages/users",
					name: "page-users",
					component: () =>
						import("@/views/pages/users/AllUsersList.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Users", active: true },
						],
						pageTitle: "Users",
						rule: "editor",
					},
				},
				{
					path: "/pages/users/:id",
					name: "page-user-details",
					component: () =>
						import("@/views/pages/users/users-view/UsersView.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Users" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Users Edit",
						rule: "editor",
					},
				},
				{
					path: "/pages/clients",
					name: "page-clients",
					component: () =>
						import("@/views/pages/clients/ClientsList.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },
							{ title: "Clients", active: true },
						],
						pageTitle: "Clients List",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:id",
					name: "page-clients-detail",
					component: () =>
						import("@/views/pages/clients/Clients.vue"),
					children: [
						{
							path: "client-details",
							component: () =>
								import("@/views/pages/surveys/SurveyList.vue"),
						},
					],
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },
							{ title: "Clients", active: true },
						],
						pageTitle: "Client Info",
						rule: "editor",
					},
				},
				{
					path: "/pages/processes",
					name: "page-processes",
					component: () =>
						import("@/views/pages/process/ProcessList.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Process", active: true },
						],
						pageTitle: "Process List",
						rule: "editor",
					},
				},
				{
					path: "/pages/opportunities",
					name: "page-opportunity-list",
					component: () =>
						import("@/views/pages/opportunity/OpportunityList.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Stream", active: true },
						],
						pageTitle: "Streams List",
						rule: "editor",
					},
				},
				{
					path: "/pages/surveys",
					name: "page-surveys",
					component: () =>
						import("@/views/pages/surveys/SurveyList.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Survey", active: true },
						],
						pageTitle: "Survey List",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:client_id/survey/:id",
					name: "page-survey-detail",
					component: () =>
						import("@/views/pages/surveys/SurveyView.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Survey" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Assessment Info",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:client_id/ops-survey/:id",
					name: "page-client-ops-survey-detail",
					component: () =>
						import(
							"@/views/pages/surveys/ops-survey/OpsSurveyView.vue"
						),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Survey" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Assessment Info",
						rule: "editor",
					},
				},
				{
					path: "/pages/departments",
					name: "page-depatments",
					component: () =>
						import("@/views/pages/department/DepartmentList.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Department", active: true },
						],
						pageTitle: "Department List",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:client_id/assessment/:survey_id",
					name: "assessment-form",
					component: () =>
						import("@/views/pages/surveys/AssessmentForm.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Client" },
							{ title: "Assessment", active: true },
						],
						pageTitle: "Assessment Form",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:client_id/ops-assessment/:survey_id",
					name: "assessment-form",
					component: () =>
						import("@/views/pages/surveys/OpsAssessmentForm.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Client" },
							{ title: "Assessment", active: true },
						],
						pageTitle: "Opportunity Survey Form",
						rule: "editor",
					},
				},

				{
					path: "/pages/client/:client_id/processtree",
					name: "client-process-tree",
					component: () =>
						import("@/views/pages/surveys/ProcessTree.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Client", url: "/" },
							{ title: "ProcessTree", active: true },
						],
						pageTitle: "Process Tree",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:client_id/ptree",
					name: "client-process-tree1",
					component: () => import("@/views/pages/surveys/Ptree.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Client", url: "/" },
							{ title: "ProcessTree", active: true },
						],
						pageTitle: "Process Tree",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:client_id/opportunity-pipeline",
					name: "client-opportunity-pipeline",
					component: () =>
						import("@/views/pages/clients/client-view/Kanban.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Client", url: "/" },
							{ title: "ProcessTree", active: true },
						],
						pageTitle: "Opportunity Pipeline",
						rule: "editor",
					},
				},
				{
					path: "/pages/client/:client_id/survey/:survey_id/vsaform",
					name: "vsa-form",
					component: () =>
						import("@/views/pages/surveys/VSAForm.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Client" },
							{ title: "Survey" },
							{ title: "VSA", active: true },
						],
						pageTitle: "VSA Form",
						rule: "editor",
					},
				},
				{
					path: "/pages/reports",
					name: "page-reports",
					component: () =>
						import("@/views/pages/reports/ReportList.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },

							{ title: "Patients" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Patient Edit",
						rule: "editor",
					},
				},
			],
		},
		// =============================================================================
		// FULL PAGE LAYOUTS
		// =============================================================================
		{
			path: "",
			component: () => import("@/layouts/full-page/FullPage.vue"),
			children: [
				// =============================================================================
				// PAGES
				// =============================================================================
				{
					path: "/pages/about",
					name: "page-about",
					component: () => import("@/views/pages/About.vue"),
				},
				{
					path: "/pages/login",
					name: "page-login",
					component: () => import("@/views/pages/Login.vue"),
				},
				{
					path: "/pages/error-404",
					name: "page-error-404",
					component: () => import("@/views/pages/Error404.vue"),
				},
				{
					path: "/survey/:survey_id/form/:token",
					name: "timing-survey-id-form",
					component: () =>
						import("@/views/pages/surveys/SurveyForm.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },
							{ title: "Survey" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Survey Info",
						rule: "editor",
					},
				},
				{
					path: "/survey/:survey_id/quick-form/:emp_id",
					name: "timing-survey-id-form",
					component: () =>
						import("@/views/pages/surveys/SurveyForm.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },
							{ title: "Survey" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Survey Info",
						rule: "editor",
					},
				},
				{
					path: "/ops-survey/:survey_id/form/:token",
					name: "timing-survey-id-form",
					component: () =>
						import("@/views/pages/surveys/OpsSurveyForm.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },
							{ title: "Survey" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Ops-Survey Info",
						rule: "editor",
					},
				},
				{
					path: "/ops-survey/:survey_id/quick-form/:emp_id",
					name: "timing-survey-id-form",
					component: () =>
						import("@/views/pages/surveys/OpsSurveyForm.vue"),
					meta: {
						breadcrumb: [
							{ title: "Home", url: "/" },
							{ title: "Survey" },
							{ title: "Edit", active: true },
						],
						pageTitle: "Survey Info",
						rule: "editor",
					},
				},
			],
		},
		// Redirect to 404 page, if no match found
		{
			path: "*",
			redirect: "/pages/error-404",
		},
	],
});

router.afterEach(() => {
	// Remove initial loading
	const appLoading = document.getElementById("loading-bg");
	if (appLoading) {
		appLoading.style.display = "none";
	}
});

export default router;
