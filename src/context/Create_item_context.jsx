import { createContext, useReducer } from "react";
import { addProduct, getProducts, deleteProduct } from "../service/serverData";

const ItemContext = createContext({
  items: [],
  addToItem: () => {},
  removeFromItem: () => {},
  fetchItems: () => {}, // new function to fetch all products
});

const itemReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return Array.isArray(action.payload) ? action.payload : [];

    case "ADD_TO_ITEM":
      return [...state, action.payload];
    case "REMOVE_FROM_ITEM":
      return state.filter((item) => item._id !== action.payload.id); // use _id if backend sends Mongo _id
    default:
      return state;
  }
};

const ItemProvider = ({ children }) => {
  const [items, dispatchItem] = useReducer(itemReducer, []);

  // Add product to backend + update state
  const addToItem = async (item) => {
    try {
      const addedItem = await addProduct(item);
      dispatchItem({ type: "ADD_TO_ITEM", payload: addedItem });
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  const fetchItems = async () => {
    try {
      const products = await getProducts();
      console.log("Fetched response:", products); // now this will show an array

      if (Array.isArray(products)) {
        dispatchItem({ type: "SET_ITEMS", payload: products });
      } else {
        console.warn("Fetched products are not valid:", products);
        dispatchItem({ type: "SET_ITEMS", payload: [] });
      }
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  // Delete product from backend + update state
  const removeFromItem = async (productId) => {
    try {
      await deleteProduct(productId);
      dispatchItem({ type: "REMOVE_FROM_ITEM", payload: { id: productId } });
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  return (
    <ItemContext.Provider
      value={{ items, addToItem, removeFromItem, fetchItems }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export { ItemContext, ItemProvider };
