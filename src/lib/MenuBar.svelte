<script>
	import PAnimation from './PAnimation.svelte';

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
	function home() {
		window.location.href = '/';
	}
</script>

<style>
	.menu-bar {
		background-color: #b3ab6b;
		padding: 0 rem;
		color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.menu {
		display: flex;
		flex-direction: row;
		padding-right: 5px;
		gap: 1rem;
	}

	.menu-item {
		cursor: pointer;
		transition: color 0.3s;
	}

	.menu-item:hover {
		color: #ddd;
	}

	.toggle-button {
		display: none;
		background: none;
		border: none;
		color: white;
		cursor: pointer;
	}
	.logo-button {
		background: none;
		border: none;
		cursor: pointer;
	}

	@media (max-width: 600px) {
		.menu {
			display: none;
			flex-direction: column;
		}

		.menu.open {
			display: flex;
			flex-direction: column;
		}

		.toggle-button {
			display: flex;
		}
	}
</style>

<div class="menu-bar">
	<button class="logo-button" on:click={home}>
		<PAnimation />
	</button>
	<button class="toggle-button" on:click={toggleMenu}> ☰ </button>
	<div class={`menu ${isOpen ? 'open' : ''}`}>
		<div class="menu-item">Home</div>
		<div class="menu-item">About</div>
		<div class="menu-item">Services</div>
		<div class="menu-item">Contact</div>
	</div>
</div>
