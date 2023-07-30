import { colors } from "../deps.ts";
import { iso8601WithOffset } from "./plain.ts";
import { TIMEZONE_OFFSET } from "../config.ts";

export function info(message: string) {
  console.info(
    colors.gray(iso8601WithOffset(Date.now(), TIMEZONE_OFFSET)),
    colors.white(colors.bgBlue(" INFO ")),
    message,
  );
}

export function warn(message: string) {
  console.warn(
    colors.gray(iso8601WithOffset(Date.now(), TIMEZONE_OFFSET)),
    colors.black(colors.bgYellow(" WARN ")),
    message,
  );
}

export function error(message: string) {
  console.error(
    colors.gray(iso8601WithOffset(Date.now(), TIMEZONE_OFFSET)),
    colors.white(colors.bgRed(" ERR  ")),
    message,
  );
}

export function log(message: string) {
  console.log(
    colors.gray(iso8601WithOffset(Date.now(), TIMEZONE_OFFSET)),
    colors.black(colors.bgWhite(" LOG  ")),
    message,
  );
}

const output = {
  info,
  warn,
  error,
  log,
};

export default output;
