import { GetData } from "./Dataproduct";
import React from "react";
class State extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr:GetData(),
            product:[]
        }
    }
    componentDidMount(){
        this.productHome()
    }
    productHome=()=>{
        const arr = GetData();
        this.setState({
            product:this.state.arr.map((item)=>({
                name:item.name,
                img:item.img,
                price:item.price
            }))
        })
    }
    FillterByType=(loai)=>{
        this.setState({
            product:this.state.arr.reduce((rcs,item)=>{
                if(item.loai===loai){
                    rcs.push({
                        name:item.name,
                        img:item.img,
                        price:item.price
                    })
                }
                return rcs
            },[]),
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.productHome}>HOME</button>
                <button onClick={()=>this.FillterByType('Ao')}>AO</button>
                <button onClick={()=>this.FillterByType('Quan')}>QUAN</button>
                <button onClick={()=>this.FillterByType('Giay')}>GIAY</button>
                <div className="ipro">
                    {this.state.product.map((item)=>(
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
}
export default State;