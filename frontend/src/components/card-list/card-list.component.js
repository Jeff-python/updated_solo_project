import React from 'react';
import './card.styles.css';
import { Card } from '../card/card-component'

export const CardList = props => {
    return <div className = 'card-list' >{props.monsters.map(monster =>(
    <Card key ={monster[0]} monster= {monster}/>))}</div>;
};