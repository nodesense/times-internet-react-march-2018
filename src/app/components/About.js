import React, {Component} from "react";

// contact is a container component
import Contact from "./Contact";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frameworks: ['React', 'Redux'],
            show: true,
            name: ''
        }
    }

    // Option 2
    getList() {
        let list = [];
        for (let name of this.state.frameworks) {
            list.push(<li> {name} </li>);
        }

        return list;
    }

    toggle() {
        this.setState({
            show: !this.state.show
        })
    }

    onTextChange(e) {
        //e.target (input element/real dom)
        //e.target.value

        this.setState({
            name: e.target.value
        })
    }
    
    render() {

        // Option 1
        let list = [];
        for (let name of this.state.frameworks) {
            list.push(<li> {name} </li>);
        }

        return (
            <div> 
            <h2>About</h2>

            <input value={this.state.name}
                    onChange={ (e) => this.onTextChange(e) } 
            />

            <button onClick={ ()=> this.toggle()}>
                {this.state.show?"Hide": "Show"}
            </button>


            {
                this.state.show?
                  <Contact   />:<p>Contact Not Shown</p>
            }

            
            {this.state.show && 
                <ul>
                

                {
                    this.state
                    .frameworks.map( name => (
                        <li key={name}>{name}</li>
                    ))
                }

                </ul>
            }


            <button onClick={() => this.props.history.push("/")}>
              Home (About)
            </button>


            </div>
        )
    }
} 

 