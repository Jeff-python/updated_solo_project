import React from 'react';
import './card.style.css';
import Button from '@material-ui/core/Button';
import CartButton from '../cart-icon/cart-icon.component';

// import './collection-item.styles.scss';

export const Card = props => {

    return(
    <div className ='card-container' key={props.monster[0]}>
        
        {/* <img alt ="image" src ={`/resize_pictures/picture${props.monster[0]}.jpg`} /> */}
        <div>
            <img alt ="monster" src ={props.monster[12]} />

        {/* <img alt ="monster" src ={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} /> */}
        {/* <h2>{props.monster.description}</h2>
        <p>{props.monster.retailprice}</p> */}
            <div className='collection-footer'>
                <span className='name'>{props.monster[1]}</span>
                <span className='price'>${props.monster[4]}</span> 
            </div >
        </div>
        <div class="percent-button">
            <div className='collection'>
                <span className='percent'>{props.monster[2]} %</span>
            </div> 

            <div className ='cart-button'>
                {/* <CartButton/> */}
                {/* const list =[]  */}
                {/* <Button onClick ={()=>list.push(props.monster[0])} >Add to cart</Button>  */}
                {/* console.log(list) */}
                <Button onClick= {e => props.addToCart(props.monster)}>Add to cart</Button>
            </div>
        </div>
    </div>
)}