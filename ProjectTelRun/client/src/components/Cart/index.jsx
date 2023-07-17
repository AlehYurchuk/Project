import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartAction, incrementCountAction, decrementCountAction } from '../../store/reducers/cartReducer'
import s from './index.module.css'

export default function Cart({ id, title, image, price, discont_price, count }) {
  
    const dispatch = useDispatch();

    let oldPrice;
    let newPrice;
    


    if (price !== undefined) {
      if (discont_price) {
        oldPrice = price;
        newPrice = discont_price;        
      } else {
        newPrice = price;
     }
   }

    const old_price={ visibility: oldPrice ? 'visible' : 'hidden'}

    return (
    <div className={s.cart}>
    <img  className={s.btn_x} src="/media/x.png" alt="X" onClick={() => dispatch(deleteCartAction(id))} />
    <img  className={s.image} src={`http://localhost:3333/${image}`} alt={title}/>
    <div className={s.product}>
        <p className={s.title}>{title}</p>
        <div className={s.counter_btn}>
            <button className={s.btn_plus_minus} onClick={() => dispatch(decrementCountAction(id))}>-</button>
            <div>{count}</div>          
            <button className={s.btn_plus_minus} onClick={() => dispatch(incrementCountAction(id))}>+</button>
        </div>
      </div>
      <div className={s.price_container}>
        <p className={s.new_price}>{newPrice}<small >$</small></p>
        <p className={s.old_price} 
             style={old_price}>{oldPrice}$</p>
        
      </div>
    </div>
  )
}

