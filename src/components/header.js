const Header = () => {
    return (
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <a href="/">
              <img
                src="assets/img/my-profile.jpg"
                alt="Profile"
                className="img-fluid rounded-circle"
              />
            </a>
            <h1 className="text-light">
              <a href="/">Naufal Ghafir R</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a
                href="https://instagram.com/naufalghafirr"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>

              <a
                href="https://wa.me/6281398995752"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://github.com/Naufalghafirr"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://gitlab.com/Naufalghafirr"
                target="_blank"
                rel="noopener noreferrer"
                className="gitlab"
              >
                <i className="bx bxl-gitlab"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/naufal-ghafir/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
  
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link scrollto">
                  <i className="bx bx-extension"></i> <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-book"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
export default Header;
  