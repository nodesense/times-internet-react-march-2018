import cartReducer from "./cartReducer";
import * as ActionTypes from "./action-types";

// pure function

describe("cartReducer test suite", () => {

    //test case
    it("should be default state", () => {
      //  expect( 1 + 2).toBe(3);
        expect(cartReducer(undefined, {})).toEqual([])
    })

    it ("add item", () => {
        let action = {
            type: ActionTypes.ADD_ITEM_TO_CART,
            payload: {
                item: {id: 1, name: 'P1'}
            }
        }

        expect(cartReducer([], action))
            .toEqual([{id: 1, name: 'P1'}]);
    })
})