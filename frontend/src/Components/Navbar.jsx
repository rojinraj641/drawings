import { UserCircle } from "lucide-react"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-indigo-700 shadow-md">
      {/* Logo */}
      <h1 className="text-white font-extrabold drop-shadow-lg text-2xl sm:text-xl md:text-3xl lg:text-4xl">
        Drawings<span className="text-pink-500">.io</span>
      </h1>

      {/* User Icon */}
      <button className="p-2 rounded-full hover:bg-slate-700 transition">
        <UserCircle size={28} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
      </button>
    </nav>
  )
}

export default Navbar

