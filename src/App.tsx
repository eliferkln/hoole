import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ApiProvider } from "./context/ApiContext";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import CatgoriesDesc from "./components/CatgoriesDesc";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <ApiProvider>
        <Navbar />
        <Hero />
        <Cards />
        <CatgoriesDesc />
        <Categories />
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
