import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const temas = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md",
    base: "./src/content/temas",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    series: z.enum([
      "el-reino-y-el-voluntario",
      "de-la-ley-a-jesus",
      "identidad-en-cristo",
      "enemigos-del-creyente",
      "espiritu-santo-y-dones",
      "la-biblia",
    ]),
    order: z.number().int().positive(),
    tags: z.array(z.string()).default([]),
    duration: z.string().optional(),
    thesis: z.string(),
    remember: z.array(z.string()).min(3).max(5),
    guionLede: z.string().optional(),
    audio: z.string().optional(),
    widgets: z.array(z.string()).default([]),
    showMindMap: z.boolean().default(false),
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
