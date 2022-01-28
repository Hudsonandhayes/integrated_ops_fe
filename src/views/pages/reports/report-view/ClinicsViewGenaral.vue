<template>
	<vx-card no-shadow>
		<!-- Img Row -->
		<!--    <div class="flex flex-wrap items-center mb-base">-->
		<!--      <vs-avatar :src="activeUserInfo.photoURL" size="70px" class="mr-4 mb-4" />-->
		<!--      <div>-->
		<!--        <vs-button class="mr-4 sm:mb-0 mb-2">Upload photo</vs-button>-->
		<!--        <vs-button type="border" color="danger">Remove</vs-button>-->
		<!--        <p class="text-sm mt-2">Allowed JPG, GIF or PNG. Max size of 800kB</p>-->
		<!--      </div>-->
		<!--    </div>-->

		<!-- Info -->
		<!--    <vs-input class="w-full mb-base" label-placeholder="Username" v-model="username"></vs-input>-->
		<!--    <vs-input class="w-full mb-base" label-placeholder="Name" v-model="name"></vs-input>-->
		<!--    <vs-input class="w-full" label-placeholder="Email" v-model="email"></vs-input>-->

		<!--    <vs-alert icon-pack="feather" icon="icon-info" class="h-full my-4" color="warning">-->
		<!--      <span>Your account is not verified. <a href="#" class="hover:underline">Resend Confirmation</a></span>-->
		<!--    </vs-alert>-->

		<!--    <vs-input class="w-full my-base" label-placeholder="Company" v-model="company"></vs-input>-->
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Name</small>
				<vs-input required name="name" class="w-full required" label />
				<span class="text-danger text-sm">Name required</span>
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Email</small>
				<vs-input required name="name" class="w-full required" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Account No</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Registration No</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Phone 1</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Phone 2</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Fax</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Credit Limit</small>
				<vs-input class="w-full" required name="Address Line 2" type="text" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Credit Used</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Credit Balance</small>
				<vs-input class="w-full" required name="Postal Code" type="text" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Credit Due Date</small>
				<vs-input class="w-full" required name="city" type="date" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Address Line 1</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Address Line 2</small>
				<vs-input class="w-full" required name="Address Line 2" type="text" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">City</small>
				<vs-input class="w-full" required name="city" type="text" label />
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Postal Code</small>
				<vs-input class="w-full" required name="Address Line 2" type="text" label />
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-full">
				<small class="label">Description</small>
				<vs-textarea height="100px" />
			</div>
		</div>
		<!-- Save & Reset Button -->
		<div class="flex flex-wrap items-center justify-end">
			<vs-button class="ml-auto mt-2">Save Changes</vs-button>
			<vs-button class="ml-4 mt-2" type="border" color="warning">Reset</vs-button>
		</div>
	</vx-card>
</template>

<script>
export default {
	data() {
		return {
			username: "Joe Blog",
			name: this.$store.state.AppActiveUser.displayName,
			email: "hnh@hnh.com",
			company: "H&H",
			checkBox1: true,
		};
	},
	computed: {
		activeUserInfo() {
			return this.$store.state.AppActiveUser;
		},
	},
};
</script>

