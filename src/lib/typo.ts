// Typographie française : espace fine insécable devant ? ! : ; » (évite un « ? » orphelin en début de ligne).
export function frenchNbsp(text: string): string {
  return text.replace(/ ([?!:;»])/g, '\u202F$1').replace(/« /g, '«\u202F');
}
