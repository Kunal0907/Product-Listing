import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" Component={Home}></Route> */}
        {/* <Route exact path="/products" Component={Products}></Route> */}
        <Route path="/"  element={ <Home /> } />
        <Route path="/products" element={ <Products />} />
        <Route path="/products/:id" element={ <Product />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
