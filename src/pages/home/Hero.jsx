import Button from "@components/clickables/Button";
import Header from "./Header";
import Wrapper from "@components/Wrapper";

const Hero = () => {
  return (
    <>
      <section id="hero" className="w-full h-[100vh] relative">
        <div className="h-full w-full absolute top-0 left-0 z-[-1] bg-secondary-400">
          <img
            className="h-1/4 sm:h-1/3 md:h-1/2 absolute top-0 left-0 opacity-10"
            src="/images/svg/hero-background-top.svg"
            alt=""
          />
          <img
            className="h-1/4 sm:h-1/3 md:h-1/2 absolute bottom-0 right-0 opacity-10"
            src="/images/svg/hero-background-bottom.svg"
            alt=""
          />
        </div>
        <Header className="absolute top-0 left-0 w-full" />
        <Wrapper className="text-center w-full h-full flex items-center justify-center flex-row lg:text-left">
          <div className="hero-content w-full xl:min-w-2/3">
            <h2 className="text-4xl font-black text-white mb-4 font-display">
              Empowering secure document management
            </h2>
            <p className="text-lg text-black mb-8 font-display text-primary font-bold">
              Store, organize, and access files anytime
            </p>
            <div className="flex justify-center flex-wrap gap-6 lg:justify-start">
              <div>
                <p className="text-text mb-3">Are You an Individual?</p>
                <Button colour="primary" outlined>
                  Get Started
                </Button>
              </div>
              <div>
                <p className="text-text mb-3">Are You an Organization?</p>
                <Button colour="primary" outlined>
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
          <img
            src="/images/svg/hero-illustration.svg"
            className="h-3/5 xl:h-4/5 hidden lg:block"
            alt=""
          />
        </Wrapper>
      </section>
    </>
  );
};

export default Hero;
