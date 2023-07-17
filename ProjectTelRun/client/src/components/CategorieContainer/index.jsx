import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCategories } from '../../async_actions/categories_req';
import Category from '../Сategories';
import s from './index.module.css'


export default function CategoriesContainer() {
    
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getCategories)}, []);

    const categories_state = useSelector(state => state.categories)
  return (
    <div >
      <h2 className={s.h2}>Categories</h2>
    <div className={s.categories_container}>
      {
        categories_state.map(el => <Category {...el} key={el.id} />)
      }
    </div>
    </div>
  )
}
