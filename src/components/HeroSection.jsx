import TypeWriterEffect from "react-typewriter-effect";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const HeroSection = ({ home }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".animate-img",
      {
        x: -250,
        opacity: 0,
      },
      {
        x: 0,
        ease: "back",
        opacity: 1,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      ".animate-text",
      {
        x: 250,
        opacity: 0,
      },
      {
        x: 0,
        ease: "back",
        opacity: 1,
        stagger: 0.1,
      }
    );
  }, []);
  return (
    <div className="container hero gap-5" id={home}>
      <div className="row d-flex justify-content-between align-items-center">
        <div className="col-lg-6 col-sm-12 d-flex justify-content-between align-items-center animate-img">
          <img className="img-fluid" src="./HeroSection.png" />
        </div>
        <div className="col-lg-6 cl col-sm-12 gap-5 animate-text">
          <h1>
            <TypeWriterEffect
              startDelay={20}
              cursorColor="#ffffff"
              multiText={[" We Make Your Ideas into reality."]}
              multiTextDelay={500}
              typeSpeed={35}
              multiTextLoop
            />
          </h1>
          <p>
            Transforming your digital vision into stunning reality. Our
            expertise in website design and development ensures that your ideas
            come to life, delivering a seamless online experience that
            captivates your audience and drives success.
          </p>

          <div className="d-flex gap-3 d-md-block">
            <button className="btn hero-btn btn-primary btn-lg" type="button">
              Get Started
            </button>
            <button className="btn btn-outline-primary btn-lg" type="button">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
