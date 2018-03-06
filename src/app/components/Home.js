import React, {Component} from 'react';

//React.Component == Component

export default class Home extends Component {
    constructor() {
        super();

        //react keyword
        //state is mutable
        this.state = {
            counter: 0
        }
    }

    increment() {
        //BAD
        this.state.counter++;
        console.log("Counter ", this.state.counter);
    
       // Trigger render call
       //BAD
       // trigger render function call
       this.forceUpdate();
    }

    render() {

        console.log("Home render");

       // let _this = this;

        return (
    <div>
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

    </div>
        )
    }
}