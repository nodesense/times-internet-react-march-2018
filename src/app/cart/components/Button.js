
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            highlight: false
        }
    }
     
    
    render() {
        //console.log("Button render");

        return (
            <button onClick={this.props.onClick} 
                className={this.state.highlight?"success":''}
                 onMouseEnter={() => this.setState({highlight: true})}
                onMouseLeave={() => this.setState({highlight: false })}
            >
                 {this.props.children}
            </button>
        )
    }
} 


Button.defaultProps = {
    
}

Button.propTypes = {
    
}