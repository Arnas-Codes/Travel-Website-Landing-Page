import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Destination from './Components/Destination/Destination';

const App = () => {
  return (
    <div className=" bg-white overflow-x-hidden selection:bg-orange-200">
      <Hero />
      <Category />
      <Destination />
    </div>
  );
};

export default App;