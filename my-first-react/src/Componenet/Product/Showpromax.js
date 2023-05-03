import React, { useState, useEffect } from "react";
import { GetData } from "./Dataproduct";

function State() {
  const [arr, setArr] = useState(GetData());
  const [product, setProduct] = useState([]);

  useEffect(() => {
    productHome();
  }, []);

  const productHome = () => {
    setProduct(
      arr.map((item) => ({
        name: item.name,
        img: item.img,
        price: item.price,
      }))
    );
  };

  const FillterByType = (loai) => {
    setProduct(
      arr.reduce((rcs, item) => {
        if (item.loai === loai) {
          rcs.push({
            name: item.name,
            img: item.img,
            price: item.price,
          });
        }
        return rcs;
      }, [])
    );
  };

  return (
    <div>
      <button onClick={productHome}>HOME</button>
      <button onClick={() => FillterByType("Ao")}>AO</button>
      <button onClick={() => FillterByType("Quan")}>QUAN</button>
      <button onClick={() => FillterByType("Giay")}>GIAY</button>
      <div className="ipro">
        {product.map((item) => (
          <div>
            <div>
              <img src={item.img} alt={item.name} />
            </div>
            <div>{item.name}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default State;
