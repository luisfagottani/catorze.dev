// Site-wide settings. Edit this file to rebrand the theme — every page,
// the RSS feed, and Open Graph tags read from here.

import type { UIKey } from "./i18n/en";

export const SITE = {
  /** Post author, emitted in JSON-LD BlogPosting structured data.
   * Leave empty ('') to omit the author field. */
  author: "Luis Felipe Rodrigues",
  /** Default meta description for pages that don't set their own. */
  description:
    "Jardim digital — TILs, notas, demos de animation e pensamentos da web.",
  /** Footer credit line. */
  footerText: "catorze.fyi — um jardim digital.",
  /** BCP 47 language tag. Picks the UI dictionary in `src/i18n/`, and sets
   * `<html lang>`, date formatting, and the RSS feed language. Active locale
   * is `pt-BR`; `en` is kept as a secondary dictionary but disabled for now. */
  locale: "pt-BR",
  /** Default social share image, relative to the site root (see public/). */
  ogImage: "/og.jpg",
  /** Description of the RSS feed at /rss.xml. */
  rssDescription: "Notas, TILs e demos de catorze.fyi.",
  /** Site name — used in the header brand, `<title>`, and og:site_name. */
  title: "catorze.fyi",
} as const;

/** Icons bundled with the theme — see `src/components/social-links.astro`. */
export type SocialIcon = "github" | "x" | "linkedin" | "rss" | "email";

export interface SocialLink {
  /** Full URL, `mailto:` address, or site-root path (gets `base` applied). */
  href: string;
  icon: SocialIcon;
  /** Accessible name announced on the icon-only link. */
  label: string;
}

/** Social profiles rendered as inline SVG icons in the footer.
 * Add or remove entries here — no template edits needed. */
export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    href: "https://github.com/luisfeliperodrigues",
    icon: "github",
    label: "GitHub",
  },
  { href: "/rss.xml", icon: "rss", label: "Feed RSS" },
];

/** Giscus — GitHub Discussions-backed comments on blog posts.
 * See `GISCUS` below; values come from https://giscus.app. */
export interface GiscusConfig {
  /** Discussion category name, e.g. `Announcements`. */
  category: string;
  /** Category ID from giscus.app (starts with `DIC_`). */
  categoryId: string;
  /** Giscus theme used while the site is in dark mode. The widget is told to
   * switch live when the header toggle flips. */
  darkTheme: string;
  /** Master switch. While `false`, no Giscus markup, CSS, or script is emitted. */
  enabled: boolean;
  /** Put the comment box above (`top`) or below (`bottom`) the thread. */
  inputPosition: "top" | "bottom";
  /** Giscus UI language, e.g. `en`, `ja`, `fr`. */
  lang: string;
  /** Giscus theme used while the site is in light mode. */
  lightTheme: string;
  /** How a post maps to its discussion. `pathname` is the safest default —
   * it survives retitling, unlike `title`. */
  mapping: "pathname" | "url" | "title" | "og:title" | "specific" | "number";
  /** Show the reaction bar above the comment list. */
  reactionsEnabled: boolean;
  /** Target repository, `owner/name`. Needs public Discussions and the
   * giscus GitHub App installed. */
  repo: string;
  /** Repository ID from giscus.app (starts with `R_`). */
  repoId: string;
  /** Use a strict title match when looking up the discussion. */
  strict: boolean;
}

/** Comments are **off by default** — the theme ships no third-party JavaScript
 * unless you ask for it. To turn them on: enable Discussions on your repo,
 * install the giscus app (https://github.com/apps/giscus), fill in the IDs
 * from https://giscus.app, and set `enabled: true`. */
export const GISCUS: GiscusConfig = {
  category: "Announcements",
  categoryId: "",
  darkTheme: "dark",
  enabled: false,
  inputPosition: "bottom",
  lang: "pt",
  lightTheme: "light",
  mapping: "pathname",
  reactionsEnabled: true,
  repo: "",
  repoId: "",
  strict: true,
};

export type NavItem =
  | { href: string; label: string; labelKey?: never }
  | { href: string; labelKey: UIKey; label?: never };

/** Header navigation. `href` is relative to the site root; the configured
 * `base` is applied automatically via `withBase()`. The bundled entries
 * localize through the UI dictionary; give a page you add yourself a literal
 * `label` instead — one of the two is required. */
export const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", labelKey: "nav.home" },
  { href: "/about/", labelKey: "nav.about" },
  { href: "/works/", labelKey: "nav.works" },
  { href: "/blog/", labelKey: "nav.blog" },
  { href: "/search/", labelKey: "nav.search" },
];
