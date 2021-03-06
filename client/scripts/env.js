const { writeFileSync } = require('fs');
const { config } = require('dotenv');
const { join } = require('path');

const { parsed } = config();

const PLACEHOLDERS = {
	AUTH0_DOMAIN: 'AUTH0_DOMAIN',
	AUTH0_CLIENT_ID: 'AUTH0_CLIENT_ID',
	AUTH0_AUDIENCE: 'AUTH0_AUDIENCE',
	AUTH0_CALLBACK: 'AUTH0_CALLBACK',
	HOST: 'HOST',
}

const envVariables = {
	AUTH0_DOMAIN: process.env[PLACEHOLDERS.AUTH0_DOMAIN] || (parsed && parsed[PLACEHOLDERS.AUTH0_DOMAIN]) || `${PLACEHOLDERS.AUTH0_DOMAIN}_PLACEHOLDER`,
	AUTH0_CLIENT_ID: process.env[PLACEHOLDERS.AUTH0_CLIENT_ID] || (parsed && parsed[PLACEHOLDERS.AUTH0_CLIENT_ID]) || `${PLACEHOLDERS.AUTH0_CLIENT_ID}_PLACEHOLDER`,
	AUTH0_AUDIENCE: process.env[PLACEHOLDERS.AUTH0_AUDIENCE] || (parsed && parsed[PLACEHOLDERS.AUTH0_AUDIENCE]) || `${PLACEHOLDERS.AUTH0_AUDIENCE}_PLACEHOLDER`,
	AUTH0_CALLBACK: process.env[PLACEHOLDERS.AUTH0_CALLBACK] || (parsed && parsed[PLACEHOLDERS.AUTH0_CALLBACK]) || `${PLACEHOLDERS.AUTH0_CALLBACK}_PLACEHOLDER`,
	HOST: process.env[PLACEHOLDERS.HOST] || (parsed && parsed[PLACEHOLDERS.HOST]) || `${PLACEHOLDERS.HOST}_PLACEHOLDER`,
};
const env = `
///////////////////////////////////////////////////////////
//        THIS FILE IS AUTOGENERATED, DO NOT EDIT        //
///////////////////////////////////////////////////////////

/* tslint:disable */
export const env = ${JSON.stringify(envVariables, null, 2)};
/* tslint:enable */
`;

writeFileSync(join(process.cwd(), 'projects', 'dev-test', 'src', 'environments', 'environment-defaults.ts'), env, { encoding: 'UTF-8' });

process.exit(0);
