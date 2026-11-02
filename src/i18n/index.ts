// UI localization. Every user-facing string the theme itself renders comes from
// a dictionary here; `SITE.locale` in `src/consts.ts` picks which one, and also
// drives `<html lang>`, date formatting, and the RSS feed language.
//
// Active locale: pt-BR. English (`en.ts`) is kept as a secondary dictionary but
// is not registered until re-enabled. Japanese was removed.
import { type NavItem, SITE } from "../consts";
import type { UIKey, UIStrings } from "./en";
import { ptBR } from "./pt-br";

export type { UIKey, UIStrings } from "./en";

/** Fallback used when `SITE.locale` has no dictionary. */
export const DEFAULT_LOCALE = "pt-BR";

/** Registered dictionaries, keyed by BCP 47 language tag.
 *  `en` is intentionally omitted while Portuguese is the sole active locale. */
export const DICTIONARIES: Record<string, UIStrings> = {
  pt: ptBR,
  "pt-BR": ptBR,
};

/** The active locale, straight from `SITE.locale`. Also the value passed to
 *  `Intl`, `<html lang>`, and the RSS `<language>` element. */
export const locale: string = SITE.locale;

// `pt-PT` falls back to the `pt` / `pt-BR` dictionary while still formatting
// dates with the regional tag when registered.
const resolveDictionary = (tag: string): UIStrings =>
  DICTIONARIES[tag] ??
  DICTIONARIES[tag.split("-")[0]] ??
  DICTIONARIES[DEFAULT_LOCALE];

/** The active dictionary. Exported mainly for tests and debugging — prefer `t()`. */
export const strings: UIStrings = resolveDictionary(locale);

/**
 * Look up a UI string, filling `{name}` placeholders from `params`.
 * Unknown keys are impossible: `UIKey` is derived from the English dictionary.
 */
export const t = (
  key: UIKey,
  params?: Record<string, string | number>
): string => {
  const value = strings[key];
  if (!params) {
    return value;
  }
  return value.replace(/\{(?<name>\w+)\}/gu, (match, name: string) =>
    name in params ? String(params[name]) : match
  );
};

/**
 * Render a post's reading time.
 *
 * `remarkPluginFrontmatter` is untyped, and the Content Layer store in
 * `node_modules/.astro/` survives an upgrade — so `minutesRead` may still be
 * the preformatted `"3 min read"` string this theme used to emit. Interpolating
 * that into `post.readingTime` would print "3 min read min read"; going the
 * other way would print a bare "3". Passing an unexpected value straight
 * through degrades to readable-but-untranslated text until the store is
 * rebuilt, instead of showing either kind of garbage.
 */
export const readingTime = (minutesRead: unknown): string =>
  typeof minutesRead === "number"
    ? t("post.readingTime", { minutes: minutesRead })
    : String(minutesRead ?? "");

/** Format a publish date in the active locale. `long` spells the month out;
 *  `short` abbreviates it. Both are locale-aware, including field order. */
export const formatDate = (
  date: Date,
  style: "long" | "short" = "long"
): string =>
  new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: style,
    year: "numeric",
  }).format(date);

/** Resolve a nav entry's label. `NavItem` requires exactly one of `label` or
 *  `labelKey`, so there is no unlabelled case to fall back from. */
export const navLabel = (item: NavItem): string =>
  item.label === undefined ? t(item.labelKey) : item.label;
