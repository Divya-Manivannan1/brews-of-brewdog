import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar/SearchBar";
import userEvent from "@testing-library/user-event";

it("should render the search bar", () => {
  const inputField:HTMLInputElement = screen.getByRole("textbox");
  expect(inputField).toBeInTheDocument();
});

it("should not have any default input value", () => {
  render(<SearchBar id={"test"} />);
  const inputField:HTMLInputElement = screen.getByRole("textbox");
  expect(inputField.value).toBe("");
});

it("should show the input that we pass", async() =>{
  render(<SearchBar id={"test"} />);
  const inputField:HTMLInputElement = screen.getByRole("textbox");
  await userEvent.type(inputField, "Hi");
  expect(inputField.value).toBe("Hi");
})
