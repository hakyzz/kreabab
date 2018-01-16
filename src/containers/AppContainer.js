import { connect } from 'react-redux';
import { fetchProducts, fetchCategories } from '../actionCreators';
import App from '../components/App/App';

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {
    fetchProducts,
    fetchCategories
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);