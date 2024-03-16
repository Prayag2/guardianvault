import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "@pages/home/Home";

function App() {
  const location = useLocation();

  return location.pathname === "/" ? <Home /> : <Outlet />;
}

export default App;
