
import React from "react";
import PropTypes from "prop-types";

export default function NotFound(props) { 
        return (
            <div> 
            <h2>Page Not Found</h2>

            <button onClick={() => props.history.push("/")}>
              Home
            </button>
            
            </div>
        )
} 


NotFound.defaultProps = {
    
}

NotFound.propTypes = {
    
}