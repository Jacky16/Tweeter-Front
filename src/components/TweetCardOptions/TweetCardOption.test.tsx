import { renderWithProviders } from "../../mocks/renderWithProviders";
import TweetCardOptions from "./TweetCardOptions";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockDeleteTweet = jest.fn();

const mockEditTweet = jest.fn();

jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    deleteTweet: mockDeleteTweet,
  });
});

//Mocking the useNavigate hook
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
  };
});

describe("Given the TweetCardOption component", () => {
  describe("When user click on button 'Tweet options'", () => {
    test("Then delete tweet function should be called", async () => {
      const nameTweetOption = "Tweet Options";
      const deleteItem = "Delete";

      renderWithProviders(<TweetCardOptions tweetId={""} />);

      const tweetOptionsButton = screen.getByRole("button", {
        name: nameTweetOption,
      });

      await userEvent.hover(tweetOptionsButton);
      await userEvent.click(tweetOptionsButton);

      const deleteButton = screen.getByRole("menuitem", {
        name: deleteItem,
      });

      await userEvent.click(deleteButton);

      expect(mockDeleteTweet).toBeCalled();
    });

    test("Then edit tweet function should be called", async () => {
      const nameTweetOption = "Tweet Options";
      const editItem = "Edit";
      const pageToNavigate = "/edit/";

      renderWithProviders(<TweetCardOptions tweetId={""} />);

      const tweetOptionsButton = screen.getByRole("button", {
        name: nameTweetOption,
      });

      await userEvent.hover(tweetOptionsButton);
      await userEvent.click(tweetOptionsButton);

      const editButton = screen.getByRole("menuitem", {
        name: editItem,
      });

      await userEvent.click(editButton);

      expect(mockNavigate).toBeCalledWith(pageToNavigate);
    });
  });
});
