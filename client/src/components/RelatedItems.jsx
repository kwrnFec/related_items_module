import React from 'react';
import ItemCard from './ItemCard.jsx';

const MyCarousel = (props) => {
  if (props.itemList.length > 0) {
    return props.itemList.map((retailItem) => {
      return (
        <div>
          <ItemCard item={retailItem}/>
        </div>
      )
    })
  } else {
    return <div>Hello From The Boot Screen!</div>
  }
}

export default MyCarousel;