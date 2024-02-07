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

      <div className="container mx-auto p-4 m-20 ">
        <div className="grid grid-cols-4 gap-2 my-10">
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
