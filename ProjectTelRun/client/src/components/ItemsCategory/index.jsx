import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategoryProduct } from '../../async_actions/categories_req'
import Products from '../Product';
import s from './index.module.css'
import CategorySort from '../CategorySort';



export default function ItemsCategory() {
    const dispatch = useDispatch();

    const { categoryId } = useParams();

    useEffect(() => {dispatch(getCategoryProduct(categoryId ))}, [])

    
    const categoryProduct_state =useSelector(state => state.categories)
  
    
    
    return (
    <div className={s.category_container}>
       
        <div>
          
          <CategorySort/>
        </div>
        <div className={s.product_container}>
          {
            categoryProduct_state.filter(el => !el.hide_price && el.hide_sale).map(el => <Products key={el.id} {...el}/>)
          }
        </div>
    </div>
  )
}
