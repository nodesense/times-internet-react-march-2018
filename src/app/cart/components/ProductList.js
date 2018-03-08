
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        //container shall pass fetchProducts method
        //this.props.fetchProducts();

    }
    
    render() {
        //products, loading, error from state/container

        let products = this.props.products || [];
        let loading = this.props.loading;
        let error = this.props.error;

        return (
            <div> 
            <h2>Product List</h2>
            
            <ul>
                {
                    products.map( product => (
                        <li key={product.id}>
                            {product.name}

                            <button onClick={ () => {}} >
                              +Cart
                            </button>
                        </li>
                    ))
                }
            </ul>

            </div>
        )
    }
} 


ProductList.defaultProps = {
    
}

ProductList.propTypes = {
    
}