import TableComponent from "./TableComponent"

const Table = ()=>{
    const drawing = [{
        drawingNo: '001',
        description: 'Something important',
        totalWeight: 50,
        progress: 30
    }]
    return(
        <div className="flex justify-center pt-50">
            <div className="flex flex-wrap flex-row text-align-center gap-10 bg-white px-10 py-5 rounded-xl">
                <p className="w-10 bg-green-500">S.No.</p>
                <p className="w-30 bg-blue-500">Drawing No.</p>
                <p className="w-50 bg-yellow-500">Description</p>
                <p className="w-30 bg-violet-500">Total Weight</p>
                <p className="w-30 bg-red-500">Progress</p>
                <p className="w-30 bg-orange-500">Action</p>
            </div>
            <div>
                {drawing.map((drawing,index)=>{
                    <TableComponent key={index} value={drawing}/>
                })}
            </div>
        </div>
    )
}

export default Table