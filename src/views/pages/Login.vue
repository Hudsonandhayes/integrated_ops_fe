<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
	<div
		class="
			h-screen
			flex
			w-full
			bg-img
			vx-row
			no-gutter
			items-center
			justify-center
		"
		id="page-login"
	>
		<div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
			<vx-card>
				<div slot="no-body" class="full-page-bg-color">
					<div class="vx-row no-gutter justify-center items-center">
						<div class="vx-col hidden lg:block lg:w-1/2">
							<img
								src="@/assets/images/pages/login/login_img.jpg"
								alt="login"
								class="mx-auto"
							/>
						</div>

						<div
							class="
								vx-col
								sm:w-full
								md:w-full
								lg:w-1/2
								d-theme-dark-bg
							"
						>
							<div class="p-8 login-tabs-container">
								<div class="vx-row justify-center mb-6">
									<img
										id="hnh-logo"
										width="250px"
										alt="Hudson & Hayes logo"
										src="@/assets/images/logo/logo_blue.webp"
									/>
								</div>
								<div class="vx-card__title mb-4">
									<h4 class="mb-4">Login</h4>
									<p>
										Welcome back, please login to your
										account.
									</p>
								</div>

								<div>
									<vs-input
										name="email"
										icon-no-border
										icon="icon icon-user"
										icon-pack="feather"
										label-placeholder="Email"
										v-model="email"
										class="w-full"
									/>

									<vs-input
										type="password"
										name="password"
										icon-no-border
										icon="icon icon-lock"
										icon-pack="feather"
										label-placeholder="Password"
										v-model="password"
										class="w-full mt-6"
									/>

									<div
										class="
											flex flex-wrap
											justify-between
											my-5
										"
									>
										<vs-checkbox
											v-model="checkbox_remember_me"
											class="mb-3"
											>Remember Me</vs-checkbox
										>
										<!-- <router-link to
											>Forgot Password?</router-link
										> -->
									</div>
									<!-- <vs-button type="border"
										>Register</vs-button
									> -->
									<vs-button
										id="login"
										@click="onClickLogin"
										class="float-right my-4"
										>Login</vs-button
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</vx-card>
		</div>
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
	data() {
		return {
			email: "",
			password: "",
			checkbox_remember_me: false,
		};
	},
	methods: {
		...mapActions(["login"]),
		async onClickLogin() {
			// this.$router.push({path: `/`});
			try {
				await this.$vs.loading({
					container: "#login",
					scale: 0.45,
				});
				await this.login({
					email: this.email,
					password: this.password,
				});
				this.$vs.loading.close("#login > .con-vs-loading");
			} catch (e) {
				this.$vs.notify({
					title: "Something went wrong",
					text: `Invalid email or password!`,
					color: "danger",
					time: 6000,
					position: "top-right",
				});
				this.$vs.loading.close("#login > .con-vs-loading");
			}
		},
	},
};
</script>

<style lang="scss">
#page-login {
	.social-login-buttons {
		.bg-facebook {
			background-color: #1551b1;
		}
		.bg-twitter {
			background-color: #00aaff;
		}
		.bg-google {
			background-color: #4285f4;
		}
		.bg-github {
			background-color: #333;
		}
	}
}
</style>
