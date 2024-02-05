import fs from 'fs';
import { pascalCase } from 'change-case';
import icons from './node_modules/feather-icons/dist/icons.json' assert { type: 'json' };
import template from './util/template.js';

const names = Object.keys(icons).map(name => pascalCase(name));
const indexFileContent = `
	${names.map(name => `import ${name} from './${name}.svelte';`).join('')};

	export { ${names.join(',')} };
`;

// Create files
fs.mkdirSync('src/lib/icons/feather', { recursive: true });
fs.writeFileSync('./src/lib/icons/feather/index.js', indexFileContent);

// Create icon files
for (const [name, icon]  of Object.entries(icons)) {
	fs.writeFileSync(`./src/lib/icons/feather/${pascalCase(name)}.svelte`, template(icon, "0 0 24 24"));
}
