import "./App.css";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Create from "./components/Create/Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
