import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  const { menu } = props;
  return (
    <header
      className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav nav-strict"
      id="mh-header"
    >
      {" "}
      {/*nav-strict for hiding and sticking header - keep in state*/}
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg mh-nav nav-btn">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ml-auto">
                <li
                  className={menu === "home" ? "nav-item active" : "nav-item"}
                >
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  className={
                    menu === "aboutme" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/about">
                    About Me
                  </Link>
                </li>
                <li
                  className={menu === "skills" ? "nav-item active" : "nav-item"}
                >
                  <Link className="nav-link" to="/skills">
                    Skills
                  </Link>
                </li>
                <li
                  className={
                    menu === "experiences" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/experiences">
                    Experiences
                  </Link>
                </li>
                <li
                  className={
                    menu === "portfolio" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li
                  className={
                    menu === "services" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li
                  className={menu === "blog" ? "nav-item active" : "nav-item"}
                >
                  <Link className="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                <li
                  className={
                    menu === "contacts" ? "nav-item active" : "nav-item"
                  }
                >
                  <Link className="nav-link" to="/contacts">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
