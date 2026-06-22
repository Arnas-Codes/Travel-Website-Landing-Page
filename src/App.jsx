import Hero from "./Components/Hero/Hero";
import Category from "./Components/Category/Category";
import Destination from "./Components/Destination/Destination";
import Booking from "./Components/Booking/Booking";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className=" bg-white selection:bg-orange-200">
      <Hero />
      <Category />
      <Destination />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
