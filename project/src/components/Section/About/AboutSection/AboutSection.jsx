import Link from "next/link";
import CircleTextThree from "~/components/Ui/Components/CircleTextThree";

const AboutSection = () => {
  return (
    <section className="about-three padding">
      <div className="container">
        <div className="row">
          {/* <!--Start About Three Img--> */}
          <div className="col-xl-6">
            <div className="about-three__img">
              <div className="shape1">
                <img src="/img/shape/about-v3-shape1.png" alt="" />
              </div>
              <div
                className="about-three__img1 wow fadeInLeft"
                data-wow-delay=".1s"
              >
                <img src="/img/about/about-v3-img1.jpg" alt="" />
              </div>
              <div
                className="about-three__img2 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <img src="/img/about/about-v3-img2.jpg" alt="" />
              </div>
            </div>
            <div className="about-three__img">
              <div
                className="about-three__img2 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <img src="/img/about/about-v3-img2.jpg" alt="" />
              </div>
            </div>
          </div>
          {/* <!--End About Three Img--> */}

          {/* <!--Start About Three Content--> */}
          <div className="col-xl-6">
            <div className="about-three__content">
              <div className="sec-title-style3">
                <div className="sub-title">
                  <div className="icon">
                    <img src="/img/icon/title-marker-4.png" alt="" />
                  </div>
                  <h5>About Company</h5>
                </div>
                <h2>
                  Your Trusted Partner in <br />
                  Advanced Fire Safety Solutions
                </h2>
              </div>
              <div className="about-three__content-text">
                <p>
                  We Established in 2022 and provides comprehensive design,
                  engineering, integrated and intelligent solutions in fire
                  detection and protection systems as well as fire protection
                  equipment, safety systems, LPG Gas Systems HSE and PPE
                  products and HDPE Pipeline works A highly qualified and
                  experienced team provides professional, quality and
                  comprehensive maintenance services through our fully-equipped
                  service centre for fire protection, safety and rescue
                  equipment. We are an approved installation and maintenance
                  contractor of the Public Authority for Civil Defence and
                  Ambulances (PACDA), Oman
                </p>
              </div>

              <ul className="about-three__content-list">
                <li>
                  <div className="icon-box">
                    <span className="icon-global-network"></span>
                  </div>

                  <div className="text-box">
                    <h3>Our Vision</h3>
                    <p>
                      Masterpieces Al Qudra Trading has the vision to be a
                      global leader in the improvement of fire & safety
                      standards to secure life, business and property. It is our
                      commitment to meet personal and technological needs in the
                      field of fire safety & gas installation system by
                      providing comprehensive and reliable fire protection
                      through customized solutions and personal care to our
                      clients.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="icon-box">
                    <span className="icon-enter-product-details"></span>
                  </div>

                  <div className="text-box">
                    <h3>Our Mission</h3>
                    <p>
                      Our mission is to continue serving the contracting &
                      progressive works with best adapted codes of practice,
                      international standards, and through innovative new
                      technological advances which can be introduced to our
                      customers in order to make their operations safer and more
                      cost effective without compromising on the quality and
                      integrity of the product. We will continue to provide
                      reliable, high quality fire protection products and
                      engineering services to our customers using the
                      state-of-art technology and environmentally sound
                      practices.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="about-three__content-bottom">
                <div className="btn-box">
                  <Link className="thm-btn" href="about">
                    <span className="txt">Know More About Us</span>
                  </Link>
                </div>

                <div className="author-box">
                  <div className="img-box">
                    <img src="/img/about/about-v2-img4-.jpg" alt="" />
                  </div>

                  <div className="text-box">
                    <p>Need Help?</p>
                    <h3>
                      <Link href="tel:+968-96154505">+968-96154505</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End About Three Content--> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
