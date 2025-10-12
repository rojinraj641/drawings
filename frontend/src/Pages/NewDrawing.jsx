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
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-pink-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <form
        action="submit"
        className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-3xl space-y-8 border border-gray-100"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-2">
          Add New Drawing
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Fill in the details below to register a new structural drawing.
        </p>

        {/* Section: Drawing Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1">
            Drawing Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Drawing No.
              </label>
              <input
                type="text"
                placeholder="Enter drawing number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Revision
              </label>
              <input
                type="text"
                placeholder="Enter current revision"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>

          <div>
            <label className="font-medium text-gray-700 mb-1 block">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Area */}
          <div>
            <label className="font-medium text-gray-700 mb-2 block">Area</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {scopes.map((scope, index) => (
                <label
                  key={index}
                  className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer transition-all duration-200 ${
                    selectedScope === scope
                      ? "bg-pink-100 border-pink-500 text-pink-700"
                      : "border-gray-300 hover:bg-gray-50"
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
        </div>

        {/* Section: Weight Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1">
            Weight Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Total Weight (MT)
              </label>
              <input
                type="number"
                placeholder="Enter total weight"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Fabrication Completed (MT)
              </label>
              <input
                type="number"
                placeholder="Enter fabricated weight"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Erection Completed (MT)
              </label>
              <input
                type="number"
                placeholder="Enter erected weight"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>
        </div>

        {/* Section: Drawing Stages */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1">
            Drawing Stages
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Detailed", name: "detailed" },
              { label: "Assembly", name: "assembly" },
              { label: "Erection", name: "erection" },
            ].map(({ label, name }) => (
              <div key={name}>
                <p className="font-medium text-gray-700 mb-1">{label}</p>
                <div className="flex gap-5">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name={name}
                        value={option}
                        className="accent-pink-500"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Detailer Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1">
            Detailer Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter detailer name"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label className="font-medium text-gray-700 mb-1 block">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold px-10 py-3 rounded-lg shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all"
          >
            Submit Drawing
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewDrawing;
