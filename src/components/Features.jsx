import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const Features = ({ features }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".feature-img",
      {
        x: -250,
        opacity: 0,
      },
      {
        x: 0,
        ease: "back",
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".feature-img",
          start: "top bottom", //when top of div hits bottom of viewport
          end: "bottom 10%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".feature-text",
      {
        opacity: 0,
      },
      {
        ease: "back",
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".feature-text",
          start: "top bottom",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="container hero" id={features}>
      <div className="row d-flex justify-content-center align-items-center">
        {/* Heading */}
        <div className="col-12 text-center">
          <p className="heading">Features</p>
        </div>

        {/* feature 1 */}
        <div className="col-lg-6 col-sm-12 d-flex justify-content-between align-items-center flicker-in-2 feature-img">
          <img className="img-fluid" src="./Feature1.png" />
        </div>
        <div className="col-lg-6 features col-sm-12 gap-5 fade-in-right">
          <div className="d-flex justify-content-center align-items-center feature-text">
            <div className="w-75">
              <h1>Responsive Design</h1>
              <p className="">
                Crafted with modern aesthetics, our responsive design ensures
                your website looks stunning on all devices.
              </p>
            </div>
          </div>
        </div>

        {/* feature 3 */}
        <div className="col-lg-6 col-sm-12 d-flex justify-content-between align-items-center flicker-in-2 feature-img">
          <img className="img-fluid" src="./Feature3.png" />
        </div>
        <div className="col-lg-6 features col-sm-12 gap-5 fade-in-right">
          <div className="d-flex justify-content-center align-items-center">
            <div className="w-75">
              <h1>Custom Development</h1>
              <p className="">
                Tailored to your specific needs, our custom development
                solutions bring your unique vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
