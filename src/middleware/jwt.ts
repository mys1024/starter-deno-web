import type { JwtPayload } from "../types/jwt.ts";
import { MiddlewareHandler } from "../deps.ts";
import { verifyJwt } from "../utils/auth.ts";

export function jwt(): MiddlewareHandler<{
  Variables: {
    jwt: {
      token: string;
      payload: JwtPayload;
    };
  };
}> {
  return async (c, next) => {
    // get token from headers or search params
    const token = c.req.header("x-auth-token") ||
      c.req.query("auth_token");
    if (!token) {
      c.status(401);
      return;
    }
    // verify token
    const payload = await verifyJwt(token);
    if (!payload) {
      c.status(403);
      return;
    }
    // set jwt variable
    c.set("jwt", {
      token,
      payload,
    });
    // next
    await next();
  };
}

export default jwt;
