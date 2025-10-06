import { useState, useEffect } from "react"

const Search = () => {
    const placeholders = ["Drawing No.", "Drawing Scope", "Drawing Description"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % placeholders.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-4 py-30 lg:py-20 items-center w-full px-4">
            {/* First row: filter + search */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
                <input
                    type="text"
                    placeholder={placeholders[index]}
                    className="p-2 pl-6 text-sm sm:text-base bg-white/30 backdrop-blur-md shadow-lg text-gray-200 w-xs sm:w-3xl border-none rounded-lg"
                />
            </div>
        </div>
    );
};

export default Search;
