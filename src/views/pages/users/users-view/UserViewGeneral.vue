<template>
	<vx-card no-shadow>
		<!-- Img Row -->
		<div class="flex flex-wrap items-center mb-base">
			<vs-avatar
				:src="activeUserInfo.photoURL"
				size="70px"
				class="mr-4 mb-4"
			/>
			<div>
				<vs-button class="mr-4 sm:mb-0 mb-2">Upload photo</vs-button>
				<vs-button type="border" color="danger">Remove</vs-button>
				<p class="text-sm mt-2">
					Allowed JPG, GIF or PNG. Max size of 800kB
				</p>
			</div>
		</div>

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
				<small class="label">First Name</small>
				<vs-input
					v-validate="'required|min:3'"
					name="name"
					class="w-full required"
					v-model="user_info.firstName"
				/>
				<span class="text-danger text-sm" v-show="errors.has('name')">
					{{ errors.first("name") }}
				</span>
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Last Name</small>
				<vs-input
					v-validate="'required|min:3'"
					name="lastName"
					class="w-full required"
					v-model="user_info.lastName"
				/>
				<span
					class="text-danger text-sm"
					v-show="errors.has('lastName')"
				>
					{{ errors.first("lastName") }}
				</span>
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Email</small>
				<vs-input
					class="w-full"
					v-validate="'required|email'"
					name="email"
					type="text"
					v-model="user_info.email"
				/>
				<span class="text-danger text-sm" v-show="errors.has('email')">
					{{ errors.first("email") }}
				</span>
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Profession</small>
				<vs-input
					v-validate="'required|min:3'"
					class="w-full"
					name="profession"
					type="text"
					v-model="user_info.profession"
				/>
				<span
					class="text-danger text-sm"
					v-show="errors.has('profession')"
				>
					{{ errors.first("profession") }}
				</span>
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">Gender</small>
				<vs-input
					v-validate="'required|min:3'"
					class="w-full"
					name="gender"
					type="text"
					v-model="user_info.gender"
				/>
				<span class="text-danger text-sm" v-show="errors.has('gender')">
					{{ errors.first("gender") }}
				</span>
			</div>
			<div class="vx-col w-1/2">
				<small class="label">DOB</small>
				<vs-input
					v-validate="'required'"
					class="w-full"
					name="date of birth"
					type="date"
					v-model="user_info.dob"
				/>
				<span
					class="text-danger text-sm"
					v-show="errors.has('date of birth')"
				>
					{{ errors.first("date of birth") }}
				</span>
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">House Number</small>
				<vs-input
					v-validate="'required|min:3'"
					class="w-full"
					name="house number"
					type="text"
					v-model="user_info.houseNumber"
				/>
				<span
					class="text-danger text-sm"
					v-show="errors.has('house number')"
				>
					{{ errors.first("house number") }}
				</span>
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Address Line 2</small>
				<vs-input
					v-validate="'required|min:3'"
					class="w-full"
					name="address"
					type="text"
					v-model="user_info.address"
				/>
				<span
					class="text-danger text-sm"
					v-show="errors.has('address')"
				>
					{{ errors.first("address") }}
				</span>
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label">City</small>
				<vs-input
					v-validate="'required|min:3'"
					class="w-full"
					name="city"
					type="text"
					v-model="user_info.city"
				/>
				<span class="text-danger text-sm" v-show="errors.has('city')">
					{{ errors.first("city") }}
				</span>
			</div>
			<div class="vx-col w-1/2">
				<small class="label">Postal Code</small>
				<vs-input
					v-validate="'required|min:3'"
					class="w-full"
					name="Postal Code"
					type="text"
					v-model="user_info.postcode"
				/>
				<span
					class="text-danger text-sm"
					v-show="errors.has('Postal Code')"
				>
					{{ errors.first("Postal Code") }}
				</span>
			</div>
		</div>
		<div class="vx-row mb-5">
			<div class="vx-col w-1/2">
				<small class="label">Reg No</small>
				<vs-input
					v-validate="'required|min:3'"
					class="w-full"
					name="registartion number"
					type="text"
					v-model="user_info.regNo"
				/>
				<span
					class="text-danger text-sm"
					v-show="errors.has('registartion number')"
				>
					{{ errors.first("registartion number") }}
				</span>
			</div>
		</div>
		<div class="vx-row mb-3">
			<div class="vx-col w-1/2">
				<small class="label"></small>
				<vs-checkbox v-model="checkBox1">Status?</vs-checkbox>
			</div>
		</div>
		<!-- Save & Reset Button -->
		<div class="flex flex-wrap items-center justify-end">
			<vs-button class="ml-auto mt-2" @click="submitEdit"
				>Save Changes</vs-button
			>
			<vs-button class="ml-4 mt-2">Resend Verification Email</vs-button>
			<vs-button class="ml-4 mt-2" type="border" color="warning"
				>Reset</vs-button
			>
		</div>
	</vx-card>
</template>

<script>
export default {
	data() {
		return {
			username: "Jane Doe",
			name: this.$store.state.AppActiveUser.displayName,
			email: "jane@doe.com",
			company: "H&H",
			checkBox1: true,
			user_info: {
				firstName: "",
				lastName: "",
				email: "",
				profession: "",
				gender: "",
				dob: "",
				houseNumber: "",
				address: "",
				city: "",
				postcode: "",
				regNo: "",
				status: false,
				photo: null
			}
		};
	},
	computed: {
		activeUserInfo() {
			return this.$store.state.AppActiveUser;
		}
	},
	methods: {
		submitEdit() {
			try {
				this.$validator.validateAll().then(result => {
					console.log("no error");
				});
			} catch (error) {
				console.log("error during form submission");
			}
		}
	}
};
</script>
