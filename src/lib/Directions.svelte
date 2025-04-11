<script lang="ts">
	let { xPosition, yPosition, pageWidth = 0, ratio = 5 } = $props();
</script>

<svg
	style="top: {yPosition - 75}px; left: {xPosition + 20}px; position: fixed"
	width="200"
	height="200"
	viewBox="0 0 100 100"
>
	<text
		x="0"
		y="50"
		text-anchor="start"
		stroke="green"
		stroke-width="0"
		fill="white"
		font-size="9px"
		cursor="pointer">Right Click</text
	>
</svg>
