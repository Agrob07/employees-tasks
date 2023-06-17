import { api } from "../../api";

export const getData = async () => {
  const data = await api.getEmployees(4, 10);
  return data.data;
};
