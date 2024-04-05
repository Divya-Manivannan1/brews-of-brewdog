import { fireEvent, render, screen } from "@testing-library/react";
import RadioButtons from "../components/RadioButtons/RadioButtons";

it("should render the radio buttons", () => {
  render(
    <RadioButtons
      selected={"Any"}
      options={["Any", "High", "Low", "Medium"]}
      label={"testLabel"}
      name={"test"}
    />
  );
  const testLabel = screen.queryByText(/testlabel/i);
  expect(testLabel).toBeInTheDocument();
  const anyRadioButton = screen.getByLabelText("Any");
  expect(anyRadioButton).toBeInTheDocument();
  const highRadioButton = screen.getByLabelText("High");
  expect(highRadioButton).toBeInTheDocument();
  const lowRadioButton = screen.getByLabelText("Low");
  expect(lowRadioButton).toBeInTheDocument();
  const mediumRadioButton = screen.getByLabelText("Medium");
  expect(mediumRadioButton).toBeInTheDocument();
});

it("should only have the default value selected", () => {
  render(
    <RadioButtons
      selected={"Any"}
      options={["Any", "High", "Low", "Medium"]}
      label={"testLabel"}
      name={"test"}
    />
  );
  const anyRadioButton = screen.getByLabelText("Any");
  expect(anyRadioButton).toBeChecked();
  const highRadioButton = screen.getByLabelText("High");
  expect(highRadioButton).not.toBeChecked();
  const lowRadioButton = screen.getByLabelText("Low");
  expect(lowRadioButton).not.toBeChecked();
  const mediumRadioButton = screen.getByLabelText("Medium");
  expect(mediumRadioButton).not.toBeChecked();
});

it("should select Any by default", () => {
  render(
    <RadioButtons
      selected={"Any"}
      options={["Any", "High", "Low", "Medium"]}
      label={"testLabel"}
      name={"test"}
    />
  );
  const anyRadioButton = screen.getByLabelText("Any");
  const highRadioButton = screen.getByLabelText("High");
  const lowRadioButton = screen.getByLabelText("Low");
  const mediumRadioButton = screen.getByLabelText("Medium");
  fireEvent.click(highRadioButton);
  expect(anyRadioButton).not.toBeChecked();
  expect(highRadioButton).toBeChecked();
  expect(lowRadioButton).not.toBeChecked();
  expect(mediumRadioButton).not.toBeChecked();
});
