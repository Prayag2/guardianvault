import PropTypes from "prop-types";

const Button = ({ children, size, onClick, to, colour, outlined }) => {
  const getColour = () => {
    switch (colour) {
      case "primary":
        if (outlined)
          return "bg-none text-primary hover:bg-primary hover:text-text-50 active:bg-primary-700 border-primary border-2";
        else
          return "bg-primary text-text-50 hover:bg-primary-600 active:bg-primary-700";
      case "secondary":
        if (outlined)
          return "bg-none text-secondary hover:bg-secondary hover:text-text-50 active:bg-secondary-700 border-secondary border-2";
        else
          return "bg-secondary text-text-50 hover:bg-secondary-600 active:bg-secondary-700";
      case "accent":
        if (outlined)
          return "bg-none text-accent hover:bg-accent hover:text-text-50 active:bg-accent-700 border-accent border-2";
        else
          return "bg-accent text-text-50 hover:bg-accent-600 active:bg-accent-700";
      case "text":
        if (outlined)
          return "bg-none text-text hover:bg-text hover:text-text-50 active:bg-text-700 border-text border-2";
        else
          return "bg-text text-background hover:bg-text-600 active:bg-text-700";
      case "background":
        if (outlined)
          return "bg-none text-background hover:bg-background hover:text-text active:bg-background-700 border-background border-2";
        else
          return "bg-background text-text hover:bg-background-600 active:bg-background-700";
    }
  };

  const getDimensions = () => {
    switch (size) {
      case "small":
        return "h-8 px-4";
      case "medium":
        return "h-10 px-6";
      case "large":
        return "h-12 px-8";
    }
  };

  return (
    <button
      onClick={onClick}
      className={`inline-block transition-colors ${getColour()} ${getDimensions()} rounded-full`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  to: PropTypes.string,
  colour: PropTypes.oneOf([
    "primary",
    "secondary",
    "accent",
    "text",
    "background",
  ]),
  outlined: PropTypes.bool,
};

Button.defaultProps = {
  size: "medium",
  onClick: undefined,
  to: undefined,
  colour: "primary",
  outlined: false,
};

export default Button;
