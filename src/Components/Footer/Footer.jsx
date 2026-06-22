import Facebook from "../../assets/Images/BookingImages/Footer/Facebook.png";
import GooglePlay from "../../assets/Images/BookingImages/Footer/Google Play.png";
import Insta from "../../assets/Images/BookingImages/Footer/Insta.png";
import PlayStore from "../../assets/Images/BookingImages/Footer/Play Store.png";
import Twitter from "../../assets/Images/BookingImages/Footer/Twitter.png";

import { FooterData } from "./Data";

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 font-sans text-[#5E6282]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col text-center md:text-start lg:flex-row justify-between items-center gap-12">
        {/* Brand */}
        <div className="max-w-xs">
          <h2 className="text-4xl font-bold text-[#181E4B] mb-4">Jadoo.</h2>

          <p className="leading-7 max-w-60 lg:max-w-100 text-sm">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-1 justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            {FooterData.map((item) => (
              <ul key={item.name} className="space-y-3">
                <li className="text-xl font-bold text-[#080809] mb-4">
                  {item.name}
                </li>

                {item.text.map((text, index) => (
                  <li
                    key={index}
                    className="text-base cursor-pointer hover:text-[#181E4B] transition-colors"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Social & App */}
        <div className="flex flex-col gap-6 lg:items-center">
          <div className="flex gap-4 ">
            {[Facebook, Insta, Twitter].map((icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full shadow-md flex items-center justify-center bg-white hover:-translate-y-1 transition"
              >
                <img src={icon} alt="" className="w-45 h-45 object-contain" />
              </a>
            ))}
          </div>

          <p className="text-lg font-medium">Discover our app</p>

          <div className="flex gap-3">
            <img
              src={GooglePlay}
              alt="Google Play"
              className="h-10 object-contain cursor-pointer"
            />

            <img
              src={PlayStore}
              alt="App Store"
              className="h-10 object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-100 text-center">
        <p className="text-sm">All rights reserved @ jadoo.co</p>
      </div>
    </footer>
  );
};

export default Footer;
