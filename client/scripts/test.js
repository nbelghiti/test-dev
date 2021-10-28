const { argv } = require('yargs');
const cmd = require('./cmd');

const testLibs = async () => {
	const projects = [
		'utils',
		'auth',
		'ui',
	];

	for (const project of projects) {
		console.log(`Testing project "${project}"...`);
		await cmd('npx', 'ng', 'test', project);
	}
};

const testApps = async () => {
	const apps = [
		'dev-test',
	];

	for (const app of apps) {
		console.log(`Testing application "${app}"...`);
		await cmd('npx', 'ng', 'test', app);
	}
};

(async () => {
	console.log(`Testing started (${new Date().toISOString()})...`);

	try {
		await testLibs();

		if (!argv.libsOnly) {
			await testApps();
		}

		console.log(`Testing finished (${new Date().toISOString()})`);
		process.exit(0);
	} catch (e) {
		console.error('Testing failed');
		console.error(e);
		process.exit(1);
	}
})();
