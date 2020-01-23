
import React, {useState, useEffect} from 'react';
import Buy_Item from './Buy-items';

export const Buy_Cart = props =>{

  return <div className = 'card-list' >{props.cart.map(item =><Buy_Item listing={item}/>)}</div>;
};







// < Buy_Cart cart ={cart} setCart ={setCart}/>

