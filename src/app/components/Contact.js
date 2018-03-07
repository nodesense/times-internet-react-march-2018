
import React, {Component} from "react";

import {withRouter} from 'react-router-dom';

class Contact extends Component {
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


            <button onClick={() => this.props.history.push("/")}>
              Home
            </button>

            </div>
        )
    }
} 

let Container = withRouter(Contact);

// container contains Contact component
export default Container;


 