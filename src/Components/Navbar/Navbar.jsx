import { useState } from "react";
import logo from "../../assets/Images/Logo.png";

const Navlinks = [
  { id: "destination", name: "Destination" },
  { id: "hotels", name: "Hotels" },
  { id: "flights", name: "Flights" },
  { id: "bookings", name: "Bookings" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between xl:p-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Jadoo" className="h-8 md:h-10 object-contain" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links & Settings Container */}
        <div
          className={`
          absolute lg:static top-24 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-6 lg:p-0 border-b lg:border-none border-gray-200
          flex flex-col lg:flex-row items-center gap-6 lg:gap-16 transition-all duration-300 ease-in-out
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible lg:opacity-100 lg:visible"}
        `}
        >
          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full lg:w-auto">
            {Navlinks.map((nav) => (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className="font-medium text-[#212832] hover:text-orange-500 transition-colors text-base"
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </a>
            ))}
          </div>

          {/* Auth & Language */}
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 font-medium w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-none border-gray-100">
            <button className="text-[#212832] hover:text-orange-500 transition-colors py-2">
              Login
            </button>
            <button className="w-full sm:w-auto border border-[#212832] py-2 px-5 rounded-md hover:bg-[#212832] hover:text-white transition-all text-center">
              Sign up
            </button>
            <select
              name="lang"
              id="lang"
              className="bg-transparent font-medium py-2 focus:outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
