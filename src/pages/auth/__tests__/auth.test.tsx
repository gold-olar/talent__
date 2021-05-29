import Auth from "../";
import { shallow } from "enzyme";

describe("Auth Page tests ---------------------", () => {
  it("renders without crashing", () => {
    shallow(<Auth />);
  });

  it("should render an AuthForm", () => {
    const mountedComponent = shallow(<Auth />);
    const authform = mountedComponent.find("AuthForm");

    expect(authform.length).toBe(1);
  });
});
