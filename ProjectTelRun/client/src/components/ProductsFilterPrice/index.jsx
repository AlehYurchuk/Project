import React from 'react'
import { useDispatch } from 'react-redux'
import { allFilterProductPriceAction } from '../../store/reducers/productReducer'
import s from './index.module.css'

export default function ProductsFilterPrice() {
    const dispatch = useDispatch();

    const filter_price = event => {
        event.preventDefault();
        const { min, max } = event.target;
        const max_value = max.value || Infinity;
        const min_value = min.value || 0;
        dispatch(allFilterProductPriceAction({ min_value, max_value}));
    }

  return (
    <form className={s.form_price}>
      <label htmlFor='price'>Price</label>
      <input type="text" name="min" placeholder="from" onChange={filter_price} />
      <input type="text" name="max" placeholder="to" onChange={filter_price} />
    </form>
  )
}
