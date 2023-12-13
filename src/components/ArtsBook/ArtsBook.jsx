import React from 'react'
import './ArtsBook.css'
const ArtsBook = () => {
  return (
    <div style={{marginTop:'30px',position:'relative'}}>
        <div></div>



        <div className='arts'>
           <img style={{width:'100%',height:'320px'}} src="https://htmldemo.net/pustok/pustok/image/bg-images/promo-banner-full.jpg" alt="" />
           <div style={{position:'absolute',top:"11%",marginLeft:"300px",textAlign:'center',display:'flex',flexDirection:'column',gap:"13px"}}>  
                    <h2 style={{fontSize:'55px',color:'white'}}> <i>I Love This Idea!</i></h2>
                <p  style={{fontSize:'35px',color:'white'}}> <i>Cover up front of book and leave <br /> summary</i> </p>
                <button className='artb'  style={{marginLeft:'130px',width:'250px',height:'55px',borderRadius:'4px',color:'black'}}>$78.09 - Learn More</button>
                </div>
        </div>
    </div>
  )
}

export default ArtsBook