import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../../mocks/providerWrapper";
import { store } from "../../redux/store";
import { UserLoginData, UserRegisterData } from "../../types";
import useUser from "./useUser";

const dispatch = jest.spyOn(store, "dispatch");

describe("Given the registerUser method", () => {
  describe("When it is invoked with username 'Mario' alias '@mario' password 123 and email 'mario@mario.com'", () => {
    test("Then it should be call the dispatch to open sucess alert", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      const registerData: UserRegisterData = {
        username: "Mario",
        alias: "@mario",
        email: "mario@mario.com",
        password: "123",
      };

      await registerUser(registerData);

      expect(dispatch).toBeCalled();
    });
  });
  describe("When it is invoked with an user that exists", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });

      const registerData: UserRegisterData = {
        alias: "",
        password: "",
        email: "",
        username: "Chals",
      };

      await registerUser(registerData);

      expect(dispatch).toBeCalled();
    });
  });
});

describe("Given the loginUser method", () => {
  describe("When it's invoked  with email 'mario@gmail.com and password '123'", () => {
    test("The dispatch should be called 2 times", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: ProviderWrapper });
      const loginData: UserLoginData = {
        email: "mario@gmail.com",
        password: "123",
      };

      await loginUser(loginData);

      expect(dispatch).toBeCalledTimes(2);
    });

    describe("When it's invoked with a incorrect password", () => {
      test("The dispatch shoud be called", async () => {
        const {
          result: {
            current: { loginUser },
          },
        } = renderHook(() => useUser(), { wrapper: ProviderWrapper });
        const loginData: UserLoginData = {
          email: "gerad@baste.com",
          password: "123",
        };

        await loginUser(loginData);

        expect(dispatch).toBeCalled();
      });
    });
  });
});
