import { assertEquals } from "../deps.ts";
import { asyncIgnoreError, ignoreError, iso8601WithOffset } from "./plain.ts";

Deno.test("utils/plain ignoreError()", () => {
  assertEquals(
    ignoreError(() => {
      throw new Error("err!");
    }),
    undefined,
  );
  assertEquals(ignoreError(() => "foo"), "foo");
});

Deno.test("utils/plain asyncIgnoreError()", async () => {
  assertEquals(
    await asyncIgnoreError(async () => {
      await Promise.resolve();
      throw new Error("err!");
    }),
    undefined,
  );
  assertEquals(
    await asyncIgnoreError(async () => await Promise.resolve("bar")),
    "bar",
  );
});

Deno.test("utils/plain iso8601WithOffset()", () => {
  assertEquals(
    iso8601WithOffset(1703082586000, 0),
    "2023-12-20T14:29:46.000Z",
  );
  assertEquals(
    iso8601WithOffset(1703080905000, 480),
    "2023-12-20T22:01:45.000+08:00",
  );
});
