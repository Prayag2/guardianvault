import Testimonial from "@components/Testimonial";
import Wrapper from "@components/Wrapper";
import Title from "@components/Title";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Emily R.",
      message: "I love how secure this platform is. It's so easy to store and share my private documents!",
      imageSrc: "/images/svg/hero-illustration.svg",
    },
    {
      name: "Emily R.",
      message: "I love how secure this platform is. It's so easy to store and share my private documents!",
      imageSrc: "/images/svg/hero-illustration.svg",
    },
    {
      name: "Emily R.",
      message: "I love how secure this platform is. It's so easy to store and share my private documents!",
      imageSrc: "/images/svg/hero-illustration.svg",
    },
  ];

  return (
    <section className="bg-primary py-10 lg:py-20 justify-center text-center">
      <Wrapper>
        <Title className="mb-6 text-background">
          Warm Words from our Users
        </Title>
      <div className="flex gap-10 flex-wrap items-center justify-center">

        {testimonialData.map((t, index) => (
          <Testimonial
            key={`testimonial-${index}`}
            message={t.message}
            name={t.name}
            imageSrc={t.imageSrc}
          />
        ))}
      </div>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
