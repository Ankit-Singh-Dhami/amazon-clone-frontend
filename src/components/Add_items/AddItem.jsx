import { createContext, useContext, useState } from "react";
import style from "../../styles/add_css/AddItem.module.css";
import { CartContext } from "../../context/Cart_context";
import { ItemContext } from "../../context/Create_item_context";

const AddItem = ({ items }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { removeFromItem } = useContext(ItemContext);

  console.log("cart:", cart); // Optional: helps you debug if cart is correct

  return (
    <div className={style.itemsList}>
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className={style.item}>
            <img src={item.image} alt="Item" className={style.itemImage} />
            <p className={style.description}>{item.description}</p>
            <p className={style.price}>${item.price}</p>
            <button
              onClick={() => {
                removeFromItem(item.id); // removes from item list
                removeFromCart(item.id); // also remove from cart
              }}
            >
              Remove
            </button>

            {(cart || []).some(
              (itemInCart) => itemInCart && itemInCart.id === item.id
            ) ? (
              <button
                className={style.addedToCartButton}
                onClick={() => removeFromCart(item.id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  addToCart(item);
                  console.log(item);
                }}
                className={style.addToCartButton}
              >
                Add to Cart
              </button>
            )}
          </div>
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default AddItem;
