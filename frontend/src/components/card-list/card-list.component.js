import React from 'react';
import './card.styles.css';
import { Card } from '../card/card-component'
import  Add  from '../Add'
// import './collection-preview.styles.scss';

export const CardList = props => {
    return <div className = 'card-list' >{props.monsters.map(monster =>(
    <Card key ={monster[0]} monster= {monster}/>))}</div>;
};

 