import React from "react";
import pic from "../img/pic.jpg";
import Counter from "./Counter";
class CardProduct extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src={pic} alt="" />
        </div>
        <p className="product-title">Daging Ayam Rasa Babi</p>
        <p className="product-price">Rp. 50,000</p>
        <Counter />
      </div>
    );
  }
}

export default CardProduct;
