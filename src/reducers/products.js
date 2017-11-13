import { GET_PRODUCTS } from '../actiontypes/ActionTypes';

export function productsReducer(state = {
    products: [
      {
        id: 1, 
        name: "Dönerteller mit Salat 1",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      },
      {
        id: 2, 
        name: "Dönerteller mit Salat 2",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      },
      {
        id: 3, 
        name: "Dönerteller mit Salat 3",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      },
      {
        id: 4, 
        name: "Dönerteller mit Salat 4",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      },
      {
        id: 5, 
        name: "Dönerteller mit Salat 5",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      },
      {
        id: 6, 
        name: "Dönerteller mit Salat 6",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      }
    ]
  }, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: [...state.products]
      }
    default:
      return state
  }
}