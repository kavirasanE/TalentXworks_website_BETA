import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./components/Services";
import Parallex from "./components/Parallex";
 function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>}/>
         
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App