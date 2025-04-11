<script>
	import P from './P.svelte';
  let {class: className = ''} = $props();
</script>

<style>

	.wrapper {
		margin-top: -20px;
		gap: 0px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.letter {
		font-size: 50px;
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
		color: #1d1b1d;
	}
	.static-p {
		display: inline-block;
		transform: rotateY(180deg);
	}
	.moving-p {
		display: inline-block;
		transform: rotateY(180deg) translateX(3px);
		animation: flipP 3.5s ease-in-out forwards;
	}

	@keyframes flipP {
		0% {
			transform: rotateY(180deg) translateX(3px);
			transform-origin: left;
		}
		60% {
			transform: rotateY(0deg) translateX(-4px);
			transform-origin: left;	
		}
		100% {
			transform: rotateX(180deg) translateX(-4px) translateY(-5px);
			transform-origin: center;	
		}
	}
</style>

<div class="wrapper">
	<span class="center-container">
		<span class="letter static-p">P</span>
		<span class="letter moving-p">P</span>
	</span>
</div>