/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const CardSection = ({cards}) => {
  useGSAP(() => {
    gsap.fromTo(
      ".card-animate",
      {
        x: -250,
        opacity: 0,
      },
      {
        x: 0,
        ease: "back",
        opacity: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".card-animate",
          start: "top bottom", //when top of div hits bottom of viewport
          end: "bottom 75%",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="container hero" id={cards}>
      <div className="row d-flex justify-content-center align-items-center">
        {/* Heading */}
        <div className="col-12 text-center">
          <p className="heading">Products</p>
        </div>

        {/* cards section  */}
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          <div className="col card-animate">
            <div className="card h-100">
              <img src="./card1.svg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Newsletter Manager</h5>
                <p className="card-text">
                  Streamline your email campaigns with our intuitive Newsletter
                  Manager, designed to help you engage your audience
                  effortlessly.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 1 day ago
                </small>
              </div>
            </div>
          </div>
          <div className="col card-animate">
            <div className="card h-100">
              <img src="./card2.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">E-book Library</h5>
                <p className="card-text">
                  Access a vast collection of e-books at your fingertips with
                  our comprehensive E-book Library. Discover, download, and
                  enjoy a diverse range of genres and topics.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 2 days ago
                </small>
              </div>
            </div>
          </div>
          <div className="col card-animate">
            <div className="card h-100">
              <img src="./card3.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">AutoTextCorrector</h5>
                <p className="card-text">
                  Enhance your writing efficiency with AutotextCorrector, our
                  smart tool that automatically corrects and optimizes your
                  text. Say goodbye to typos and grammatical errors
                  effortlessly.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">
                  Last updated 5 days ago
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
