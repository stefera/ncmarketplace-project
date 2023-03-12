// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "../App.css";
import { fetchAllItems } from "../utils";
import ItemCard from "./ItemCard";

const ListItems = ({
  setAllItems,
  setSearchTerm,
  allItems,
  basketItems,
  setBasketItems,
}) => {
  const resolveReset = () => {
    return fetchAllItems().then((data) => {
      return setAllItems(data);
    });
  };
  return (
    <div>
      <p>List of all items</p>
      <ul id="itemList">
        {!allItems.length ? (
          <div>
            <p className="centreText">Sorry, no items match your search.</p>
            <p onClick={resolveReset}>
              <span className="linkText">Click here to reset</span>
            </p>
          </div>
        ) : (
          allItems.map((item) => {
            return (
              <li id="itemCard" key={item.item_id}>
                <ItemCard
                  item={item}
                  basketItems={basketItems}
                  setBasketItems={setBasketItems}
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ListItems;
