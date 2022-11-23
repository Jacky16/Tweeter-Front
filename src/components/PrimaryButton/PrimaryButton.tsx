import { PropsWithChildren } from "react";
import ButtonPrimaryStyled from "./PrimaryButtonStyled";

interface PrimaryButtonProps extends PropsWithChildren {}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return <ButtonPrimaryStyled>{children}</ButtonPrimaryStyled>;
};

export default PrimaryButton;
