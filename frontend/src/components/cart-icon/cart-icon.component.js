import React from 'react';

// import { connect } from 'react-redux';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className = 'cart-icon'>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>0</span>
    </div>
);

export function cartButton(){
    
 return <button>Add to Cart</button>
} ;

cartButton();
    


export default CartIcon;