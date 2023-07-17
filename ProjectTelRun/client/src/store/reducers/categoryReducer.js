const ALL_CATEGORIES = '[CATEGORYCONTAINER] ALL_CATEGORIES'
const ALL_CATEGORY_PRODUCT = '[ITEMSCATEGORY] ALL_CATEGORY_PRODUCT'
const ALL_CATEGORY_SORT = '[CATEGORYSORT] ALL_CATEGORY_SORT_PRICE'
const ALL_FILTER_CATEGORY_PRODUCTS = '[CATEGORYSORT] ALL_FILTER_CATEGORY_PRODUCTS'
const ALL_FILTER_CATEGORY_DISCOUNT = '[CATEGORYSORT] ALL_FILTER_CATEGORY_DISCOUNT'

export const allCategoriesAction = payload => ({type: ALL_CATEGORIES, payload});
export const allCategoryProductAction = payload => ({type: ALL_CATEGORY_PRODUCT,payload});
export const allCategorySort = payload => ({type:ALL_CATEGORY_SORT, payload});
export const allFilterCategoryProducts = payload =>({title: ALL_FILTER_CATEGORY_PRODUCTS, payload})
export const allFilterCategoryDiscountAction = payload => ({title: ALL_FILTER_CATEGORY_DISCOUNT, payload})

let default_state = []

export const categoryReducer = (state= [], action) => {
    if (action.type === ALL_CATEGORIES){
        return action.payload
    }else if(action.type === ALL_CATEGORY_PRODUCT){
        default_state = action.payload.map(el => ({ ...el, hide_price: false }))
        return action.payload.map(el => ({ ...el, hide_price: false}))
    }else if(action.type === ALL_CATEGORY_SORT){
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
    } else if (action.type === ALL_FILTER_CATEGORY_PRODUCTS) {
        const { min_value, max_value } = action.payload;
console.log('ggwgwgw',min_value,max_value);
    return state.map(el => {
      if(el.price >= min_value && el.price <= max_value){
        el.hide_price = false
        
      } else {
        el.hide_price = true
      }
            return el
        })    
    }else if (action.type === ALL_FILTER_CATEGORY_DISCOUNT) {
      if (action.payload) {
          return state.map(el => {
              if (el.discont_price) {
                  el.hide_sale = true
              } else {
                  el. hide_sale = false
              }
              return el
          });
      } else {
          return state.map(el => {
              el.hide_sale = true
              return el
          });
      }
  }
  else { return state }
}