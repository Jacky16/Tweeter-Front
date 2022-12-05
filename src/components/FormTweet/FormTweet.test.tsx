import { faker } from "@faker-js/faker";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../mocks/renderWithProviders";
import mockStore from "../../mocks/store/mockStore";
import { mockTweet } from "../../mocks/tweets/tweetsMock";
import { TweetState } from "../../redux/types";
import FormTweet from "./FormTweet";
import FormCreateTweet from "./FormTweet";
jest.setTimeout(100000);

const mockCreateTweet = jest.fn();
const mockUpdateTweet = jest.fn();
jest.mock("../../hooks/useTweets/useTweets", () => {
  return () => ({
    createTweet: mockCreateTweet,
    updateTweet: mockUpdateTweet,
    getOneTweet: jest.fn(),
  });
});

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
  };
});

describe("Given the FormTweet component", () => {
  describe("When in textbox there're 280 characters", () => {
    test("Then it should show a paragraph with 'Tweet is too long 386/280'", async () => {
      const contentTweetBox = faker.lorem.words(50);
      const expectedText = `Tweet is too long ${contentTweetBox.length}/280`;
      renderWithProviders(<FormCreateTweet />);

      const textbox = screen.getByRole("textbox") as HTMLInputElement;

      await userEvent.type(textbox, contentTweetBox, {});

      const paragraph = screen.getByText(expectedText);

      paragraph.textContent = `${contentTweetBox.length}/280`;

      expect(textbox).toBeInTheDocument();
    });
  });

  describe("When upload a image", () => {
    test("Then it should show the image", async () => {
      const nameFileButton = "Upload image";
      const file = new File(["(⌐□_□)"], "chucknorris.png", {
        type: "image/png",
      });

      renderWithProviders(<FormCreateTweet />);

      const input = screen.getByRole("button", {
        name: nameFileButton,
      });

      URL.createObjectURL = jest.fn().mockReturnValue(file.type);

      await userEvent.upload(input, file);

      const image = screen.getByAltText("preview");

      expect(image).toBeInTheDocument();
    });

    describe("When upload a image and fail", () => {
      test("Then should'n show the image", async () => {
        const nameFileButton = "Upload image";

        const file = {} as File;

        renderWithProviders(<FormCreateTweet />);

        const input = screen.getByRole("button", {
          name: nameFileButton,
        });

        URL.createObjectURL = jest.fn().mockReturnValue("");

        await userEvent.upload(input, file);

        const image = screen.queryByAltText("preview");

        expect(image).not.toBeInTheDocument();
      });
    });
  });

  describe("When click the button 'Tweet' and all fields are filled", () => {
    test("Then mockCreateTweet should be called", async () => {
      const file = new File(["(⌐□_□)"], "chucknorris.png", {
        type: "image/png",
      });
      const nameFileButton = "Upload image";
      const nameTweetButton = "Tweet";
      const contentTweetBox = faker.lorem.words(10);

      renderWithProviders(<FormCreateTweet />);

      const textbox = screen.getByRole("textbox") as HTMLInputElement;
      const buttonFile = screen.getByRole("button", {
        name: nameFileButton,
      });
      const submitButton = screen.getByRole("button", {
        name: nameTweetButton,
      });

      URL.createObjectURL = jest.fn().mockReturnValue(file.type.toString());

      await userEvent.type(textbox, contentTweetBox, {});
      await userEvent.upload(buttonFile, file);
      await userEvent.click(submitButton);

      expect(mockCreateTweet).toBeCalled();
    });
  });

  describe("When click the cancel button", () => {
    test("Then mockNavigate should be called", async () => {
      const nameCancelButton = "Cancel";

      renderWithProviders(<FormCreateTweet />);

      const cancelButton = screen.getByRole("button", {
        name: nameCancelButton,
      });

      await userEvent.click(cancelButton);

      expect(mockNavigate).toBeCalled();
    });
  });

  describe("When is edit mode with tweet with", () => {
    test("Then it should show the tweet description and when user click on tweet button, should updateTweet should be called", async () => {
      const store = mockStore({
        tweetsPreloadState: {
          tweet: mockTweet,
        } as TweetState,
      });

      renderWithProviders(<FormTweet isEditMode={true} />, { store });

      const textDescriptionTweet = await screen.findByText(
        mockTweet.description
      );
      const buttonTweet = screen.getByRole("button", {
        name: "Tweet",
      });
      await userEvent.click(buttonTweet);

      expect(textDescriptionTweet).toBeInTheDocument();
      expect(mockUpdateTweet).toBeCalled();
    });
  });
});
