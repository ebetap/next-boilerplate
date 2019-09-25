import Link from "next/link";

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <a href="#" className="navbar-brand">Next.js</a>
      <button 
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link href="/">
            <a className="nav-item nav-link" title="Home">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="nav-item nav-link" title="About">
              About
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
