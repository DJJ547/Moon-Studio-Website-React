import Navbar from './components/pageLayout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div style={{ marginTop: '70px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
