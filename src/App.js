import logo from "./logo.svg";
import "./App.css";
import SearchGroup from "./components/SearchGroup";
import ItemGroup from "./components/ItemGroup";
import ListItems from "./components/ListItems";
import Header from "./components/Header";
import BasketGroup from "./components/BasketGroup";
import { Route, Routes } from "react-router-dom";
import {useState} from 'react'
const startingList = [{name: 'product-1', price: 10}]


function App() {
  const [allItems, setAllItems] = useState([startingList])
  const [isLoading, setIsLoading ] = useState(true)
  const [basketItems, setBasketItems] = useState([])
  const [user, setUser] = useState({})
  const [searchTerm, setSearchTerm ] = useState("")
  return (
    <div className="App">
      <Header allItems={allItems} basketItems={basketItems} user={user} />
      <Routes>
        <Route
          path="/items"
          element={
            <div>
              <SearchGroup searchTerm={searchTerm} setAllItems={setAllItems} setSearchTerm={setSearchTerm} allItems={allItems} />
              <ListItems searchTerm={searchTerm} setAllItems={setAllItems} setSearchTerm={setSearchTerm} allItems={allItems} basketItems={basketItems} setBasketItems={ setBasketItems} />
            </div>
          }
        />

        <Route path="/items/:item_id" element={ < ItemGroup searchTerm = {searchTerm} setAllItems={setAllItems} setSearchTerm={setSearchTerm} allItems={allItems} basketItems={basketItems} setBasketItems={ setBasketItems}/>} />
        <Route path="/users/:username/basket" element={<BasketGroup />} />
        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
