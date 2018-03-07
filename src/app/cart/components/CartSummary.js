
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartSummary extends Component {
    constructor(props) {
        super(props);
    }

    //TODO: update Life cycle methods

    // when parent render called on update cycle

    componentWillReceiveProps(nextProps) {
        console.log("Summary will receive props");
        console.log("nextProps", nextProps);
        console.log("this.props", this.props);
    }


    // when parent render called on update cycle
    // when component this.setState called on update cycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Summary should update");

        return this.props.amount != nextProps.amount ||
               this.props.count != nextProps.count;

        //return true; // calls render
    }

    
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