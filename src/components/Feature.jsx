import PropTypes from "prop-types";

const Feature = ({ imageSrc, title, description }) => {
  return (
    <div className="w-48 flex items-center justify-center flex-col">
      <img src={imageSrc} alt="Feature Icon" className="mb-2 h-14" />
      <h2 className="text-lg font-bold  text-black px-2 py-1 text-center mb-2 w-full font-display">
        {title}
      </h2>
      <p className="font-bold text-primary w-full text-md">{description}</p>
    </div>
  );
};
Feature.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Feature;
