import Dashboard from "./pages/Dashboard"
import Transaction from "./pages/Transaction"
import Report from "./pages/Report"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



function App(){
  return(
    <>
      <BrowserRouter>
        <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/reports" element={<Report />} />
          </Routes>
          <Link to={"/transaction"}>Navigate</Link>
        </div>
      </BrowserRouter>
    </>
  )
}
export default App