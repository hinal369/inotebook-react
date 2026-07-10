import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/user" element={<User />} /> */}
      </Routes>
    </div>
  );
}

export default App;
