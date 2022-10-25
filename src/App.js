import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import AddVehicle from "./Components/AddVehicle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter className="App">
        <Routes>
          <Route exact path="/" element={<AddVehicle />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
