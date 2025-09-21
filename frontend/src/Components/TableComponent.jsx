const TableComponent = ({drawing, index})=>{
    return(
        <div>
            <p>{drawing[index].drawingNo}</p>
            <p>{drawing[index].description}</p>
            <p>{drawing[index].totalWeight}</p>
            <p>{drawing[index].progress}</p>
        </div>
    )
}

export default TableComponent