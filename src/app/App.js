
import React from 'react';

// default import
import Footer from "./components/Footer";

import Header from "./components/Header";

import Home from "./containers/Home";

import About from "./components/About";

//TODO: Lazy load cart
//import Cart from "./cart/components/Cart";

import NotFound from "./components/NotFound";

//import ProductList from "./cart/containers/ProductList";

import Loadable from 'react-loadable';

function Loading() {
    return (
        <div> 
            <img src="/assets/loading.gif" />
        </div>
    )
}

const LazyCartComponent = Loadable({
    loader: () => import('./cart/components/Cart'),
    loading: Loading,
  });


const LazyProductListComponent = Loadable({
    loader: () => import('./cart/containers/ProductList'),
    loading: Loading,
});



import {BrowserRouter as Router, 
        Switch, 
        Route} from 'react-router-dom';


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
            <Router >
                <div>
                    <Header />
                    <h1>React App</h1>

                    {/* <Cart />

                    <Home  counter={1000} />

                    <About /> */}

                    <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    
                    <Route path="/cart" component={LazyCartComponent} /> 

                    <Route path="/products" component={LazyProductListComponent} />
                    <Route path="*" component={NotFound} />
                  
                    </Switch>

                    
                    <Footer year={2018}
                        
                            address={this.address}
                    >
                        <p>Contact us: 9:00 AM to 6:00 PM</p>
                        

                    </Footer>
                </div>
            </Router>
        )
    }
}