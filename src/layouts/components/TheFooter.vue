<template functional>
	<footer class="the-footer flex-wrap justify-between" :class="classes">
		<p>
			<span class="mr-2">COPYRIGHT &copy;</span>
			<span class="mr-2">{{ new Date().getFullYear() }}</span>
			<a class="mr-2" href target="_blank" rel="nofollow">Hudson & Hayes</a>
			<span class="hidden sm:inline-block">, All rights Reserved</span>
		</p>
		<span class="md:flex hidden items-center">
			<span>Built by EnigmaX</span>
		</span>
	</footer>
</template>

<script>
export default {
	name: "the-footer",
	props: {
		classes: {
			type: String,
		},
	},
};
</script>
