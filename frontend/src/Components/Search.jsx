import { useState, useEffect } from "react"
import NewDrawing from "./NewDrawing";

const Search = () => {
    const [showComponent, setShowComponent] = useState(false);
    const placeholders = ['Drawing No.', 'Drawing Scope', 'Drawing Description']
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % placeholders.length)
        }, 2000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="flex flex-wrap gap-5 justify-center pt-20">
            <div>
                <span class="material-symbols-outlined text-white pt-2 cursor-pointer">filter_list</span>
            </div>
            <div>
                <input
                    type="text"
                    placeholder={placeholders[index]}
                    className="p-2 pl-7 bg-white/30 backdrop-blur-md shadow-lg text-grey-300 w-200 border-none rounded-xl"
                />
            </div>
            <div>
                <button
                    onClick={() => setShowComponent((prev) => !prev)}
                    className="bg-pink-500 text-white hover:bg-pink-600 p-3 shadow-lg ml-36 rounded-lg">Add New Drawing
                </button>
            </div>
            {
                showComponent &&
                <div className="flex flex-wrap bg-white/30 backdrop-blur-md shadow-lg rounded-lg w-fit h-fit p-6 fixed inset-30 ml-100 z-50">
                    <NewDrawing />
                    <span
                        onClick={() => setShowComponent(false)}
                        className="flex justify-center bg-red-500 hover:bg-red-700 p-1 rounded-lg h-fit w-8"
                    >X</span>
                </div>
            }
        </div>
    )
}

export default Search