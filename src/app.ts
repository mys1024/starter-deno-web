import { cors, Hono } from "./deps.ts";
import logger from "./middleware/logger.ts";
import router from "./router/index.ts";

const app = new Hono();

// logger
app.use(logger());

// cors
app.use(cors());

// router
app.route("/", router);

export default app;
