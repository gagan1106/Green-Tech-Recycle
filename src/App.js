import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Homepage from "./components/homepage/Homepage";
import Service from "./components/Services/Service";
import Contact from "./components/contact/Contact";

import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
