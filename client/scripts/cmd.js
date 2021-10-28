const execa = require('execa');

module.exports = async (prog, ...args) => {
	const p = execa(prog, args);

	p.stdout.pipe(process.stdout);
	p.stderr.pipe(process.stderr);

	return p;
};
