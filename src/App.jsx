import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import PricingPlans from './pages/PricingPlans';
import Privacypolicy from './pages/Privacypolicy';
import Profile from './pages/Profile';
import NotFound from './pages/404page';
import Live from './pages/Live';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import FaviourteMovie from './pages/FaviourteMovie';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/live" element={<Live />} />
            <Route path='/pricingplans' element={<PricingPlans />} />
            <Route path='/privacypolicy' element={<Privacypolicy />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/faviourtemovie' element={<FaviourteMovie />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
