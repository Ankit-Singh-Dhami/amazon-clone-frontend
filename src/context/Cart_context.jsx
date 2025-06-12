// CartContext.js
import { createContext, useReducer } from "react";
import { addCartToServer, deleteCart, getCart } from "../service/serverData";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  fetchCart: () => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART":
      return action.payload;
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item._id !== action.payload._id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const fetchCart = async () => {
    try {
      const cartItems = await getCart();
      dispatchCart({ type: "SET_CART", payload: cartItems });
    } catch (err) {
      console.error("Error fetching cart:", err.message);
    }
  };

  const addToCart = async (item) => {
    try {
      const addedItem = await addCartToServer(item);
      await fetchCart();
    } catch (err) {
      console.error("Error adding to cart:", err.message);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await deleteCart(itemId);
      await fetchCart();
    } catch (err) {
      console.error("Error removing from cart:", err.message);
    }
  };

  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, fetchCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
