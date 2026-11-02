import { getCollection } from "astro:content";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import type { APIRoute, GetStaticPaths } from "astro";
import satori from "satori";
import sharp from "sharp";
import { SITE } from "../../../consts";

// Build-time generated Open Graph images for every blog post and work entry,
// rendered in the theme's light palette (see global.css tokens). The static
// `public/og.jpg` remains the site-wide fallback for all other pages.

interface OgProps {
  description: string;
  kind: string;
  title: string;
}

export const getStaticPaths = (async () => {
  const blog = await getCollection("blog", ({ data }) => !data.draft);
  const works = await getCollection("works");
  return [
    ...blog.map((entry) => ({
      params: { collection: "blog", slug: entry.id },
      props: {
        description: entry.data.description,
        kind: "Blog",
        title: entry.data.title,
      } satisfies OgProps,
    })),
    ...works.map((entry) => ({
      params: { collection: "works", slug: entry.id },
      props: {
        description: entry.data.description,
        kind: "Work",
        title: entry.data.title,
      } satisfies OgProps,
    })),
  ];
}) satisfies GetStaticPaths;

// Satori has no oklch() support, so these are hex equivalents of the
// light-theme tokens in global.css.
const COLOR = {
  accent: "#a8492c",
  bg: "#fcfcfa",
  line: "#dbd8d0",
  muted: "#697080",
  text: "#252831",
};

const require = createRequire(import.meta.url);
const font = (pkgPath: string) => readFile(require.resolve(pkgPath));

// Latin subsets, to keep the build light. Satori draws any glyph these fonts
// lack as an empty box, which is why the `kind` labels above stay Latin rather
// than going through the UI dictionary. Post titles with uncovered glyphs hit
// the same limit — install a covering face and point the paths below at it.
const [fraunces, publicSans] = await Promise.all([
  font("@fontsource/fraunces/files/fraunces-latin-600-normal.woff"),
  font("@fontsource/public-sans/files/public-sans-latin-400-normal.woff"),
]);

const truncate = (text: string, max: number) =>
  text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;

export const GET: APIRoute<OgProps> = async ({ props }) => {
  const { title, description, kind } = props;

  const svg = await satori(
    {
      props: {
        children: {
          props: {
            children: [
              {
                props: {
                  children: [
                    {
                      props: {
                        style: {
                          backgroundColor: COLOR.accent,
                          height: 22,
                          width: 22,
                        },
                      },
                      type: "div",
                    },
                    {
                      props: {
                        children: SITE.title,
                        style: {
                          color: COLOR.text,
                          fontFamily: "Fraunces",
                          fontSize: 30,
                        },
                      },
                      type: "div",
                    },
                  ],
                  style: { alignItems: "center", display: "flex", gap: 16 },
                },
                type: "div",
              },
              {
                props: {
                  children: [
                    {
                      props: {
                        children: [
                          {
                            props: {
                              style: {
                                backgroundColor: COLOR.accent,
                                height: 1,
                                width: 40,
                              },
                            },
                            type: "div",
                          },
                          { props: { children: kind }, type: "div" },
                        ],
                        style: {
                          alignItems: "center",
                          color: COLOR.accent,
                          display: "flex",
                          fontFamily: "Fraunces",
                          fontSize: 24,
                          gap: 14,
                          letterSpacing: 4,
                          marginBottom: 28,
                          textTransform: "uppercase",
                        },
                      },
                      type: "div",
                    },
                    {
                      props: {
                        children: truncate(title, 90),
                        style: {
                          color: COLOR.text,
                          fontFamily: "Fraunces",
                          fontSize: title.length > 55 ? 54 : 64,
                          lineHeight: 1.15,
                        },
                      },
                      type: "div",
                    },
                  ],
                  style: { display: "flex", flexDirection: "column" },
                },
                type: "div",
              },
              {
                props: {
                  children: truncate(description, 120),
                  style: {
                    color: COLOR.muted,
                    fontSize: 26,
                    lineHeight: 1.4,
                  },
                },
                type: "div",
              },
            ],
            style: {
              border: `1px solid ${COLOR.line}`,
              display: "flex",
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "52px 60px",
            },
          },
          type: "div",
        },
        style: {
          backgroundColor: COLOR.bg,
          display: "flex",
          fontFamily: "Public Sans",
          height: "100%",
          padding: 40,
          width: "100%",
        },
      },
      type: "div",
    },
    {
      fonts: [
        { data: fraunces, name: "Fraunces", style: "normal", weight: 600 },
        { data: publicSans, name: "Public Sans", style: "normal", weight: 400 },
      ],
      height: 630,
      width: 1200,
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};
