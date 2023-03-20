import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/anthony-esau-N2zk9yXjmLA-unsplash.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" HeroImg={AboutImg} Title="About" BtnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
