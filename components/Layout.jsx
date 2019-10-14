import PropTypes from 'prop-types';
import Header from './Header';
import '../assets/styles/custom.scss';

const Layout = ({ children }) => (
  <div id="layoutMain">
    <Header />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
