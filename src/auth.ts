import path from 'path';
import fs from 'fs';

const TOKEN_FILENAME = path.join(
  'secrets',
  process.env.TOKEN_FILENAME ?? 'token.txt',
);

export const getToken = () => 'Bearer ' + fs.readFileSync(TOKEN_FILENAME);

export const saveToken = (accessToken: string) =>
  fs.writeFileSync(TOKEN_FILENAME, accessToken, {
    flag: 'w',
  });
