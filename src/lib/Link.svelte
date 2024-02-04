<script>
	export let href;
	export let target = '_blank';
</script>

{#if href}
	<a {href} {target}>
		<slot />
	</a>
{:else}
	<slot />
{/if}
