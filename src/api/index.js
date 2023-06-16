import axios from "axios";

const baseUrl = "https://rocky-temple-83495.herokuapp.com/employees";

export const api = {
  getEmployees: async (page, limit) => {
    try {
      return await axios.get(baseUrl, {
        params: { page, limit },
      });
    } catch (error) {
      console.error("Failed to fetch employees:", error.message);
    }
  },
  createEmployee: async ({ name, surname, email, position }) => {
    try {
      return await axios.post(baseUrl, {
        name,
        surname,
        email,
        position,
      });
    } catch (error) {
      console.error("Failed to create employees:", error.message);
    }
  },
  deleteEmployee: async (id) => {
    try {
      return await axios.delete(`${baseUrl}/?id=1`);
    } catch (error) {
      console.error("Failed to delete employees:", error.message);
    }
  },
  updateEmployee: async (id) => {
    try {
      return await axios.put(`${baseUrl}/${id}`);
    } catch (error) {
      console.error("Failed to update employees:", error.message);
    }
  },
};
