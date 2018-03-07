import React from "react";

import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <div>
           <NavLink to="/"
                    className="button"
                    activeClassName="success"
                    exact

            >
                Home
            </NavLink>

            <NavLink to="/products"
                    className="button"
                    activeClassName="success"

            >
                Products
            </NavLink>


            <NavLink to="/cart"
                    className="button"
                    activeClassName="success"

            >
                Cart
            </NavLink>



            <NavLink to="/about"
                    className="button"
                    activeClassName="success"

            >
                About
            </NavLink>

            <hr />
        </div>
    )
}