export function dateConverter(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date);
}