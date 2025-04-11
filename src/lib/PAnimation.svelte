<script>
	import P from './P.svelte';
  let {class: className = ''} = $props();
</script>

<style>
  :global(.animated-flip) {
    animation: flipVertical 3s linear forwards;
		transform-origin: center;
	}

	@keyframes flipVertical {
    0% {
      transform: scale(1, 1);
		}
		10% {
			transform: scale(1, 1);
		}
		50% {
			transform: scale(-1, 1);
		}
		80% {
			transform: scale(-1, -1);
		}
		100% {
			transform: scale(-1, -1);
		}
	}

  :global(.animated-skew) {
		animation: skewVertical 3s linear forwards;
		transform-origin: center;
	}

	@keyframes skewVertical {
		0% {
			transform: scale(1, 1);
		}
		40% {
			transform: skew(0deg, 0deg);
		}
		98% {
			transform: skew(0deg, 0deg);
		}
		100% {
			transform: skew(-10deg, 0deg);
		}
	}
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

<div class="wrapper">
	<P class="animated-skew {className}" classA="animated-flip" />
</div>