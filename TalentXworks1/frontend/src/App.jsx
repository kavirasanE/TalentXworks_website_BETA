import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/Services";
import Parallex from "./components/Parallex";
import Aboutus from "./pages/Aboutus";
 function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/> 
          <Route  path="/about" element={<Aboutus/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App