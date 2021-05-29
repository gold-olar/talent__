import Dashboard from "../";
import { shallow } from "enzyme";

describe("Dashboard Page tests ---------------------", () => {
  it("renders without crashing", () => {
    shallow(<Dashboard />);
  });

  const mountedComponent = shallow(<Dashboard />);

  it("should render a filter section", () => {
    const filtersection = mountedComponent.find("FilterSection");

    expect(filtersection.length).toBe(1);
  });

  it("should render a data section", () => {
    const datasection = mountedComponent.find("DataSection");

    expect(datasection.length).toBe(1);
  });
});
