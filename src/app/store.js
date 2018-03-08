import {createStore, 
        combineReducers, 
        applyMiddleware} from 'redux';

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE,
                        action) {

    console.log("counterReducer ", state, action);

    switch(action.type) {
       

        case 'INCREMENT':   
                return state  + action.value;

        case 'DECREMENT':
                return state - action.value;

        default:
                return state;
    }
}


function loggerMiddleware(store) {
        console.log("Outter logger")
        return function(next) {
                console.log("logger next")
                return function(action) {
                      console.log("LOGGER ", action);
                      console.log(typeof action);  
                      // forward action to next middlware/reduers
                      let result = next(action);
                      console.log("State ", store.getState());
                      return result;
                }
        }
}

import cartReducer from './cart/state/cartReducer';
import productReducer from './cart/state/productReducer';


let rootReducer = combineReducers({
        //state: reducerFn
        counter: counterReducer,
        cartItems: cartReducer,
        productState: productReducer
});

let store = createStore(rootReducer, 
                        applyMiddleware(loggerMiddleware));

export default store;
