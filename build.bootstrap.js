import fs from 'node:fs';
import path from 'node:path';
import { JSDOM } from 'jsdom';
import { pascalCase } from 'change-case';
import template from './util/template.js';

const PACK_NAME = 'bootstrap';
const ICON_DIR = './node_modules/bootstrap-icons/icons';

const files = fs
	.readdirSync(ICON_DIR)
	.map(file => {
		let name = pascalCase(file.replace('.svg', ''));
		name = name.replace('_', '');
		name = (name.search(/^\d/) > -1 ? 'N' : '') + name;

		return [name, file];
	});

const indexFileContent = `
	${files.map(file => `import ${file[0]} from './${file[0]}.svelte';`).join('')};

	export { ${files.map(file => file[0]).join(',')} };
`;

fs.mkdirSync(`src/lib/icons/${PACK_NAME}`, { recursive: true });
fs.writeFileSync(`./src/lib/icons/${PACK_NAME}/index.js`, indexFileContent);

for (const i in files) {
	console.log(`Processing icon '${files[i][0]}' from pack '${PACK_NAME}'`);
	const uri = path.join(ICON_DIR, files[i][1]);
	const contents = fs.readFileSync(uri, { encoding: 'utf8' });
	const node = new JSDOM(contents)
		.window
		.document
		.querySelector('svg');
	const viewBox = node.getAttribute('viewBox');

	fs.writeFileSync(
		`./src/lib/icons/${PACK_NAME}/${files[i][0]}.svelte`,
		template(node.innerHTML, viewBox),
	);
}
