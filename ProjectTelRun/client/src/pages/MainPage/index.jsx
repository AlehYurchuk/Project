import React from 'react'
import Banner from '../../components/Banner'
import DiscountSection from '../../components/DiscountSection'
import CategoriesMain from '../../components/CategoriesMain'
import DiscountMain from '../../components/DiscountMain'


export default function MainPage() {
  return (
    <div>
        <Banner/>        
        <CategoriesMain/>
        <DiscountSection/>
        <DiscountMain/>
      
    </div>
  )
}
