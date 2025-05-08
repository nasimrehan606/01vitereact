import React from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";

let name = "Rehan";
const App = () => {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        {/* <TextForm heading="Enter The text to analyze below" /> */}
        <About />
      </div>
    </>
  );
};

export default App;
