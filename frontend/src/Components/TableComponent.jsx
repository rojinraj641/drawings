import { Trash2, Edit, Info} from "lucide-react";

const TableComponent = ({ index, value }) => {
  const bgColor = () => {
    if (value.scope === "Fly Ash Silo") {
      return "bg-yellow-600";
    } else if (value.scope === "Cement Silo") {
      return "bg-red-600";
    } else if (value.scope === "Cement Bulk Loading") {
      return "bg-green-600";
    } else {
      return "bg-blue-600";
    }
  };

  return (
    <div className={`flex flex-wrap gap-10 `}>
      <p className="flex justify-center items-center w-10 pb-2 pl-1 text-xs">
        {index}
      </p>
      <p className="flex justify-center w-30 text-xs">{value.drawingNo}</p>
      <p className="flex justify-center w-50 text-xs">{value.description}</p>
      <p className="flex justify-center w-30 text-xs">{value.totalWeight}</p>
      <p className="flex justify-center w-30 text-xs">{value.progress}</p>
      <div className="flex items-center gap-4">
        <button className="bg-red-500 p-1 rounded-md w-fit">
          <Trash2 color="white" />
        </button>
        <button className="bg-blue-500 p-1 rounded-md w-fit">
          <Edit color="white" />
        </button>
         <button className="bg-green-600 p-1 rounded-md w-fit">
          <Info color="white" />
        </button>
      </div>
    </div>
  );
};

export default TableComponent;
