import sendRequest from "./request";

export const saveItem = async (data: SaveItem) => {
  await sendRequest({
    url: "/table/add_record",
    method: "post",
    data
  }).then((res) => {
    console.log("response", res);
    return res;
  });
};
export type SaveItem = {
  address: string;
  title: string;
  content: string;
  keywords: string;
  timeStamp?: string;
};

export const getArtical = async (params: string) => {
  return await sendRequest<Artical[]>({
    url: `/table/select?${params}`,
    method: "get"
  });
};
export type Artical = {
  id: number;
  title: string;
  keywords: string;
  content: string;
  address: string;
};
