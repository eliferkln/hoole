import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ApiProvider } from "./context/ApiContext";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <ApiProvider>
        <Navbar />
        <Cards />
        <Footer />
      </ApiProvider>
    </div>
  );
}

export default App;
