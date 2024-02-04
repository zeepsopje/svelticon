import fs from 'fs';
import icons from './node_modules/feather-icons/dist/icons.json' assert { type: 'json' };
import { pascalCase } from 'change-case';

function fromTemplate(name) {
	return `
	<script>
		import Link from '$lib/Link.svelte';

		export let size = 24;
		export let color = '#000000';
		export let href;
		export let target = '_blank';
	</script>

	<Link {href} {target}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke={color}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			${icons[name]}
		</svg>
	</Link>
	`
}

const names = Object.keys(icons).map(name => pascalCase(name));
const indexFileContent = `
	${names.map(name => `import ${name} from './icons/${name}.svelte';`).join('')};

	export { ${names.join(',')} };
`;

// Create files
fs.mkdirSync('src/lib/icons', { recursive: true });
fs.writeFileSync('./src/lib/index.js', indexFileContent);

for (let icon of Object.keys(icons)) {
	fs.writeFileSync(`./src/lib/icons/${pascalCase(icon)}.svelte`, fromTemplate(icon));
}
