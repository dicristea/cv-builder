import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import Info from "./components/Info";
import Education from "./components/Education";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="card">
          <Info />
          <hr />
          <Education />
          <hr />
          <Work />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
