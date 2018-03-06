// bootstrap react virtual dom into real dom

import React from 'react';
import {render} from 'react-dom';

import {App} from "./app/App";
 
// diff
// patch
// data flow => Virtual to Real DOM
render(<App />,  //virtual dom
       document.getElementById("root")  //real
)