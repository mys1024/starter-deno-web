/**
 * Generate ES256 public key and private key.
 */

import * as base64 from "https://deno.land/std@0.196.0/encoding/base64.ts";
import * as colors from "https://deno.land/std@0.196.0/fmt/colors.ts";

// ES256
const algorithm = {
  name: "ECDSA",
  namedCurve: "P-256",
};

// generate ES256 key pair
const { privateKey, publicKey } = await crypto.subtle.generateKey(
  algorithm,
  true,
  ["sign", "verify"],
);

// public key
const jwkPublicKey = await crypto.subtle.exportKey("jwk", publicKey);
const spkiPublicKey = await crypto.subtle.exportKey("spki", publicKey);
console.log(`\
${colors.green("Public Key (jwk):")}
${JSON.stringify(jwkPublicKey)}
${colors.green("Public Key (spki, base64 encoded):")}
${base64.encode(spkiPublicKey)}
`);

// private key
const jwkPrivateKey = await crypto.subtle.exportKey("jwk", privateKey);
const pkcs8PrivateKey = await crypto.subtle.exportKey("pkcs8", privateKey);
console.log(`\
${colors.red("Private Key (jwk):")}
${JSON.stringify(jwkPrivateKey)}
${colors.red("Private Key (pkcs8, base64 encoded):")}
${base64.encode(pkcs8PrivateKey)}
`);
