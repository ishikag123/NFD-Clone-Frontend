//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { About } from "./Components/About";
import { Aggregator } from "./Components/Aggregator";
import { Features } from "./Components/Features";
import { RoadMap } from "./Components/RoadMap";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Home />
      <About />
      <Aggregator />
      <Features />
      <RoadMap /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<About />} />
          <Route path="/" element={<Aggregator />} />
          <Route path="/" element={<Features />} />
          <Route path="/" element={<RoadMap />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
