import React from "react";

import Home from "./Home";

import {mount} from "enzyme";
 
describe("Home component Suite", ()=> {
    
    it("home default test", ()=> {


        let actions = {
            // increment: function(value) {
            //     console.log("***", value);
            // }  
            
            increment: jest.fn(), //mock
            decrement: jest.fn()
        }

        let wrapper = mount(<Home  
                                counter={10000}
                                actions={actions}
                            />);
 
        expect(wrapper.find("div").text())
                .toContain("10000");

        let homeInst = wrapper.instance();
        homeInst.increment();

        expect(actions.increment).toBeCalled();
        expect(actions.increment)
                .toHaveBeenCalledTimes(1);

        expect(actions.increment)
                .toBeCalledWith(1);



    })
});