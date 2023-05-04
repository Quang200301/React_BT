
import { useEffect, useState } from "react";
import axios from 'axios';
function App(){
    const [listProduct,setListProduct]=useState([])
    useEffect(()=>{
        GetData();
    },[]);
   const GetData=async()=>{
    try {
        const product=await axios.get('https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts')
        setListProduct(product.data)
    } catch (error) {
        console.log(error)
    }
   }
    return(
        <div className="ipro">
            {listProduct.map((item)=>(
                <div>
                    <img src={item.avatar}></img>
                    <h2>{item.name}</h2>
                    <div>{item.note}</div>
                </div>
            ))}
        </div>
    )
}
export default App;