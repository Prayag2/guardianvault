import PropTypes from "prop-types";

const Testimonial = ({ message, name, imageSrc }) => {
  return (
    <div className="bg-accent-600 p-6 w-56 rounded-lg justify-center items-center flex py-10 flex-col gap-3">
      <div className="rounded-full overflow-hidden w-24 aspect-square bg-background mb-6">
        <img src={imageSrc} alt={name} />
      </div>
      <hr className="w-3/4 border-1" />
      <p className="font-bold text-background text-md mb-2 w-full text-center">&quot;{message}&quot;</p>
      <p className="font-black font-display text-lg text-background">{name}</p>
    </div>
  );
};

Testimonial.propTypes = {
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Testimonial;
