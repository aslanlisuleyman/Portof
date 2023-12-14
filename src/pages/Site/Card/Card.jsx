

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, decreaseBasketItem, deleteItems, increaseBtn } from '../../../redux/slices/basketSlice';

const Card = () => {
  const items = useSelector((state) => state.baskets.items);
  const dispatch = useDispatch();
  let basketTotalPrice = 0;

  return (
    <div className='tab' style={{backgroundColor:'white',paddingTop:'100px'}}>
      <table style={{ borderCollapse: 'collapse', width: '100%',backgroundColor:'white' }}>
        <thead style={{height:'50px'}}>
          <tr>
          <th style={tableHeaderStyle}>Image</th>
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
                <td> <img style={{marginLeft:"23%",height:'100px',width:'130px'}} src={item.product.image} alt="" /> </td>
                <td> <p style={{marginLeft:"30%"}}> {item.product.id}</p></td>
                <td> <p style={{marginLeft:'30%'}}> {item.product.name}</p></td>
                <td > <p style={{marginLeft:'35%'}}>{item.product.unitPrice}</p></td>
                <td>
                  <button style={{color:'black',marginLeft:'25%',fontSize:'20px'}} onClick={() => {
                    dispatch(decreaseBasketItem(item));
                  }}>-</button>
                </td>
                <td> <p style={{marginLeft:'37%'}}>{item.count}</p></td>
                <td>
                  <button style={{color:'black',marginLeft:'24%',fontSize:'20px'}} onClick={() => {
                    dispatch(increaseBtn(item));
                  }} >+</button>
                </td>
                <td > <p  style={{marginLeft:'34%'}}>{item.totalPrice}</p></td>
                <td >
                  <button style={{marginLeft:'28%',backgroundColor:'red',height:'35px',borderRadius:'10px'}} onClick={() => {
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
  background: 'white',
  color:'black'
}

export default Card