// Typographie française : espace insécable devant « : » et espace fine insécable devant ? ! ; »
// (évite un signe orphelin en début de ligne).
export function frenchNbsp(text: string): string {
  return text.replace(/ :/g, ' :').replace(/ ([?!;»])/g, ' $1').replace(/« /g, '« ');
}
