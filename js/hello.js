"use strict";

function getProductName() {
    return this.productName;
}

//console.log(getProductName());

let onClick = getProductName;

global.productName = "Apple";

console.log(onClick.apply())