import React from 'react'
import { useSelector } from 'react-redux'
import Cart from '../Cart'
import s from './index.module.css'
import OrdersContainer from '../OrdersContainer'
import {Link} from 'react-router-dom'

export default function CartContainer() {
    const cart_state = useSelector(state =>state.allcart)
  return (
    <div className={s.container}>
      <div className={s.top_container}>
        <h2>Shopping cart</h2>
        <div className={s.back}>
          <p>Back to the store</p>
          <Link to='/products'><img src="/media/back.png" alt="" /></Link>
        </div>
        
      </div>
      <div className={s.cart_container}>
        <div className={s.product_cart_container}>
          {
            cart_state.map(el=> <Cart {...el} key={el.id}/>)
          }
        </div>
        <div><OrdersContainer/></div>
        
      </div>
    </div>
  )
}
