import axios from "axios";

export const api = {
  getDataById: async (url, id) => {
    const finalUrl = id ? `${url}/${id}` : url;
    try {
      const res = await axios.get(finalUrl);
      return res.data;
    } catch (error) {
      console.error("Failed to fetch employees:", error.message);
    }
  },
  getData: async (url, page, limit) => {
    try {
      const res = await axios.get(url, { page, limit });
      return res.data;
    } catch (error) {
      console.error("Failed to fetch employees:", error.message);
    }
  },
  createRequest: async (url, data) => {
    try {
      const res = await axios.post(url, data);
      return res.data;
    } catch (error) {
      console.error("Failed to create employees:", error.message);
    }
  },
  deleteById: async (url, id) => {
    try {
      const res = await axios.delete(`${url}/${id}`);
      return res.data;
    } catch (error) {
      console.error("Failed to delete employees:", error.message);
    }
  },
  updateById: async (url, id, updatedData) => {
    try {
      const res = await axios.put(`${url}/${id}`, updatedData);
      return res.data;
    } catch (error) {
      console.error("Failed to update employees:", error.message);
    }
  },
};
