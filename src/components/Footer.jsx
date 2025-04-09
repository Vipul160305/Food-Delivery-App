

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>Food Delivery App</h3>
          <p>Your go-to app for fast, fresh food delivery. Made with ❤️ for food lovers!</p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="#">Privacy</a>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <a href="#"  rel="noreferrer">Instagram</a>
          <a href="#" rel="noreferrer">Facebook</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Food Delivery App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
