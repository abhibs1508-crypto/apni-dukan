import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login"
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<div>Shop Page</div>} />
        <Route path="/categories" element={<div>Categories Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
        {/* <Route path="/login" element={<div>Login Page</div>} /> */}
        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
