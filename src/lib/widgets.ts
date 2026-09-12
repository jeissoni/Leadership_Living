const widgetLabels: Record<string, string> = {
  datos_identidad: "Datos para abrir",
  guion_en_cristo_completo: "Guion oral",
  el_gran_intercambio: "El Gran Intercambio",
  guion_charla2_padre: "Guion oral",
  arquitectura_enemigos: "Mapa de las dos charlas",
  charla_mundo_carne_40min: "Guion oral",
  charla_diablo_autoridad: "Guion oral",
  opresion_signos: "Opresión: signos y respuesta",
  guion_charla_espiritu_santo: "Guion oral",
  dones_espiritu_explicados: "Los dones, uno a uno",
  datos_biblia: "Datos e ilustraciones",
  guion_charla_biblia: "Guion oral",
  complemento_biblia: "Manuscritos, canon y objeciones",
  datos_permanecer: "Datos e ilustraciones",
  guion_charla_permanecer: "Guion oral",
  complemento_permanecer: "Guía del presentador",
  bloque_fundamento_reino: "Fundamento",
  guia_charla_reino_de_dios: "Guion oral",
  bloque_atributos_reino: "Atributos del Reino",
  historia_viva_cristo_rey: "Cierre: Viva Cristo Rey",
  implicaciones_efesios_corintios_voluntarios: "Implicaciones para voluntarios",
  cinco_ministerios_efesios4: "Los cinco ministerios",
  reino_ministerios_mapa: "Mapa",
  serie_charlas_propuesta_charla3: "Cómo encaja esta charla",
  diferencia_atributos_principios_valores: "Atributos, principios, valores",
  principios_reino_de_dios: "Principios del Reino",
  principios_mas_importantes_reino: "Principios que más pesan",
  valores_reino_de_dios: "Valores del Rey",
  tabla_atributos_principios_valores_reino: "Tabla de las tres capas",
  serie_jesus_antiguo_testamento: "El arco de la serie",
  arco_historia_biblica_eden_nueva_creacion: "De Edén a nueva creación",
  mensaje_pastoral_caida_genesis3: "Mensaje pastoral",
  razon_expulsion_eden: "Por qué la expulsión",
  cierre_pastoral_charla1: "Cierre",
  charla2_sangre_arca_alianza: "Guion oral",
  mensaje_pastoral_charla2_sangre: "Mensaje pastoral",
  versiculos_charla2_sangre: "Pasajes",
  serie_reorganizada_2charlas: "Versión de 45 minutos",
  como_comunicar_charla3: "Cómo comunicar",
  estrategia_charla3_practica: "Estrategia práctica",
  bloque_profecias_mesianicas_charla3: "Profecías mesiánicas",
  vergüenza_cubrirse_jesus: "Culpa y vergüenza",
};

export function widgetLabel(name: string) {
  return widgetLabels[name] ?? name.replace(/_/g, " ");
}

export function stripWidgetStyles(html: string) {
  return html.replace(/<style[\s\S]*?<\/style>/gi, "");
}
