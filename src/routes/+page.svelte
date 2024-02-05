<script>
	import { onMount } from 'svelte';
	import * as Icon from '$lib/icons/feather';
</script>

<div class="icons">
	{#each Object.keys(Icon) as icon}
		<div class="icon">
			<Icon[icon] />
		</div>
	{/each}
</div>

<style>
	.icons {
		display: flex;
		flex-wrap: wrap;
	}

	.icon {
		width: 10%;
		aspect-ratio: 1 / 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
