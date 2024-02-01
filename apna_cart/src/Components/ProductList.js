import React from 'react'
import product from './ProductList'
export default function ProductList (props) {
    
  return (
  props.ProductList.map((Product,i)=>{
    return <Product product={product} key={i}/>
  })
  )
  
}