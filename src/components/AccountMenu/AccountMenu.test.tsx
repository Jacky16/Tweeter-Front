import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import AccountMenu from "./AccountMenu";
import { store } from "../../redux/store";
import { renderWithProviders } from "../../mocks/renderWithProviders";

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given the AccountMenu component", () => {
  describe("When click on the button 'Account settings'", () => {
    test("Then it should show the menu expanded", async () => {
      const buttonAccountSettingsName = "Account settings";

      renderWithProviders(<AccountMenu />);

      const buttonAccountSettings = screen.getByRole("button", {
        name: buttonAccountSettingsName,
      });

      await userEvent.click(buttonAccountSettings);

      expect(buttonAccountSettings).toHaveAttribute("aria-expanded", "true");
    });
    test("Then it should show menu item 'Logout'", async () => {
      const buttonAccountSettingsName = "Account settings";
      const menuItemLogoutName = "Logout";

      renderWithProviders(<AccountMenu />);

      const buttonAccountSettings = screen.getByRole("button", {
        name: buttonAccountSettingsName,
      });

      await userEvent.click(buttonAccountSettings);

      const menuItemLogout = screen.getByRole("menuitem", {
        name: menuItemLogoutName,
      });

      expect(menuItemLogout).toBeInTheDocument();
    });
  });

  describe("When click on the menu item 'Logout'", () => {
    test("Then spyDispatch should be called", async () => {
      const buttonAccountSettingsName = "Account settings";
      const menuItemLogoutName = "Logout";

      renderWithProviders(<AccountMenu />, { store });

      const buttonAccountSettings = screen.getByRole("button", {
        name: buttonAccountSettingsName,
      });

      await userEvent.click(buttonAccountSettings);

      const menuItemLogout = screen.getByRole("menuitem", {
        name: menuItemLogoutName,
      });

      await userEvent.click(menuItemLogout);

      expect(spyDispatch).toHaveBeenCalled();
    });
  });
});
