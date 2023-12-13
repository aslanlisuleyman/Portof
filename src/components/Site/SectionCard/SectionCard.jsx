import React from 'react'
import './SectionCard.css'

const SectionCard = ({item}) => {
  return (
    <>
    <div className='img' style={{width:"200px",height:"200px",backgroundColor:""}}><img src={item.image} alt="" style={{width:"100px",height:"50px"}} /></div>
        <p>{item?.unitPrice}</p>
        <p>{item?.name.slice(0,10)}</p>
      
    </>
  )
}

export default SectionCard