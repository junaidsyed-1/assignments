const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid mx-3">
        <a className="navbar-brand " href="#">
          Portfolio
        </a>
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
              <a className="nav-link text-light" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" aria-current="page" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
