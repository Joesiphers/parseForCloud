import styled from "styled-components";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
interface IProps {
  files: File[];
}
//Array <File>
type urlArray = any[];
export default function ImagePrev(props: IProps) {
  const [url, setUrl] = useState<any[]>([]);

  const { files } = props;
  let urls: any[] = [];

  useEffect(() => {
    let unreadImageCount = files?.length || 0;
    for (let i in files) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        urls.push(fileReader.result);
        unreadImageCount -= 1;
        if (unreadImageCount == 0) {
          setUrl(urls);
        }
      };
      fileReader.readAsDataURL(files[i]);
    }
  }, [files]);
  return (
    <>
      <Button
        sx={{ padding: "5px" }}
        variant="contained"
        onClick={() => alert("sumit")}
      >
        Sumit
      </Button>{" "}
      <br />
      {url.map((u, index) => (
        <img src={u} key={index} alt="preview" />
      ))}
    </>
  );
}
/*
  for (const i of filesList) {
    fileReader.readAsDataURL(i);
    fileReader.onload = () => {
      setUrl ( fileReader.result);
      prevHTMLArray+=(<img src={url} alt="preview" />);
    };
  }

    for (let i in files) {
    const prevUrl = URL.createObjectURL(files[i]);

    // prevHTMLArray += `<img src=${prevUrl.slice(5)} alt="preview" />`;
    console.log(i, files[i], "HTMLArray");
    urls.push(URL.createObjectURL(files[i]));
  }
  */
