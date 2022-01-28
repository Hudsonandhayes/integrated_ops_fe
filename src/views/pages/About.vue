<template>
	<div id="about-page">
		<vs-row id="showcase-img" :style="image">
			<vs-col w="12">
				<h1 class="showcase-title">Bring inspiration and innovation to every healthcare professional</h1>
			</vs-col>
		</vs-row>
		<vs-row id="about-section">
			<vs-col vs-lg="8" vs-sm="12" vs-xs="12">
				<h1 class="section-title">About</h1>
				<p></p>
			</vs-col>
		</vs-row>
	</div>
</template>

<script>
export default {
	name: "about-page",
	data() {
		return {};
	},
};
</script>

<style scoped>
div#showcase-img {
	height: 80vh;
	background-size: cover;
	background-position: 50%;
}
div#showcase-img .vs-col {
	display: grid;
	align-items: center;
}
.showcase-title {
	font-size: 5rem;
	color: #fff;
	width: 70%;
	line-height: 100.8px;
	font-weight: 400;
	padding-left: 10vw;
}
div#about-section {
	position: relative;
	z-index: 2;
	margin-top: -15vh;
}
div#about-section .vs-col {
	background-color: #fff;
	padding: 10vw;
}
div#about-section .vs-col h1 {
	font-size: 5rem;
	color: #2a3147;
	font-weight: normal;
	padding-bottom: 1rem;
}
div#about-section .vs-col p {
	font-size: 1rem;
	color: #2a3147;
	font-weight: 400;
	line-height: 160%;
}
</style>
