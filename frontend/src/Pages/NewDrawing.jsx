import { useState } from "react";

const NewDrawing = () => {
  const [selectedScope, setSelectedScope] = useState("");

  const scopes = [
    "Fly Ash Silo",
    "Cement Silo",
    "Cement Bulk Loading",
    "Packing Plant",
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <form
        action="submit"
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg lg:max-w-2xl space-y-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-4">
          Add New Drawing
        </h2>

        {/* Drawing Number */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Drawing No.</label>
          <input
            type="text"
            placeholder="Enter drawing number"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 mb-1">Description</label>
          <input
            type="text"
            placeholder="Enter description"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
          />
        </div>

        {/* Scope */}
        <div>
          <p className="font-semibold text-gray-700 mb-2">Area</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {scopes.map((scope, index) => (
              <label
                key={index}
                className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer transition-all duration-200 ${selectedScope === scope
                    ? "bg-pink-50 border-pink-500 text-pink-700"
                    : "border-gray-300 hover:bg-gray-100"
                  }`}
              >
                <input
                  type="radio"
                  name="scope"
                  value={scope}
                  checked={selectedScope === scope}
                  onChange={() => setSelectedScope(scope)}
                  className="accent-pink-500"
                />
                {scope}
              </label>
            ))}
          </div>
        </div>

        {/* Total Weight */}
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Total Weight (MT)
            </label>
            <input
              type="number"
              placeholder="Enter total weight"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
            />
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Revision
            </label>
            <input
              type="text"
              placeholder="Enter current revision"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Fabrication Completed (MT)
            </label>
            <input
              type="number"
              placeholder="Enter total weight"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
            />
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Erection Completed (MT)
            </label>
            <input
              type="number"
              placeholder="Enter completed weight"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Detailed
            </label>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <input
                type="radio"
                name="erection"
                className="accent-pink-500"
              />
              <label>Yes</label>
              </div>
              <div className="flex gap-2">
              <input
                type="radio"
                name="erection"
                className="accent-pink-500"
              />
              <label>No</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Assembly
            </label>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <input
                type="radio"
                name="erection"
                className="accent-pink-500"
              />
              <label>Yes</label>
              </div>
              <div className="flex gap-2">
              <input
                type="radio"
                name="erection"
                className="accent-pink-500"
              />
              <label>No</label>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Erection
            </label>
            <div className="flex gap-5">
              <div className="flex gap-2">
                <input
                type="radio"
                name="erection"
                className="accent-pink-500"
              />
              <label>Yes</label>
              </div>
              <div className="flex gap-2">
              <input
                type="radio"
                name="erection"
                className="accent-pink-500"
              />
              <label>No</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Detailer
            </label>
            <input
              type="text"
              placeholder="Enter detailer name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
            />
          </div>     
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Detailer - email
            </label>
            <input
              type="email"
              placeholder="Enter detailer's email"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
            />
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <label className="font-semibold text-gray-700 mb-1">
              Detailer - phone 
            </label>
            <input
              type="phone"
              placeholder="Enter detailer's phone number"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-pink-500 text-white font-semibold px-8 py-2 rounded-lg shadow-md hover:bg-pink-600 transition-all w-full sm:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewDrawing;
