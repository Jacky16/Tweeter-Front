export interface BaseUser {
  username: string;
}

export interface UserRegisterData {
  alias: string;
  password: string;
  email: string;
  username: string;
}

export interface UserLoginData {
  email: string;
  password: string;
}

export interface User extends BaseUser {
  id: string;
  alias: string;
  username: string;
}
export interface JwtPayloadCustom {
  id: string;
  username: string;
  alias: string;
  token: string;
}