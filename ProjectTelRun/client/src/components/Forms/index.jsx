import React from 'react'
import { useForm } from 'react-hook-form'
import { getFormDiscount } from '../../async_actions/formDiscount_req'
import s from './index.module.css'


export default function Forms() {

  const submit =(data) => {
    getFormDiscount(data, reset);
    reset();
  }

  const { register, handleSubmit, formState: { errors }, reset } = useForm({mode: 'onBlur'});

  const phone = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/;

  const phoneRegister = register('phone', {
    required: '*Phone is a requared',
    pattern: {
      value: phone,
      message: 'please enter a phone number'
    }
  });

  return (
    <form className={s.form}
          onSubmit={handleSubmit(submit)}
    >
    <input className={s.form_input}  placeholder='+49' name="phone" type="tel"  {...phoneRegister} />
    {errors.phone && <p className={s.error}>{errors.phone?.message}</p>}
    <button className={s.form_btn}>Get a discount</button>
   </form>
  )
}
