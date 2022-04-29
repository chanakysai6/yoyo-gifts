
import React from 'react';
// import {render} from '@testing-library/react'
import Enzyme,{shallow} from 'enzyme';
// import { Route } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';
import App from './App'
// import GiftsListContainer from './gifts/containers/GiftsListContainer';

Enzyme.configure({adapter: new Adapter()})


it('renders correct routes', () => {
  const wrapper = shallow(<App />);
//   const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
//     const routeProps = route.props();
//     pathMap[routeProps.path] = routeProps.component;
//     return pathMap;
//   }, {});
    // expect(pathMap['/giftCards']).toBe(GiftsListContainer);
    expect(wrapper).toMatchSnapshot();
});




// test("App COmponent", ()=> {
//     const wrapper = shallow(<App />)
//     expect(wrapper.find('h2'))
// })