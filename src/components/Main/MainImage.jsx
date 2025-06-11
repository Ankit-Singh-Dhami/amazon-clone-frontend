import main_image from "../../styles/images/hero_image.jpg";
import style from "../../styles/main_css/image.module.css";

const MainImage = () => {
  return (
    <div>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={style.main_image}>
              <img
                src={main_image}
                className={`d-block w-100 ${style.images}`}
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className={style.main_image}>
              <img
                src={main_image}
                className={`d-block w-100 ${style.images}`}
                alt="..."
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className={style.main_image}>
              <img
                src={main_image}
                className={`d-block w-100 ${style.images}`}
                alt="..."
              />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MainImage;
