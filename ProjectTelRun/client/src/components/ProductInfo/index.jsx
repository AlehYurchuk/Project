import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductInfo } from '../../async_actions/products_req';
import { allCartAction } from '../../store/reducers/cartReducer';
import { useParams } from 'react-router-dom';
import s from './index.module.css'

export default function ProductInfo() {

    const addToCart = () => dispatch(allCartAction ({ id: +id, title, image, price, description, discont_price }))
    
    const dispatch = useDispatch();

    const{productId} = useParams();

    useEffect(() => {dispatch(getProductInfo(productId))}, [])

    const products_state = useSelector(state => state.allproducts);
    const { id, title, image, price, description, discont_price } = products_state;
      
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
    <div className={s.card_container}>
      <p className={s.title}>{title}</p>
      <div >
        <div className={s.container}>
          <img src={`http://localhost:3333/${image}`} alt={title} />
          <div className={s.right_container}>
            <div className={s.price}>
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
              <button className={s.btn} onClick={addToCart}>To cart</button>
            </div>
            <div className={s.description_container}>
              <p className={s.line}></p>
              <p>Description</p>
              <p>{description}</p>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}
