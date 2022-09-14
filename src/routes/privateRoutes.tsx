import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../config/routes";
import { useAppSelector } from "../redux/features/hooks";

function PrivateRoute(props: any) {
  const { isLoggedIn } = useAppSelector((state) => state.user);
  return isLoggedIn ? <>{props.children}</> : <Navigate to={LOGIN_ROUTE} />;
}

export default PrivateRoute;
