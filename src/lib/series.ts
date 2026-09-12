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
  {
    id: "identidad-en-cristo",
    title: "Identidad en Cristo",
    lede: "Dónde estás y quién eres: unión con Cristo y filiación.",
  },
  {
    id: "enemigos-del-creyente",
    title: "Enemigos del creyente",
    lede: "El mundo y la carne, el diablo y la autoridad desde la que se le enfrenta.",
  },
  {
    id: "espiritu-santo-y-dones",
    title: "El Espíritu Santo y los dones",
    lede: "Quién es el Espíritu, qué hace en el creyente, y los dones como gracia para el cuerpo.",
  },
  {
    id: "semilla-y-terreno",
    title: "Semilla y terreno",
    lede: "La misma semilla —la Palabra— y el terreno del corazón: confiar en la Escritura y permanecer para que haya fruto.",
  },
] as const;

export type SeriesId = (typeof seriesCatalog)[number]["id"];

export function seriesById(id: string) {
  return seriesCatalog.find((item) => item.id === id);
}
