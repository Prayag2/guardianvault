import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Anchor = ({ to, className, children }) => {
  return (
    <Link to={to} className={`text-secondary-400 ${className}`}>
      {children}
    </Link>
  );
};

Anchor.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Anchor;