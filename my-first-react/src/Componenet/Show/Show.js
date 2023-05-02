import React, { useState } from 'react';
import { GetData } from '../Data/Data';
function Show(){
  const[product, setproduct]=useState(GetData);
  return(
    <div>
      <div>
        {product.map((item)=>(
          <div>
          <div>{item.name}</div>
          <div><img src={item.img}/></div>
          <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Show;