import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
  const { route } = useRouter();

  const getActiveLinkClass = (itemLink) => {
    if (route === itemLink) return 'nav-item nav-link active';
    return 'nav-item nav-link';
  };

  return (
    <div id="headerComponent" className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a href="#" className="navbar-brand">Next.js</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/">
              <a className={getActiveLinkClass('/')} title="Home">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className={getActiveLinkClass('/about')} title="About">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
