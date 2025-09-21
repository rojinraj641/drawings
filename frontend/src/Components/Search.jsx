import { useState, useEffect } from "react"
const Search = ()=>{
    const placeholders = ['Drawing No.','Drawing Scope','Drawing Description']
    const [index, setIndex]= useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev+1)%placeholders.length)
        },2000);
        return ()=> clearInterval(interval)
    },[])
    return(
        <div className="flex flex-wrap gap-5 justify-center pt-20">
            <div>
                <span class="material-symbols-outlined text-white pt-2">filter_list</span>
            </div>
            <div>
                <input
                type="text"
                placeholder={placeholders[index]}
                className="p-2 pl-7 bg-white/30 backdrop-blur-md shadow-lg text-grey-300 w-200 border-none rounded-xl"
                />
            </div>
        </div>
    )
}

export default Search