
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    constructor(props) {
        super(props);
    }

    //TODO: Life cycle methods
    
    
    render() {
        console.log("CartSummary render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount {this.props.amount} </p>
            <p> Total Items {this.props.count} </p>
            </div>
        )
    }
} 


// defaultProps is static, keyword
CartSummary.defaultProps = {
    amount: 0,
    count: 0
}

CartSummary.propTypes = {
    amount: PropTypes.number,
    count: PropTypes.number
}