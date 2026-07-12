import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

const App = () => {
  return (
    <NoteState>
      <div className="App">
        <NavBar />
        <Alert message="Alert Message"/>
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
