import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light mr-auto"
        style={{ marginBottom: 15 }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Pocket Pasal
          </a>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="item/add" className="nav-link">
                Add Items
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 ml-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
