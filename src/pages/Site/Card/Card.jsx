// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addBasket,decreaseBasketItem,deleteItems } from '../../../redux/slices/basketSlice'

// const Card = () => {
//   const items=useSelector(state=>state.baskets.items)
//   const dispatch=useDispatch()
//   let basketTotalPrice=0
//   return (
//     <div >
//       {
//         <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">Decrease</th>
//             <th scope="col">Count</th>
//             <th scope="col">Increase</th>
//             <th scope="col">Total Price</th>
//             <th scope="col">Delete</th>
//           </tr>
//         </thead>



//         <tbody>

//           {
//             items.map((item,index)=>{
//               basketTotalPrice+=item.basketTotalPrice
//               return(
//                 <tr key={index}>
//             <th scope="row">{item.product.id}</th>
//             <td>{item.product.name}</td>
//             <td>{item.price}</td>
//             <td><button onClick={()=>{
//               dispatch(decreaseBasketItem(item))
//             }}>-</button></td>
//             <td>{item.count}</td>
//             <td><button onClick={()=>{
//               dispatch(addBasket(item.product))
//             }}>+</button></td>
//             <td>{item.totalPrice}</td>
//             <td><button onClick={()=>{
//               dispatch(deleteItems(item))
//             }}>delete</button></td>
//           </tr>

//               )
//             })
//           }
//         </tbody>
//       </table>
//       }


//     </div>
//   )
// }

// export default Card

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, decreaseBasketItem, deleteItems, increaseBtn } from '../../../redux/slices/basketSlice';

const Card = () => {
  const items = useSelector((state) => state.baskets.items);
  const dispatch = useDispatch();
  let basketTotalPrice = 0;

  return (
    <div>
      <table style={{ borderCollapse: 'collapse', width: '100%',marginTop:"100px" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Id</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Decrease</th>
            <th style={tableHeaderStyle}>Count</th>
            <th style={tableHeaderStyle}>Increase</th>
            <th style={tableHeaderStyle}>Total Price</th>
            <th style={tableHeaderStyle}>Delete</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            basketTotalPrice += item.basketTotalPrice;
            return (
              <tr key={index}>
                <td> <p style={{marginLeft:"30%"}}> {item.product.id}</p></td>
                <td> <p style={{marginLeft:'30%'}}> {item.product.name}</p></td>
                <td > <p style={{marginLeft:'35%'}}>{item.product.unitPrice}</p></td>
                <td>
                  <button style={{color:'black',marginLeft:'28%'}} onClick={() => {
                    dispatch(decreaseBasketItem(item));
                  }}>-</button>
                </td>
                <td> <p style={{marginLeft:'37%'}}>{item.count}</p></td>
                <td>
                  <button style={{color:'black',marginLeft:'28%'}} onClick={() => {
                    dispatch(increaseBtn(item));
                  }} >+</button>
                </td>
                <td > <p  style={{marginLeft:'34%'}}>{item.totalPrice}</p></td>
                <td >
                  <button style={{marginLeft:'28%',backgroundColor:'red',height:'35px'}} onClick={() => {
                    dispatch(deleteItems(item));
                  }} >Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
{/* <h2>Total:{basketTotalPrice}</h2> */}
const tableHeaderStyle = {
  background: 'black',
  color:'white'
}

export default Card