//Home Container

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import Home from "../components/Home";
import * as actions from "../state/actions";


// contaienr shall call this method
// when on subscribe
// returns props with values
// state => store.getState() => { counter: 1}
function mapStateToProps(state) {
    return {
        //propName: value from state
        counter: state.counter
    }
}

// this method called by container
// when, only once when it creates component first time
// returns props with functions
// dispatch => store.dispatch
function mapDispatchToProps(dispatch) {
    return {
        //propName: function
        onIncrement: function(value) {
            // let action = {
            //     type: 'INCREMENT',
            //     value: value
            // }

            let action = actions.increment(value);
            dispatch(action);
        },

        // onDecrement: function(value) {
        //     dispatch(actions.decrement(value));
        // }

        onDecrement: bindActionCreators(actions.decrement,
                                       dispatch),

        //props.actions.increment (bound method dispatch)
        //actions.increment - simple function
        actions: bindActionCreators(actions, dispatch)
    }
}


let connectFn = connect(mapStateToProps, 
                        mapDispatchToProps);

//Creates a container component,
//that wraps Home component as child
// containers are PureComponent
let HomeContainer = connectFn(Home);

export default HomeContainer;