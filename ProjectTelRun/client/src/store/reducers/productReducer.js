const ALL_PRODUCTS ='[PRODUCTSCONTAINER] ALL_PRODUCTS'
const ALL_DISCOUNT_PRODUCTS = '[DISCOUNT_CONTAINER] ALL_DISCOUNT_PRODUCTS'
const ALL_PRODUCT_INFO = '[PRODUCT_INFO] ALL_PRODUCT_INFO '
const ALL_FILTER_PRODUCT_PRICE = 'ALL_FILTER_PRODUCT_PRICE'
const ALL_FILTER_PRODUCT_DISCOUNT = 'ALL_FILTER_PRODUCT_DISCOUNT'
const ALL_PRODUCT_SORT = '[CATEGORYSORT] ALL_PRODUCT_SORT'

export const allProductsAction = payload => ({ type: ALL_PRODUCTS, payload });
export const allDiscountProductAction = payload => ({type: ALL_DISCOUNT_PRODUCTS, payload})
export const allProductInfoAction = payload => ({type: ALL_PRODUCT_INFO, payload})
export const allFilterProductPriceAction = payload => ({type: ALL_FILTER_PRODUCT_PRICE, payload})
export const allFilterProductDiscountAction = payload => ({type:ALL_FILTER_PRODUCT_DISCOUNT, payload})
export const allProductSortAction = payload => ({type:ALL_PRODUCT_SORT, payload})

let default_state = []

export const productReducer = (state =[], action) => {
    if(action.type ===ALL_PRODUCT_INFO){
        return action.payload
    }else if(action.type === ALL_PRODUCTS){
        return action.payload
    }else if(action.type ===ALL_DISCOUNT_PRODUCTS){
        return action.payload.filter(el => el.discont_price > 0);
    
    }else if (action.type === ALL_FILTER_PRODUCT_PRICE) {
        const { min, max } = action.payload;

        return state.map(el => {
            const new_price = el.discont_price ? el.discont_price : el.price;
            if (new_price >= min && new_price <= max) {
                el.show = true
            } else {
                el.show = false
            }
            return el
        })
    } else if (action.type === ALL_FILTER_PRODUCT_DISCOUNT) {
        if (action.payload) {
            return state.map(el => {
                if (el.discont_price) {
                    el.show = true
                } else {
                    el.show = false
                }
                return el
            });
        } else {
            return state.map(el => {
                el.show = true
                return el    
            });
        }
    }else if(action.type === ALL_PRODUCT_SORT){
        if(action.payload === 'title'){
          state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
        } else if(action.payload === 'price_asc') {
          state.sort((a, b) => a.price - b.price)
        } else if (action.payload === 'price_desc'){
          state.sort((a, b) => b.price - a.price)
        } else if (action.payload === 'default'){
          state.sort((a, b) => a.id - b.id)
        }
        return [...state]
    }else { 
        return state 
    }
}
