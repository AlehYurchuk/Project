const ALL_CART = '[PRODUCT] ALL_PRODUCT'
const DELETE_CART = '[CART] DELETE_CART';
const INCREMENT_COUNT = '[CART] INCREMENT_COUNT';
const DECREMENT_COUNT = '[CART] DECREMENT_COUNT';

export const allCartAction = payload => ({type: ALL_CART, payload});
export const deleteCartAction = payload => ({ type: DELETE_CART, payload });
export const incrementCountAction = payload => ({ type: INCREMENT_COUNT, payload });
export const decrementCountAction = payload => ({ type: DECREMENT_COUNT, payload })

const checkProductInCart = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id)
    if (productInState) {
        productInState.count++;
        return [...state]
    } else {
        return [...state, { ...payload, count: 1, fullPrice: payload.discont_price ? payload.discont_price : payload.price }]
    }
}


export const cartReducer = (state = [], action) =>{
    if(action.type ===ALL_CART) {
        return checkProductInCart(state, action.payload)
    } else if (action.type === DELETE_CART) {
        return state.filter(el => el.id !== action.payload)
    } else if (action.type === INCREMENT_COUNT) {
        state.find(el => el.id === action.payload).count++
        return [...state]
    }else if (action.type === DECREMENT_COUNT) {
        const target_cart = state.find(el => el.id === action.payload);
        if (target_cart.count === 1) {
            return state.filter(el => el.id !== action.payload)
        } else {
            target_cart.count--
            return [...state]
        }
    }
    else {
        return state
    }

}