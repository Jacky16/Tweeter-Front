import { useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { userLoginActionCreator } from "../../redux/userSlice/userSlice";
import { JwtPayloadCustom } from "../../types";
import decodeToken from "../../utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user: JwtPayloadCustom = decodeToken(token);

      dispatch(userLoginActionCreator({ ...user, token, isLogged: true }));
    }
  }, [dispatch]);

  const removeToken = () => {
    window.localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};
export default useToken;
