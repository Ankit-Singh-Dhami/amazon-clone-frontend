import style from "../../styles/footer_css/footer2.module.css";
import amazon from "../../styles/images/amazon_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faFlag } from "@fortawesome/free-solid-svg-icons";

const Footer2 = () => {
  return (
    <>
      <div className={style.footer2}>
        <div className={style.footer2_image}>
          <img src={amazon} alt="amazon" />
        </div>

        <div className={style.footer2_language}>
          <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} />
          <p className={style.footer2_lan}>English</p>
        </div>

        <div className={style.footer2_flag}>
          <FontAwesomeIcon icon={faFlag} style={{ color: "#FFD43B" }} />
          <p className={style.footer2_nation}>India</p>
        </div>
      </div>
    </>
  );
};

export default Footer2;
