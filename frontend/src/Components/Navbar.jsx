import { UserCircle } from "lucide-react"
const Navbar = () => {
    return (
        <div className="flex flex-row justify-between p-12">
            <h1 className="text-white text-4xl font-roboto font-extrabold drop-shadow-lg">Drawings<span className="text-pink-500 drop-shadow-lg">.io</span></h1>
            <div>
               <UserCircle />
            </div> 
        </div>
    )
}

export default Navbar
