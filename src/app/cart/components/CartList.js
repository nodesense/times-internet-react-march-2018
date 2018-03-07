
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

export default class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("Cart list should update");
    //     console.log("this.props.items != nextProps.items", this.props.items != nextProps.items);

    //     return this.props.items != nextProps.items;
    // }
    
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
                            <CartItem key={item.id} 
                                      item = {item}
                                      onRemove={this.props.onRemove}
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