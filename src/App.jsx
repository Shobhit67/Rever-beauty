import "./App.css";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import NavBottom from "./Components/NavBottom";
import Carousel from "./Components/Carousel";

function App() {
  return (
    <>
      <Navbar />

      <Carousel />

      <div className="container mx-auto p-4 m-10 ">
        <h1 className="mb-10 text-3xl text-center">Carousel</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 ">
          <Categories title="Face" />
          <Categories title="Makeup" />
          <Categories title="Skin" />
          <Categories title="Hair" />
        </div>
      </div>

      
      <NavBottom />
    </>
  );
}

export default App;
