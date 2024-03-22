import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid mx-3">
        <Link className="navbar-brand" to="/">
          Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav mb-2 mb-lg-0 gap-3"
            style={{ marginLeft: "auto" }}
          >
            <li className="nav-item">
              <Link className="nav-link text-light" to="#home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#portfolio">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#testimonials">
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
