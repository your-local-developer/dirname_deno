import { fromFileUrl } from "../depts.ts";
import { dirname } from "../depts.ts";
import { FilePathInfo } from "../types.ts";

function resolveDirname(url: string): string {
  return dirname(fromFileUrl(url));
}

function resolveFilename(url: string): string {
  return fromFileUrl(url);
}

/**
 * 
 * @param meta 
 * @returns 
 */
export function fromMeta(
  meta: ImportMeta,
): FilePathInfo {
  const url = meta.url;
  const __dirname = resolveDirname(url);
  const __filename = resolveFilename(url);

  return { __dirname, __filename };
}

export function getDirname(meta: ImportMeta): string {
  return resolveDirname(meta.url);
}

export function getFilename(meta: ImportMeta): string {
  return resolveFilename(meta.url);
}
