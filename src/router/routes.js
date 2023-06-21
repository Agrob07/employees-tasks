import Employees from "../pages/Employees";
import Tasks from "../pages/Tasks";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import EmployeePage from "../pages/EmployeePage";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/employees",
    children: [
      {
        index: true,
        path: "",
        element: <Employees />,
      },
      {
        path: "/employees/:id",
        element: <EmployeePage />,
      },
    ],
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
