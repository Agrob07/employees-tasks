import { api } from "../../api";

export const getData = async (req) => {
  const data = await api.getData(req);
  return data;
};
