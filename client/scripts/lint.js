const { argv } = require('yargs');
const cmd = require('./cmd');

const lintLibs = async () => {
	const projects = [
		'utils',
		'auth',
		'ui',
	];

	for (const project of projects) {
		console.log(`Linting project "${project}"...`);
		await cmd('npx', 'ng', 'lint', project);
	}
};

const lintApps = async () => {
	const apps = [
		'dev-test',
	];

	for (const app of apps) {
		console.log(`Linting application "${app}"...`);
		await cmd('npx', 'ng', 'lint', app);
	}
};

(async () => {
	console.log(`Linting started (${new Date().toISOString()})...`);

	try {
		await lintLibs();

		if (!argv.libsOnly) {
			await lintApps(argv.prod);
		}

		console.log(`Linting finished (${new Date().toISOString()})`);
		process.exit(0);
	} catch (e) {
		console.error('Linting failed');
		console.error(e);
		process.exit(1);
	}
})();
