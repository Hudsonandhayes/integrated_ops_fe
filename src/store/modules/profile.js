import AuthService from "@/services/AuthService";
import Cookies from "js-cookie";
import axios from "@/axios";
import router from "@/router";
import state from "../state";

export default {
	state: {
		current_user_data: {},
		current_user_permission: null,
		current_user_plan: null,
		current_user_addons: null,
		user_status: "",
		user: {},
	},
	mutations: {
		CLEAR_CURRENT_USER: (state) => {
			state.current_user_data = undefined;
			state.current_user_permission = undefined;
			state.current_user_plan = undefined;
			state.current_user_addons = undefined;
		},
		SET_CURRENT_USER_PLAN_DATA: (state, value) => {
			state.current_user_plan = value.plan;
			state.current_user_addons = value.addons;
		},
		SET_CURRENT_USER_PERMISSION: (state, value) => {
			state.current_user_permission = value;
		},
		SET_CURRENT_USER: (state, value) => {
			state.current_user_data = value.user;
			state.user = value.user;
			state.role_id = value.user.role_id;
			const token = value.access_token;
			Cookies.set("current_user_token", token);
			console.log(state.current_user_data, "user data");
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			localStorage.setItem("token", token);
			localStorage.setItem("user", JSON.stringify(value.user));
		},
		INITIALISE_STORE: (state) => {
			// console.log('loading store initialisation');

			let currentPath = window.location.pathname.split("/");

			if (
				(currentPath[1] === "ops-survey" ||
					currentPath[1] === "survey") &&
				currentPath[3] === "form"
			) {
				// for mail form routes.
			} else if (localStorage.getItem("token")) {
				let token = localStorage.getItem("token");
				if (localStorage.getItem("user")) {
					let profile_data = JSON.parse(localStorage.getItem("user"));

					state.user = profile_data;

					state.role_id = profile_data.role_id;
				}
			} else {
				router.push("/pages/login");
			}
		},
	},

	actions: {
		async initialise_store({ commit }) {
			commit("INITIALISE_STORE");
		},
		setCurrentUser: ({ commit }, payload) => {
			commit("SET_CURRENT_USER", payload);
		},
		async afterLogin({ commit }) {
			window.location = "/";
		},
		async login({ commit }, payload) {
			const login_data = (await AuthService.login(payload)).data;

			console.log(login_data, "login data");
			// const login_data = (await profile.login(payload)).data
			// login_data.user_data = login_data.data.user
			commit("SET_CURRENT_USER", login_data);
			await this.dispatch("afterLogin");
		},

		async logout({ commit }) {
			console.log("user log out");
			const login_data = await AuthService.logout();

			if (
				login_data.data.success &&
				login_data.data.success !== undefined
			) {
				localStorage.removeItem("user");
				localStorage.removeItem("userInfo");
				localStorage.removeItem("token");
				delete axios.defaults.headers.common["Authorization"];
				//commit('CLEAR_CURRENT_USER');
				router.push("/pages/login");
			}
		},
	},
	getters: {
		isLogedIn: (state) => state.current_user_data !== null,
		currentUser: (state) => state.current_user_data,
		permissions: (state) => state.current_user_permission,
		addons: (state) => state.current_user_addons,
		plan: (state) => state.current_user_plan,
	},
};
