const OverviewBar = () => {
    return (
        <div className="flex flex-wrap justify-center gap-10 pt-30">
            <div className="p-5 bg-white w-50 h-28 rounded-xl">
                <p className="text-slate-700 font-md font-semibold">Total Drawing</p>
            </div>
            <div className="p-5 bg-white w-50 h-28 rounded-xl">
                <p className="text-slate-700 font-md font-semibold">Completed Drawing</p>
            </div>
            <div className=" pl-5 pt-5 bg-white w-50 h-28 rounded-xl">
                <p className="text-slate-700 font-md font-semibold">Fabrication Completed</p>
            </div>
            <div className="p-5 bg-white w-50 h-28 rounded-xl">
                <p className="text-slate-700 font-md font-semibold"> Erection Completed</p>
            </div>
            <div className="p-5 bg-white w-50 h-28 rounded-xl">
                <p className="text-slate-700 font-md font-semibold"> Current Progress</p>
            </div>
        </div>
    )
}

export default OverviewBar