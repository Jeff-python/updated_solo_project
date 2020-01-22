import React from 'react';

// import './collection-item.styles.scss';

const CollectionItem = props => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(/resize_pictures/picture${props.monster[12]})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{props.monster[1]}</span>
      <span className='price'>{props.monster[2]}</span>
    </div>
  </div>
);

export default CollectionItem;