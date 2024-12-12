import Image from "next/image";
import Link from "next/link";

export default function Portal() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hurricane Section */}
      <div className="min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Hurricane Analysis</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Explore historical hurricane data, track patterns, and analyze the impact of climate change on hurricane frequency and intensity.
            </p>
            <Link href="/hurricane" className="inline-block mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Explore Data
            </Link>
          </div>
          <div className="w-full lg:w-2/3 lg:pl-16">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <Image
                src="https://www.sciline.org/wp-content/uploads/2024/09/hurricane-damage-scaled.jpeg"
                alt="Hurricane visualization"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Heatwave Section */}
      <div className="min-h-screen flex items-center py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-2/3 lg:pr-16">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <Image
                src="https://media.wired.com/photos/64b092d5eb3f06fa8140d171/master/pass/heatwave_US_science_GettyImages-1528361389.jpg"
                alt="Heatwave visualization"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Heatwave Analysis</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Analyze historical heatwave data and understand their increasing frequency and intensity due to climate change.
            </p>
            <Link href="/heatwave" className="inline-block mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Explore Data
            </Link>
          </div>
        </div>
      </div>

      {/* Wildfire Section */}
      <div className="min-h-screen flex items-center py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Wildfire Analysis</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Track and analyze historical wildfire data to understand the growing impact of climate change on fire seasons.
            </p>
            <Link href="/wildfire" className="inline-block mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Explore Data
            </Link>
          </div>
          <div className="w-full lg:w-2/3 lg:pl-16">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <Image
                src="https://t3.ftcdn.net/jpg/01/80/65/68/360_F_180656803_23bAMoCV2q4onVIh4V1RYVyyDOuP6oqz.jpg"
                alt="Wildfire visualization"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Drought Section */}
      <div className="min-h-screen flex items-center py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-2/3 lg:pr-16">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <Image
                src="https://media.istockphoto.com/id/484427905/photo/barren.jpg?s=612x612&w=0&k=20&c=xLbPckF_xNIa5nilhyHniHRJyeUulYKDntQfOoyc62E="
                alt="Drought visualization"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Drought Analysis</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Examine drought patterns and their correlation with climate change across different regions.
            </p>
            <Link href="/drought" className="inline-block mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity">
              Explore Data
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
