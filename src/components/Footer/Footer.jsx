import style from "../../styles/footer_css/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.align}>
          <div className="container">
            <footer className="d-flex justify-content-between align-items-start flex-wrap py-4  text-white">
              {/* Section 1 */}
              <div className="mb-3 me-5">
                <h5>Get to Know Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      About Amazon
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Careers
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Press Releases
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Amazon Science
                    </a>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-3 me-5">
                <h5> Connect with Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Twitter
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-3 me-5">
                <h5>Make Money with Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Sell on Amazon
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Sell under Amazon Accelerator
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Protect and Build Your Brand
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Amazon Global Selling
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Supply to Amazon
                    </a>
                  </li>

                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Become an Affiliate
                    </a>
                  </li>

                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Fulfilment by Amazon
                    </a>
                  </li>

                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Advertise Your Products
                    </a>
                  </li>

                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Amazon Pay on Merchants
                    </a>
                  </li>
                </ul>
              </div>

              {/* Section 4 (New Section) */}
              <div className="mb-3">
                <h5>Let Us Help You</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Your Account
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Returns Centre
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Recalls and Product Safety Alerts
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      100% Purchase Protection
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Amazon App Download
                    </a>
                  </li>

                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Help
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
