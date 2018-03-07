
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class MyLink extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
           <a onClick={() => alert("Hi")}>
             Click
            </a>
        )
    }
} 


MyLink.defaultProps = {
    
}

MyLink.propTypes = {
    
}