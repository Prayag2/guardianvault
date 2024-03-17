import PropTypes from "prop-types";

const PricingCard = ({ message, pricing, features }) => {
  return (
    <div className="bg-secondary-900 py-6 w-56  flex flex-col justify-center items-center gap-3 rounded-lg">
      <div className="font-bold text-center text-white">
        <p>{message}</p>
      </div>
      <p className="font-extrabold text-background text-md mb-2 text-center bg-primary-700 py-3 font-display w-full">
        ₹{pricing}/month
      </p>

      <div className="px-5 text-center w-full">
        <ul className="text-background text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-1">
              <span>✓ {feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Subscribe
      </button>
    </div>
  );
};

PricingCard.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pricing: PropTypes.number.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCard;
