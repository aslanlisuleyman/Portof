import React from 'react'
import './Card3.css'

const Card3 = ({item}) => {
  return (
    <div className='card'>
      <p>{item.name.slice(0,10)}</p>
      <img src={item.image} alt="" />
      <div className="overlay" >
  <p> <i class="fa-solid fa-basket-shopping"></i></p>
  
  <p> <i class="fa-solid fa-heart" style={{color: "#e00b0b;"}}></i></p>
  <p><i class="fa-solid fa-arrow-right-arrow-left"></i></p>
  <p><i class="fa-solid fa-eye"></i></p>
  
</div>
     
      <div style={{display:"flex",gap:"15px",justifyContent:"center",marginLeft:'8px',fontSize:'15px'}}> <div className='price'> ${ item.unitPrice}</div> <div style={{color:'lightgray'}}><del>$21.20</del></div>  <div className='del'>20% </div></div>
    </div>
  )
}

export default Card3
