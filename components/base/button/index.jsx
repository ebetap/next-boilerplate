import './styles.css';

const Button = (props) => {
  const {
    color,
    size,
    children,
    ...buttonProps
  } = props;

  return (
    <button id="baseButton" className={`btn btn-${size} btn-${color}`} {...buttonProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'primary',
  size: 'sm',
};

export default Button;
