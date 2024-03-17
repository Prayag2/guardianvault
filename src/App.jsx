import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "@pages/home/Home";
import { useAuth } from "@contexts/AuthContext";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const location = useLocation();
  const { currentUser } = useAuth();

  return location.pathname === "/" ? (
    currentUser ? (
      <Dashboard />
    ) : (
      <Home />
    )
  ) : (
    <Outlet />
  );
}

export default App;
