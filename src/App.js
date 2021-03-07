import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Home from "./components/routes/home/Home";
import About from "./components/routes/About";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
