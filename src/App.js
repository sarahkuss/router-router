
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './scenes/Home';
import About from './scenes/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
