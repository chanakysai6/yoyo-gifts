import React from "react";
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from "./Footer";


Enzyme.configure({adapter: new Adapter()})


  it("Footer display container", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("p").length).toBe(0);
  });
