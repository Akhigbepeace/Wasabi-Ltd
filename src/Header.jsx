import React from "react";

const Header = () => {
  const dropdown = "../assets/images/Vector.png";
  const user = "../assets/images/Button.png";
  return (
    <header>
      <div className="logo-links">
        <div className="logo">
          <div className="hamburger">
            <div className="hamburger-line" />
            <div className="hamburger-line 2" />
            <div className="hamburger-line" />
          </div>
          <h1>WASABI LTD</h1>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="#" className="current">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="search-profile">
        <div className="search-bar">
          <input type="search" name="search" id="search" placeholder="Search" />
        </div>

        <div className="profile">
          <img src={user} alt="user" className="user" />
          <img src={dropdown} alt="drop-down" />
        </div>
      </div>
    </header>
  );
};

export default Header;
