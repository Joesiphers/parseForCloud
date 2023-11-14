import React, { useState } from "react";
import { saveItem } from "../../api/apis";
interface IFormData {
  title: string;
  content: string;
  keywords: string;
  address: string;
}

export default function useParseHook() {
  const initFormData: IFormData = {
    title: "",
    content: "",
    keywords: "",
    address: ""
  };
  const [formData, setFormData] = useState<IFormData>(initFormData);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data = { ...formData };
    data[e.target.id] = e.target.value;
    setFormData(data);
  };
  console.log(formData);

  return { formData, inputHandler, saveItem };
}
export function useAxios() {}
