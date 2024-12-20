import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';
import { createBrowserRouter,RouterProvider,Router,Routes,Route,BrowserRouter, Form } from 'react-router-dom';
import Iframe from './components/iframe/Iframe';
import Rform from './components/form/Rform';
import Feedback from './components/feedback/Feedback';
import Mumbai_collection from './pages/Explore/Collections/Mumbai/Mumbai_collection';
import Gigi_main from './pages/Explore/Collections/Mumbai/restaurants/Gigi/Gigi_main';
import Lyla_main from './pages/Explore/Collections/Mumbai/restaurants/Lyla/Lyla_main';
import Shy_main from './pages/Explore/Collections/Mumbai/restaurants/Shy/Shy_main';
import BotPage from './pages/Home/bot/BotPage';
function App() {
  return (
    <div className="App">
       <BrowserRouter> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bot" element={<Iframe />} />
          <Route path="/create-palate" element={<Rform/>} />
          <Route path="/feedback" element={<Feedback/>} />
          <Route path="/explore/:city/:restaurant" element={<Gigi_main/>} />
          <Route path="/explore/:city/:restaurant" element={<Lyla_main/>} />
          <Route path="/explore/:city/:restaurant" element={<Shy_main/>} />
          <Route path="/explore/:city" element={<Mumbai_collection/>}/>
          <Route path="/explore/:city/:restaurant/zico/:name" element={<Iframe />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
