<script lang="ts">
	import { page } from "$app/stores";

	let { xPosition, yPosition, pageWidth = 0, ratio = 5, isOpen = false } = $props();

	let menuItems = [
		{link: "/about", text: "about", fill: "#0c424b"},
		{link: "/projects", text: "projects", fill: "#4b3f0c"},
		{link: "/contact", text: "contact", fill: "#0c4b28"},
	];
	let menuY = menuItems.map((_, index) => 35 + 25 * index);

	// size = maxSize - shrinkFactor * log(pageWidth)

	function getResponsiveSize(pageWidth: number) {
		const maxSize = 350; // size on wide screens
		const minSize = 200; // smallest size allowed
		const maxWidth = 1200; // where the size starts to shrink

		const scale = pageWidth / maxWidth;
		const curvedScale = 1 / (1 + Math.exp(-6 * (scale - 1))); // sigmoid-like easing

		return minSize + (maxSize - minSize) * curvedScale;
	}

</script>

<style>
    .menu-text {
        font-family:
        'Oswald-Bold',
        system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			'Open Sans',
			'Helvetica Neue',
			sans-serif;
	}

  .animated-grow {
    animation: grow 0.2s linear forwards;
		transform-origin: center;
	}

	@keyframes grow {
		0% {
		transform: scale(0, 0);
		}
		50% {
			transform: scale(0.5, 0.5);
		}
		100% {
			transform: scale(1, 1);
		}
	}

	.animated-shrink {
    animation: shrink 0.2s linear forwards;
		transform-origin: center;
	}

	@keyframes shrink {
		0% {
		transform: scale(1, 1);
		}
		50% {
			transform: scale(0.5, 0.5);
		}
		100% {
			transform: scale(0, 0);
		}
	}
</style>

<svg
class="menu {isOpen ? "animated-grow" : "animated-shrink"}"
style="top: {yPosition - getResponsiveSize(pageWidth)/2}px; left: {xPosition - getResponsiveSize(pageWidth)/2}px; position: fixed"

width="{getResponsiveSize(pageWidth)}"
height="{getResponsiveSize(pageWidth)}"
viewBox="0 0 120 120"
>

<!-- Circle background -->
<circle cx="60" cy="60" r="59" fill="#1d1b1d" stroke="#a7a5a9" stroke-width="1" />

<!-- svelte-ignore a11y_click_events_have_key_events -->
{#each menuItems as item, index}
<a href="{item.link}">
	<text role="link" class="menu-text" x="60" y="{menuY[index]}" text-anchor="middle" fill={$page.url.pathname == item.link ? item.fill : "#a7a5a9"} font-size="12" cursor="pointer">{item.text}</text>
</a>
{/each}
<a href="/">
	<text role="link" class="menu-text" x="60" y="{menuY[menuY.length - 1] + 25}" text-anchor="middle" fill="#a7a5a9" font-size="6" cursor="pointer">Home</text>
</a>
</svg>

<!-- <svelte:window on:hashchange={handleLocationChange} on:popstate={handleLocationChange} /> -->