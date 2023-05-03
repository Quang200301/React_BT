import React, { Component } from 'react'
import { GetData } from './Dataproduct'
export default class Showproduct extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            arr: GetData(),
            Products: []
        })
    }


    componentDidMount() {
        this.ProductsHome()
    }
    ProductsHome = () => {
        const arr = GetData()
        this.setState({
            Products: this.state.arr.map((item) => ({
                name: item.name,
                image: item.img,
                price: item.price
            }))
        })
    }

    FillterByType = (loai) => {
        this.setState({
            Products: this.state.arr.reduce((rcs, item) => {
                if (item.loai === loai) {
                    rcs.push({
                        name: item.name,
                        image: item.img,
                        price: item.price
                    })
                }
                return rcs
            },[]),
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.ProductsHome}>Home</button>
                <button onClick={()=>this.FillterByType('Ao')}>Áo</button>
                <button onClick={()=>this.FillterByType('Quan')}>Quần</button>
                <button onClick={()=>this.FillterByType('Giay')}>Giày</button>
                <div className='ipro'>
                {this.state.Products.map((item) => (
                    <div>
                        <img src={item.image}></img>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
