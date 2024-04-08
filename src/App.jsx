import "./App.css";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import NavBottom from "./Components/NavBottom";
import Carousel from "./Components/Carousel";
import HairAmlaImg1 from "./images/HAIR/amla Ritha sikkai shampoo/img1.jpg";
import bubblegumCan from "./images/whipped cream soap/img1.jpg";
import diamondSoap from "./images/soaps/diamond soap.jpg";
import eyeLiner from "./images/face/eyeliner price 450--/img1.jpg";

function App() {
  return (
    <>
      <Navbar />

      <Carousel />

      <div className="container mx-auto my-2 p-2 mb-20 ">
        <h1 className="mb-4 lg:text-4xl text-3xl text-center">
          Explore Our Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Categories title="Hair" img = {HairAmlaImg1}/>
          <Categories title="Whipped Soaps" img = {bubblegumCan}/>
          <Categories title="Soaps" img = {diamondSoap} />
          <Categories title="Face" img = {eyeLiner} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <Categories title="Whipped Soaps" img = {bubblegumCan}/>
          <Categories title="Hair" img = {HairAmlaImg1}/>
          <Categories title="Face" img = {eyeLiner} />
          <Categories title="Soaps" img = {diamondSoap} />
        </div>
      </div>

      <NavBottom />
    </>
  );
}

export default App;
