import { useState } from "react";

const Sort = () => {
  const [active, setActive] = useState(0);
  const options = ['All','Fly Ash Silo', 'Cement Silo','Packing Plant','Cement Bulk Loading'];

  return (
    <div className="flex flex-wrap gap-2 justify-start p-2 sm:p-4 cursor-pointer">
      {options.map((option, index) => (
        <div
          key={index}
          className={`px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base ${active === index ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActive(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Sort;
