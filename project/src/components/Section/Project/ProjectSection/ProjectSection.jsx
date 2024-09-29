/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";

const ProjectSection = () => {
  return (
    <section className="project-two project-two--project padding" id="blog-cta">
      <div className="container">
        <div className="row">
          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-6 col-lg-6 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img
                    height={300}
                    width={636}
                    src="/img/project/image (1).png"
                    alt=""
                  />
                  <div className="btn-box">
                    <Link href="project-details">
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </div>
                  <div className="overlay-content">
                    {/* <p>NMFire UL FM Diesel Engine</p> */}
                    <h2>
                      <Link href="#">NMFire UL FM Diesel Engine</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single-->
                <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img
                    height={300}
                    width={306}
                    src="/img/project/safety-items.png"
                    alt=""
                  />
                  <div className="btn-box">
                    <Link href="project-details">
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </div>
                  <div className="overlay-content">
                    <h2>
                      <Link href="#">Personal protective equipment</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}
          {/* 
                <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img
                    height={300}
                    width={306}
                    src="/img/project/fire-extinguisher.png"
                    alt=""
                  />
                  <div className="btn-box">
                    <Link href="project-details">
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </div>
                  <div className="overlay-content">
                    <h2>
                      <Link href="#">Fire extinguisher and hose reels</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}

          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img
                    height={300}
                    width={306}
                    src="/img/project/driler.png"
                    alt=""
                  />
                  <div className="btn-box">
                    <Link href="project-details">
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </div>
                  <div className="overlay-content">
                    {/* <p>Ocean Freight</p> */}
                    <h2>
                      <Link href="#">Tools and Accesories</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}

          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-3 col-lg-3 wow fadeInUp"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
          >
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img src="/img/project/hdpe-pipe.png" alt="" />
                  <div className="btn-box">
                    <Link href="project-details">
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </div>
                  <div className="overlay-content">
                    <h2>
                      <Link href="#">HDPE pipes and fittings</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--End Project Two Single--> */}

          {/* <!--Start Project Two Single--> */}
          <div
            className="col-xl-6 col-lg-6 wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="project-two__single">
              <div className="project-two__single-img">
                <div className="inner">
                  <img
                    height={300}
                    width={636}
                    src="/img/project/firedoor.jpg"
                    alt=""
                  />
                  <div className="btn-box">
                    <Link href="project-details">
                      <span className="icon-right-arrow-5"></span>
                    </Link>
                  </div>
                  <div className="overlay-content">
                    <h2>
                      <Link href="#">Steel fire doors</Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
