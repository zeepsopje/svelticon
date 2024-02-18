export default function template(inner, viewBox) {
	return `
		<script>
			import Link from '$lib/Link.svelte';

			export let size = 24;
			export let tickness = 1;
			export let color = '#000000';
			export let href = false;
			export let target = '_blank';
		</script>

		<Link {href} {target}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={size}
				height={size}
				viewBox="${viewBox}"
				fill="none"
				stroke={color}
				stroke-width={tickness}
				stroke-linecap="round"
				stroke-linejoin="round"
			>
			${inner}
			</svg>
		</Link>
`;
}
