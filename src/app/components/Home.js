import React, {Component} from 'react';

import PropTypes from "prop-types";


//REACT REDUX BRIDGE IMPL
 
//React.Component == Component

export default class Home extends Component {
    constructor(props) {
        super();
    }

    //ES.NEXT static inside class
    static propTypes = {
        counter: PropTypes.number
    }

    static defaultProps = {
        counter: 0
    }

    increment() {
        //received from parent/container
       // this.props.onIncrement(1);

       // from bind action creators
       // increment is bound to dispatch
       this.props.actions.increment(1);
    }

    decrement() {
        this.props.onDecrement(1);
    }
  
    render() {
 
        //counter props passed by container
        let counter = this.props.counter;

        console.log("Home render", counter);
 
        return (
    <div>
        <h2>Home</h2>
        
        <p>Counter: {counter}</p>
       

        <button onClick={ ()=> this.increment()}>
          +1
        </button>
 
        <button onClick={ ()=> this.decrement()}>
        -1
        </button>
        

    </div>
        )
    }
}