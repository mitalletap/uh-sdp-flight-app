import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import NavigationBar from "../components/NavigationBar";
import { shallow } from "enzyme";

test("renders learn react link", () => {
  const { navigationBarByText } = render(<NavigationBar />);
  const { dataTableByText } = render(<DataTable />);
  const { flightSearchByText } = render(<FlightSearch />);
});
