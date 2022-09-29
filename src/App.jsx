import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">Main Content Here</div>
      <Footer />
    </div>
  );
}

export default App;
