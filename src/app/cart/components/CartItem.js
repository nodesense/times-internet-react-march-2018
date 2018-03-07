
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        console.log("CartItem will unmount");
    }
     
    
    render() {
        
        let {item} = this.props;
        console.log("CartItem Render", item.id);

        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                     {item.qty}
                </td>
                <td>{item.price * item.qty}</td>

                <td>
                    <button onClick={ () =>  this.props.onRemove(item.id) }>
                        Delete
                    </button>    
                </td>
            </tr>
        )
    }

} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}