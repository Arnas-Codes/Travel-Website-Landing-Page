import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Destination from './Components/Destination/Destination';
import Booking from './Components/Booking/Booking';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';

const App = () => {
  return (
    <div className=" bg-white selection:bg-orange-200">
      <Hero />
      <Category />
      <Destination />
      <Booking />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default App;