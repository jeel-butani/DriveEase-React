import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/services';
import Contact from './pages/contact';
import LoginSignup from './pages/userLoginSignup';
import DriverLoginSignup from './pages/driverLoginSignup';
import CompanyLoginSignup from './pages/companyLoginSignup';
import CarProduct from './pages/carProduct';
import ConfirmCarBook from './pages/confirmCarBook';
import CarDriverInput from './pages/CarDriverInput';

function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userLoginSignup" element={<LoginSignup />} />
          <Route path="/driverLoginSignup" element={<DriverLoginSignup/>} />
          <Route path="/companyLoginSignup" element={<CompanyLoginSignup/>} />
          <Route path="/carProduct" element={<CarProduct/>} />
          <Route path="/confirmCarBook/:id" element={<ConfirmCarBook />} />
          <Route path="/carDriverInput" element={<CarDriverInput/>} />
          
        </Routes>
      </>
    </BrowserRouter>
        
  );
}

export default App
