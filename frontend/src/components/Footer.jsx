import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Resume Builder. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
