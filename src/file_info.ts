import { fromFileUrl } from "../deps.ts";
import { dirname } from "../deps.ts";
import { FilePathInfo } from "../types.ts";

function resolveDirname(url: string): string {
  return dirname(fromFileUrl(url));
}

function resolveFilename(url: string): string {
  return fromFileUrl(url);
}

/**
 * Creates constants for the dirname and filename of your file.
 *
 * @since 0.1.0
 * @author your-local-developer <https://github.com/your-local-developer>
 * @example ```ts
 * const { __dirname, __filename } = fromMeta(import.meta);
 * ```
 */
export function fromMeta(
  meta: ImportMeta,
): FilePathInfo {
  const url = meta.url;
  const __dirname = resolveDirname(url);
  const __filename = resolveFilename(url);

  return { __dirname, __filename };
}

/**
 * Gets the dirname of your file.
 *
 * @since 0.1.0
 * @author your-local-developer <https://github.com/your-local-developer>
 * @example ```ts
 * const dirname = getDirname(import.meta);
 * ```
 */
export function getDirname(meta: ImportMeta): string {
  return resolveDirname(meta.url);
}

/**
 * Gets the filename of your file.
 *
 * @since 0.1.0
 * @author your-local-developer <https://github.com/your-local-developer>
 * @example ```ts
 * const filename = getFilename(import.meta);
 * ```
 */
export function getFilename(meta: ImportMeta): string {
  return resolveFilename(meta.url);
}
