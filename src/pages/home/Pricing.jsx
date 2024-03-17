import PricingCard from "../../components/PricingCard";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";

const Pricing = () => {
  const pricingData = [
    {
      type: "BASIC",
      pricing: 199,
      features: ["5GB Storage", "Basic Search Functionality", "File Sharing and Commenting"],
    },
    {
      type: "STANDARD",
      pricing: 299,
      features: ["10GB Storage", "Advanced Search Functionality", "Real-time Collaboration"],
    },
    {
      type: "PREMIUM",
      pricing: 399,
      features: ["Unlimited Storage", "Advanced Search Functionality", "Advanced Permissions"],
    },
  ];

  return (
    <section id="pricing-section" className="bg-background py-10 lg:py-20">
      <Wrapper className="text-center">
        <Title className="mb-10">Pricing</Title>
        <div className="flex gap-10 flex-wrap items-center justify-center">
          {pricingData.map((p, index) => (
            <PricingCard
              key={`pricing-${index}`}
              message={p.type}
              pricing={p.pricing}
              features={p.features}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Pricing;
