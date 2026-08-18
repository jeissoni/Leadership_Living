import { getCollection, type CollectionEntry } from "astro:content";

export type TemaEntry = CollectionEntry<"temas">;

export async function temaStaticPaths() {
  const temas = await getCollection("temas");
  return temas.map((tema) => {
    const siblings = temas
      .filter((item) => item.data.series === tema.data.series)
      .sort((a, b) => a.data.order - b.data.order);
    const index = siblings.findIndex((item) => item.id === tema.id);
    return {
      params: { slug: tema.id },
      props: {
        tema,
        prev: index > 0 ? siblings[index - 1] : undefined,
        next: index < siblings.length - 1 ? siblings[index + 1] : undefined,
        total: siblings.length,
      },
    };
  });
}
