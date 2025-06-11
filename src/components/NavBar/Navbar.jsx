import style from "../../styles/nav_css/Navbar.module.css";
import amazon from "../../styles/images/amazon_logo.png";
import { IoMdCart } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("amazonUser");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("amazonUser");
    localStorage.removeItem("amazonUserToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.logo}>
          <Link to="/">
            <img src={amazon} alt="Amazon Logo" />
          </Link>
        </div>

        <div className={style.location}>
          <div className={style.seperate}>
            <div className={style.location_logo}>
              <IoLocationSharp />
            </div>

            <div className={style.location_text}>
              <div className={style.delivery}>
                Delivering to delhi in 110091
              </div>

              <div className={style.update_location}>Update location</div>
            </div>
          </div>
        </div>

        <div className={style.search}>
          <div className={style.search_dropdown}>
            <select className={style.dropdown_select}>
              <option value="All">All</option>
              <option value="Books">Books</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          <div className={style.search_bar}>
            <input
              type="text"
              placeholder="Search Amazon.in"
              className={style.search_input}
            />
            <button className={style.search_button}>
              <FontAwesomeIcon
                className={style.search_icon}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
        </div>

        <div className={style.language}>
          <div className={style.country_flag}>
            <LiaFlagUsaSolid />
          </div>

          <div className={style.country}>EN</div>
        </div>

        <div className={style.signIn}>
          {user ? (
            <Link
              to="/logout"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className={style.hello_sign}>hello {user.name}</div>
              <div className={style.account_list}>Accounts & Lists</div>
            </Link>
          ) : (
            <Link
              to="/signin"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className={style.hello_sign}>hello sign in</div>
              <div className={style.account_list}>Accounts & Lists</div>
            </Link>
          )}
        </div>

        <div className={style.return_order}>
          <div className={style.return}>Returns</div>

          <div className={style.order}>& Orders</div>
        </div>

        <div className={style.carts}>
          <Link
            to="/cart"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={style.cart_logo}>
              <IoMdCart />
            </div>

            <div className={style.cart}>Cart</div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
