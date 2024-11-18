import { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "@/store/UserContext";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useContext(UserContext);

  return user && user.role === 0 ? children  : <Navigate to={"/"} />;
};

export default AdminRoute;
