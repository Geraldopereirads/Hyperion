import { Route, Routes } from "react-router-dom";
import { LandPage } from "../Pages/LandPage";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { Home } from "../Pages/HomePage";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/gamestore" element={<LandPage/>} />
      <Route path="*" element={<LandPage/>} />
    </Routes>
  );
};
