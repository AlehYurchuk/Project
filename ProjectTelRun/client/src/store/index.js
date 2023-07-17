import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { categoryReducer } from './reducers/categoryReducer'
import { productReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducer'





const rootReducer= combineReducers({
     categories: categoryReducer,
     allproducts: productReducer,
     allcart: cartReducer,
     
   
     

})

export const store = createStore(rootReducer, applyMiddleware(thunk))