import { App } from './src/app';

const app: App = new App({
	start: true,
	initDb: true,
	runMigrations: true,
});

// ts-node-dev does not work well with graceful shutdown on SIGINT/SIGTERM
if (process.env.NODE_ENV !== 'local') {
	process.on('SIGINT', app.stop);
	process.on('SIGTERM', app.stop);
}
