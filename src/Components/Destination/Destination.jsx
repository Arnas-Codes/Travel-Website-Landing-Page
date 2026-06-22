import DestinationData from "./Data";
import flyIcon from "../../assets/icons/CommonIcons/flyIcon.png";

const Destination = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 bg-white text-black font-sans flex flex-col items-center">
      {/* Headings */}
      <span className="text-sm font-semibold tracking-wider text-red-500 uppercase mb-1 ">
        Top Sellings
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
        Top Destinations
      </h2>

      {/* Grid Container */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DestinationData.map((data, index) => (
          <article
            key={data.id || index}
            className="w-full h-105 overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="flex-1 min-h-0 w-full overflow-hidden">
              <img
                src={data.img}
                alt={data.name}
                className="h-full w-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 bg-white flex flex-col gap-2 shrink-0">
              <h3 className="text-xl font-semibold text-gray-800">
                {data.name}
              </h3>

              <div className="flex items-center gap-2 text-gray-600">
                <img
                  src={flyIcon}
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain"
                />
                <p className="text-sm font-medium">{data.trip}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Destination; 