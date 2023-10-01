import { type MiddlewareHandler } from "../deps.ts";
import output from "../utils/output.ts";

export function logger(): MiddlewareHandler<{
  Bindings: {
    remoteAddr: Deno.NetAddr;
  };
}> {
  return async (c, next) => {
    const startTime = Date.now();
    await next();
    const endTime = Date.now();
    const hostname = c.env.remoteAddr.hostname;
    const port = c.env.remoteAddr.port;
    output.log([
      hostname.includes(":") ? `[${hostname}]:${port}` : `${hostname}:${port}`, // ip and port
      c.req.method,
      c.req.url,
      c.res.status,
      `${endTime - startTime}ms`, // response time
    ].join(" "));
  };
}

export default logger;
