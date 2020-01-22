import React from 'react';
import './card.style.css';
import Button from '@material-ui/core/Button';
import cartButton from '../cart-icon/cart-icon.component';
// import './collection-item.styles.scss';

export const Card = props => (

    <div className ='card-container' key={props.monster[0]}>
        
        <img alt ="image" src ={`/resize_pictures/picture${props.monster[0]}.jpg`} />
        {/* <img alt ="monster" src ={props.monster[12]} /> */}

        {/* <img alt ="monster" src ={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} /> */}
        {/* <h2>{props.monster.description}</h2>
        <p>{props.monster.retailprice}</p> */}
    <div className='collection-footer'>
        <span className='name'>{props.monster[1]}</span>
        <span className='price'>${props.monster[2]}</span>
    </div >
    <div className ='cart-button'>
        <cartButton/>
       {/* <Button >Add to cart</Button> */}
       </div>
    </div>
)