import { useContext, useState } from "react";
import style from "../../styles/add_css/createItem.module.css";
import { ItemContext } from "../../context/Create_item_context";
import { useNavigate } from "react-router-dom";

const CreateItem = () => {
  const navigate = useNavigate();

  const { addToItem } = useContext(ItemContext);

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddItem = () => {
    if (!image || description.trim() === "" || price.trim() === "") {
      alert("Please fill all fields!");
      return;
    }

    if (isNaN(price) || Number(price) <= 0) {
      alert("Please enter a valid positive number for price!");
      return;
    }

    // Create item object
    const newItem = {
      image: URL.createObjectURL(image), // For previewing uploaded image
      description,
      price,
      id: Date.now(),
    };

    addToItem(newItem);

    // Clear form
    setImage(null);
    setDescription("");
    setPrice("");

    navigate("/");
  };

  return (
    <div className={style.container}>
      <h2>Create Item</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className={style.input}
      />

      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={style.input}
      />

      <input
        type="number"
        min="1"
        step="1"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={style.input}
      />

      <button onClick={handleAddItem} className={style.button}>
        Add Item
      </button>
    </div>
  );
};

export default CreateItem;
