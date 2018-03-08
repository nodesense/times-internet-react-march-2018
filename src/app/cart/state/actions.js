// action creators

import * as ActionTypes from "./action-types";

export function initProducts(products){
    return {
        type: ActionTypes.INIT_PRODUCTS,
        payload: {
            products: products
        }
    }
}


export function loading(status){
    return {
        type: ActionTypes.LOADING,
        payload: {
            status: status
        }
    }
}

//returns action as object
export function initError(error) {
    return {
        type: ActionTypes.ERROR,
        payload: {
            error: error
        }
    }
}

//ASYNC Calls, actions
// as per thunk, returns action as function
export function fetchProducts() {
    // this function, called by thunk middleware
    return function(dispatch) {
        console.log("Called by thunk");
        //ajax call
        //fetch(..).then ( (products) => dispatch(products))

    }
}