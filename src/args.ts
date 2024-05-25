const HOST = process.env.HOST ?? 'localhost';
const PORT = process.env.PORT ?? 3000;

const printUsage = () =>
  console.log(`\nUsage: index.ts <method> <endpoint> <body>\n`);

export const parseArgs = (args: string[]) => {
  // console.log(args);

  if (args.length < 2 || args.length > 3) {
    printUsage();

    throw new Error(`Invalid arguments`);
  }

  const method = args[0];
  const endpoint = args[1];
  const url = `http://${HOST}:${PORT}${endpoint}`;
  const body = args[2] ? JSON.parse(args[2]) : undefined;

  return { method, endpoint, url, body };
};
