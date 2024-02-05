import "./App.css";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import NavBottom from "./Components/NavBottom";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-3 gap-4">
          <Categories title="Face" />
          <Categories title="Face" />
          <Categories title="Face" />
        </div>
      </div>
      <NavBottom />

    </>
  );
}

export default App;
