import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  isLogged: boolean;
}
const ProtectedRoute = ({
  children,
  isLogged,
}: ProtectedRouteProps): JSX.Element => {
  if (!isLogged) {
    return <Navigate to={"/"} />;
  }

  return children;
};
export default ProtectedRoute;
