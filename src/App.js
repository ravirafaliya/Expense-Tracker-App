import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import AddTransaction from "./pages/AddTransaction";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/transaction" element={<Transaction/>}/>
          <Route path="/reports" element={<Report/>}/>
          <Route path="/add-transaction" element={<AddTransaction/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
       
      </div>
    </BrowserRouter>
  );
}
export default App;