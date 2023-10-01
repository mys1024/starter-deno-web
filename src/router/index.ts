import type { JwtPayload } from "../types/jwt.ts";
import { Hono } from "../deps.ts";
import { jwt } from "../middleware/jwt.ts";

const router = new Hono<{
  Variables: {
    jwt: {
      token: string;
      payload: JwtPayload;
    };
  };
}>();

router.get("/", (c) => {
  return c.text("Hello, world!");
});

router.get("/me", jwt(), (c) => {
  const { payload } = c.get("jwt");
  return c.text(`Hi, ${payload.username}!`);
});

export default router;
