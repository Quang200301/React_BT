import { useEffect, useState } from "react";
import { GetData } from "./Dataproduct";

function Pro(){
  const [arr,setarr]=useState([]);
  const [product,setproduct]=useState([]);

  useEffect(()=>{
    setarr(GetData());
    productHome();
  },[]);
  const productHome=()=>{
    const arr =GetData();
    setproduct(
      arr.map((item)=>({
        name:item.name,
        img:item.img,
        price:item.price,
      }))
    )
  }
  const FillterByType=(loai)=>{
    setproduct(
      arr.reduce((rsc,item)=>{
        if(item.loai===loai){
          rsc.push({
            name:item.name,
            img:item.img,
            price:item.price,
          })
        } return rsc
      },[])
    )
  }

  return(
    <div>
      <button onClick={productHome}>Home</button>
      <button onClick={()=>FillterByType('Ao')}>Áo</button>
      <button onClick={()=>FillterByType('Quan')}>Quần</button>
      <button onClick={()=>FillterByType('Giay')}>Giày</button>
      <button onClick={()=>FillterByType('Vong')}>Vòng</button>
      <div className="ipro">
        {product.map((item)=>(
          <div>
            <div><img src={item.img}/></div>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Pro;
