// import { getProducts } from './productsAction';
import { 
    fetchProducts,
    fetchProductById
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
    addToCart, 
    changeQuantityCart,
    deleteFromCart,
    completeOrder
}