 const config = {
  baseApi: process.env.REACT_APP_BASE_API,
  taskApi: `${process.env.REACT_APP_BASE_API}/tasks`,
  employeesApi: `${process.env.REACT_APP_BASE_API}/employees`,
};

export const {baseApi,taskApi,employeesApi} =config