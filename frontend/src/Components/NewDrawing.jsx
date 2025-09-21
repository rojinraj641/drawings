const NewDrawing = () => {
    return (
        <form
            action='/submit'
            method="post"
            className="flex flex-col p-10 w-100 gap-3">
            <div>
                <p>Enter Drawing No.</p>
                <input
                    type="text"
                    placeholder="Enter drawing no."
                    className="bg-gray-300 border border-black/50 shadow-lg w-80 rounded-sm p-2" />
            </div>
            <div>
                <p>Enter Drawing Description</p>
                <input
                    type="text"
                    placeholder="Enter Drawing description"
                    className="bg-gray-300 border border-black/50 shadow-lg w-80 rounded-sm p-2" />
            </div>
            <div>
                <p>Total Weight</p>
                <input
                    type="number"
                    className="bg-gray-300 border border-black/50 shadow-lg rounded-sm w-80 p-2"
                    placeholder="Total Weight"
                />
            </div>
            <div className="flex flex-col gap-2">
                <p>Choose execution scope</p>
                <div>
                    <input type="radio" id="flyash" name="scope" value="flyash" />
                <label for="flyash">Fly Ash Silo</label>
                </div>
                <div>
                    <input type="radio" id="cement" name="scope" value="cement" />
                <label for="cement">Cement Silo</label>
                </div>
                <div>
                    <input type="radio" id="packingPlant" name="scope" value="packingPlant" />
                <label for="packingPlant">Packing Plant</label>
                </div>
            </div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold font-md w-fit px-5 py-2 rounded-lg">Submit</button>
        </form>
    )
}

export default NewDrawing