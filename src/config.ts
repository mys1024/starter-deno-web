import { base64, loadDotEnv } from "./deps.ts";

// load .env
await loadDotEnv({ export: true });

/**
 * A helper for getting environment variable.
 */
function getEnvVar<REQUIRED extends boolean>(
  key: string,
  required: REQUIRED,
) {
  const envVar = Deno.env.get(key);
  if (required && envVar === undefined) {
    throw new Error(`Environment variable "${key}" is required.`);
  }
  return envVar as REQUIRED extends true ? string : string | undefined;
}

/**
 * Timezone offset in minutes compared to UTC time.
 */
export const TIMEZONE_OFFSET = Number.parseInt(
  getEnvVar("TIMEZONE_OFFSET", false) || "0",
);

/**
 * The ES256 public key for JWT.
 */
export const JWT_KEY_PUBLIC = await crypto.subtle.importKey(
  "spki",
  base64.decode(getEnvVar("JWT_KEY_PUBLIC", true)),
  { name: "ECDSA", namedCurve: "P-256" },
  false,
  ["verify"],
);

/**
 * The ES256 private key for JWT.
 */
export const JWT_KEY_PRIVATE = await crypto.subtle.importKey(
  "pkcs8",
  base64.decode(getEnvVar("JWT_KEY_PRIVATE", true)),
  { name: "ECDSA", namedCurve: "P-256" },
  false,
  ["sign"],
);

/**
 * The URI of database.
 */
export const DB_URI = getEnvVar("DB_URI", true);