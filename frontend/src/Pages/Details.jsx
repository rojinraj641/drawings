const Details = ({ data }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-lg p-6 sm:p-8 space-y-4 sm:space-y-5">
        <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 border-b pb-3">
          Drawing Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Drawing No.
            </span>
            <span className="text-gray-800 text-lg font-medium break-words">
              {data.drawingNo || "—"}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Description
            </span>
            <span className="text-gray-800 text-lg font-medium break-words">
              {data.description || "—"}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Scope
            </span>
            <span className="text-gray-800 text-lg font-medium">
              {data.scope || "—"}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Total Weight
            </span>
            <span className="text-gray-800 text-lg font-medium">
              {data.totalWeight ? `${data.totalWeight} kg` : "—"}
            </span>
          </div>

          <div className="flex flex-col sm:col-span-2">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Completed Weight
            </span>
            <span className="text-gray-800 text-lg font-medium">
              {data.completedWeight ? `${data.completedWeight} kg` : "—"}
            </span>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
