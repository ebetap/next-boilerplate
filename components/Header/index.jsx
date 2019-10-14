import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import './styles.scss';

const HeaderLink = ({ url, title, getIsActive }) => {
  return (
    <Link href={url}>
      <a className={`nav-item nav-link${getIsActive(url)}`} title={title}>
        {title}
      </a>
    </Link>
  );
};

HeaderLink.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  getIsActive: PropTypes.func,
};

HeaderLink.defaultProps = {
  url: '#',
  title: 'Link',
  getIsActive: () => '',
};

const Header = () => {
  const getActiveLinkClass = (itemLink) => {
    const { route } = useRouter();
    if (route === itemLink) return ' active';
    return '';
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
            <HeaderLink
              getIsActive={getActiveLinkClass}
              url="/"
              title="Home"
            />
            <HeaderLink
              getIsActive={getActiveLinkClass}
              url="/about"
              title="About"
            />
            <HeaderLink
              getIsActive={getActiveLinkClass}
              url="/contact"
              title="Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
