// bootstrap react virtual dom into real dom

import React from 'react';
import {render} from 'react-dom';

import {App} from "./app/App";
 

//Provider Export store object to containers
import {Provider} from 'react-redux';
import store from "./app/store";


// diff
// patch
// data flow => Virtual to Real DOM
render( <Provider store={store}>
            <App />
        </Provider>,

       document.getElementById("root")  //real
)