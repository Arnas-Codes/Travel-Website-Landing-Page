import { CategoryData } from './CategoryData';

const Category = () => {
  return (
    <div id="services" className="w-full py-24 bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-sm md:text-base font-bold uppercase tracking-widest text-[#5E6282]">
            Category
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-[#14183E] tracking-tight">
            We Offer Best Services
          </h3>
        </div>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {CategoryData.map((data) => (
            <div 
              key={data.id} 
              className="flex flex-col items-center text-center bg-white p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-gray-100 group relative"
            >
              {/* Image / Icon Wrapper */}
              <div className="h-24 flex items-center justify-center mb-6">
                <img 
                  src={data.img} 
                  alt={data.name} 
                  className="max-h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                />
              </div>

              {/* Card Titles & Description */}
              <h4 className="text-xl font-semibold text-[#1E1D4C] mb-3">
                {data.name}
              </h4>
              <p className="text-sm text-[#5E6282] leading-relaxed max-w-[220px]">
                {data.info}
              </p>

              {/* Decorative hover effect background logic (Optional styling) */}
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-orange-500 rounded-tr-2xl rounded-bl-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Category;