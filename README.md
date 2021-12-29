# dirname_deno

## Usage

### Get the current dirname and filename:

#### Method 1

```ts
/* main.ts */

import { fromMeta, getDirname, getFilename } from "./depts.ts";

const { __dirname, __filename } = fromMeta(import.meta);

console.log(__dirname); // /home/you/projects/project/src
console.log(__filename); // /home/you/projects/project/src/main.ts
```

#### Method 2

```ts
/* main.ts */

import { getDirname, getFilename } from "./depts.ts";

const dirname = getDirname(import.meta);
console.log(dirname); // /home/you/projects/project/src

const filename = getFilename(import.meta);
console.log(filename); // /home/you/projects/project/src/main.ts
```
