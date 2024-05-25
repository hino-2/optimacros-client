import axios from 'axios';
import { config } from 'dotenv';
import { parseArgs } from './args';
import { getToken, saveToken } from './auth';

config();

const { method, endpoint, url, body } = parseArgs(process.argv.slice(2));

// console.log({ method, endpoint, url, body });

const isAuthenticationRequest = endpoint === '/auth';

const headers = {};

if (!isAuthenticationRequest)
  Object.assign(headers, { Authorization: getToken() });

axios({
  method,
  url,
  headers,
  data: body,
}).then((response) => {
  console.log('Response code', response.status);
  console.log(response.data);

  if (isAuthenticationRequest) saveToken(response.data.data.accessToken);
});
