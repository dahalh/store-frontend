import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { National } from "./pages/National/National";
import { Club } from "./pages/Club/Club";
import { NBA } from "./pages/NBA/NBA";
import ProductView from "./components/ProductViewPage/ProductView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/national" element={<National />} />
          <Route path="/club" element={<Club />} />
          <Route path="/nba" element={<NBA />} />
          <Route path="/product/:_id" element={<ProductView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
