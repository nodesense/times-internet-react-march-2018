import {createStore} from 'redux';

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

let store = createStore(counterReducer);

export default store;
