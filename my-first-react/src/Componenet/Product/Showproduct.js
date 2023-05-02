import { GetData } from "./Dataproduct";
import React from "react";
class State extends React.Component {
    constructor(props){
        super(props);
        this.state=({
            arr:GetData(),
            product:[],
            quantity: 0
        })
    }
    componentDidMount(){
        this.productHome();
    }
    productHome = () =>{
        const arr = GetData();
        this.setState({
            product:arr
            .map((item)=>({
                img:item.img,
                name:item.name,
                loai:item.loai,
                price:item.price,
            }))
        });

    };
    productAo =()=>{
        const arr = GetData();
        this.setState({
            product:arr
            .filter((item)=>item.loai==="Ao")
            .map((item)=>({
                img:item.img,
                name:item.name,
                loai:item.loai,
                price:item.price
            }))
        });
    };
    productQuan =()=>{
        const arr = GetData();
        this.setState({
            product:arr
            .filter((item)=>item.loai==="Quan")
            .map((item)=>({
                img:item.img,
                name:item.name,
                loai:item.loai,
                price:item.price
            }))
        });
    };
    productGiay =()=>{
        const arr=GetData();
        this.setState({
            product:arr
            .filter((item)=>item.loai==="Giay")
            .map((item)=>({
                img:item.img,
                name:item.name,
                loai:item.loai,
                price:item.price
            }))
        });
    };
    productbuy=()=>{
        this.setState((prevState)=>({
            quantity:prevState.quantity+1
        }));
    };
    render(){
        return(
            <div>
                <button onClick={this.productHome}>HOME</button>
                <button onClick={this.productAo}>Áo</button>
                <button onClick={this.productQuan}>Quần</button>
                <button onClick={this.productGiay}>Giày</button>
                <div className="ipro">
                    {this.state.product.map((item)=>(
                        <div>
                            <div>
                                <img src={item.img}/>
                            </div>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div><button onClick={this.productbuy}>Buy now</button></div>
                            <p>Quantity: {this.state.quantity}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default State;