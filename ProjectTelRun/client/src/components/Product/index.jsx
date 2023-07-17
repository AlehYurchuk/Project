import React from 'react'
import { useDispatch } from 'react-redux'
import s from './index.module.css'
import { allCartAction } from '../../store/reducers/cartReducer'
import { Link } from 'react-router-dom'


export default function Products({id, title, price, discont_price,image}) {
    const dispatch = useDispatch();

    const addToCart = () => dispatch(allCartAction({id, title, price, discont_price,image}));
   
    let oldPrice;
    let newPrice;
    let discount;


    if (price !== undefined) {
      if (discont_price) {
        oldPrice = price;
        newPrice = discont_price;
        discount = Math.round(100 - (newPrice / oldPrice) * 100);
      } else {
        newPrice = price;
     }
   }

  const old_price={ visibility: oldPrice ? 'visible' : 'hidden'}
  const vis_discount ={visibility: discount ? 'visible' : 'hidden'}
  

  return (  
    <div className={s.product_card}>
      
      <Link to={`/product/${id}`}>
       <img src={`http://localhost:3333/${image}`} alt={title} />
       <div className={s.product_card_price}>
          <p className={s.new_price} >{newPrice}<small >$</small></p>
          <p className={s.old_price} 
             style={old_price}
             >
              {oldPrice}$</p>
          <p className={s.discount} 
             style={vis_discount}
          >
            -{discount}%</p>
      </div>
      <p className={s.product_card_text}>{title}</p>
      </Link>
      <button className={s.btn}
              onClick={addToCart} 
      >Add to cart</button>
    </div>
  )
}
