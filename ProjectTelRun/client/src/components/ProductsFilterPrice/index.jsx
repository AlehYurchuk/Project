import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { allFilterProductPriceAction } from '../../store/reducers/productReducer'
import s from './index.module.css'

export default function ProductsFilterPrice() {
    const dispatch = useDispatch();

    const [filterParams, setFilterParams] = useState({min: 0, max: Infinity})
    const maxHandler = event => {
      const max_value = +event.target.value || Infinity;
      const values = { ...filterParams, max: max_value};
      setFilterParams(values);
      dispatch(allFilterProductPriceAction(values));
    }

    const minHandler = event => {
      const min_value = +event.target.value;
      const values = { ...filterParams, min: min_value};
      setFilterParams(values);
      dispatch(allFilterProductPriceAction(values));
    }

  return (
    <form className={s.form_price}>
      <label htmlFor='price'>Price</label>
      <input type="text" name="min" placeholder="from" onChange={minHandler} />
      <input type="text" name="max" placeholder="to" onChange={minHandler} />
    </form>
  )
}
