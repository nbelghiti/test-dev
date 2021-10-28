// Temporary require statement: @studiohyperdrive/logger should export an ESModule bundle for Node.js
const Logger = require('@studiohyperdrive/logger'); // tslint:disable-line variable-name

import config from '@config';

export const logger = new Logger(config.logger);
