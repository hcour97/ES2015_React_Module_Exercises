import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "5", width = "5", color = "cerulean") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add box");
    fireEvent.click(button);
  }

it("renders without crashing", () => {
    render(<BoxList />)
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment).toMatchSnapshot();
})

it("should add a new box", () => {
    const boxList = render(<BoxList />);

    // no boxes present
    expect(boxList.queryByText("X")).not.toBeInTheDocument();
    addBox(boxList);

    // should have a box
    const removeButton = boxList.getByText("X");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 5em; 
        height: 5em; 
        background-color: cerulean;
    `);

    // expect form to reset
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);
})

it("should remove box", () => {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("X");

    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});