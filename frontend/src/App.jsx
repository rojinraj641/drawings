import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import OverviewBar from "./Components/OverviewBar"
import Table from "./Components/Table"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-600 to-cyan-500">
      <Navbar />
      <OverviewBar />
      <Search />
      <Table />
    </div>
  )
}

export default App
