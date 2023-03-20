import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactImg from "../assets/ben-dumond-VedK8_UlmkY-unsplash.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={ContactImg}
        Title="Contact"
        BtnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
