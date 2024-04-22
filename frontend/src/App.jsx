import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Partners from "./pages/Partners"
function App() {

  return (
<>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/partners" element={<Partners/>}/>
    </Routes>
  </BrowserRouter>
</>
  )
}

export default App
