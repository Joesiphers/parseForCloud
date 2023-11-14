export function parseText(text) {
  const patternTitle = /.[^s]*/i;
  const devideAddress = "/^https?://[^s/$%?#].[^s]* /gi";
  const title = text.match(patternTitle);
  return title;
}
