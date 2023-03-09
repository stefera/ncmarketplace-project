// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import "../App.css";
import ItemCard from "./ItemCard";

const ListItems = (props) => {
  const { setAllItems, setSearchTerm, allItems, basketItems, setBasketItems } =
    props;

  return (
    <div>
      <p>List of all items</p>
      <ul id="itemList">
        {allItems.map((item) => {
          return (
            <li key={item.item_id}>
              <ItemCard
                item={item}
                basketItems={basketItems}
                setBasketItems={setBasketItems}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItems;
