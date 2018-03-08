import React, {Component} from 'react';

import PropTypes from "prop-types";

import store from "../store";


 
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
        let action = {
            type: 'INCREMENT',
            value: 1
        }

        console.log("DISPATCH");
        store.dispatch(action);
    }

    decrement() {
        let action = {
            type: 'DECREMENT',
            value: 1
        }

        console.log("DISPATCH");
        store.dispatch(action);
    }

    componentDidMount() {
        this.unsubscribeFn = store.subscribe( ()=> {
            console.log("HOME SUBS");
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        console.log("home will unmount");
        this.unsubscribeFn();
    }

    render() {
 
        let state = store.getState();
        //{counter: 0}
        let counter = state.counter;

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