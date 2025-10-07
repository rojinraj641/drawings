import { useState } from "react";

const Table = () => {
  const drawing = [
    { drawingNo: "001", description: "Something important", totalWeight: 50, progress: 30 },
    { drawingNo: "002", description: "Another drawing", totalWeight: 40, progress: 60 },
    { drawingNo: "003", description: "Fly Ash Silo work", scope: "Fly Ash Silo", totalWeight: 70, progress: 20 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
    { drawingNo: "004", description: "Random check", totalWeight: 90, progress: 80 },
  ];

  const [visibleCount, setVisibleCount] = useState(10);

  const handleToggle = () => {
    if (visibleCount >= drawing.length) {
      setVisibleCount(10);
    } else {
      setVisibleCount((prev) => prev + 10); 
    }
  };

  return (
    <div className="flex justify-center pt-10 lg:pt-20">
      <div className="flex flex-col gap-6 bg-white px-4 sm:px-10 py-5 mx-2 rounded-xl w-full max-w-5xl">
        {/* Header Row (hidden on mobile) */}
        <div className="hidden sm:flex flex-row text-center items-center justify-center gap-4 bg-gray-300 rounded-md p-2 font-semibold">
          <p className="flex-1">S.No.</p>
          <p className="flex-1">Drawing No.</p>
          <p className="flex-2">Description</p>
          <p className="flex-1">Total Weight</p>
          <p className="flex-1">Completed Weight</p>
          <p className="flex-1">Action</p>
        </div>

        {/* Data Rows */}
        <div className="flex flex-col gap-4">
          {drawing.slice(0, visibleCount).map((drawing, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-md p-3 flex flex-col sm:flex-row sm:items-center sm:text-center gap-2 sm:gap-4"
            >
              {/* Mobile layout with labels */}
              <div className="flex sm:hidden justify-between">
                <span className="font-semibold">S.No.</span>
                <span>{index + 1}</span>
              </div>
              <div className="flex sm:hidden justify-between">
                <span className="font-semibold">Drawing No.</span>
                <span>{drawing.drawingNo}</span>
              </div>
              <div className="flex sm:hidden justify-between">
                <span className="font-semibold">Description</span>
                <span>{drawing.description}</span>
              </div>
              <div className="flex sm:hidden justify-between">
                <span className="font-semibold">Total Weight</span>
                <span>{drawing.totalWeight}</span>
              </div>
              <div className="flex sm:hidden justify-between">
                <span className="font-semibold">Completed Weight</span>
                <span>{drawing.progress}%</span>
              </div>
              <div className="flex sm:hidden justify-between">
                <span className="font-semibold">Action</span>
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md">View</button>
              </div>

              {/* Desktop layout */}
              <div className="hidden sm:flex flex-1 justify-center">{index + 1}</div>
              <div className="hidden sm:flex flex-1 justify-center">{drawing.drawingNo}</div>
              <div className="hidden sm:flex flex-2 justify-center">{drawing.description}</div>
              <div className="hidden sm:flex flex-1 justify-center">{drawing.totalWeight}</div>
              <div className="hidden sm:flex flex-1 justify-center">{drawing.progress}%</div>
              <div className="hidden sm:flex flex-1 justify-center">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md">View</button>
              </div>
            </div>
          ))}
        </div>

        {/* View More / View Less button */}
        {drawing.length > 10 && (
          <div className="flex justify-center">
            <button
              onClick={handleToggle}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md"
            >
              {visibleCount >= drawing.length ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
