import { Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Signup from "./Pages/Signup"
import Landing from "./Pages/Landing"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App
