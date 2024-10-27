import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { createBrowserRouter,RouterProvider,Router,Routes,Route,BrowserRouter, Form } from 'react-router-dom';
import Iframe from './components/iframe/Iframe';
import Rform from './components/form/Rform';
import Feedback from './components/feedback/Feedback';
function App() {
  return (
    <div className="App">
       <BrowserRouter> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bot" element={<Iframe />} />
          <Route path="/register" element={<Rform/>} />
          <Route path="/feedback" element={<Feedback/>} />

        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
