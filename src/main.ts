import app from "./app.ts";
import output from "./utils/output.ts";

const hostname = "::";
const port = 80;

Deno.serve({
  port,
  hostname,
  onListen: () => {
    output.info(`Serving HTTP on hostname: "${hostname}", port: ${port}.`);
  },
}, app.fetch);
