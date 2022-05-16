import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../utils/auth";

function PrivateRoute() {
  const authData = useAuth();
  return authData ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRoute;
