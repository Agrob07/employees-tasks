import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let element = useRoutes(routes);

  return (
    <div className="App">
      {element}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
      />
    </div>
  );
}

export default App;
