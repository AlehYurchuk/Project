import { allCategoriesAction, allCategoryProductAction } from "../store/reducers/categoryReducer"

export const getCategories = dispatch => {
    fetch('http://localhost:3333/categories/all')
    .then(res => res.json())
    .then(json => dispatch(allCategoriesAction(json)))
}

export const getCategoryProduct = id => {
    return dispatch =>{
        fetch(`http://localhost:3333/categories/${id}`)
            .then(res => res.json())
            .then(json => {
                const new_json = json.data.map(el => ({ ...el, hide_price: false, hide_sale: true }))
                dispatch(allCategoryProductAction(new_json))})
    }
}
