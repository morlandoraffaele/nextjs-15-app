import Link from "next/link";

export default function Hurricane() {
  return (
    <div className="p-4 mt-10">
      <div className="flex items-center gap-2 mb-6">
        <Link href="/" className="text-white hover:text-gray-500 transition-colors">
          Home
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-700">Hurricane Analysis</span>
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Hurricane Analysis Dashboard</h1>
        <p className="text-lg mb-8">
          Explore detailed analysis of hurricane patterns and their relationship with climate change. This dashboard provides comprehensive insights into historical hurricane data, frequency trends, and intensity variations over time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-white">Historical Trends</h3>
            <p className="text-gray-100">
              Analyze hurricane frequency and intensity patterns over the past decades, with detailed year-by-year comparisons.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-white">Geographic Distribution</h3>
            <p className="text-gray-100">
              Explore hurricane formation locations and typical storm paths across different ocean basins.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-red-600 shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-white">Climate Correlation</h3>
            <p className="text-gray-100">
              Investigate the relationship between global temperature changes and hurricane characteristics.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Latest Insights</h2>
          <p className="text-gray-200 mb-4">
            Recent studies indicate a significant correlation between rising ocean temperatures and hurricane intensity. The data suggests a trend toward more powerful storms, though the relationship with frequency remains complex.
          </p>
          <p className="text-gray-200">
            Our analysis tools help visualize these patterns and provide valuable insights for understanding the impact of climate change on hurricane development.
          </p>
        </div>
      </div>
    </div>
  );
}
