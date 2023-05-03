import { Component, useState } from "react";
import { GetData } from "./Dataproduct";

function State(){
    const[product,setproduct]=useState([]);
    const productHome=()=>{
        const arr = GetData();
        setproduct(
            arr.map((item)=>({
            name:item.name,
            img:item.img,
            price:item.price
        }))
        );
    };
    const productAo=()=>{
        const arr = GetData();
        setproduct(
            arr.filter((item)=>item.loai==="Ao").map((item)=>({
            name:item.name,
            img:item.img,
            price:item.price
        }))
        );
    };
    const productQuan=()=>{
        const arr = GetData();
        setproduct(
            arr.filter((item)=>item.loai==="Quan").map((item)=>({
            name:item.name,
            img:item.img,
            price:item.price
        }))
        );
    };
    const productGiay=()=>{
        const arr = GetData();
        setproduct(
            arr.filter((item)=>item.loai==="Giay").map((item)=>({
            name:item.name,
            img:item.img,
            price:item.price
        }))
        );
    };
    return(
        <div>
            <button onClick={productHome}>HOME</button>
            <button onClick={productAo}>AO</button>
            <button onClick={productQuan}>QUAN</button>
            <button onClick={productGiay}>GIAY</button>
            <div>
                <div>
                    {product.map((item)=>(
                        <div>
                        <div><img src = {item.img}/></div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
export default State;