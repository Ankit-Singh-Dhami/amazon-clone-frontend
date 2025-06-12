import { useContext, useEffect } from "react";
import AddItem from "../Add_items/AddItem";
import { ItemContext } from "../../context/Create_item_context";
import { CartContext } from "../../context/Cart_context";

const AddItems = () => {
  const { items, fetchItems } = useContext(ItemContext);
  const { fetchCart } = useContext(CartContext);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    fetchCart();
  }, []);

  console.log(items); // log full item array

  return (
    <>
      <AddItem items={items} />
    </>
  );
};

export default AddItems;
