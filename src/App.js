import logo from "./logo.svg";
import "./App.css";
import SearchGroup from "./components/SearchGroup";
import ItemGroup from "./components/ItemGroup";
import ListItems from "./components/ListItems";
import Header from "./components/Header";
import BasketGroup from "./components/BasketGroup";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/items"
          element={
            <div>
              <SearchGroup /> <ListItems />
            </div>
          }
        />

        <Route path="/items/:item_id" element={<ItemGroup />} />
        <Route path="/users/:username/basket" element={<BasketGroup />} />
        {/* <Route path="/items/*" element={<div>Item does not exist</div>} /> */}
        <Route path="/*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
