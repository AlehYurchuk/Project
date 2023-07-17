import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCategories } from '../../async_actions/categories_req'
import Category from '../Сategories';
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoriesMain() {
    
    const dispatch = useDispatch();

    useEffect(() => {dispatch(getCategories)}, []);

    const categories_state = useSelector(state => state.categories)
  return (
    <div className={s.categories_main}>
        <div className={s.catalog}>
          <h2 className={s.catalog_text}>Catalog</h2>
          <Link className={s.catalog_btn} to='/categories'>All categories</Link>
        </div>
        <div className={s.categories_container}>
           {
              categories_state.slice(1).map(el => <Category{...el} key={el.id}/>)
           }
        </div>
    </div>
  )
}
