import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const {items}=useSelector(state=>state.wishlist)
  return (
    <div>
      {
        items.map((item,index)=>{
          return(
            <div style={{marginTop:'20px'}} key={index}>
              <p>{item.name}</p>
              <p>{item.unitPrice}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Wishlist