import React from "react";
import { shallow, userDetails } from "../../../Enzyme";
import { configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
 import Adapter from 'enzyme-adapter-react-16';
import GiftsList from './GiftsList'

configure({adapter: new Adapter()})
const mockStore = configureMockStore();
const store = mockStore({});
describe("Testing giftsList component", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <Provider store={store}>
          <GiftsList
        userDetails={userDetails}
        classes={{}}
        giftCardsFiltered={[]}
      />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  
  
});