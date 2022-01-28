<template>
	<div>
		<GChart
			type="CandlestickChart"
			:options="options"
			:data="data"
			:settings="{ packages: ['corechart'] }"
		/>
	</div>
</template>

<script>
import { GChart } from "vue-google-charts";
export default {
	name: "App",
	props: ["data"],
	components: {
		GChart,
	},
	data() {
		return {
			options: {
				chartArea: { width: "50%", height: "90%" },
				orientation: "vertical",
				hAxis: {
					gridlines: { color: "red", minSpacing: 5 },
				},
				vAxis: {
					gridlines: { color: "red", minSpacing: 5 },
				},
				legend: {
					position: "none",
					textStyle: { color: "blue", fontSize: 16 },
				},
				tooltip: { isHtml: true },
			},
		};
	},
	methods: {
		createCustomHTMLContent(process, min, avg, max) {
			return (
				'<div style="padding:5px 5px 5px 5px;">' +
				process +
				"<br/><table>" +
				"<tr>" +
				"<td>Max</td>" +
				"<td><b>" +
				max +
				"</b></td>" +
				"</tr>" +
				"<tr>" +
				"<td>Avg</td>" +
				"<td><b>" +
				avg +
				"</b></td>" +
				"</tr>" +
				"<tr>" +
				"<td>Min</td>" +
				"<td><b>" +
				min +
				"</b></td>" +
				"</tr>" +
				"</table>" +
				"</div>"
			);
		},
	},
};
</script>
