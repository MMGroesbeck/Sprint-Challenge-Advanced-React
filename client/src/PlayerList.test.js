import React from "react";
import { render } from "@testing-library/react";
import PlayerList from "./PlayerList"

test("Renders PlayerList without crashing", () => {
    render(<PlayerList />);
})

// Two tests below will pass or fail independent of whether form on main component is implemented;
// current problem is figuring out async timing.

test("Checks for players in list: ", () => {
    //Feed an test string for country to give all players:
    const { getAllByText} = render(<PlayerList country={""}/>);
    const countriesArray = getAllByText(/country/i);
    //Fails because test runs before axios get is complete.
    //When players are displayed, each will have a "Country: " entry.
})

test("Checks for list returned with country search: ", () => {
    const { getAllByText} = render(<PlayerList country={"uni"}/>);
    const countriesArray = getAllByText(/country/i);
    //Fails for same reason as above test.
})