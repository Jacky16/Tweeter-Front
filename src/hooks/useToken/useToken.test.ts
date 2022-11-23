import { renderHook } from "@testing-library/react";
import mockLocalStorage from "../../mocks/mockLocalStorage";
import ProviderWrapper from "../../mocks/providerWrapper";
import { mockUser } from "../../mocks/userMocks";
import { store } from "../../redux/store";
import { userLoginActionCreator } from "../../redux/userSlice/userSlice";
import { JwtPayloadCustom } from "../../types";
import useToken from "./useToken";

jest.mock("jwt-decode", () => {
  return () =>
    ({
      id: mockUser.id,
      username: mockUser.username,
      alias: mockUser.alias,
      token: "abc",
    } as JwtPayloadCustom);
});

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

beforeAll(() => {
  mockLocalStorage.setItem("token", "abc");
});

afterAll(() => {
  mockLocalStorage.clear();
});
const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a useToken custom hook", () => {
  describe("When its method getToken is invoked and there is the token 'abc' in local storage", () => {
    test("Then it should call dispatch with a login user action", () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).toHaveBeenCalledWith(
        userLoginActionCreator({ ...mockUser, isLogged: true })
      );
    });
  });
});

describe("When its method removeToken is invoked and there is the token 'abc' in local storage", () => {
  test("Then the token should be removed from local storage", () => {
    const {
      result: {
        current: { removeToken },
      },
    } = renderHook(() => useToken(), {
      wrapper: ProviderWrapper,
    });

    removeToken();

    expect(mockLocalStorage.getItem("token")).toBe(undefined);
  });
});
