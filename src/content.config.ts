import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Deniz Yanbollu"),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    eyebrow: z.string().optional(),
    lang: z.string().default("en"),
    // Show the "Swap now" banner (src/components/SwapBanner.astro). On by default.
    swapBanner: z.boolean().default(true),
    // Name of a dataset in public/data/<name>.json this post is the canonical
    // home of; emits Schema.org Dataset markup for Google Dataset Search.
    dataset: z.string().optional(),
  }),
});

export const collections = { blog };
