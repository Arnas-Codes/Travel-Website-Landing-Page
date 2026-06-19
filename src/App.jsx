import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';

const App = () => {
  return (
    <div className=" bg-white overflow-x-hidden selection:bg-orange-200">
      <Hero />
      <Category />
    </div>
  );
};

export default App;