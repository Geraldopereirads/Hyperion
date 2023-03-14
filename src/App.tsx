import { ToastContainer } from "react-toastify";
import { GameProvider } from "./Providers/GameContext/GameContext";
import { UserProvider } from "./Providers/UserContext/UserContext";
import { RoutesApp } from "./Routes";
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <UserProvider>
    <GameProvider>
      <ToastContainer />
      <RoutesApp />
    </GameProvider>
  </UserProvider>
);
