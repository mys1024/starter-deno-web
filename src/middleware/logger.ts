import { oak } from "../deps.ts";
import { logx } from "../deps.ts";

function logger(): oak.Middleware {
  return async (ctx, next) => {
    const startTime = Date.now();
    await next();
    const endTime = Date.now();
    logx.log([
      ctx.request.ip,
      ctx.request.method,
      ctx.request.url,
      ctx.response.status,
      `${endTime - startTime}ms`, // response time
    ].join(" "));
  };
}

export default logger;
