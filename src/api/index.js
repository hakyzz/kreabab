import request from 'superagent'

export const fetchProducts = async () => {
    const response = await request.get('http://localhost:3004/products');
    return response.body
};

export const fetchCategories = async () => {
    const response = await request.get('http://localhost:3004/categories');
    return response.body
};