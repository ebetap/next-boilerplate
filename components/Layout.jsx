import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

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
