import { connect } from 'react-redux'
import ShoppingBag from '../components/ShoppingBag/ShoppingBag'
import { getCartTotalNoOfItems } from '../selectors/cart'

function mapStateToProps(state) {
    return {
        cartTotalNoOfItems: getCartTotalNoOfItems(state)
    }
}
  
export default connect(
    mapStateToProps,
    null
)(ShoppingBag);