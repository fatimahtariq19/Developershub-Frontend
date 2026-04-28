import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <img src="https://developers-hub.com/wp-content/uploads/2020/08/Developers-Hub-Logo-White-1024x398.png" alt="logo" />
        </Link>

        {/* MENU */}
        <nav className="nav-menu">
          <Link to="/about"  className="no-underline">ABOUT</Link>
          <Link to="/portfolio"  className="no-underline">PORTFOLIO</Link>
          <Link to="/how-it-works"  className="no-underline">HOWITWORKS</Link>
          <Link to="/career"  className="no-underline">CAREER </Link>
          <Link to="/contact-us"  className="no-underline">CONTACT</Link>
        </nav>

        {/* BUTTON */}
        <div className="nav-btn">
          <Link to="/contact-us"  className="no-underline">GET QUOTE</Link>
        </div>

      </div>
    </header>
  );
}