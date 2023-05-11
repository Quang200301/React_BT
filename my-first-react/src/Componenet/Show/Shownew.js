import { useState } from "react";
import { GetData } from "../Data/Data";

function Showtt(){
    const [product,setproduct]=useState(GetData());
    const [price,setprice]=useState();
    const [quantyti,setquantyti]=useState(1);
  
    return(
        <table border="1px" >
            <thead>
                <tr>
                    <th>name</th>
                    <th>img</th>
                    <th>quantity</th>
                    <th>price</th>
                </tr>
            </thead>
            {product.map((item)=>(
            <tbody>
                <tr>
                    <td><img src={item.img}/></td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{price}</td>
                </tr>
            </tbody>
           
            ))}
        </table>
    )
}
export default Showtt;