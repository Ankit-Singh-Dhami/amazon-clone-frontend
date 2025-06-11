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
      return state.filter((item) => item.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, []);

  const addToCart = async (item) => {
    try {
      const addedItem = await addCartToServer(item);
      console.log("the error while adding", addedItem);
      dispatchCart({ type: "ADD_TO_CART", payload: addedItem });
    } catch (err) {
      console.error("Error adding to cart:", err.message);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      await deleteCart(itemId);
      dispatchCart({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
    } catch (err) {
      console.error("Error removing from cart:", err.message);
    }
  };

  const clearCart = () => {
    dispatchCart({ type: "CLEAR_CART" });
  };

  const fetchCart = async () => {
    try {
      const cartItems = await getCart();
      dispatchCart({ type: "SET_CART", payload: cartItems });
    } catch (err) {
      console.error("Error fetching cart:", err.message);
    }
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
