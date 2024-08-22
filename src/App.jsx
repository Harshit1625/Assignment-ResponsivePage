/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import CardSection from "./components/CardSection";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  const [home, setHome] = useState("home");
  const [features, setFeatures] = useState("features");
  const [cards, setCards] = useState("cards");
  const [test, setTest] = useState("testimonial");
  const [contact, setContact] = useState("contact");
  return (
    <>
      <Navbar
        home={home}
        features={features}
        cards={cards}
        test={test}
        contact={contact}
      />
      <HeroSection home={home} />
      <Features features={features} />
      <CardSection cards={cards} />
      <Testimonial test={test} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
}

export default App;
