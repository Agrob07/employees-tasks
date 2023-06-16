import Employees from "../pages/Employees";
import Tasks from "../pages/Tasks";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <Employees />,
  },
  {
    path: "/landing",
    element: <Tasks />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
