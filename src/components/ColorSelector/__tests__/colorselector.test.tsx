import ColorSelector from "../";
import { shallow } from "enzyme";

const defaultProps = {
  color: "red",
  selected: true,
  handleColorSelection: () => {},
};

describe("ShapeSelector tests ---------------------", () => {
  it("renders without crashing", () => {
    shallow(<ColorSelector {...defaultProps} />);
  });

  it("should have the correct classname when it is selected", () => {
    const component = shallow(<ColorSelector {...defaultProps} />);

    expect(component.prop("className").trim()).toBe(
      "color-selector color-selector__selected"
    );
  });

  it("should have the correct classname when it is not selected", () => {
    const component = shallow(
      <ColorSelector {...defaultProps} selected={false} />
    );

    expect(component.prop("className").trim()).toBe("color-selector");
  });

  it("should call a function passed to it when clicked", () => {
    const mockCallBack = jest.fn();
    const mounntedComponent = shallow(
      <ColorSelector {...defaultProps} handleColorSelection={mockCallBack} />
    );

    mounntedComponent.simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
