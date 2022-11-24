import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Given the Loader component", () => {
  describe("When it's renderer", () => {
    test("Then it should show a animation loader", () => {
      render(<Loader />);

      const loader = screen.getByRole("alert");

      expect(loader).toBeInTheDocument();
    });
  });
});
