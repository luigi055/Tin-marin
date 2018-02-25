// @flow
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddOptions from "./../../src/components/AddOptions";

configure({ adapter: new Adapter() });

// describe('<AddOptions />', () => {
//   it('should add a new option when click', () => {
//     const state = {options: []};
//     const Wrapper = shallow(<AddOptions updateState={state}/>);

//     expect(Wrapper.)
//   });
// });
