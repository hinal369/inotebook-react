import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router";
import NoteState from "./context/notes/NoteState";

const App = () => {
  return (
    <NoteState>
      <div className="App">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </NoteState>
  );
};

export default App;
