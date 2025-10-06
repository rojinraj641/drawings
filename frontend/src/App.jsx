import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Signup from "./Pages/Signup"
import Landing from "./Pages/Landing"
import NewDrawing from "./Pages/NewDrawing"
import Details from "./Pages/Details"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/newDrawing" element={<NewDrawing/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App
