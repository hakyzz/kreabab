import React from 'react';
import {connect} from 'react-redux'
import {
    Link,
    withRouter
} from 'react-router-dom';

import * as R from 'ramda'
import classNames from 'classnames'
import './ProductCategories.css';

import {
    getCategories,
    getActiveCategoryId
} from '../../selectors/product';


const ProductCategories = ({categories, activeCategoryId}) => {

    const renderCategory = (category, index) => {
        const getActiveState = R.propEq('id', activeCategoryId);
        const linkClass = classNames({
            'product-categories__item': true,
            'active': getActiveState(category)
        });

        return (
            <li key={index}>
                <Link
                    to={`/categories/${category.id}`}
                    className={linkClass}
                    key={index}
                >
                    {category.name}
                </Link>
            </li>
        )
    };

    const renderAllCategory = () => {
        const linkClass = classNames({
            'product-categories__item': true,
            'active': R.isNil(activeCategoryId)
        });

        return (
            <li>
                <Link
                    to='/'
                    className={linkClass}
                >
                    Alle
                </Link>
            </li>
        )
    };

    return (
        <div className="product-categories">
            <ul className="product-categories__list">
                {renderAllCategory()}
                {categories.map((category, index) => renderCategory(category, index))}
            </ul>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => ({
    categories: getCategories(state),
    activeCategoryId: getActiveCategoryId(ownProps)
});

export default withRouter(connect(
    mapStateToProps,
    null
)(ProductCategories))
  