import fs from 'fs';
import icons from './node_modules/feather-icons/dist/icons.json' assert { type: 'json' };
import { pascalCase } from 'change-case';

function fromTemplate(name) {
	return `
	<script>
		export let size = 24;
		export let color = '#000000';
	</script>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 {size} {size}"
		fill="none"
		stroke={color}
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		${icons[name]}
	</svg>
	`
}

const names = Object.keys(icons).map(name => pascalCase(name));
const indexFileContent = `
	${names.map(name => `import ${name} from './icons/${name}.svelte';`).join('')};

	export { ${names.join(',')} };
`;

// Create files
fs.writeFileSync('./src/lib/index.js', indexFileContent);
fs.mkdirSync('src/lib/icons', { recursive: true });

for (let icon of Object.keys(icons)) {
	fs.writeFileSync(`./src/lib/icons/${pascalCase(icon)}.svelte`, fromTemplate(icon));
}
