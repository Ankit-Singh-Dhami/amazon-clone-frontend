import { useContext, useState } from "react";
import style from "../../styles/cart_css/cart.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cart_context";

const Cart = ({ items }) => {
  console.log(items);

  const { removeFromCart } = useContext(CartContext);

  const initialQuantities = items.map(() => 1);
  const [quantities, setQuantities] = useState(initialQuantities);

  const handleDecrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? Math.max(qty - 1, 1) : qty))
    );
  };

  const handleIncrease = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((qty, i) => (i === index ? qty + 1 : qty))
    );
  };

  const totalItems = quantities.reduce((sum, qty) => sum + qty, 0);
  const totalPrice = items.reduce(
    (sum, item, index) => sum + item.price * quantities[index],
    0
  );

  const userData = localStorage.getItem("amazonUser");
  const user = userData ? JSON.parse(userData) : null;
  const role = user ? user.role : null;

  return (
    <div className={style.cart}>
      <div className={style.new_cart_items}>
        <h1 className={style.cart_h1}>Shopping Cart</h1>
        <div className={style.cart_items}>
          {role === "user" || role === "host" ? (
            items.map((item, index) => (
              <div key={index} className={style.cart_item}>
                <div className={style.img_div}>
                  <img src={item.image} alt="" className={style.cart_img} />
                </div>

                <div className={style.item_des}>
                  <p className={style.item_para}>{item.description}</p>
                  <p className={style.item_price}>${item.price}</p>

                  <div className={style.in_dec}>
                    <span onClick={() => handleDecrease(index)}>-</span>
                    <span>{quantities[index]}</span>
                    <span onClick={() => handleIncrease(index)}>+</span>
                  </div>
                </div>
                <button
                  className={style.remove_btn}
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className={style.signin_prompt}>
              <p className={style.signin_message}>
                Please sign in to view your cart.
              </p>
              <Link to="/signin" className={style.signin_link}>
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className={style.cart_price}>
        <h2 className={style.price_heading}>Order Summary</h2>

        <div className={style.price_section}>
          <p className={style.price_row}>
            Total Items: <span>{totalItems}</span>
          </p>
          <p className={style.price_row}>
            Subtotal: <span>$ {totalPrice.toFixed(2)}</span>
          </p>
          <p className={style.price_row}>
            Shipping: <span>Free</span>
          </p>
          <p className={style.price_total}>
            Total Price: <span>$ {totalPrice.toFixed(2)}</span>
          </p>

          <button className={style.checkout_btn}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
