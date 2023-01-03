import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav m-auto gap-5">
              <Link
                className="nav-link active"
                aria-current="page"
                exact="true"
                to="/"
              >
                Home
              </Link>
              <Link className="nav-link" exact="true" to="/about">
                About
              </Link>
              <Link className="nav-link" exact="true" to="/contact">
                Contact
              </Link>
            </div>
          </div>
          <Link className="btn btn-success" exact="true" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
