import PropTypes from "prop-types";

const Footer = ({ content }) => {
  const getContent = () => {
    switch (content) {
      case "address":
        return "Delhi , India";
      case "phone":
        return "+123455555";
      case "email":
        return "i@gmail.com";
      default:
        return "";
    }
  };

  return (
    <footer className="bg-background text-text py-4">
      <div className="container mx-auto text-center">
        <p>{getContent()}</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.oneOf(["address", "phone", "email"]).isRequired
};

export default Footer;
