import "./App.css";

import Navbar from "./Components/Navbar";
import NavBottom from "./Components/NavBottom";
import Carousel from "./Components/Carousel";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />

      <div className="container mx-auto my-2 p-2 mb-20">
        <h1 className="mb-4 lg:text-4xl text-3xl text-center">
          Explore Our Collection
        </h1>
        <div className="cards px-6">
          <Cards />
        </div>
      </div>

      <Footer />
      <NavBottom />
    </>
  );
}

export default App;
