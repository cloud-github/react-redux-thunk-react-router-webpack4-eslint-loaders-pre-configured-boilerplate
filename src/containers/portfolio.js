import React from "react";

const Portfolio = () => {
  return (
    <section className="mh-portfolio" id="mh-portfolio">
      <div className="container">
        <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
          <div
            className="section-title col-sm-12 wow fadeInUp"
            data-wow-duration="0.8s"
            data-wow-delay="0.1s"
          >
            <h3>Recent Portfolio</h3>
          </div>
          <div className="part col-sm-12">
            <div className="portfolio-nav col-sm-12" id="filter-button">
              <ul>
                <li
                  data-filter="*"
                  className="current wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.1s"
                >
                  <span>All Categories</span>
                </li>
                <li
                  data-filter=".user-interface"
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.2s"
                >
                  <span>Web Design</span>
                </li>
                <li
                  data-filter=".branding"
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.3s"
                >
                  <span>Branding</span>
                </li>
                <li
                  data-filter=".mockup"
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.4s"
                >
                  <span>Mockups</span>
                </li>
                <li
                  data-filter=".ui"
                  className="wow fadeInUp"
                  data-wow-duration="0.8s"
                  data-wow-delay="0.5s"
                >
                  <span>Photography</span>
                </li>
              </ul>
            </div>
            <div
              className="mh-project-gallery col-sm-12 wow fadeInUp"
              id="project-gallery"
              data-wow-duration="0.8s"
              data-wow-delay="0.5s"
            >
              <div className="portfolioContainer row">
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 user-interface">
                  <figure>
                    <img src="assets/images/portfolio/g1.jpg" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a data-fancybox data-src="#mh" />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 ui mockup">
                  <figure>
                    <img src="assets/images/portfolio/g2.png" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g2.png"
                        data-fancybox
                        data-src="#mh"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 user-interface">
                  <figure>
                    <img src="assets/images/portfolio/g3.png" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g3.png"
                        data-fancybox
                        data-src="#mh"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 branding">
                  <figure>
                    <img src="assets/images/portfolio/g5.png" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g5.png"
                        data-fancybox
                        data-src="#mh"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 user-interface">
                  <figure>
                    <img src="assets/images/portfolio/g4.png" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g4.png"
                        data-fancybox
                        data-src="#mh"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 branding">
                  <figure>
                    <img src="assets/images/portfolio/g6.png" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g6.png"
                        data-fancybox
                        data-src="#mh"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 branding">
                  <figure>
                    <img src="assets/images/portfolio/g8.png" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g8.png"
                        data-fancybox
                        data-src="#mh"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 ui">
                  <figure>
                    <img src="assets/images/portfolio/g9.png" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g9.png"
                        data-fancybox
                        data-src="#mh"
                      />
                    </figcaption>
                  </figure>
                </div>
                <div className="grid-item col-md-4 col-sm-6 col-xs-12 branding">
                  <figure>
                    <img src="assets/images/portfolio/g7.jpg" alt="img04" />
                    <figcaption className="fig-caption">
                      <i className="fa fa-search" />
                      <h5 className="title">Creative Design</h5>
                      <span className="sub-title">Photograpy</span>
                      <a
                        href="assets/images/portfolio/g7.jpg"
                        data-fancybox="gallery"
                      />
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mh-portfolio-modal" id="mh">
        <div className="container">
          <div className="row mh-portfolio-modal-inner">
            <div className="col-sm-5">
              <h2>Wrap - A campanion plugin</h2>
              <p>
                Wrap is a clean and elegant Multipurpose Landing Page Template.
                It will fit perfectly for Startup, Web App or any type of Web
                Services. It has 4 background styles with 6 homepage styles. 6
                pre-defined color scheme. All variations are organized
                separately so you can use / customize the template very easily.
              </p>

              <p>
                It is a clean and elegant Multipurpose Landing Page Template. It
                will fit perfectly for Startup, Web App or any type of Web
                Services. It has 4 background styles with 6 homepage styles. 6
                pre-defined color scheme. All variations are organized
                separately so you can use / customize the template very easily.
              </p>
              <div className="mh-about-tag">
                <ul>
                  <li>
                    <span>php</span>
                  </li>
                  <li>
                    <span>html</span>
                  </li>
                  <li>
                    <span>css</span>
                  </li>
                  <li>
                    <span>php</span>
                  </li>
                  <li>
                    <span>wordpress</span>
                  </li>
                  <li>
                    <span>React</span>
                  </li>
                  <li>
                    <span>Javascript</span>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn btn-fill">
                Live Demo
              </a>
            </div>
            <div className="col-sm-7">
              <div className="mh-portfolio-modal-img">
                <img
                  src="assets/images/pr-0.jif"
                  alt=""
                  className="img-fluid"
                />
                <p>
                  All variations are organized separately so you can use /
                  customize the template very easily.
                </p>
                <img
                  src="assets/images/pr-1.jif"
                  alt=""
                  className="img-fluid"
                />
                <p>
                  All variations are organized separately so you can use /
                  customize the template very easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
