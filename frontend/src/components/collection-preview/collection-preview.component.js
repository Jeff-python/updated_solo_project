import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

// import './collection-preview.styles.scss';

const CollectionPreview = props => {
    return <div className = 'collection-preview' >{props.monsters.map(monster =>(
        <CollectionItem key ={monster[0]} monster= {monster}/>))}</div>;

};

export default CollectionPreview;