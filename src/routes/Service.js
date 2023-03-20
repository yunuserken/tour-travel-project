import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceImg from "../assets/joel-filipe-RFDP7_80v5A-unsplash.jpg";
import Footer from "../Components/Footer";
import Trip from "../Components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={ServiceImg}
        Title="Service"
        BtnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
