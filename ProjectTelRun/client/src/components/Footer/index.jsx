import React from 'react'
import s from './index.module.css'

export default function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.foot}>
            <div className={s.group_l}>
               <p className={s.contact}>Contact</p>
               <p className={s.number}>+49 999 999 99 99</p>
               <div className={s.social}>
                <a className={s.social_inst} href="https://www.instagram.com"><img src="/media/insta.png" alt="" /></a>
                <a href="https://www.whatsapp.com/?lang=pl"><img src="/media/whatsapp.png" alt="" /></a>
               </div>
            </div>
            <div className={s.groop_r}>
                <p className={s.address}>Address</p>
                <p className={s.big_address}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
                <div className={s.time_text}>
                  <p className={s.span_text}>Working Hours:</p>
                  <p className={s.span_text_stong}>24 hours a day</p>
                </div>
             </div>
        </div>
        <img src="/media/maps.png" alt="maps" />
    </div>
  )
}