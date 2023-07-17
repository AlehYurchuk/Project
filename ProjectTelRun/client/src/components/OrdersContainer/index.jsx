import React from 'react'
import { useSelector } from 'react-redux'
import { getOrder } from '../../async_actions/order_req'
import {useForm} from 'react-hook-form'
import s from './index.module.css'

export default function OrdersContainer({fullPrice}) {

    const cart_state = useSelector(state => state.allcart)
    const total = (cart_state.reduce((acc, {fullPrice,count}) => acc + fullPrice * count, 0)).toFixed(2)    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({mode: 'onBlur' });

    const submit = (data) => {
        const requestData = {
          id: Date.now(),
          phoneNumber: data.phone
        };

        getOrder(requestData)
        .then(() => {
          reset();
        });  
      reset();
    };

    const phone = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

    const phoneRegister = register('phone', {
        required: '*Phone is a requared',
        pattern: {
          value: phone,
          message: 'please enter a phone number'
        }
      });
  return (

    <div className={s.orders_container}>
        <p className={s.order_text}>Order Details</p>
        <div className={s.total_container}>
            <p className={s.total_text}>Total</p>
            <p className={s.total}>{total}<small>$</small></p>
        </div>
        <form onSubmit={handleSubmit(submit)}  className={s.form}>
            <input type="text" placeholder='Phone number' name='phone' {...phoneRegister} />
            {errors.phone && <p className={s.error}>{errors.phone?.message}</p>}
            <button>Order</button>
        </form>
    </div>
  )
}
