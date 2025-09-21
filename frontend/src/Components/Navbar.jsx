import NewDrawing from "./NewDrawing";
import { useState } from "react";

const Navbar = () => {
    const [showComponent, setShowComponent] = useState(false);
  
    return (
        <div className="flex flex-row justify-between p-12">
            <h1 className="text-white text-3xl font-roboto font-bold">Drawings.io</h1>
            <div>
                <button
                    onClick={()=>setShowComponent((prev)=>!prev)}
                    className="bg-pink-500 text-white hover:bg-pink-600 p-4 rounded-lg">Add New Drawing</button>
            </div>
            {
                showComponent &&
                <div className="flex flex-wrap ml-124 bg-white/30 backdrop-blur-md shadow-lg rounded-lg w-fit h-fit p-6 fixed inset z-50">
                    <NewDrawing />
                    <span 
                    onClick={()=>setShowComponent(false)}
                    className="flex justify-center bg-red-500 hover:bg-red-700 p-1 rounded-lg h-fit w-8"
                    >X</span>
                </div>

            }
        </div>
    )
}

export default Navbar
