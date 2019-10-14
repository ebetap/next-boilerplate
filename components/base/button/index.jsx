import PropTypes from 'prop-types';
import './styles.css';

const Button = (props) => {
  const {
    type,
    color,
    size,
    children,
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      id="baseButton"
      className={`btn btn-${size} btn-${color}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  size: 'sm',
};

export default Button;
