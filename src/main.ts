import app from "./app.ts";
import { logx } from "./deps.ts";
import { TIMEZONE_OFFSET } from "./config.ts";

// set logx's timezone offset
logx.setTimezoneOffset(TIMEZONE_OFFSET);

// http
const port = 80;
app.listen({ port });
logx.info(`Serving HTTP on port ${port}...`);
