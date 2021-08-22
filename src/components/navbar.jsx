import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Posts">Posts</Link>
        </li>
        <li>
          <Link to="/admin">admin</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
