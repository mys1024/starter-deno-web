import { djwt } from "../deps.ts";

export interface JwtPayload extends djwt.Payload {
  username: string;
}
