import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Destination from './Components/Destination/Destination';
import Booking from './Components/Booking/Booking';

const App = () => {
  return (
    <div className=" bg-white overflow-x-hidden selection:bg-orange-200">
      <Hero />
      <Category />
      <Destination />
      <Booking />
    </div>
  );
};

export default App;