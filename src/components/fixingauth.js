import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserInfo } from "../user/userinformation";

const ProtectedRoute = ({ element }) => {
  const user = useContext(CurrentUserInfo);
  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;