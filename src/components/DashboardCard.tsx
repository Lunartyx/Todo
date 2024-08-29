const DashboardCard = () => {
  return (
    <div className="max-w-sm p-6 bg-gray-50 rounded-2xl shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-medium text-gray-500">This Month</h2>
      </div>

      {/* Main Content */}
      <div className="mb-6">
        <div className="flex items-end space-x-2">
          <span className="text-3xl font-semibold text-gray-800">$37.5K</span>
          <span className="text-sm font-medium text-green-500">+2.45%</span>
        </div>
        <div className="flex items-center mt-2 space-x-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-sm text-gray-500">On track</span>
        </div>

        {/* Chart */}
        <div className="mt-6">
          <svg viewBox="0 0 300 100" className="w-full h-24">
            <path
              d="M0,60 Q50,20 100,50 T200,40 T300,60"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="3"
            />
            <path
              d="M0,80 Q50,40 100,70 T200,60 T300,80"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="3"
            />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between text-sm text-gray-400">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default DashboardCard;
