import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg="https://images.unsplash.com/photo-1660902179734-c94c944f7830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80"
        Title="Your Tavel Your Story"
        Text="React journey Start again.2023!"
        ButtonText="Travel Plan"
        Url="/"
        BtnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
