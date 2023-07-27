import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../async_actions/products_req';
import Products from '../Product';
import s from './index.module.css'
import ProductsFilterPrice from '../ProductsFilterPrice';
import ProductFilterDiscount from '../ProductFilterDiscount';
import ProductSort from '../ProductSort';


export default function ProductsContainer() {
    
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getProducts)}, [])

    const products_state = useSelector(state => state.allproducts)
  return (
    <div className={s.container}>
      <h2>All products</h2>
      <div className={s.sort_container}>
       
       <ProductsFilterPrice/>
       <ProductFilterDiscount/>
       <ProductSort/>
      </div>
      <div className={s.products_container}>
      {
        products_state 
        .filter(el => el.show)
        .map(el => <Products {...el} key={el.id}/>)
      }
    </div>
    </div>
  )
}
