import jwtDecode from "jwt-decode";
import { UserState } from "../redux/types";
import { JwtPayloadCustom } from "../types";

const decodeToken = (token: string): UserState => {
  const jwtPayload: JwtPayloadCustom = jwtDecode(token);

  return {
    id: jwtPayload.id,
    username: jwtPayload.username,
    alias: jwtPayload.alias,
    token,
    isLogged: true,
  };
};

export default decodeToken;
