<script>
	let { classA = '', classB = '', class: className = '' } = $props();
</script>

<style>

</style>

    <svg
        class={className}
        width="50"
        height="50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g class={classA}>
            <path
                d="M 40,10
                     L 40,90
                     M 45,10
                     C 35,0 -30,30 50,50
                     "
                stroke="#1d1b1d"
                stroke-width="10"
                fill="none"
            />
        </g>
        <g class={classB}>
            <path
                d="M 40,10
                     L 40,90
                     M 45,10
                     C 35,0 -30,30 50,50
                     "
                stroke="#1d1b1d"
                stroke-width="10"
                fill="none"
            />
        </g>
    </svg>
