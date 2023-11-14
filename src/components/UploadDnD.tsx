import React, { useState } from "react";
import "./test.scss";
import ImagePrev from "../components/uploadPrev/ImagePrev";
const FileUpload = () => {
  const [message, setMessage] = useState("Drag a file here");
  const [files, setFiles] = useState<File[]>();
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFiles(Array.from(e.dataTransfer.files)); //filelist is a OBJ
    if (files && files.length >= 1) {
      console.log("files number", files.length, files);
      let fileNameList = "Uploaded files";
      for (const i of files) {
        console.log(i, "i in files");
        fileNameList += "\n" + i.name;
      }
      setMessage(fileNameList);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    //setMessage("Drop the file");
  };

  const handleDragEnter = () => {
    setMessage("file uploaded");
    console.log("files enter");
  };

  const handleDragLeave = () => {
    setMessage("Try again Drag a file here");
  };
  return (
    <div>
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        {message}
      </div>
      <div>
        <ImagePrev files={files} /> hehe
      </div>
    </div>
  );
};

export default FileUpload;
