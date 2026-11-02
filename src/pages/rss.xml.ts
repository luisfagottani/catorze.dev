import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "../consts";
import { locale } from "../i18n";
import { withBase } from "../lib/url";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    // Feed readers use <language> to pick a reading direction and hyphenation.
    customData: `<language>${locale}</language>`,
    description: SITE.rssDescription,
    items: posts.map((post) => ({
      categories: post.data.tags,
      description: post.data.description,
      link: withBase(`/blog/${post.id}/`),
      pubDate: post.data.publishDate,
      title: post.data.title,
    })),
    site: context.site ?? "https://example.com",
    title: SITE.title,
  });
}
