const OverviewBar = () => {
  const stats = [
    { label: "Total Drawing", value: 0 },
    { label: "Completed Drawing", value: 0 },
    { label: "Fabrication Completed", value: 0 },
    { label: "Erection Completed", value: 0 },
    { label: "Total Weight", value: 0 },
    { label: "Total Weight Completed", value: 0}
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 p-2 pt-20 lg:py-20 lg:px-40 overflow-x-auto">
      {stats.map((item, index) => (
        <div
          key={index}
          className="min-w-[150px] p-4 bg-white rounded-xl shadow-md flex flex-col justify-center items-center md:w-full"
        >
          <p className="text-slate-700 font-semibold text-xs text-center md:text-lg">
            {item.label}
          </p>
          <p className="text-xl font-bold mt-2">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewBar;

