import { oak } from "../deps.ts";
import { jwt } from "../middleware/jwt.ts";

const router = new oak.Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello, world!";
});

router.get("/me", jwt(), (ctx) => {
  ctx.response.body = `Hi, ${ctx.state.jwt.payload.username}!`;
});

export default router;
