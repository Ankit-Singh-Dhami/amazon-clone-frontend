import { useContext, useEffect } from "react";
import AddItem from "../Add_items/AddItem";
import { ItemContext } from "../../context/Create_item_context";

const AddItems = () => {
  const { items, fetchItems } = useContext(ItemContext);

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(items); // log full item array

  return (
    <>
      <AddItem items={items} />
    </>
  );
};

export default AddItems;
