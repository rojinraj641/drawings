import {Pencil, Trash, ChevronLeft} from 'lucide-react'
const Details = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-pink-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 border-b pb-4">
          Drawing Details
        </h3>

        {/* Grid Data Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {[
            ["Drawing No.", "—"],
            ["Description", "—"],
            ["Revision", "—"],
            ["Total Weight (MT)", "—"],
            ["Fabrication Completed (MT)", "—"],
            ["Erection Completed (MT)", "—"],
            ["Area", "—"],
            ["Detailed", "—"],
            ["Fabrication", "—"],
            ["Assembly", "—"],
            ["Erection", "—"],
            ["Detailer", "—"],
            ["Detailer Phone", "—"],
            ["Detailer Email", "—"],
            ["Date of Issue", "—"],
          ].map(([label, value], index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-50 hover:bg-pink-50 transition-all rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <span className="text-gray-500 font-semibold text-xs uppercase tracking-wide mb-1">
                {label}
              </span>
              <span className="text-gray-800 text-lg font-medium break-words">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Button section */}
        <div className="flex flex-wrap justify-center gap-4 pt-8 border-t mt-8">
          <button
            onClick={() => window.history.back()}
            className="flex flex-row gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-lg shadow-sm transition-all duration-200"
          >
             <span><ChevronLeft strokeWidth={2} size={20}/></span><p className='text-sm'>Back</p>
          </button>

          <button className="flex flex-row gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200">
            <span><Pencil strokeWidth={2} size={20}/></span><p className='text-sm'>Edit</p>
          </button>

          <button className="flex flex-row gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-200">
            <span><Trash strokeWidth={2} size={20}/></span><p className='text-sm'>Delete</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
