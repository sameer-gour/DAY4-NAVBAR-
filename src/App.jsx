import { Routes,Route } from "react-router"
import Navbar from "./Componets/Navbar"
import Home from "./Pages/Home"
import Contect from "./Pages/Contect"
import About from "./Pages/About"

function App() {
  return (
    <div className="bg-zinc-800 w-[100vw] h-[100vh]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contect" element={<Contect/>} />
          <Route path="/About" element={<About/>} />
        </Routes>
    </div>
  )
}

export default App