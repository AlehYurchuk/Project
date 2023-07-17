import React from 'react'
import{Link} from 'react-router-dom'
import s from './index.module.css'

export default function Banner() {
  return (
    <div className={s.banner_section}>
        <div className={s.left_div}>
            <h2>Sale</h2>
            <p>New season</p>
            <div className={s.banner_links_wrap}>
              <Link className={s.btn_stock} to='/discount'>Sale</Link>
              
            </div>
        </div>
        <div className={s.right_div}>
            <img src="/media/main_img.png" alt="flowers" />
        </div>
      
    </div>
  )
}
