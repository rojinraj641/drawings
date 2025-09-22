import TableComponent from "./TableComponent"

const Table = () => {
    const drawing = [{
        drawingNo: '001',
        description: 'Something important',
        totalWeight: 50,
        progress: 30
    },
    {
        drawingNo: '001',
        description: 'Something important',
        totalWeight: 50,
        progress: 30
    },
    {
        drawingNo: '001',
        description: 'Something important',
        scope: 'Fly Ash Silo',
        totalWeight: 50,
        progress: 30
    },
    {
        drawingNo: '001',
        description: 'Something important',
        totalWeight: 50,
        progress: 30
    }]
    return (
        <div className="flex justify-center pt-50">
            <div className="flex flex-col text-align-center gap-10 bg-white px-10 py-5 rounded-xl">
                <div className="flex flex-row text-center gap-10 bg-gray-300 rounded-md p-2">
                    <p className="w-10 ">S.No.</p>
                    <p className="w-30 ">Drawing No.</p>
                    <p className="w-50 ">Description</p>
                    <p className="w-30 ">Total Weight</p>
                    <p className="w-30 ">Progress</p>
                    <p className="w-30 ">Action</p>
                </div>
                <div className="flex flex-col gap-4 bg-gray-300 p-2 rounded-md">
                    {drawing.map((drawing, index) => {
                        return <TableComponent key={index} index={index + 1} value={drawing} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Table