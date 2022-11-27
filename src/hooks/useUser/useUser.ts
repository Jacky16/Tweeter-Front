import axios from "axios";
import { useNavigate } from "react-router-dom";
import requestsUrl from "../../config/requestsUrl";
import { useAppDispatch } from "../../redux/hooks";
import {
  closeIsLoadingActionCreator,
  openAlertActionCreator,
  openIsLoadingActionCreator,
} from "../../redux/UiSlice/UiSlice";
import { userLoginActionCreator } from "../../redux/userSlice/userSlice";
import { UserLoginData, UserRegisterData } from "../../types";
import decodeToken from "../../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerUser = async (userData: UserRegisterData) => {
    try {
      await axios.post(requestsUrl.registerUser, userData);

      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: "Success Register",
          severity: "success",
        })
      );

      navigate("/");
    } catch (error: unknown) {
      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: "Error on Register",
          severity: "error",
        })
      );
    }
  };

  const loginUser = async (userData: UserLoginData) => {
    dispatch(openIsLoadingActionCreator());
    try {
      const response = await axios.post(requestsUrl.loginUser, userData);
      const { token } = await response.data;

      const loggedUser = decodeToken(token);

      dispatch(userLoginActionCreator(loggedUser));
      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: `Success Login, Hi ${loggedUser.username}`,
          severity: "success",
        })
      );
      dispatch(closeIsLoadingActionCreator());
      navigate("/home");
    } catch (error: unknown) {
      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: "Error on Login",
          severity: "error",
        })
      );
      dispatch(closeIsLoadingActionCreator());
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
