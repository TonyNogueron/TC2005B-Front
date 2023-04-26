import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  redirectTo: string;
  children: ReactNode;
  requiresAdmin?: boolean;
}

const ProtectedRoute = ({
  redirectTo,
  children,
  requiresAdmin,
}: ProtectedRouteProps): JSX.Element => {
  if (requiresAdmin) {
    if (localStorage.getItem("isAdmin") === "false") {
      return <Navigate to={redirectTo} />;
    }
  }

  return localStorage.getItem("token") ? (
    <>{children}</>
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default ProtectedRoute;
