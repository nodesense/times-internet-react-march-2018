import React from "react";

import Footer from "./Footer";

import {mount} from "enzyme";
 
describe("Footer component Suite", ()=> {
    

    it("footer default test", ()=> {
        let wrapper = mount(<Footer year={2018} address={ {city: 'Delhi'} } />);

        expect(wrapper.find("div").length).toBe(1);

        expect(wrapper.find("p").length).toBe(2);

        expect(wrapper.find("div").text())
                .toContain("2018");

    })
});