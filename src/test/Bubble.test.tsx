import { render, screen } from "@testing-library/react";
import Bubble from "../components/Bubble/Bubble";

it("should render the bubble", () => {
  render(<Bubble label={"Hi"} value={0} />);
  const label = screen.getByText("Hi");
  const value = screen.getByText("0");
  expect(label).toBeInTheDocument();
  expect(value).toBeInTheDocument();
});
