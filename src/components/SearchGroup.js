import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";

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
  };
  console.log(newSearchTerm);
  return (
    <div>
      <p>SearchGroup</p>
      <form classList="searchForm" onSubmit={resolveSubmit}>
        <label htmlFor="mainSearchInput"></label>
        <input
          value={searchTerm}
          id="mainSearchInput"
          onChange={(event) => {
            setNewSearchTerm(event.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchGroup;
