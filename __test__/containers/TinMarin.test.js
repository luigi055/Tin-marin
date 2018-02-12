// @flow
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TinMarin from "./../../src/containers/TinMarin";

configure({ adapter: new Adapter() });

describe(TinMarin, () => {
  it("should have 7 children", () => {
    const Wrapper = shallow(<TinMarin />);
    expect(Wrapper.children()).toHaveLength(7);
  });
});
