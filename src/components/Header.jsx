import React from "react";

const Header = () => {
  return (
    <div>
      <h1>John Doe</h1>
      <ul className="navmenu">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
