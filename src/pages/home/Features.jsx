import Title from "@components/Title";
import Wrapper from "@components/Wrapper";
import Feature from "@components/Feature";

const Features = () => {
  const featureData = [
    {
      imageSrc: "/icons/star.svg",
      title: "Uncompromised Security",
      description:
        "Your documents are stored under layers of robust security measures, ensuring complete peace of mind.",
    },
    {
      imageSrc: "/icons/check.svg",
      title: "Anytime, Anywhere Access",
      description:
        "With our platform, your documents are always within reach. Access them anytime from any device",
    },
    {
      imageSrc: "/icons/thumbs-up.svg",
      title: "Tailored Plans to Suit Your Needs",
      description:
        " Whether you're a student or a business owner, we offer flexible plans to match your unique needs. Choose from free basic tier or premium plans with added features.",
    },
    {
      imageSrc: "/icons/badge.svg",
      title: "Streamlined Workflow",
      description:
        "Simplify your document management process with our user-friendly interface and optimized workflows.",
    },
  ];
  return (
    <section className="py-10 lg:py-20 text-center">
      <Wrapper>
        <Title className="mb-10">Why Us?</Title>
        <div className="flex gap-20 flex-wrap justify-center">
          {featureData.map((feature, index) => (
            <Feature
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
