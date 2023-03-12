// const axios = require("axios");
import axios from "axios";

// export const fetchAllItems = () => {
//   return fetch("https://nc-marketplace-sem-4.onrender.com/api/items")
//     .then((response) => {
//       return response.json();
//     })
//     .then(({ items }) => {
//       console.log(items, "items");
//       return items;
//     });
// };

export const fetchAllItems = () => {
  return axios
    .get("https://nc-marketplace-sem-4.onrender.com/api/items")
    .then(({ data }) => {
      //   console.log(data.items);
      return data.items;
    })
    .catch((error) => console.log(error));
};

export const fetchItemByID = (item_id) => {
  return axios
    .get(`https://nc-marketplace-sem-4.onrender.com/api/items/${item_id}`)
    .then(({ data }) => {
      // console.log(data.item, "in utils");
      return data.item;
    })
    .catch((error) => console.log(error));
};

export const fetchfilteredItems = (searchTerm) => {
  return axios
    .get(
      `https://nc-marketplace-sem-4.onrender.com/api/items?search===${searchTerm}`
    )
    .then(({ data }) => {
      console.log(data, "in utils, filteredList");
      return data.items;
    })
    .catch((error) => console.log(error));
};
