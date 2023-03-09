import logo from "./logo.svg";
import "./App.css";
import SearchGroup from "./components/SearchGroup";
import ItemGroup from "./components/ItemGroup";
import ListItems from "./components/ListItems";
import Header from "./components/Header";
import BasketGroup from "./components/BasketGroup";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllItems } from "./utils";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [basketItems, setBasketItems] = useState([]);
  const [user, setUser] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAllItems().then((startingList) => {
      console.log(startingList, "startingList");
      return setAllItems(startingList);
    });
  }, []);

  return (
    <div className="App">
      <Header allItems={allItems} basketItems={basketItems} user={user} />
      <Routes>
        <Route
          path="/items"
          element={
            <div>
              <SearchGroup
                searchTerm={searchTerm}
                setAllItems={setAllItems}
                setSearchTerm={setSearchTerm}
                allItems={allItems}
              />
              <ListItems
                searchTerm={searchTerm}
                setAllItems={setAllItems}
                setSearchTerm={setSearchTerm}
                allItems={allItems}
                basketItems={basketItems}
                setBasketItems={setBasketItems}
              />
            </div>
          }
        />
        <Route
          path="/items/:item_id"
          element={
            <ItemGroup
              searchTerm={searchTerm}
              setAllItems={setAllItems}
              setSearchTerm={setSearchTerm}
              allItems={allItems}
              basketItems={basketItems}
              setBasketItems={setBasketItems}
            />
          }
        />
        <Route
          path="/users/:username/basket"
          element={
            <BasketGroup
              allItems={allItems}
              setAllItems={setAllItems}
              basketItems={basketItems}
              setBasketItems={setBasketItems}
              user={user}
              setUser={setUser}
            />
          }
        />

        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
