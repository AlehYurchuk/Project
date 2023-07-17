import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscountProduct } from '../../async_actions/products_req'
import Products from '../Product';
import s from './index.module.css'
import ProductsFilterPrice from '../ProductsFilterPrice';
import ProductSort from '../ProductSort';

export default function DiscountContainer() {
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getDiscountProduct)}, [])

    const products_state = useSelector(state => state.allproducts)

  return (
    <div className={s.discount_container}>
      <h2>Products with sale</h2>
      <div className={s.sort_container}>
        <ProductsFilterPrice/>
        <ProductSort/>

      </div>
      <div className={s.discount_card}>
      {
        products_state.filter(el => !el.hide_price)
        .map(el => <Products key={el.id} {...el} />)
      }
      </div>
    </div>
  )
}
