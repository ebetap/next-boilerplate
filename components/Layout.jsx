import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
