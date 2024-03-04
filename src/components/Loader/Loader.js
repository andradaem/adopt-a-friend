import PropTypes from "prop-types";

import { useEffect } from "react";

import "./Loader.css";

const Loader = ({ message }) => {
  useEffect(() => {
    let timeoutId = setInterval(() => {
      console.log("Dummy Timeout!");
    }, 100);
    return () => {
      console.log("This Loader component is dead");
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div className="cars-loader">
      <img src="/images/loader.gif" alt="Loading car gif" />
      {message && <p>{message}</p>}
    </div>
  );
};

Loader.propTypes = {
  message: PropTypes.string,
};

Loader.defaultProps = {
  message: "Loading...",
};

export default Loader;
