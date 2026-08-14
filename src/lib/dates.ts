export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function dateValue(date: Date): string {
  return date.toISOString().slice(0, 10);
}
