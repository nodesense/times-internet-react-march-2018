
import React, {Component} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends Component {
    constructor(props) {
        super(props);
    }
     
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Cart list should update");
        return this.props.items != nextProps.items;
    }
    
    render() {
        console.log("CartList render");
        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>

                    {
                        this.props.items.map(item => (
                            <CartItem key={item.id} item = {item}
                            />
                        ))
                    }
                </tbody>
                </table>
            </div>
        )
    }
} 


CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}