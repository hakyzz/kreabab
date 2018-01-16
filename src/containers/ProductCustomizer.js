import { connect } from 'react-redux';
import { fetchProducts, addToCart } from '../actionCreators';
import { getCustomProduct } from '../selectors/product';
import ProductCustomizer from '../components/ProductCustomizer/ProductCustomizer';

const mapStateToProps = state => {
    return {
        product: getCustomProduct(state)
    }
};

const mapDispatchToProps = {
    addToCart,
    fetchProducts
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductCustomizer);