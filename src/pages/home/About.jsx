import Wrapper from "@components/Wrapper";
const About = () => {
  return (
    <section aria-label="about" className="bg-primary-900 py-10 lg:py-20 text-text-50">
      <Wrapper>
        <p className="mb-5 font-display font-bold">
          Our platform offers a versatile solution for individuals and
          businesses seeking an efficient way to store, manage, and access their
          digital documents.
        </p>
        <p className="mb-5 font-display font-bold">
          With our freemium model you can start off with basic features for free
          or upgrade to premium plans for more storage capacity and enhanced
          functionalities. Ideal for students, professionals or any individual
          dealing with personal documents as well as businesses looking forward
          to streamlined document workflow.
        </p>
      </Wrapper>
    </section>
  );
};

export default About;
