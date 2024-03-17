import PropTypes from "prop-types";
import Wrapper from "@components/Wrapper";
import Button from "@components/clickables/Button";
import { Link } from "react-router-dom";

const Header = ({className}) => {
  return (
    <header className={className}>
      <Wrapper className="flex justify-between items-center h-[10vh] text-text-50">
        <div className="logo">
          <img
            src="/images/svg/logo.svg"
            alt="Guardian Vault"
            className="font-bold font-display text-xl"
          />
        </div>
        <img src="/icons/menu.svg" alt="≡" className="text-4xl h-9 text-text-50 md:hidden cursor-pointer" />
        <div className="text-right space-x-6 hidden md:block">
          <a href="#pricing-section" className="text-text-50">Pricing</a>
          <Link to="/" className="text-text-50">Help</Link>
          <Button to="/" outlined colour="background">Get Started</Button>
        </div>
      </Wrapper>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: "",
}

export default Header;
