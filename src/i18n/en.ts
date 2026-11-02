// English UI dictionary — secondary locale, currently **disabled**.
// Kept as the shape reference (`UIStrings` / `UIKey`) and for a future switch.
// Active site copy uses `pt-BR.ts` via `SITE.locale`.
//
// **Scope: UI chrome only.** Navigation, pagination, section labels, button and
// link labels, aria labels, generated strings, and the theme-owned 404 page.
// Placeholder prose on the home and about pages is *not* here: it lives in the
// `.astro` files, where you would edit it anyway.
//
// This file also defines the *shape* every other dictionary must match, so add
// a key here first, then to each locale under `src/i18n/`. Keys are flat and
// dotted; `{name}` placeholders are filled in by `t()`.
//
// Two values carry inline `<code>` markup and are rendered with `set:html`.
// They are theme-authored, never user input.
//
// Note: values are deliberately *not* `as const` — widening them to `string`
// is what lets other locales satisfy `UIStrings`.

export const en = {
  "about.eyebrow": "About",
  "about.ledgerLabel": "Experience summary",

  // About — section labels only; the biography copy lives in about/index.astro
  "about.title": "About",
  "blog.eyebrow": "Blog",
  "blog.listLabel": "Blog posts",
  "blog.tagsEyebrow": "Tags",
  "blog.tagsNavLabel": "Blog tags",

  // Blog index
  "blog.title": "Blog",
  "blog.titlePaged": "Blog · Page {page}",

  // Comments (rendered only when GISCUS.enabled)
  "comments.eyebrow": "Comments",
  // `{link}` is a whole anchor element, built in comments.astro — a translation
  // decides where in the sentence it lands, and the URL never has to be
  // interpolated into the dictionary value.
  "comments.failed": "Comments could not be loaded. Read the thread on {link}.",
  "comments.failedLink": "GitHub Discussions ↗",
  "comments.noscript":
    "Comments require JavaScript. They are hosted on GitHub Discussions.",
  "footer.notes": "Notes",
  "home.allPosts": "All posts",
  "home.allWorks": "All works",
  "home.latestBlogEyebrow": "Latest blog",
  "home.latestWorksEyebrow": "Latest works",
  "home.overviewLabel": "Theme overview",
  "home.postsEmpty":
    "Add blog entries under <code>src/content/blog</code> to surface the latest notes here.",

  // Home — labels and links only; the page's own copy lives in index.astro
  "home.primaryLinks": "Primary links",
  "home.readNotes": "Read notes",
  "home.viewWorks": "View works",
  "home.worksEmpty":
    "Add works under <code>src/content/works</code> to surface the latest projects here.",
  "home.workTech": "{title} technology",
  "nav.about": "About",
  "nav.blog": "Blog",
  "nav.brandHome": "{site} home",
  // Header, footer, and other chrome
  "nav.home": "Home",
  "nav.label": "Main navigation",
  "nav.search": "Search",
  "nav.works": "Works",
  "notFound.blog": "Read the blog",
  "notFound.description": "The page you were looking for does not exist.",
  "notFound.eyebrow": "404 — Not found",
  "notFound.heading": "This page drifted off course.",
  "notFound.home": "Back home",
  "notFound.lead":
    "The address may have moved, or it never existed. The keel lines below lead back to steady water.",
  "notFound.linksLabel": "Recovery links",

  // 404 — a theme-owned page, so its copy belongs here
  "notFound.title": "Page not found",
  "notFound.works": "Browse works",

  // Pagination
  "pagination.label": "Pagination",
  "pagination.newer": "← Newer",
  "pagination.older": "Older →",
  "pagination.status": "Page {current} of {total}",
  "post.adjacentLabel": "Adjacent posts",
  "post.breadcrumbBlog": "Blog",
  "post.breadcrumbHome": "Home",
  "post.contentsEyebrow": "Contents",

  // Blog post
  "post.eyebrow": "Blog",
  "post.next": "Next",
  "post.previous": "Previous",
  "post.readingTime": "{minutes} min read",
  "post.relatedEyebrow": "Related",
  "post.tocLabel": "Table of contents",
  "search.eyebrow": "Search",
  "search.fallback":
    "The search index is generated at build time. Run <code>npm run build</code> and preview the site to try it — it is not available on the dev server.",
  "search.sectionLabel": "Site search",

  // Search
  "search.title": "Search",
  "social.label": "Social links",
  "tag.allPosts": "All posts",
  "tag.description": "Blog posts tagged {tag} on {site}.",
  "tag.eyebrow": "Tag",
  "tag.lead": "Notes collected under the {tag} tag.",
  "tag.listLabel": "{tag} posts",
  "tag.moreTagsEyebrow": "More tags",
  "tag.otherTagsNavLabel": "Other blog tags",

  // Tag archive — every string here is generated from the tag, so it stays
  // in the dictionary even though it reads like page copy.
  "tag.title": "Posts tagged “{tag}”",
  "tag.titlePaged": "Posts tagged “{tag}” · Page {page}",
  "theme.toggle": "Toggle color theme",
  "work.eyebrow": "Work",
  "work.repository": "View repository",
  "work.stackEyebrow": "Stack",
  "work.visit": "Visit project",
  "works.eyebrow": "Works",
  "works.listLabel": "Selected works",

  // Works
  "works.title": "Works",
};

/** The shape every dictionary must implement. */
export type UIStrings = typeof en;

/** Every valid translation key. */
export type UIKey = keyof UIStrings;
