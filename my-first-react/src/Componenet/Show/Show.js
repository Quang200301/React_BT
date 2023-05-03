import React, { useState } from 'react';
import { GetData } from '../Data/Data';
function Show(){
  const[product, setproduct]=useState(GetData);
  return(
    <div>
      <div>
        {product.map(item=>(
          <Shows
            name = {item.name}
            img = {item.img}
            price = {item.price}
          />
        ))}
      </div>
    </div>
  )
}

function Shows(props) {
  return (
  <div>
    <h3>{props.name}</h3>
    <div><img src={props.img} alt='anh.tb'/></div>
    <div>{props.price}</div>
  </div>
  )
}
export default Show;