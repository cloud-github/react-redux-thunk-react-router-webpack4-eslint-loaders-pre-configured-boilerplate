import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import { ClipLoader } from "react-spinners";
import { getIntroData } from "../actions/fetchIntro";
import hero_img from "../assets/images/hero.png";
import Navbar from "./common/navbar";

const override = css`
  display: block;
  margin-left: 45%;
  margin-top: 20%;
  border-color: red;
`;
class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getIntroData());
  }
  render() {
    const {
      data: { isError, userData, isFetching }
    } = this.props;
    if (isError) {
      return (
        <div>
          <Navbar menu="home" />
          <h3 className="error-message">Oops! {userData}</h3>
        </div>
      );
    }
    return (
      <div>
        <Navbar menu="home" />
        <section className="mh-home image-bg home-2-img" id="mh-home">
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={"#0bceaf"}
            loading={isFetching}
          />
          {Object.keys(userData).length > 0 ? (
            <div className="img-foverlay img-color-overlay">
              <div className="container">
                <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
                  <div className="col-sm-6">
                    <div className="mh-header-info">
                      <div
                        className="mh-promo wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.1s"
                      >
                        <span>Hello I'm</span>
                      </div>

                      <h2
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.2s"
                      >
                        {userData[0].title.rendered}
                      </h2>
                      <h4
                        className="wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.3s"
                      >
                        {userData[0].acf.designation}
                      </h4>

                      <ul>
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.4s"
                        >
                          <i className="fa fa-envelope" />
                          <a href="mailto:">{userData[0].acf.email}</a>
                        </li>
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.5s"
                        >
                          <i className="fa fa-phone" />
                          <a href="callto:">{userData[0].acf.phone}</a>
                        </li>
                        <li
                          className="wow fadeInUp"
                          data-wow-duration="0.8s"
                          data-wow-delay="0.6s"
                        >
                          <i className="fa fa-map-marker" />
                          <address>{userData[0].acf.location}</address>
                        </li>
                      </ul>

                      <ul
                        className="social-icon wow fadeInUp"
                        data-wow-duration="0.8s"
                        data-wow-delay="0.7s"
                      >
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-github" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="hero-img wow fadeInUp"
                      data-wow-duration="0.8s"
                      data-wow-delay="0.6s"
                    >
                      <div className="img-border">
                        <img src={hero_img} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  data: PropTypes.object,
  isError: PropTypes.bool,
  isFetching: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    data: state.intro_post
  };
};
export default connect(mapStateToProps)(Home);
