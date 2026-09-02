import * as dotenv from 'dotenv';
import * as path from 'path';

// Which environment to run against. Defaults to "dev".
// Run with a different env like: ENV=staging npx playwright test
const envName = process.env.ENV || 'dev';

dotenv.config({ path: path.resolve(__dirname, `${envName}.env`) });

export const config = {
  baseUrl: process.env.BASE_URL || 'https://inerg-test.web.app/',
  defaultTimeout: Number(process.env.DEFAULT_TIMEOUT) || 15000,
  envName,
};
