export function parset(text: string) {
  const patternTitle = /.[^\s]*/i;
  const addressPattern = /^https?:\/\/[^\s/?#$].[^\s]*/i;
  const address = text.match(addressPattern);
  //  console.log("parse", address);
  if (address && address.index != null) {
    const parseedTitle = text
      .trim()
      .substring(address.index + address[0].length)
      .toLowerCase()
      .match(patternTitle);
    //   console.log("parsed", address, title);
    if (parseedTitle === null) {
      return "not found";
    } else {
      return { address, title: parseedTitle };
    }
  } else return "not found";
}
