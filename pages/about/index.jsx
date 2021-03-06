import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { Button } from '../../components/base';
import dispatchers from './dispatchers';
import states from './states';

const About = (props) => {
  const { number, incrementNumber, decrementNumber } = props;

  return (
    <Layout>
      <div id="aboutPage">
        <div className="container">
          <div className="card p-2">
            <div className="mb-2">
              <h1>About Page</h1>
            </div>
            <div className="d-flex mb-2">
              <Button color="danger" onClick={() => decrementNumber(1)}>
                Decrease by 1
              </Button>
              <div className="mx-4">
                <h3>{number}</h3>
              </div>
              <Button color="success" onClick={() => incrementNumber(1)}>
                Increase by 1
              </Button>
            </div>
            <p className="font-italic">
              The state value above is persisted. When you increase/decrease it, the value will persist even if you refresh the page.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

About.propTypes = {
  number: PropTypes.number,
  incrementNumber: PropTypes.func,
  decrementNumber: PropTypes.func,
};

About.defaultProps = {
  number: 0,
  incrementNumber: () => {},
  decrementNumber: () => {},
};

export default connect(
  states,
  dispatchers,
)(About);
