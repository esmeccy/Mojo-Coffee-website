import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="wordmark wordmark--lg"
        src={`${import.meta.env.BASE_URL}mojo-coffee.png`}
        alt="Mojo Coffee"
      />

      <div className="footer__col">
        <h2>Hours</h2>
        <p>Mon-Fri: 10am - 5pm</p>
        <p>Sat-Sun: Closed</p>
      </div>

      <div className="footer__col">
        <h2>Contact</h2>
        <a href="mailto:hello@mojocoffeeblend.com">hello@mojocoffeeblend.com</a>
        <a href="tel:+17789060044">778-906-0044</a>
        <p>500 Robson St, Vancouver, BC, V8T1J9</p>
      </div>

      <div className="footer__col">
        <h2>Info</h2>
        <Link to="/supply-chain">Supply chain</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/shipping">Shipping &amp; Refund</Link>
        <Link to="/terms">Terms &amp; Conditions</Link>
      </div>
    </footer>
  );
}

export default Footer;
