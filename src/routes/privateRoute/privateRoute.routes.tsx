import { Navigate } from "react-router-dom";

import { Layout } from "../../components";
import { useAuth } from "../../hooks";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <Layout>{children}</Layout>;
};
