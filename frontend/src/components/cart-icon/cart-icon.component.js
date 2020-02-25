import React from 'react';

// import { connect } from 'react-redux';


import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = (props) => (
    <div className = 'cart-icon'>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>{props.cart.length}</span>
        <span className = 'item-count'></span>
    </div>
);

// export function CartButton(){
//  return (<button>Add to Cart</button>)
// } ;

// cartButton();



export default CartIcon;