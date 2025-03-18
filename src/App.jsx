import "./App.css";
import Cart from "./pages/Cart";
import Marketplace from "./pages/Marketplace";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Marketplace</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Marketplace />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
