import React from "react";
import { shallow, userDetails } from "../../../Enzyme";
import { configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
 import Adapter from 'enzyme-adapter-react-16';
import Profile from "./profile";
configure({adapter: new Adapter()})
const mockStore = configureMockStore();
const store = mockStore({});
describe("Testing profile component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(<Provider store={store}><Profile detailsObject={userDetails} /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});