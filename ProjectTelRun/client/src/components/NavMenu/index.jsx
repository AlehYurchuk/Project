import React from 'react'
import{Link} from 'react-router-dom'
import s from './index.module.css'

export default function NavMenu() {
  return (
    <div>

    <div className={s.header}>
       <div className={s.left_header}>
        <Link to='/'>
          <img className={s.logo} src="/media/logo.png" alt="logo" />
        </Link>
           <Link 
             className={s.catalog}
             to='/categories'
           >Catalog</Link>
       </div>


       <div className={s.right_header}>
         <Link to='/'>Main Page</Link>
         <Link to='/products'>All products</Link>
         <Link to='/discount'>All sales</Link>
         
       </div>
        <Link to='/cart'>
        <img className={s.cart} src="/media/cart.png" alt="cart" />
        </Link>
    </div>

    </div>

  )
}
