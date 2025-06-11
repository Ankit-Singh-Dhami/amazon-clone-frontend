import style from "../../styles/nav_css/Nav2.module.css";
import { MdDensitySmall } from "react-icons/md";

const Nav2 = () => {
  return (
    <>
      <div className={style.nav2}>
        <div className={style.align}>
          <div className={style.all}>
            <div className={style.all_icon}>
              <MdDensitySmall />
            </div>
            <div className={style.all_text}>All</div>
          </div>

          <div className={style.fresh}>Fresh</div>

          <div className={style.mxplayer}>MXplayer</div>

          <div className={style.sell}>Sell</div>

          <div className={style.bestSeller}>Bestsellers</div>

          <div className={style.today_deal}>Today Deals</div>

          <div className={style.mobile}>Mobiles</div>

          <div className={style.prime}>Prime</div>

          <div className={style.customer_service}>Customer Service</div>

          <div className={style.fashion}>Fashion</div>

          <div className={style.new_release}>New Releases</div>

          <div className={style.amazon_pay}>Amazon Pay</div>

          <div className={style.electronics}>Electronics</div>

          <div className={style.kitchen}>Home & Kitchen</div>

          <div className={style.car}>Car & Motorbike</div>
        </div>
      </div>
    </>
  );
};

export default Nav2;
