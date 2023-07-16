import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import Error from './components/Error';
import Footer from './components/Footer';
import Index from './components/Index';
import Navigation from './components/Navigation';
import PrivateRoutes from './components/PrivateRoute';
import Booking from './customer/Booking';
import BookingConfirm from './customer/BookingConfirm';
import BookingList from './customer/BookingList';
import BookingSuccessfully from './customer/BookingSuccessfully';
import Customer from './customer/Customer';
import CustomerBirdList from './customer/CustomerBirdList';
import CustomerDashboard from './customer/CustomerDashboard';
import CustomerProfileSetting from './customer/CustomerProfileSetting';
import DoctorDashboard from './doctor/DoctorDashboard';
import AddBird from './customer/AddBird';

function App() {
  return (
    <div className='main-wrapper'>
      <Router>
        <Navigation />
        <Routes>
          <Route element={<Index />} path='/' />
          <Route element={<PrivateRoutes />}>
            <Route element={<Customer />} path='customer' >
              <Route element={<CustomerDashboard />} path='customer-dashboard' />
              <Route element={<CustomerProfileSetting />} path='customer-profile-setting' />
              <Route element={<CustomerBirdList />} path='customer-bird-list' />
              <Route element={<AddBird />} path='add-bird' />

              
            </Route>


            <Route element={<BookingList />} path='booking-list' />
            <Route element={<Booking />} path='booking' />
            <Route element={<BookingConfirm />} path='booking-confirm' />
            <Route element={<BookingSuccessfully />} path='booking-successfully' />
            <Route element={<DoctorDashboard />} path='doctor-dashboard' />
          </Route>
          <Route element={<Error />} path='*' />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
