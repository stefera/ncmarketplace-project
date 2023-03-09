import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import ItemCard from "./ItemCard";

const ListItems = () => {
  return (
    <div>
      <p>List of all items</p>
      <ItemCard />
    </div>
  );
};

export default ListItems;
