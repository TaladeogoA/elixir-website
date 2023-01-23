import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import HowItWorks from "./pages/HowItWorks";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
