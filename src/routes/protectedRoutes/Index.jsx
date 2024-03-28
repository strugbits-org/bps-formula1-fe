import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthorized }) => {
  return isAuthorized ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
