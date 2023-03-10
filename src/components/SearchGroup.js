import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import { fetchfilteredItems } from "../utils";

const SearchGroup = ({
  searchTerm,
  setSearchTerm,
  allItems,
  setAllItems,
  isLoading,
  setIsLoading,
}) => {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const resolveSubmit = (event) => {
    event.preventDefault();
    fetchfilteredItems(newSearchTerm).then((result) => {
      setAllItems(result);
    })
  };

  return (
    <div>
      <p>SearchGroup</p>
      <form classList="searchForm" onSubmit={resolveSubmit}>
        <label htmlFor="mainSearchInput"></label>
        <input
          value={newSearchTerm}
          id="mainSearchInput"
          onChange={(event) => {
            
            setNewSearchTerm(event.target.value);
              console.log(newSearchTerm);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchGroup;
