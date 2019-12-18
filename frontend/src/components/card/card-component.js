import React from 'react';
import './card.style.css'

export const Card = props => (

    <div className ={'card-container'} key={props.monster[0]}>
        
        <img alt ="monster" src ={`/picture/${props.monster[0]}.png`} />
        {/* <img alt ="monster" src ={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} /> */}
        {/* <h2>{props.monster.description}</h2>
        <p>{props.monster.retailprice}</p> */}

        <h2>{props.monster[1]}</h2>
        <p>{props.monster[2]}</p>

    </div>
)