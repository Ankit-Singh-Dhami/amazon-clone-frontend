import { useContext, useEffect } from "react";
import Cart from "../components/Cart/Cart.jsx";
import Navbar from "../components/NavBar/Navbar.jsx";
import { CartContext } from "../context/Cart_context.jsx";

const Carts = () => {
  const { fetchCart } = useContext(CartContext);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
};

export default Carts;
