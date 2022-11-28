import { renderWithProviders } from "../../mocks/renderWithProviders";
import { screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's rendered", () => {
    test("Should show the link logo with arial label 'Logo Tweeter", () => {
      const linkLogoName = "Logo Tweeter";

      renderWithProviders(<Header />);

      const linkLogo = screen.getByRole("link", { name: linkLogoName });

      expect(linkLogo).toBeInTheDocument();
    });
  });
});
