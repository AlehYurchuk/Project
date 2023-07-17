import React from 'react'
import s from './index.module.css'
import Forms from '../Forms'




export default function DiscountSection() {
  return (
    <div className={s.discount_section}>
        <div className={s.dwarf_section}>
            <img className={s.dwarf} src="/media/dwarf.png" alt="" />
        </div>


        <div className={s.features}>
            <span className={s.features_text}><strong className={s.features_text_strong}>5% off</strong>on the first order</span>
            <Forms/>
         </div>
      
    </div>
  )
}
