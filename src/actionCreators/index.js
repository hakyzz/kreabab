// import { getProducts } from './productsAction';
import { 
    fetchProducts,
    fetchProductById,
    fetchCategories
} from './productsAction';

import { 
    addToCart,
    changeQuantityCart,
    deleteFromCart,
    completeOrder
} from './cartActions';


export { 
    // getProducts,
    fetchProducts,
    fetchProductById,
    fetchCategories,
    addToCart, 
    changeQuantityCart,
    deleteFromCart,
    completeOrder
}