import SingleData from "../";
import { shallow } from "enzyme";
import { Data } from "../../../context/types";

const defaultData = {
  shape: "rectangle",
  color: "red",
  id: 2,
};

describe("Single Data tests ---------------------", () => {
  // let mountedApp: JSX.Element;

  it("renders without crashing", () => {
    shallow(<SingleData data={defaultData as Data} />);
  });

  it("should have the correct shape classname", () => {
    const component = shallow(<SingleData data={defaultData as Data} />);

    expect(component.find("div").children().find("div").prop("className")).toBe(
      `data-box__${defaultData.shape}`
    );
  });
});
