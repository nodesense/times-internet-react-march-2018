import React from "react";

import ProductList from "./ProductList";

import {mount} from "enzyme";
 
describe("ProductList component Suite", ()=> {
    
    it("ProductList default test", ()=> {


        let actions = {
            fetchProducts: jest.fn(), //mock
        }

        let wrapper = mount(<ProductList  
                                products={ [] } 
                                actions= {actions}
                            />);
  
        let productInst = wrapper.instance();
         

        expect(actions.fetchProducts).toBeCalled();
        expect(actions.fetchProducts)
                .toHaveBeenCalledTimes(1);

        expect(actions.fetchProducts)
            .toBeCalledWith();



    })
});