import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { incrementNumber, decrementNumber } from '../../redux/example/actions'

const About = (props) => {
  const { number, incrementNumber, decrementNumber } = props;

  return (
    <Layout>
      <div className="container">
        <div className="card p-2">
          <div className="mb-2">
            <h1>About Page</h1>
          </div>
          <div className="d-flex mb-2">
            <button
              className="btn btn-danger"
              onClick={() => decrementNumber(1)}
            >
              Decrease by 1
            </button>
            <div className="mx-4">
              <h3>{number}</h3>
            </div>
            <button
              className="btn btn-success"
              onClick={() => incrementNumber(1)}
            >
              Increase by 1
            </button>
          </div>
          <p className="font-italic">The state value above is persisted. When you increase/decrease it, the value will persist even if you refresh the page.</p>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  number: state.example.number,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  incrementNumber,
  decrementNumber,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(About);
