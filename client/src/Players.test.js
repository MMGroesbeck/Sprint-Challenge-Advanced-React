import React from "react";
import { render } from "@testing-library/react";
import Players from "./Players"

test("Renders Players without crashing", () => {
    render(<Players />);
})

test("Allow input into search form", () => {
    const { getByLabelText } = render(<Players />);
    
})