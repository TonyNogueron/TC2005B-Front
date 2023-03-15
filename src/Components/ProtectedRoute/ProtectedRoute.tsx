import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  redirectTo: string;
  children: ReactNode;
}

const ProtectedRoute = ({
  redirectTo,
  children,
}: ProtectedRouteProps): JSX.Element => {
  return localStorage.getItem("token") ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default ProtectedRoute;
