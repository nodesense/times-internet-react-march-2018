// functional component
// presentational/stateless component

import React from "react";

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