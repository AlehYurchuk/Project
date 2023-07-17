import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function Category({id, image, title}) {
  return (
   
      <div className={s.category}>
      <Link to={`/category/${id}`}>
        <img src={`http://localhost:3333/${image}`} />
      </Link>
        <p>{title}</p>
        
      </div>
    
  )
}
