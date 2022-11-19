import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyJobs from "./pages/MyJobs";
import MyPayment from "./pages/MyPayments";


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      {/* <MyJobs /> */}
      <MyPayment />
    </div>
  );
}

export default App;
