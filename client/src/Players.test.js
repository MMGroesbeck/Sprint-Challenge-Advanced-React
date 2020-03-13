import React from "react";
import { render } from "@testing-library/react";
import Players from "./Players"

test("Renders Players without crashing", () => {
    render(<Players />);
})


//For later (when form is functional):
test("Allow input into search form", () => {
    const { getByLabelText } = render(<Players />);
    const inputField = getByLabelText(/search/i);
})