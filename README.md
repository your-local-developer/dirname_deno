# dirname_deno

## Usage

### Get the current dirname and filename:

Examples with path: */home/you/projects/project/src/main.ts*

Dirname: */home/you/projects/project/src*

Filename: */home/you/projects/project/src/main.ts*

#### Method 1

```ts
import { fromMeta, getDirname, getFilename } from "./depts.ts";

const { __dirname, __filename } = fromMeta(import.meta);

console.log(__dirname);
console.log(__filename);
```

#### Method 2

```ts
import { getDirname, getFilename } from "./depts.ts";

const filename = getFilename(import.meta);
console.log(filename);

const dirname = getDirname(import.meta);
console.log(dirname);
```