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

export enum TweetCategory {
  comedy,
  science,
  political,
  sports,
  entertainment,
  unknown,
}

export interface TweetStructure {
  id: string;
  description: string;
  category: string;
  dateOfCreation: Date | string;
}
export interface TweetApi extends TweetStructure {
  author: {
    alias: string;
    username: string;
  };
  image: string;
}

export interface TweetData extends TweetStructure {
  image: File;
  visibilityOpen: boolean;
  author: string;
}
export interface Tweet extends TweetStructure {
  username: string;
  alias: string;
  image: string;
}
