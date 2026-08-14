import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const temas = defineCollection({
  loader: glob({
    pattern: ["*.md", "!_*.md"],
    base: "./src/content/temas",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    duration: z.string().optional(),
    resources: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { temas };
