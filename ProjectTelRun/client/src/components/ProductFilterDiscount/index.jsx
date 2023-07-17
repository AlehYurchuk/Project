import React from 'react'
import { useDispatch } from 'react-redux'
import { allFilterProductDiscountAction } from '../../store/reducers/productReducer';
import s from './index.module.css'

export default function ProductFilterDiscount() {
     const dispatch = useDispatch();

     const filter = event => dispatch(allFilterProductDiscountAction(event.target.checked))

  return (
    <form className={s.discoun_form}>
       <span>Discounted items</span>
       <input name="discount" type="checkbox" onChange={filter} />
    </form>
  )
}
