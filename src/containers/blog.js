import React from "react";

const Blog = () => {
  return (
    <section className="mh-blog image-bg featured-img-two" id="mh-blog">
      <div className="img-color-overlay">
        <div className="container">
          <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
            <div
              className="col-sm-12 section-title wow fadeInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.2s"
            >
              <h3>Featured Posts</h3>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="mh-blog-item dark-bg wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <img src="assets/images/b-3.png" alt="" className="img-fluid" />
                <div className="blog-inner">
                  <h2>
                    <a href="blog-single.html">
                      A life without the daily traffic jams
                    </a>
                  </h2>
                  <div className="mh-blog-post-info">
                    <ul>
                      <li>
                        <strong>Post On</strong>
                        <a href="#">24.11.19</a>
                      </li>
                      <li>
                        <strong>By</strong>
                        <a href="#">ThemeSpiders</a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="mh-blog-item dark-bg wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s"
              >
                <img src="assets/images/b-2.png" alt="" className="img-fluid" />
                <div className="blog-inner">
                  <h2>
                    <a href="blog-single.html">
                      Proportion are what’s really needed
                    </a>
                  </h2>
                  <div className="mh-blog-post-info">
                    <ul>
                      <li>
                        <strong>Post On</strong>
                        <a href="#">24.11.19</a>
                      </li>
                      <li>
                        <strong>By</strong>
                        <a href="#">ThemeSpiders</a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div
                className="mh-blog-item dark-bg wow fadeInUp"
                data-wow-duration="0.8s"
                data-wow-delay="0.7s"
              >
                <img src="assets/images/b-1.png" alt="" className="img-fluid" />
                <div className="blog-inner">
                  <h2>
                    <a href="blog-single.html">
                      Mounts of paper work to remember the way
                    </a>
                  </h2>
                  <div className="mh-blog-post-info">
                    <ul>
                      <li>
                        <strong>Post On</strong>
                        <a href="#">24.11.19</a>
                      </li>
                      <li>
                        <strong>By</strong>
                        <a href="#">ThemeSpiders</a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout
                  </p>
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
