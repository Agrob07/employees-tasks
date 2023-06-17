import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import { routes } from "./router/routes";
import { EmployeeProvider } from "./context/EmployeeContext";

import "react-toastify/dist/ReactToastify.css";

function App() {
  let element = useRoutes(routes);

  return (
    <EmployeeProvider>
      <div className="App">
        {element}
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
        />
      </div>
    </EmployeeProvider>
  );
}

export default App;
