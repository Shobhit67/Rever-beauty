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

      <div className="container mx-auto my-2 p-2 mb-20 ">
        <h1 className="mb-4 lg:text-4xl text-3xl text-center">
          Explore Our Collection
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 ">
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
