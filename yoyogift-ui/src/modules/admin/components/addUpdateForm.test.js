import React from "react";
import  { shallow  , configure
 } from "enzyme";
 import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
 import Adapter from 'enzyme-adapter-react-16';
import AddUpdateForm from "./addUpdateForm";

configure({adapter: new Adapter()})
const mockStore = configureMockStore();
const store = mockStore({});

// const formState = {
//   cardNameValue: "",
//   cardNameError: false,
//   cardNameHelperText: "",
//   cardPointsValue: "",
//   cardPointsError: false,
//   cardPointsHelperText: "",
//   cardCategoryValue: "",
//   cardCategoryError: false,
//   cardCategoryHelperText: "",
//   cardRetailerValue: "",
//   cardRetailerError: false,
//   cardRetailerHelperText: "",
//   cardExpiryDateValue: "",
//   cardExpiryDateError: false,
//   cardExpiryDateHelperText: "",
//   cardCountValue: "",
//   cardCountError: false,
//   cardCountHelperText: "",
//   cardImageValue: "",
//   cardImageError: false,
//   cardImageHelperText: "",
//   cardVendorValue: "",
//   cardVendorError: false,
//   cardVendorHelperText: "",
//   cardShortDescValue: "",
//   cardShortDescError: false,
//   cardShortDescHelperText: "",
//   cardLongDescValue: "",
//   cardLongDescError: false,
//   cardLongDescHelperText: ""
// };
describe("Testing AddUpdate form", () => {
  it("Snapshot testing", () => {
    const wrapper = shallow(
      <Provider store={store}>
          <AddUpdateForm 
        giftCards={[{ id: 1, cardName: "test" }, {}, {}]}
        match={{ params: { id: true } }}
      />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});