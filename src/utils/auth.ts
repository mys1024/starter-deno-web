import { djwt } from "../deps.ts";
import { JWT_KEY_PRIVATE, JWT_KEY_PUBLIC } from "../config.ts";
import { asyncIgnoreError } from "./plain.ts";
import type { JwtPayload } from "../types/jwt.ts";

export async function signJwt(
  duration: number,
  payload: JwtPayload,
) {
  const now = Math.floor(Date.now() / 1000);
  return await djwt.create(
    { alg: "ES256", typ: "JWT" },
    {
      ...payload,
      nbf: now,
      exp: now + Math.floor(duration),
    },
    JWT_KEY_PRIVATE,
  );
}

export async function verifyJwt(jwt: string) {
  return await (asyncIgnoreError(async () =>
    await djwt.verify(jwt, JWT_KEY_PUBLIC) as JwtPayload
  ));
}