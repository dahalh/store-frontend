import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import ProductView from "./components/ProductViewPage/ProductView";
import { National } from "./pages/products/National";
import { Club } from "./pages/products/Club";
import { NBA } from "./pages/products/NBA";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/national" element={<National />} />
          {/* <Route path="/product" element={<National />} /> */}
          <Route path="/club" element={<Club />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/product/:id" element={<ProductView />} />
          {/* <Route path="/national/:_id" element={<ProductView />} /> */}
          <Route path="/productcard" element={<ProductCard />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
