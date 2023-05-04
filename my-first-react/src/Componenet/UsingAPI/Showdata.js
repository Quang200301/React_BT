import { useEffect, useState } from "react";
import axios from "axios";
function White(){
    const [product,setproduct]=useState([]);
    useEffect(()=>{
        GetData();
    },[]);
    const GetData=async()=>{
        try{
            const product=await axios.get('https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts')
            setproduct(product.data)
        }catch(error){
            console.log(error);
        }
    }
    return(
        <div className="ipro">
            {product.map((item)=>(
                <div>
                    <div><img src={item.avatar}/></div>
                    <div>{item.name}</div>
                    <div>{item.note}</div>
                </div>
            ))}
        </div>
    )
   
}
export default White;