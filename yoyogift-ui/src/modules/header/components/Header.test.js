import React from 'react';
// import {render} from '@testing-library/react'
import 
 Enzyme,
{shallow} from 'enzyme';
import { Provider } from "react-redux";
// import configureMockStore from "redux-mock-store";
// import { Route } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
// import { adminEmail } from "../../config/constants";
import {  userDetails } from "../../../Enzyme";

import axiosWrapper from "../../../apis/axiosCreate";
import Header from './Header';
Enzyme.configure({adapter: new Adapter()})

//const mockStore = configureMockStore();
const store = jest.fn();

it('login check with right data',()=>{
const wrapper = shallow(<Provider store={store}><Header /></Provider>  );
// wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'krishankantsinghal'}});
// wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'krishankant123'}});
// wrapper.find('button').simulate('click');
// expect(wrapper.state('isLogined')).toBe(true);
expect(wrapper).toMatchSnapshot();
})

 it("Native Login, valid email (social media login)", async () => {
    let wrapper = shallow((<button onClick={store}>Ok!</button>)  );
    const loginButton = wrapper.find('button');
    axiosWrapper.get = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        data: [{ ...userDetails, password: undefined }]
      });
    });
    await loginButton.simulate("click");
    wrapper = wrapper.update();
   expect(store.mock.calls.length).toEqual(1);
  });