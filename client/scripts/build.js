const { argv } = require('yargs');
const cmd = require('./cmd');

const buildLibs = async () => {
	const projects = [
		'utils',
		'auth',
		'ui',
	];

	for (const project of projects) {
		console.log(`Building project "${project}"...`);
		await cmd('npx', 'ng', 'build', project);
	}
};

const buildApps = async (prod = true) => {
	const apps = [
		'dev-test',
	];

	for (const app of apps) {
		console.log(`Building application "${app}"...`);
		await cmd('npx', 'ng', 'build', app, prod ? '--prod' : '');
	}
};

(async () => {
	console.log(`Build started (${new Date().toISOString()})...`);

	try {
		await buildLibs();

		if (!argv.libsOnly) {
			await buildApps(argv.prod);
		}

		console.log(`Build finished (${new Date().toISOString()})`);
		process.exit(0);
	} catch (e) {
		console.error('Build failed');
		console.error(e);
		process.exit(1);
	}
})();
