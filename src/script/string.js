/** @param {string} s */
export function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const titleCaseExcludedWords = [
  'to', 'the', 'of', 'a', 'an', 'and', 'or', 'in', 'as'
];
/** Converts the provided text to Title Case.
 *
 * Examples:
 * - 'the tower' --> 'The Tower'
 * - 'vlad the impaler' --> 'Vlad the Impaler'
 * - 'I wrote some HTML... or did I?' --> 'I Wrote Some HTML... or Did I?'
 *
 * Examples where you should consider a different function:
 * - 'sArCaSm CaSe' --> 'SArCaSm CaSe'
 * - 'maximum hp' --> 'Maximum Hp'
 * - 'camelCase' --> 'CamelCase'
 *
 * @param {string} text
 * @returns {string}
 */
export function toTitleCase(text) {
  const words = text.split(' ');
  return _toTitleCase(words);
}

function _toTitleCase(words) {
  for (let i = 0; i < words.length; i++) {
    if (i > 0 && titleCaseExcludedWords.includes(
      words[i].toLowerCase()
    )) continue;
    words[i] = capitalize(words[i]);
  }

  return words.join(' ');
}