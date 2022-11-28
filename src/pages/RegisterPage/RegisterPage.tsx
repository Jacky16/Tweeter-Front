import Loader from "../../components/Loader/Loader";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { useAppSelector } from "../../redux/hooks";

const RegisterPage = () => {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <>
      <RegisterForm />
      {isLoading && <Loader />}
    </>
  );
};

export default RegisterPage;
