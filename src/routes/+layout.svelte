<script lang="ts">
	import MenuPopUp from '$lib/MenuPopUp.svelte';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	let { children } = $props();

	let showMenu = writable(false);
	let showMenuOnce = writable(false);
	let position = writable({ x: 0, y: 0 });
	let pageWidth = writable(browser ? window.innerWidth : 0);
	const ratio = 6;

	const displayMenu = (event: MouseEvent) => {
		showMenuOnce.set(true);
		if($showMenu) {
			closeMenu(event)
		} else {
			position.set({ x: event.clientX, y: event.clientY });
			showMenu.set(!$showMenu);
		}
	};

	const setPageWidth = () => {
		pageWidth.set(window.innerWidth);
	}

	const closeMenu = (event: MouseEvent) => {
		if ($showMenu) {
			showMenu.set(false);
		}
	}
</script>
<svelte:window on:resize={setPageWidth} on:click={displayMenu}/>

<style>
	:global(div) {
		-webkit-text-stroke:0px;
		-webkit-text-stroke-color: antiquewhite;
		font-size: 25px;
		margin-top: 0;
	}
	:global(.background),
	:global(h1),
	:global(div) {
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
    :global(.background)
	:global(h1) {
		color: #1d1b1d;
		display: flex;
		cursor: default;
		margin-bottom: 0;
	}
	:global(.background) {
		display: flex;
		justify-content: center;
		position: absolute;
		top: 40vh;
		left: 15%;
		z-index: -1;
	}
	@media (max-width: 900px) {
		:global(.background) {
			left: 5%;
		}
	}
	:global(.lefttoright) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90vh;
		z-index: 10;
	}
	:global(.updown) {
		display: flex;
		align-items: top;
		height: 40vh;
	}
	:global(ul.content-list) {
		list-style-type: none;
	}
	:global(ul.content-list li) {
		margin-top: 30px;
	}

</style>

{@render children()}

{#if $showMenuOnce}
<MenuPopUp xPosition={$position.x} yPosition={$position.y} pageWidth={$pageWidth} isOpen={$showMenu} {ratio}/>
{/if}
