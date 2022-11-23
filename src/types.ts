export interface BaseUser {
  username: string;
}

export interface UserRegisterData {
  alias: string;
  password: string;
  email: string;
  username: string;
}

export interface User extends BaseUser {
  id: string;
  alias: string;
  username: string;
}
