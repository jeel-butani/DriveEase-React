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
import CarDriverInput from './pages/carDriverInput';
import CompanyCars from './pages/companyCars';
import EditCar from './pages/editCar';
import EditDriver from './pages/editDriver';
import DriversList from './pages/driversList';
import DriProfile from './pages/DriProfile';
import DriverUser from './pages/DriverUser';
import UserMainProfile from './pages/UserMainProfile';
import CompanyProfile from './pages/CompanyProfile';
import BikeProduct from './pages/bikeProduct';
import CompanyBikes from './pages/companyBikes';
import EditBike from './pages/editBike';
import DriverProfile from './pages/DriverProfile';
import BookingDetails from './pages/BookingDetails';
import ConfirmBike from './pages/confirmBike';



function App() {

  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userLoginSignup" element={<LoginSignup />} />
          <Route path="/driverLoginSignup" element={<DriverLoginSignup/>} />
          <Route path="/companyLoginSignup" element={<CompanyLoginSignup/>} />
          <Route path="/carProduct/:id" element={<CarProduct/>} />
          <Route path="/confirmCarBook/:id/:carId" element={<ConfirmCarBook />} />
          <Route path="/confirmBike/:id/:carId" element={<ConfirmBike />} />
          <Route path="/carDriverInput/:companyId" element={<CarDriverInput/>} />
          <Route path="/companyCars/:companyId" element={<CompanyCars/>} />
          <Route path="/editCar/:companyId/:carId" element={<EditCar/>} />
          <Route path="/editBike/:companyId/:bikeId" element={<EditBike/>} />
          <Route path="/editDriver/:id" element={<EditDriver/>} />
          <Route path="/driversList/:companyId" element={<DriversList/>} />
          <Route path="/driver/:driverId" element={<DriProfile/>} />
          <Route path="/driverUser/:id" element={<DriverUser/>}/>
          <Route path='/usermainprofile/:id' element={<UserMainProfile/>}/>
          <Route path='/companyprofile/:companyId' element={<CompanyProfile/>}/>
          <Route path='/bikeProduct/:id' element={<BikeProduct/>}/>
          <Route path='/companyBike/:companyId' element={<CompanyBikes/>}/>
          <Route path='/driverprofile/:driverId' element={<DriverProfile/>}/>
          <Route path='/bookdetails/:id' element={<BookingDetails/>}/>
        </Routes>
      </>
    </BrowserRouter>
        
  );
}

export default App
