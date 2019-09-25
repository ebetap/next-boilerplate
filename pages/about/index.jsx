import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import { incrementNumber, decrementNumber } from '../../redux/example/actions'

const About = (props) => {
  const { number, incrementNumber, decrementNumber } = props;

  return (
    <Layout>
      <div>
        <h1>About</h1>
        <div>
          <button onClick={() => decrementNumber(1)}>
            Decrease by 1
          </button>
          <h3>{number}</h3>
          <button onClick={() => incrementNumber(1)}>
            Increase by 1
          </button>
        </div>
        <p>The state value above is persisted, when you change increase/decrease it, the value will persist even if you refresh the page</p>
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
