import React from 'react';
import { Navigate, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  redirectTo: string;
  children: React.ReactNode;
}

const ProtectedRoute = ({
  redirectTo,
  children,
}: ProtectedRouteProps) => {
  return localStorage.getItem("token") ? (
    <Route>{children}</Route>
  ) : (
    <Navigate to={redirectTo} replace={true} />
  );
};

export default ProtectedRoute;

