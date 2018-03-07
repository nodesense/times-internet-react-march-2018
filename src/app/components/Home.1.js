import React, {Component} from 'react';

import PropTypes from "prop-types";

//React.Component == Component

export default class Home extends Component {
    constructor(props) {
        super();

        //react keyword
        //state is mutable
        this.state = {
            counter: props.counter
        }
    }

    //ES.NEXT static inside class
    static propTypes = {
        counter: PropTypes.number
    }

    static defaultProps = {
        counter: 0
    }

    increment() {
        //BAD, mutable
        this.state.counter++;
        console.log("Counter ", this.state.counter);
    
       // Trigger render call
       //BAD
       // trigger render function call
       this.forceUpdate();
    }

    decrement() {
        //console.trace();

        console.log("before setState ", 
            this.state.counter);

        //GOOD
        //react keyword method
        // set new state
        // async api
        // calls render method
        this.setState({
            //immutable
            counter: this.state.counter - 1
        })

        this.setState({
            flag: true
        });

        console.log("after setState ", 
            this.state.counter);
    }

    render() {

        console.log("Home render", this.state.counter);

       // let _this = this;

        return (
    <div>
        <h2>Home</h2>
        
        <p>Counter: {this.state.counter}</p>
        {/* 
        <button onClick={function() {
            _this.increment();
        }}>
          +1
        </button>
    */}

        <button onClick={ ()=> this.increment()}>
          +1
        </button>

    <div onClick={ ()=> this.decrement()}>
        <div onClick={ ()=> this.decrement()}>
            <button onClick={ ()=> this.decrement()}>
            -1
            </button>
        </div>
        </div>

    </div>
        )
    }
}