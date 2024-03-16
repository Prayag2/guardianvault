import PropTypes from "prop-types";

const Radio = ({ options, selectedOption, onChange }) => {
  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <label key={option.value} className="inline-flex items-center">
          <input
            type="radio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={() => onChange(option.value)}
            className="form-radio h-4 w-4 text-primary focus:ring-primary"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
Radio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Radio;
