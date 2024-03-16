import Testimonial from "../components/Pricing";

const MyComponent = () => {
  
  const testimonialProps = {
    message: "BASIC",
    
    pricing: 99, 
    features: ["Feature 1", "Feature 2", "Feature 3"], 
  };
  return (
    <div>
     
      <Testimonial {...testimonialProps} />
    </div>
  );
};
export default MyComponent;
