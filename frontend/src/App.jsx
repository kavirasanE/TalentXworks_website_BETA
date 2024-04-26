import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Partners from "./pages/Partners"
import About from "./pages/About"
function App() {

  return (
<>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/partners" element={<Partners/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
</>
  )
}

export default App
