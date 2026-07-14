import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <AlertState>
      <NoteState>
        <div className="App">
          <NavBar />
          <Alert />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </NoteState>
    </AlertState>
  );
};

export default App;
