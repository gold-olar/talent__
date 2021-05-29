import App from "../";
import { shallow } from "enzyme";
import React from "react";

describe("App tests ---------------------", () => {
  // let mountedApp: JSX.Element;

  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("should render a ContextProvider", () => {
    const mountedApp = shallow(<App />);
    const contextprovider = mountedApp.find("ContextProvider");

    expect(contextprovider.length).toBe(1);
  });

  it("should render a Navbar", () => {
    const mountedApp = shallow(<App />);
    const navbar = mountedApp.find("Navbar");

    expect(navbar.length).toBe(1);
  });

  it("should render two Routes ", () => {
    const mountedApp = shallow(<App />);
    const routes = mountedApp.find("Route");

    expect(routes.length).toBe(2);
  });
});
