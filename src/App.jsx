import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Favourites from "./Components/Favourites";
import Cart from "./Components/Cart";
import RegisterForm  from "./Components/RegisterForm";
import NavBottom from "./Components/NavBottom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element = {<Cart />} />
        <Route path="/register" element = {<RegisterForm />} />

      </Routes>
        <NavBottom />
    </BrowserRouter>
  );
}

export default App;
