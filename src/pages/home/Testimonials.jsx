import Testimonial from "@components/Testimonial";
import Wrapper from "@components/Wrapper";
import Title from "@components/Title";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "John doe",
      message: "hello world",
      imageSrc: "/images/svg/hero-illustration.svg",
    },
  ];

  return (
    <section className="bg-primary py-10 lg:py-20 justify-center">
      <Wrapper>
        <Title className="mb-6 text-background">
          Warm Words from our Users
        </Title>
        {testimonialData.map((_, index) => (
          <Testimonial
            key={`testimonial-${index}`}
            message="hello"
            name="john doe"
            imageSrc="/images/svg/hero-illustration.svg"
          />
        ))}
      </Wrapper>
    </section>
  );
};

export default Testimonials;
