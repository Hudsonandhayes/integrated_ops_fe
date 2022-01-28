<template>
	<div
		class="the-navbar__user-meta flex items-center"
		v-if="activeUserInfo.displayName"
	>
		<div class="text-right leading-tight hidden sm:block">
			<p class="font-semibold">
				<!-- {{ currentUser }} -->
			</p>
			<small>online</small>
		</div>

		<vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
			<div class="con-img ml-3">
				<img
					v-if="activeUserInfo.photoURL"
					key="onlineImg"
					:src="activeUserInfo.photoURL"
					alt="user-img"
					width="40"
					height="40"
					class="rounded-full shadow-md cursor-pointer block"
				/>
			</div>

			<vs-dropdown-menu class="vx-navbar-dropdown">
				<ul style="min-width: 9rem">
					<!-- <li
						class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
						@click="
							$router.push('/pages/user-settings').catch(() => {})
						"
					>
						<feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
						<span class="ml-2">Profile</span>
					</li> -->

					<!--          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">-->
					<!--            <feather-icon icon="MailIcon" svgClasses="w-4 h-4" />-->
					<!--            <span class="ml-2">Inbox</span>-->
					<!--          </li>-->

					<!--          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">-->
					<!--            <feather-icon icon="CheckSquareIcon" svgClasses="w-4 h-4" />-->
					<!--            <span class="ml-2">Tasks</span>-->
					<!--          </li>-->

					<!--          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">-->
					<!--            <feather-icon icon="MessageSquareIcon" svgClasses="w-4 h-4" />-->
					<!--            <span class="ml-2">Chat</span>-->
					<!--          </li>-->

					<!--          <li class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white">-->
					<!--            <feather-icon icon="HeartIcon" svgClasses="w-4 h-4" />-->
					<!--            <span class="ml-2">Wish List</span>-->
					<!--          </li>-->

					<vs-divider class="m-1" />

					<li
						class="flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white"
						@click="submit_logout"
					>
						<feather-icon icon="LogOutIcon" svgClasses="w-4 h-4" />
						<span class="ml-2">Logout</span>
					</li>
				</ul>
			</vs-dropdown-menu>
		</vs-dropdown>
	</div>
</template>

<script>
import { mapState, mapActions,mapGetters  } from "vuex";

export default {
	computed: {
		...mapGetters(["currentUser"]),
		activeUserInfo() {
			return this.$store.state.AppActiveUser;
		},
		currentUserInfo() {
			return this.$store.state.profile.user;
		}
	},
	methods: {
		...mapActions(["logout"]),
		async submit_logout() {
			try {
				await this.logout();
			} catch (e) {
				console.log("something went wrong with login" + e.message);
			}
		},
		
	},
	created() {
		// this.userInfo();
	}
};
</script>
