import ProfileImg from "../../assets/images/Testimonial/profile.png";
import SendIcon from "../../assets/images/Testimonial/sendIcon.png";
import MailIcon from "../../assets/images/Testimonial/MailIcon.png";

const Testimonials = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center">
      {/* Left */}
      <div className="space-y-6">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What people say about us.
        </h2> 

        <div className="flex gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
      </div>

      {/* Right */}
      <div className="relative flex justify-center">
        {/* BACK CARD (real behind effect) */}
        <div className="absolute -bottom-25 right-0 w-full max-w-md bg-white rounded-3xl shadow-md p-8 z-0">
          <div className="mt-10">
            <p className="font-bold text-gray-500">Chris Thomas</p>
            <p className="text-sm text-gray-400">CEO of Red Button</p>
          </div>
        </div>

        {/* FRONT CARD */}
        <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl p-8 z-10">
          <img
            src={ProfileImg}
            alt="profile"
            className=" rounded-full object-cover"
          />

          <p className="text-sm leading-7 text-gray-500 mt-6">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>

          <div className="mt-8">
            <p className="font-bold text-gray-700">Mike Taylor</p>
            <p className="text-sm text-gray-500">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Testimonials;
