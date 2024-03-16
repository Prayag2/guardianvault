import PropTypes from "prop-types";

const Pricing = ({ message, pricing, features }) => {
  return (
    <div className="bg-secondary-900 p-6 w-56  flex flex-col justify-center items-center gap-3">
      
      <div className="font-bold text-center text-white">
        <p>{message}</p>
        </div>
      <p className="font-extrabold text-background text-md mb-2 text-center bg-primary-200 w-full"> {pricing} $/month</p>
      
      <div className="w-3/4 h-0.5 bg-background" />
      <ul className="text-background text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-white">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
    </div>
  );
};

Pricing.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pricing: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Pricing;
