import { TestimonialData } from "./Data";
import bg1 from "../../assets/Images/ContactImg/Bg1.png";
import bg2 from "../../assets/Images/ContactImg/Bg2.png";

const Contact = () => {
  return (
    <section className="px-6 py-24">
      <div className="relative max-w-6xl mx-auto  rounded-tl-[80px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] overflow-hidden py-24 px-6 md:px-12">
        {/* Left Background Circle */}
        <div className="absolute left-0 bottom-0 pointer-events-none opacity-40">
          <img src={bg1} alt="" className="w-50 md:w-72" />
        </div>

        {/* Right Background Circle */}
        <div className="absolute top-0 right-0 pointer-events-none opacity-40">
          <img src={bg2} alt="" className="w-40 md:w-72" />
        </div>
        {/* Avatars */}
        <div className="relative z-10 flex justify-center mb-10">
          <div className="flex gap-6 md:gap-12 items-center">
            {TestimonialData.map((imgSrc, index) => (
              <div
                key={index}
                className={` gap-12${
                  index !== 0 ? "-ml-3" : ""
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`Avatar ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-relaxed text-[#5E6282]">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>

          {/* Form */}
          <form className="mt-12 flex flex-col md:flex-row justify-center items-center gap-5">
            <div className="w-full md:w-105 h-16 bg-white rounded-xl shadow-sm flex items-center px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400 mr-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 7.5v9A2.25 2.25 0 0 1 19.5 18.75h-15A2.25 2.25 0 0 1 2.25 16.5v-9m19.5 0A2.25 2.25 0 0 0 19.5 5.25h-15A2.25 2.25 0 0 0 2.25 7.5m19.5 0-8.69 5.52a2.25 2.25 0 0 1-2.12 0L2.25 7.5"
                />
              </svg>

              <input
                type="email"
                placeholder="Your email"
                className="w-full outline-none text-gray-700 placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="h-16 px-10 bg-[#FF7D68] text-white font-medium rounded-xl shadow-md hover:bg-[#ff6a50] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;



