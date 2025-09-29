import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects'
import Footer from './components/Footer';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar />
      <Routes>
        <Route path="/" element={<><Hero /><Projects /></>} />
        <Route path="/Service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

