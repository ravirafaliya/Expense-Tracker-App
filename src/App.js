import Dashboard from "./pages/Dashboard"
import Transaction from "./pages/Transaction"
import Report from "./pages/Report"
import Navbar from "./components/Navbar"
import Notfound from "../src/pages/NotFound"
import AddTransaction from "./pages/AddTransaction"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App(){
  return(
    <>
      <BrowserRouter>
        <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<AddTransaction />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/reports" element={<Report />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  )
}
export default App