import { GET_PRODUCTS } from '../actiontypes/ActionTypes';

export function productsReducer(state = {
    products: [
      {
        id: 100, 
        name: "Dönerteller mit Salat 1",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 12.90
      },
      {
        id: 200, 
        name: "Dönerteller mit Salat 2",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      },
      {
        id: 300, 
        name: "Dönerteller mit Salat 3",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 15.90
      },
      {
        id: 400, 
        name: "Dönerteller mit Salat 4",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 20.45
      },
      {
        id: 500, 
        name: "Dönerteller mit Salat 5",
        image: "http://rostock.studentsstudents.de/wp-content/uploads/2016/08/D%C3%B6ner.jpg",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        price: 9.90
      },
      {
        id: 600, 
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