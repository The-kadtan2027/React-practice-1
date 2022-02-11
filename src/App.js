import React from "react"
import './App.css';

//components
import Header from "./components/Header";
import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

const Page = () => {
  
  return (
    <div className="wrapper">
        <Header />
        <MainContent />
        
     </div>
)
}

function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
