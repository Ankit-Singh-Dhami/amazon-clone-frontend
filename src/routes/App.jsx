import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ItemProvider } from "../context/Create_item_context.jsx";
import { CartProvider } from "../context/Cart_context.jsx";

const App = () => {
  const [cart, setCart] = useState("");
  return (
    <div>
      <ItemProvider>
        <CartProvider>
          <Outlet />
        </CartProvider>
      </ItemProvider>
    </div>
  );
};

export default App;
