import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MyJobs from "./pages/MyJobs";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <MyJobs />
    </div>
  );
}

export default App;
