import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const PrivateUserRoute = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem('user')

  return user !== null ? children : <Navigate key="/login" to="/login" />;
};

export default PrivateUserRoute;
