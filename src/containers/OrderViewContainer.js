import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeOrder } from '../actionCreators';
import OrderView from '../views/OrderView';

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        completeOrder
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderView);