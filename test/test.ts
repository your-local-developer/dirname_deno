import { fromMeta, getDirname, getFilename } from "../mod.ts";
import { assertEquals, bold, cyan, underline } from "../test_depts.ts";

Deno.test("dirname via fromMeta", () => {
  const { __dirname } = fromMeta(import.meta);
  assertEquals(/\/test$/.test(__dirname), true);

  console.log(
    `

    ${cyan(bold("Dirname"))}: ${underline(__dirname)} 
    `,
  );
});

Deno.test("filename via fromMeta", () => {
  const { __filename } = fromMeta(import.meta);
  assertEquals(/\/test\/test.ts$/.test(__filename), true);

  console.log(
    `
    
    ${cyan(bold("Filename"))}: ${__filename}
    `,
  );
});

Deno.test("dirname via getDirname", () => {
  const dirname = getDirname(import.meta);
  assertEquals(/\/test$/.test(dirname), true);

  console.log(
    `
  
      ${cyan(bold("Dirname"))}: ${underline(dirname)} 
      `,
  );
});

Deno.test("filename via getFilename", () => {
  const filename = getFilename(import.meta);
  assertEquals(/\/test\/test.ts$/.test(filename), true);

  console.log(
    `

    ${cyan(bold("Filename"))}: ${filename}
    `,
  );
});
