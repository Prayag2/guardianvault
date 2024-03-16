import PropTypes from "prop-types";

const Title = ({ className, children }) => {
  return (
    <h2 className={`${className} font-black text-2xl font-display`}>
      {children}
    </h2>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Title;
