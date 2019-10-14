import { bindActionCreators } from 'redux';
import { incrementNumber, decrementNumber } from '../../redux/example/actions';

export default (dispatch) => bindActionCreators({
  incrementNumber,
  decrementNumber,
}, dispatch);
