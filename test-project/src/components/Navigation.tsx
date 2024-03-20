//SachinAkash01 - 2024
import React from "react";

let linkActive = "";

interface NavigationProps {
  linkActive?: "active";
}

const Navigation = ({ linkActive }: NavigationProps) => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#ABEBC6" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          iServeSL
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto custom-me-margin mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={"nav-link " + linkActive}
                aria-current="page"
                href="/home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/customersupport">
                Customer Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/account">
                My Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
