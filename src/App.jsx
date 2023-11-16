import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Blog from "./Components/Pages/Blog";

function App() {
 return (
  <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
 );
}

export default App;
