import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", () => {
    render(<NewTodoForm />)
});

it("matches snapshot", () => {
    const { asFragment } = render(<Todo />);
    expect(asFragment).toMatchSnapshot();
})