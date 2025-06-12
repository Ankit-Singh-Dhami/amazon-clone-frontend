import { useContext } from "react";
import style from "../../styles/add_css/AddItem.module.css";
import { CartContext } from "../../context/Cart_context";
import { ItemContext } from "../../context/Create_item_context";

const AddItem = ({ items }) => {
  const userData = localStorage.getItem("amazonUser");
  const user = userData ? JSON.parse(userData) : null;
  const role = user ? user.role : null;

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { removeFromItem } = useContext(ItemContext);

  return (
    <div className={style.itemsList}>
      {Array.isArray(items) && items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className={style.item}>
            <img src={item.image} alt="Item" className={style.itemImage} />
            <p className={style.description}>{item.description}</p>
            <p className={style.price}>${item.price}</p>

            {/* Only show this button if the user is a host */}
            {role === "host" && (
              <button
                onClick={() => {
                  removeFromItem(item._id);
                  removeFromCart(item._id);
                }}
              >
                Remove
              </button>
            )}

            {/* Add to Cart / Remove from Cart button */}
            {cart.some(
              (itemInCart) => itemInCart && itemInCart._id === item._id
            ) ? (
              <button
                className={style.addedToCartButton}
                onClick={() => removeFromCart(item._id)}
              >
                Remove from Cart
              </button>
            ) : (
              <button
                onClick={() => addToCart(item)}
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
