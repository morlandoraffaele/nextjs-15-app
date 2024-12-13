
import Image from "next/image";
import Link from "next/link";

export default function Portal() {
  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Image
          src="https://www.parisschoolofeconomics.eu/app/uploads/2024/03/summer_school_climate_change-scaled-1920x744.jpg"
          alt="Climate Change"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Climate Change Portal</h1>
            <p className="text-xl md:text-2xl">Explore data-driven insights about our changing climate</p>
          </div>
        </div>
      </section>

      {/* Analysis Cards */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/hurricane" className="group block">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-75" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-white mb-2">Hurricane Analysis</h2>
                <p className="text-white">Track patterns and analyze climate change impact on hurricanes</p>
              </div>
            </div>
          </Link>

          <Link href="/heatwave" className="group block">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-75" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-white mb-2">Heatwave Analysis</h2>
                <p className="text-white">Understand increasing frequency and intensity of heatwaves</p>
              </div>
            </div>
          </Link>

          <Link href="/wildfire" className="group block">
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-75" />
              <div className="relative h-full p-6 flex flex-col justify-end">
                <h2 className="text-2xl font-bold text-white mb-2">Wildfire Analysis</h2>
                <p className="text-white">Track and analyze the growing impact on fire seasons</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
