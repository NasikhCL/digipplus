import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyJobs from "./pages/MyJobs";
import MyPayment from "./pages/MyPayments";
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/my-jobs" element={<MyJobs />} />
        <Route exact path="/my-payment" element={<MyPayment />} />
      </Routes>
    
    </div>
  );
}

export default App;

