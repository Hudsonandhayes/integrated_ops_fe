/* eslint-disable vue/html-quotes */
import AuthService from "@/services/AuthService";

export default [
	{
		url: "/",
		name: "Dashboard",
		slug: "home",
		icon: "HomeIcon",
		roles: AuthService.ROLE_ALL,
	},
	{
		header: "Operations",
		icon: "ArchiveIcon",
		items: [
			{
				url: "/pages/clients",
				name: "Clients",
				slug: "page2",
				icon: "ArchiveIcon",
				roles: AuthService.ROLE_ALL,
			},
		],
	},

	{
		header: "Settings",
		icon: "UsersIcon",
		items: [
			{
				url: "/pages/settings",
				name: "Settings",
				slug: "page2",
				icon: "HomeIcon",
				roles: [AuthService.ROLE_ADMIN],
				submenu: [
					{
						url: "/pages/processes",
						name: "Processes",
						slug: "page2",
						icon: "FileIcon",
						roles: [AuthService.ROLE_ADMIN],
					},
					{
						url: "/pages/users",
						name: "Users",
						slug: "page2",
						icon: "UsersIcon",
						roles: [AuthService.ROLE_ADMIN],
					},

					{
						url: "/pages/departments",
						name: "Departments",
						slug: "page2",
						icon: "FileIcon",
						roles: [AuthService.ROLE_ADMIN],
					},
				],
			},
		],
	},
];
