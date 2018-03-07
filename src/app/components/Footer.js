// functional component
// presentational/stateless component

import React from "react";
import PropTypes from "prop-types";

//returns virtual dom
//react calls this function
export default function Footer(props) {
    // props are read only

    // let year = props.year;
    // let company = props.company;

    //deconstruct
    let {year, company, address} = props;

    return (
        <div>
            <hr />
            <p>Copyrights @{year}, {company}</p>
            <p> City: {address.city}</p>

            {props.children}
        </div>
    )
}


//Keyword
Footer.propTypes = {
    // mandatory
    year: PropTypes.number.isRequired,
    company: PropTypes.string,

    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        pincode: PropTypes.number
    }).isRequired

}


//keyword
Footer.defaultProps = {
    // default values 
    company: 'React App'
}

//TODO: custom validation