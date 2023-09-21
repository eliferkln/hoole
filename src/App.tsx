import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ApiProvider } from "./context/ApiContext";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import CatgoriesDesc from "./components/CatgoriesDesc";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";

function App() {
  return (
    <div>
      <ApiProvider>
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Cards />
        <CatgoriesDesc />
        <Categories />
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
