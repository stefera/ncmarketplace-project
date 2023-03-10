import { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import "../App.css";
import { fetchItemByID } from "../utils";

// searchTerm={searchTerm}
// setAllItems={setAllItems}
// setSearchTerm={setSearchTerm}
// allItems={allItems}
// basketItems={basketItems}
// setBasketItems={setBasketItems}

const ItemGroup = ({
  searchTerm,
  setAllItems,
  setSearchTerm,
  allItems,
  basketItems,
  setBasketItems,
  item,
  setItem,
}) => {
  const { item_id } = useParams();

  useEffect(() => {
    fetchItemByID(item_id).then((item) => {
      setItem(item);
      console.log(item, "in ItemGroup");
    });
  }, [item_id]);

  const resolveClick = () => {};

  return (
    <section className="itemPageHolder">
      <img
        className="itemGroupPic"
        src={item.img_url}
        alt={item.item_name}
      ></img>
      <ul className="internalListItem">
        <h2>{item.item_name}</h2>
        <p>{item.description}</p>
        <p>£{item.price}</p>
        <button className="primaryButton" onClick={resolveClick}>
          {" "}
          Add to basket
        </button>
      </ul>
    </section>
  );
};

export default ItemGroup;
