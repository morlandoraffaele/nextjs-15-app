import Link from "next/link";

export default function Heatwave() {
  return (
    <div className="p-4 mt-10">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-white hover:text-gray-500 transition-colors">
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-700">Heatwave Analysis</span>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Heatwave Analysis Dashboard</h1>
        <p className="text-lg mb-8">
          Explore detailed analysis of heatwave patterns and their relationship with climate change. This dashboard provides comprehensive insights into historical temperature data, frequency trends, and duration patterns over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-red-600 shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-white">Temperature Trends</h3>
            <p className="text-gray-100">
              Analyze maximum temperature patterns and duration of heatwaves across different regions and seasons.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-yellow-600 shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-white">Geographic Impact</h3>
            <p className="text-gray-100">
              Explore how different regions are affected by heatwaves and identify vulnerable areas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-white">Health Effects</h3>
            <p className="text-gray-100">
              Understand the correlation between heatwave intensity and public health impacts.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Latest Insights</h2>
          <p className="text-gray-200 mb-4">
            Recent studies show a clear trend of increasing heatwave frequency and intensity worldwide. Urban areas are particularly affected due to the heat island effect, experiencing more severe and prolonged heat events.
          </p>
          <p className="text-gray-200">
            Our analysis tools help visualize these patterns and provide crucial insights for understanding and adapting to increasing heat stress in a changing climate.
          </p>
        </div>
      </div>
    </div>
  );
}
