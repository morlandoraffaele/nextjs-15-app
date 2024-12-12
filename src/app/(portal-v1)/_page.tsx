import Image from "next/image";
import Link from "next/link";

export default function Portal() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-mono mt-20">
      <Image src="https://www.parisschoolofeconomics.eu/app/uploads/2024/03/summer_school_climate_change-scaled-1920x744.jpg" alt="RaiNews" objectFit="cover" objectPosition="center" width={10000} height={10000} />
      <div className="max-w-5xl w-full items-center justify-between text-sm mt-8">
        <h1 className="text-4xl font-bold mb-8">Climate Change Portal</h1>
        <p className="text-lg">Welcome to the portal page</p>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 max-w-[1200px] w-full h-[600px]">
          
          <Link href="/hurricane" className="group relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 col-span-2 row-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Hurricane Analysis</h3>
              <p className="text-white text-lg">Explore historical hurricane data, track patterns, and analyze the impact of climate change on hurricane frequency and intensity. Visualize storm paths and understand evolving weather patterns.</p>
            </div>
          </Link>
          
          <Link href="/heatwave" className="group relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2">Heatwave Analysis</h3>
              <p className="text-white">Analyze historical heatwave data and their relationship with climate change.</p>
            </div>
          </Link>

          <div className="group relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2">Wildfire Analysis</h3>
              <p className="text-white">Analyze historical wildfire data and their relationship with climate change.</p>
            </div>
          </div>

          <div className="group relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 col-span-2">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-75 group-hover:opacity-90 transition-opacity duration-300"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2">Drought Analysis</h3>
              <p className="text-white">Analyze historical drought data and their relationship with climate change.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
