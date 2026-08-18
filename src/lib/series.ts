export const seriesCatalog = [
  {
    id: "el-reino-y-el-voluntario",
    title: "El Reino y el voluntario",
    lede: "Identidad para quien sirve: el Reino, los ministerios del cuerpo y la vida del discípulo.",
  },
  {
    id: "de-la-ley-a-jesus",
    title: "De la Ley a Jesús",
    lede: "Una historia en tres actos: el problema que Dios no ignoró, el sistema que cubría y el cumplimiento en Cristo.",
  },
] as const;

export type SeriesId = (typeof seriesCatalog)[number]["id"];

export function seriesById(id: string) {
  return seriesCatalog.find((item) => item.id === id);
}
