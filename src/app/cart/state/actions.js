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
            loading: status
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

import * as service from './service';

//ASYNC Calls, actions
// as per thunk, returns action as function
export function fetchProducts() {
    // this function, called by thunk middleware
    return function(dispatch, getState) {
        console.log("Called by thunk");
        //ajax call
        //fetch(..).then ( (products) => dispatch(products))
        
        let state = getState();
        if (state.productState.products.length > 0) {
            console.log("Products in cache");
            return true;
        }


        dispatch(loading(true));

        service.getProducts()
        .then (products => {
            console.log("got products", products);
            //action as object INIT_PRODUCTS
            let action = initProducts(products);
            dispatch(action);
            dispatch(loading(false));
        })
    }
}