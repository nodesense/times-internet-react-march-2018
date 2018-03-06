
import React from 'react';

// default import
import Footer from "./components/Footer";

import Header from "./components/Header";

import Home from "./components/Home";
import About from "./components/About";

//Virtual dom
export class App extends React.Component {

    constructor() {
        super();  //MUST

        this.address = {
            city: 'Delhi',
            pincode: 122016
        }
    }


    // react keyword
    // called by react framework
    // create and return virtual dom
    render() {
        return (
            <div>
                <Header />
                <h1>React App</h1>

                <Home />

                <About />
                
                <Footer year={2017 + 1} 
                        company="React App" 
                        address={this.address}
                >
                    <p>Contact us: 9:00 AM to 6:00 PM</p>

                </Footer>
            </div>
        )
    }
}