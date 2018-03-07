
import React, {Component} from "react";
 
export default class Contact extends Component {
    constructor(props) {
        super(props);
        console.log("Contact created");
    }
     
    componentWillUnmount() {
        console.log("Contact will unmount");
    }
    
    render() {
        return (
            <div> 
            <h2>Contact</h2>
            </div>
        )
    }
} 
 