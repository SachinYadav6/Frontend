import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>Logo</h2>
          <p>Learn React with simple projects.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Support</h3>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      <hr />

      <p className="copy">
        © 2026 All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;