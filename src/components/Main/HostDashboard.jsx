import { Link } from "react-router-dom";
import style from "../../styles/main_css/hostDashboard.module.css";
import AddItems from "../Add_items/AddItems";

const HostDashboard = () => {
  return (
    <div className={style.container}>
      {/* Button for navigation */}
      <Link to="/create-item" className={style.addButton}>
        + Add New Item
      </Link>

      {/* AddItems component */}
      <div className={style.itemsSection}>
        <AddItems />
      </div>
    </div>
  );
};

export default HostDashboard;
