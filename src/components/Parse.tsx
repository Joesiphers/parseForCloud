import { parsing } from "../utils/parsing";
import React, { useState, useRef, useEffect, ReactEventHandler } from "react";
import { saveItem } from "../api/apis";
import "./parse.scss";

import styled from "styled-components";
//import { styled } from "@mui/material";

//type phototype =string |ArrayBuffer

export default function Parse() {
  const [text, setText] = useState("");
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [photo, setPhoto] = useState("");

  const [result, setResult] = useState({
    address: "",
    title: "default"
  });
  const [keywords, setKeywords] = useState("");
  const KeywordArray = keywords.toLowerCase().split(" ");
  let formData = new FormData();

  //const { address, title } = parsing(text);
  /* useEffect(() => {
    if (text !== "" && buttonRef.current) {
      buttonRef.current.focus();
    }
  });*/
  const save = () => {
    const res = parsing(text);
    console.log("res", res);
    if (res.address === "not found") {
      return;
    } else {
      setResult(res);
      const data = {
        address: res.address,
        title: res.title,
        content: res.content,
        timeStamp: Date(),
        keywords: KeywordArray
      };
      formData.append("message", JSON.stringify(data));
      const rest = saveItem(data);
      formData.forEach((value, key) => {
        console.log(key, value);
      });
    }
  };
  const filesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPhoto(reader.result);
        }
        // console.log(reader.result)
      };

      formData.append("file", file);
    }
  };
  //console.log("KeywordArra", KeywordArray);
  return (
    <div>
      <div>
        <p>please input format as : address title content</p>
        <textarea
          className="parse_form"
          autoFocus
          rows={10}
          cols={60}
          onChange={(e) => setText(e.target.value)}
          placeholder=" First line address
          Second line Title
          Content for the rest"
        />
      </div>
      <div>
        <textarea
          className="parse_form"
          rows={3}
          placeholder={"key words \nwith space in between"}
          cols={60}
          onChange={(e) => {
            setKeywords(e.target.value);
          }}
        />
      </div>
      <DnDBox>
        <div>photos</div>
      </DnDBox>
      <div>
        <button onClick={save} ref={buttonRef}>
          Save
        </button>
        <label htmlFor="uploadFile" className="parse_label">
          upload file / photo
        </label>
        <input id="uploadFile" type="file" onChange={(e) => filesHandler(e)} />
      </div>
      <div>
        passout {result.address} and {result.title}
      </div>
      <div>
        <img src={photo} alt="previewPhoto" />
      </div>
      <div>
        {KeywordArray.map((i, index) => {
          return <p key={index}>{i}</p>;
        })}
      </div>
    </div>
  );
}

const DnDBox = styled.div`
  color: red;
  width: 300px;
  height: 5rem;
  background-color: #eee;
  margin: 1rem auto;
  padding: 5px;
  border: dashed 1px blue;
  border-radius: 10px;
`;

/*  const DnDBox=styled('div')({
    color : "red";
    width : 500 px;
    padding : 5 
    })
  */
