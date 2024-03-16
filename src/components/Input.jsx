import PropTypes from "prop-types";

const Input = ({ type, placeholder, value, onChange }) => {
  const getType = () => {
    let inputColorClass;
    switch (type) {
      case "text":
        inputColorClass =
          "bg-secondary-50 text-text-50 hover:bg-primary-600 active:bg-primary-700";
        break;
      case "email":
        inputColorClass =
          "bg-secondary-50 text-text-50 hover:bg-secondary-600 active:bg-secondary-700";
        break;
      case "password":
        inputColorClass =
          "bg-secondary-50 text-text-50 hover:bg-accent-600 active:bg-accent-700";
        break;
      default:
        inputColorClass = "";
    }
    return inputColorClass;
  };

  const getPlaceholder = () => {
    let placeholderColorClass;
    switch (placeholder) {
      case "text":
        placeholderColorClass = "placeholder-primary";
        break;
      case "email":
        placeholderColorClass = "placeholder-secondary";
        break;
      case "password":
        placeholderColorClass = "placeholder-accent";
        break;
      default:
        placeholderColorClass = "";
    }
    return placeholderColorClass;
  };

  const getValueStyle = () => {
    let valueStyleClass;
    switch (value) {
      case "":
        valueStyleClass = "bg-gray-100";
        break;
      default:
        valueStyleClass = "";
    }
    return valueStyleClass;
  };

  const getOnChange = () => {
    let onChangeFunc;
    switch (type) {
      case "text":
        onChangeFunc = onChange;
        break;
      default:
        onChangeFunc = () => {};
    }
    return onChangeFunc;
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={getOnChange()}
      className={`w-full px-4 py-2 rounded-md focus:outline-none ${getType()} ${getPlaceholder()} ${getValueStyle()}`}
    />
  );
};
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: "",
  value: "",
};

export default Input;
