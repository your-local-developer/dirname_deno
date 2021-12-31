import { fromMeta, getDirname, getFilename } from "../mod.ts";
import { assertEquals, bold, cyan, underline } from "../test_deps.ts";

Deno.test("dirname via fromMeta", () => {
  const { __dirname } = fromMeta(import.meta);
  console.log(
    `
    ${cyan(bold("Dirname"))}: ${underline(__dirname)}`,
  );
  assertEquals(/\/test$/.test(__dirname), true);
});

Deno.test("filename via fromMeta", () => {
  const { __filename } = fromMeta(import.meta);
  console.log(
    `
    ${cyan(bold("Filename"))}: ${__filename}`,
  );
  assertEquals(/\/test\/test.ts$/.test(__filename), true);
});

Deno.test("dirname via getDirname", () => {
  const dirname = getDirname(import.meta);
  console.log(
    `
    ${cyan(bold("Dirname"))}: ${underline(dirname)}`,
  );
  assertEquals(/\/test$/.test(dirname), true);
});

Deno.test("filename via getFilename", () => {
  const filename = getFilename(import.meta);
  console.log(
    `
    ${cyan(bold("Filename"))}: ${filename}`,
  );
  assertEquals(/\/test\/test.ts$/.test(filename), true);
});
