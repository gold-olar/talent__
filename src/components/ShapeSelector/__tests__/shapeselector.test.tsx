import ShapeSelector from "../";
import { shallow } from "enzyme";

const defaultProps = {
  shape: "rectangle",
  selected: true,
  handleShapeSelection: () => {},
};

describe("ShapeSelector tests ---------------------", () => {
  it("renders without crashing", () => {
    shallow(<ShapeSelector {...defaultProps} />);
  });

  it("should have the correct shape displayed", () => {
    const component = shallow(<ShapeSelector {...defaultProps} />);

    expect(component.text().trim()).toEqual(defaultProps.shape);
  });

  it("should have the correct classname when it is selected", () => {
    const component = shallow(<ShapeSelector {...defaultProps} />);

    expect(component.prop("className")).toBe(
      "shape-selector shape-selector__selected"
    );
  });

  it("should have the correct classname when it is not selected", () => {
    const component = shallow(
      <ShapeSelector {...defaultProps} selected={false} />
    );

    expect(component.prop("className").trim()).toBe("shape-selector");
  });

  it("should call a function passed to it when clicked", () => {
    const mockCallBack = jest.fn();
    const mounntedComponent = shallow(
      <ShapeSelector {...defaultProps} handleShapeSelection={mockCallBack} />
    );

    mounntedComponent.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
