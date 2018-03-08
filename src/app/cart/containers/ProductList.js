
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductList from "../components/ProductList";
import * as actions from "../state/actions";

const mapStateToProps = (state) => {
    return {
         
    }
}

//this.props.actions.functin-name-fromt-action.js
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductList)