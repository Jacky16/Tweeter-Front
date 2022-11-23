import axios from "axios";
import requestsUrl from "../../config/requestsUrl";
import { useAppDispatch } from "../../redux/hooks";
import { openAlertActionCreator } from "../../redux/UiSlice/UiSlice";
import { UserRegisterData } from "../../types";

const useUser = () => {
  const dispatch = useAppDispatch();

  const registerUser = async (userData: UserRegisterData) => {
    try {
      const response = await axios.post(requestsUrl.registerUser, userData);

      if (response.status === 201) {
        dispatch(
          openAlertActionCreator({
            isOpen: true,
            message: "Success Register",
            severity: "success",
            timeOpen: 3000,
          })
        );
      }
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

  return { registerUser };
};

export default useUser;
