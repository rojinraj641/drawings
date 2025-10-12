const Details = () => {
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
              
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Description
            </span>
            <span className="text-gray-800 text-lg font-medium break-words">
              
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Revision
            </span>
            <span className="text-gray-800 text-lg font-medium">
              
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Total Weight
            </span>
            <span className="text-gray-800 text-lg font-medium">
               "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Fabrication Completed
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Erection Completed
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Area
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Detailed
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Fabrication
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Assembly
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Erection
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Detailer
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Detailer Phone Number
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Detailer Email
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold text-sm uppercase tracking-wide">
              Date of issue
            </span>
            <span className="text-gray-800 text-lg font-medium">
              "—"
            </span>
          </div>
        </div>

        {/* Button section */}
        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <button
            onClick={() => window.history.back()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow transition-all"
          >
            Back
          </button>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all"
          >
            Edit
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;

