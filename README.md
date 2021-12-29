<div align="center">
  <h1 align="center">dirname_deno</h1>
  <p align="center"><a href="https://nest.land/package/dirname_deno"><img src="https://nest.land/badge.svg" alt="nest.land"></a></p>
  <p align="center">An implementation of Node's __dirname and __filename for Deno</p>
</div>

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
