import PropTypes from 'prop-types';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/global.scss';

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
