import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import RaodMap from "./components/RaodMap";
import Services from "./components/Services";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-[4.73rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <RaodMap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
