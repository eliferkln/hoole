import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ApiProvider } from "./context/ApiContext";
import Cards from "./components/Cards";
import Categories from "./components/Categories";
import CatgoriesDesc from "./components/CatgoriesDesc";

function App() {
  return (
    <div>
      <ApiProvider>
        <Navbar />
        <Cards />
        <CatgoriesDesc />
        <Categories />
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
