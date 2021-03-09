import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./components/Common.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/routes/home/Home";
import About from "./components/routes/about/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
