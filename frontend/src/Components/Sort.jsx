import { useState } from "react"

const Sort = ()=>{
    const [active, setActive] = useState(0);
    const options = ['All','Fly Ash Silo', 'Cement Silo','Cement Bulk Loading','Packing Plant'];
    return(
        <div className="flex flex-wrap gap-4 justify-start pl-15 pt-15 cursor-pointer">
           {options.map((option, index) => (
               <div
                   key={index}
                   className={`px-4 py-2 rounded-lg ${active === index ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
                   onClick={() => setActive(index)}
               >
                   {option}
               </div>
           ))}
        </div>
    )
}

export default Sort