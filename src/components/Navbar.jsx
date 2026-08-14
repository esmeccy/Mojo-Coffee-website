import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={`navbar${open ? " navbar--open" : ""}`}>
      <Link to="/" aria-label="Mojo Coffee home" onClick={close}>
        <img
          className="wordmark"
          src={`${import.meta.env.BASE_URL}mojo-coffee.png`}
          alt="Mojo Coffee"
        />
      </Link>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className="navbar__links">
        <li>
          <Link to="/" onClick={close}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" onClick={close}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={close}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="navbar__actions">
        <Link to="/order" className="btn btn--sage" onClick={close}>
          Order Ahead
        </Link>
        <Link to="/login" className="btn btn--sage" onClick={close}>
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
