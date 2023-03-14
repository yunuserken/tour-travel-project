import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg  from "../assets/anthony-esau-N2zk9yXjmLA-unsplash.jpg";


function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        Title="About"
        BtnClass="hide"
      />
    </>
  );
}
export default About;
