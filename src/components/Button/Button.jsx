import PropTypes from "prop-types";

import "./Button.css";

function Button({ buttonText, variant, color, onClick }) {
  const handleOnClick = () => {
    onClick();
  };

  return (
    <button
      className={`cars-button ${variant} ${color}`}
      onClick={handleOnClick}
    >
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.oneOf(["default", "danger", "success", "warning"]),
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  variant: "contained",
  color: "default",
};

export default Button;
