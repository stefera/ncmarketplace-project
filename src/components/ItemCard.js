import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";

const ItemCard = (props) => {
  const { item, basketItems, setBasketItems } = props;

  const resolveClick = () => {};
  const resolveClickTwo = () => {};

  return (
    <div id="itemCard">
        <img
            className="itemPicSmall"
            src={item.img_url}
            alt={item.item_name}
          ></img>
      <ul className="internalListSmall"> 
        <li className = 'liSub'> <h4>{item.item_name}</h4> </li> 
      
      
      

        <li className = 'liSub'>
          <p id="smallText">£{item.price}</p>
        </li>
        <li className = 'liSub'>
          <button className="primaryButton" onClick={resolveClick}>
            {" "}
            Add to basket
          </button>
        </li>
        {/* <li>
          <button className="secondaryButton" onClick={resolveClickTwo}>
            {" "}
            View
          </button>
        </li> */}
      </ul>
    </div>
  );
};

export default ItemCard;
