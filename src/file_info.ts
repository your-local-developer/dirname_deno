import { fromFileUrl } from "../depts.ts";
import { dirname } from "../depts.ts";
import { FilePathInfo } from "../types.ts";

function _getDirname(url: string): string {
  return dirname(fromFileUrl(url));
}

function _getFilename(url: string): string {
  return fromFileUrl(url);
}

export function fromMeta(
  meta: ImportMeta,
): FilePathInfo {
  const url = meta.url;
  const __dirname = _getDirname(url);
  const __filename = _getFilename(url);

  return { __dirname, __filename };
}

export function getDirname(meta: ImportMeta): string {
  return _getDirname(meta.url);
}

export function getFilename(meta: ImportMeta): string {
  return _getFilename(meta.url);
}
