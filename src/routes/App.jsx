import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ItemProvider } from "../context/Create_item_context";
import { CartProvider } from "../context/Cart_context";

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
