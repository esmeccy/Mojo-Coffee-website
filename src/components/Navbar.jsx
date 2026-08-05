import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" aria-label="Mojo Coffee home">
        <img
          className="wordmark"
          src={`${import.meta.env.BASE_URL}mojo-coffee.png`}
          alt="Mojo Coffee"
        />
      </Link>

      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="navbar__actions">
        <Link to="/order" className="btn btn--sage">
          Order Ahead
        </Link>
        <Link to="/login" className="btn btn--sage">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
