"use client";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";
import BrandLogo from "~/components/Ui/Logo/BrandLogo";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer-one footer-one--two style3 "
      style={{ backgroundImage: "url(/img/footer/footer-v2-bg.jpg)" }}
    >
      <ScrollToTop
        smooth
        top="80"
        color="white"
        style={{
          backgroundColor: "#FFD550",
          "&:hover": { backgroundColor: "#186265" },
        }}
      />
      <div className="footer-one__bg"></div>
      <div className="shape2 float-bob-y">
        <img src="/img/shape/footer-v2-shape2.png" alt="" />
      </div>
      <div className="footer-main ">
        <div className="container">
          <div className="footer-main__bottom">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="single-footer-widget footer-widget__about">
                  <div className="logo-box">
                    <Link href="/">
                      <BrandLogo imageSrc="/img/resource/logo-5.png" />
                    </Link>
                  </div>
                  <div className="footer-widget__about-inner">
                    <div className="footer-widget__contact-box">
                      <ul>
                        <li>
                          <div className="icon-box">
                            <span className="icon-pin"></span>
                          </div>

                          <div className="content-box">
                            <p>Address</p>
                            <h4>
                              311, Suhar, Falaj Al Qabail, Sultanate Of Oman
                            </h4>
                          </div>
                        </li>

                        <li>
                          <div className="icon-box">
                            <span className="icon-paper-plane"></span>
                          </div>

                          <div className="content-box">
                            <p>Email</p>
                            <h4>
                              <Link href="mailto:yourmail@email.com">
                                malqudratrading@gmail.com
                              </Link>
                            </h4>
                          </div>
                        </li>

                        <li>
                          <div className="icon-box">
                            <span className="icon-out-call"></span>
                          </div>

                          <div className="content-box">
                            <p>Phone</p>
                            <h4>
                              <Link href="tel:+968-96154505">
                                +968-96154505
                              </Link>
                            </h4>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget footer-widget__links">
                  <div className="title">
                    <h2>Quick Links</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="about">Mission & Vision</Link>
                      </li>
                      <li>
                        <Link href="about">Get Pricing Plan</Link>
                      </li>
                      <li>
                        <Link href="about">Meet The Team</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-footer-widget footer-widget__links services">
                  <div className="title">
                    <h2>Our Services</h2>
                  </div>

                  <div className="footer-widget__links-box">
                    <ul>
                      <li>
                        <Link href="road-transport">Air Freight</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Ocean Freight</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Railway Freight</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Warehousing</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Packaging</Link>
                      </li>
                      <li>
                        <Link href="road-transport">Distribution</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget single-footer__newsletter">
                  <div className="title">
                    <h2>Newsletter</h2>
                  </div>
                  <div className="single-footer__newsletter-box">
                    <div className="single-footer__newsletter-text1">
                      <p>Subscribe to our newsletter!</p>
                    </div>
                    <form className="single-footer__newsletter-form">
                      <div className="single-footer__newsletter-form-input">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                        />
                      </div>

                      <div className="single-footer__newsletter-btn">
                        <button className="thm-btn" type="submit">
                          <span className="txt">Subscribe New</span>
                          <i className="icon-right-arrow"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom__inner">
            <div className="copyright-text">
              <p>
                © {currentYear}{" "}
                <Link href="/">Masterpieces Al Qudra Trading,</Link> All Rights
                Reserved.
              </p>
            </div>
            <div className="social-links">
              <Link href="#">
                <span className="icon-facebook"></span>
              </Link>
              <Link href="#">
                <span className="icon-twitter"></span>
              </Link>
              <Link href="#">
                <span className="icon-instagram"></span>
              </Link>
              <Link href="#">
                <span className="icon-linkedin"></span>
              </Link>
            </div>
            <div className="copyright-menu">
              <ul>
                <li>
                  <Link href="about">Terms &amp; Condition</Link>
                </li>
                <li>
                  <Link href="about">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="about">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
