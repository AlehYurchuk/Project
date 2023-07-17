import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDiscountProduct } from '../../async_actions/products_req';
import Products from '../Product';
import s from './index.module.css'

export default function DiscountMain() {

    const dispatch = useDispatch();

    useEffect(()=> {dispatch(getDiscountProduct)}, []);

    const product_state = useSelector(state => state.allproducts)

    const random = (arr, count) =>{
        const shuffled = arr.sort(() => 0.5 - Math.random())
        return shuffled.slice(0,count)
    }

    const product_main = random(product_state, 3);

  return (
    <div className={s.container}>
        <h2>Sale</h2>
        <div className={s.discount_container}>
           {
              product_main.map(el => <Products key={el.id} {...el}/>) 
           }
        </div>
    </div>

  )
}
