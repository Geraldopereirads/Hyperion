import { ToastContainer } from "react-toastify";
import { GameProvider } from "./Providers/GameContext/GameContext";
import { UserProvider } from "./Providers/UserContext/UserContext";
import { RoutesApp } from "./Routes";
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <>
    <ToastContainer
      position="bottom-right"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <UserProvider>
      <GameProvider>
        <RoutesApp />
      </GameProvider>
    </UserProvider>
  </>
);
