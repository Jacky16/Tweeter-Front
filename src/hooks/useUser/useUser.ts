import axios from "axios";
import requestsUrl from "../../config/requestsUrl";
import { useAppDispatch } from "../../redux/hooks";
import { openAlertActionCreator } from "../../redux/UiSlice/UiSlice";
import { userLoginActionCreator } from "../../redux/userSlice/userSlice";
import { UserLoginData, UserRegisterData } from "../../types";
import decodeToken from "../../utils/decodeToken";

const useUser = () => {
  const dispatch = useAppDispatch();

  const registerUser = async (userData: UserRegisterData) => {
    try {
      await axios.post(requestsUrl.registerUser, userData);

      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: "Success Register",
          severity: "success",
          timeOpen: 3000,
        })
      );
    } catch (error: unknown) {
      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: "Error on Register",
          severity: "error",
          timeOpen: 3000,
        })
      );
    }
  };

  const loginUser = async (userData: UserLoginData) => {
    try {
      const response = await axios.post(requestsUrl.loginUser, userData);
      const { token } = await response.data;
      const loggedUser = decodeToken(token);

      dispatch(userLoginActionCreator(loggedUser));
      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: "Success Register",
          severity: "success",
          timeOpen: 3000,
        })
      );
    } catch (error: unknown) {
      dispatch(
        openAlertActionCreator({
          isOpen: true,
          message: "Error on Register",
          severity: "error",
          timeOpen: 3000,
        })
      );
    }
  };

  return { registerUser, loginUser };
};

export default useUser;
