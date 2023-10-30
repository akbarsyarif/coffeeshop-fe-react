import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

function PrivateRoute({ children }) {
  // cek hak akses
  const { user } = useUserContext();
  if (user.isUserAvailable) return children;
  return <Navigate to="login" replace={true}></Navigate>;
}

export default PrivateRoute;
