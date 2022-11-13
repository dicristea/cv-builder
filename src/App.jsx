import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";
import Info from "./components/Info";
import SectionContainer from "./components/SectionContainer";

const App = () => {
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  const onPreviewChange = (toggle) => {
    setIsPreviewActive(toggle);
  };

  return (
    <div className="App">
      <Header onChange={(toggle) => onPreviewChange(toggle)} />
      <div className="main-content">
        <div className="card">
          <Info isPreviewActive={isPreviewActive} />
          <hr />
          <SectionContainer
            isPreviewActive={isPreviewActive}
            listType="Education"
          />
          <hr />
          <SectionContainer
            isPreviewActive={isPreviewActive}
            listType="Experience"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
