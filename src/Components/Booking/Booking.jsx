import {BookingData} from "./Data";
import mainImg from "../../assets/Images/BookingImages/Main.jpg";
import send from "../../assets/Images/BookingImages/send.png";
import mapIcon from "../../assets/Images/BookingImages/mapicon.png";
import heart from "../../assets/Images/BookingImages/Heart.png";
import leaf from "../../assets/Images/BookingImages/LEAF.png";
import maskGroup from "../../assets/Images/BookingImages/Mask Group.png";
import building from "../../assets/Images/BookingImages/building.png";

const Booking = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-screen flex flex-col md:flex-row gap-12 lg:gap-6 justify-between items-center text-black font-sans">
      
      {/* Left Column: Steps */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center">
        <div>
          <span className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
            Easy and Fast
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 max-w-md leading-tight">
            Book your next trip in 3 easy steps
          </h2>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-6 mt-4">
          {BookingData.map((data) => (
            <div
              key={data.id}
              className="flex items-start gap-4 p-2 rounded-xl transition-all hover:bg-gray-50"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 shrink-0 overflow-hidden flex items-center justify-center rounded-xl bg-orange-100">
                <img src={data.icon || data.img} alt="" className="w-6 h-6 object-contain" />
              </div>
              
              {/* Text Info */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-gray-800">{data.title || data.name}</h3>
                <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                  {data.description || data.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Card Graphic Display */}
      <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0">
        
        {/* Main Greece Trip Card */}
        <div className="relative w-full max-w-[370px] p-5 rounded-3xl bg-white shadow-2xl flex flex-col gap-4 border border-gray-100">
          <div className="w-full h-48 overflow-hidden rounded-2xl">
            <img src={mainImg} alt="Greece" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-gray-900">Trip to Greece</h3>
            <p className="text-sm font-medium text-gray-400">14-29 June | by Robbin Joseph</p>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-4 py-1">
            <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <img src={leaf} alt="" className="w-4 h-4 object-contain" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <img src={mapIcon} alt="" className="w-4 h-4 object-contain" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <img src={send} alt="" className="w-4 h-4 object-contain" />
            </button>
          </div>

          {/* Card Footer info */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
              <img src={building} alt="" className="w-4 h-4 object-contain" />
              <span>24 people going</span>
            </div>
            <button className="focus:outline-none">
              <img src={heart} alt="Like" className="w-5 h-5 object-contain" />
            </button>
          </div>

          {/* Absolute Floating "Trip to Rome" Overlay Status Card */}
          <div className="absolute -bottom-8 -right-4 md:-right-10 w-64 bg-white p-4 rounded-2xl shadow-xl flex gap-3 border border-gray-50 animate-bounce-slow">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-teal-100">
              <img src={maskGroup} alt="Rome" className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col gap-1 w-full">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Ongoing</span>
              <h4 className="text-sm font-bold text-gray-900">Trip to Rome</h4>
              <p className="text-xs font-semibold text-purple-700 mt-1">40% completed</p>
              
              {/* Progress Bar Container */}
              <div className="bg-gray-200 w-full h-1.5 rounded-full mt-1 overflow-hidden">
                <div className="bg-purple-600 h-full w-[40%] rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Booking;