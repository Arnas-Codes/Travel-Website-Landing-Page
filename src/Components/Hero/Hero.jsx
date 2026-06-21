import Navbar from "../Navbar/Navbar";
import Profile from "../../assets/images/image.png";
import Vector from "../../assets/images/Vector.png";
import PlayBtn from "../../assets/icons/CommonIcons/Play button.png";
import Decore from "../../assets/images/Decore.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative w-full text-black font-sans bg-white overflow-hidden"
    >
      {/* Background Decore */}
      <div className="absolute top-0 right-0 z-0 w-1/2 md:w-auto pointer-events-none">
        <img src={Decore} alt="" className="w-full object-contain" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-40 pb-12 md:pb-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Text Column */}
        <div className="flex flex-col space-y-5 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-xs md:text-sm uppercase tracking-widest font-bold text-orange-500">
            Best Destinations around the world
          </h1>

          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-[#181E4B] leading-tight tracking-tight">
              Travel, enjoy and live a new and full life
            </h2>
            {/* Vector under text highlight */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 lg:left-44 lg:translate-x-0 w-36 md:w-56 -z-10">
              <img src={Vector} alt="" className="w-full" />
            </div>
          </div>

          <p className="text-sm md:text-base text-[#5E6282] max-w-md mx-auto lg:mx-0 leading-relaxed pt-2">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
            <button className="w-full sm:w-auto bg-[#F15A24] text-white font-medium py-3.5 px-7 rounded-xl shadow-lg shadow-orange-100 hover:bg-orange-600 transition-colors">
              Find out more
            </button>
            <button className="flex items-center gap-4 text-[#686D77] font-medium hover:text-black transition-colors group">
              <img
                className="w-11 h-11 object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                src={PlayBtn}
                alt="Play"
              />
              <span>Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Graphic/Profile Column */}
        <div className="relative order-1 lg:order-2 flex justify-center items-center w-full max-w-112.5 lg:max-w-none mx-auto">
          <img
            src={Profile}
            alt="Travel Concept"
            className="w-full h-auto object-contain max-h-125 lg:max-h-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
