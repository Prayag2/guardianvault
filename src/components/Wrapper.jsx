import PropTypes from "prop-types";
const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`px-8 md:px-10 lg:px-32 max-w-[180rem] mx-auto w-full ${className}`}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Wrapper;
