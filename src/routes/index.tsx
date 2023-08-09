import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/register";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Login from './../pages/login/index';

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
};
