export function parsing(text: string) {
  const pattern = /.[^\s]*/i;
  // const addressPattern = /^https?:\/\/[^\s/?#$].[^\s]*/i;
  let address = "not found";
  let title = "not found";
  let content = "not found";

  if (text.trim() === "") {
    alert("please input");
  }

  const searchAddress = text.trimStart().match(pattern);
  //  console.log("parseaddress", searchAddress);
  if (searchAddress) {
    address = searchAddress[0];
    const textRest = text.trim().substring(address.length).trim();
    const parsedTitle = textRest.toLowerCase().match(pattern);
    if (parsedTitle) {
      title = parsedTitle[0];
      content = textRest.substring(parsedTitle[0].length).trim();
    }
  }
  return {
    address: address,
    title: title,
    content: content
  };
}

  /**
   *   const patternTitle = /.[^\s]*/
  //i;
  /*
  const addressPattern = /^https?:\/\/[^\s/?#$].[^\s]*/
  //i;
  /*
  const address = text.match(addressPattern); if (address && address.index != null) {
    const textRest = text.trim().substring(address.index + address[0].length);
    const parsedTitle = textRest
      .trim()
      .substring(address.index + address[0].length)
      .trim()
      .toLowerCase()
      .match(patternTitle);
    console.log("parsed", address, parsedTitle);
    if (parsedTitle === null) {
      return "title not found";
    } else {
      const content = textRest.trim().substring(parsedTitle[0].length);
      return {
        address: address[0],
        title: parsedTitle[0],
        content: content[0]
      };
    }
  } else return {
    address: "not found",
    title: "not found",
    content: "not found"
  }; **/
