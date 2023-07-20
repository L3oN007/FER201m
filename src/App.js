import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Admin from './admin/Admin';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import BlogDetail from './blog/BlogDetail';
import BlogList from './blog/BlogList';
import Error from './components/Error';
import Footer from './components/Footer';
import Index from './components/Index';
import Navigation from './components/Navigation';
import PrivateRoutes from './components/PrivateRoute';
import AddBird from './customer/AddBird';
import Booking from './customer/Booking';
import BookingConfirm from './customer/BookingConfirm';
import BookingList from './customer/BookingList';
import Customer from './customer/Customer';
import CustomerBirdList from './customer/CustomerBirdList';
import CustomerDashboard from './customer/CustomerDashboard';
import CustomerProfileSetting from './customer/CustomerProfileSetting';
import Staff from './staff/Staff';
import StaffDashboard from './staff/StaffDashboard';
function App() {
  return (
    <div className='main-wrapper'>
      <Router>
        <Navigation />
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<Index />} />

          {/* Private Route */}
          {/* Staff */}
          <Route
            path="/staff"
            element={<AuthorizedRoute component={Staff} allowedRoles={["admin", "staff"]} />}
          >
            <Route element={<StaffDashboard />} path='staff-dashboard' />
          </Route>

          {/* Customer */}
          <Route
            path="/customer"
            element={<AuthorizedRoute component={Customer} allowedRoles={["customer", "admin"]} />}
          >
            <Route element={<CustomerDashboard />} path='customer-dashboard' />
            <Route element={<CustomerProfileSetting />} path='customer-profile-setting' />
            <Route element={<CustomerBirdList />} path='customer-bird-list' />
            <Route element={<AddBird />} path='add-bird' />

          </Route>

          {/* blog */}
          <Route element={<BlogList />} path='blog-list' />
          <Route element={<BlogDetail />} path='blog-detail/:id' />

          {/* Booking */}
          <Route element={<PrivateRoutes />}>
            <Route element={<BookingList />} path='booking-list' />
            <Route element={<Booking />} path='booking' />
            <Route element={<BookingConfirm />} path='booking-confirm' />
          </Route>


          {/* <Route
            path="/admin"
            element={<AuthorizedRoute component={Admin} allowedRoles={["admin"]} />}
          /> */}
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

function AuthorizedRoute({ component: Component, allowedRoles, ...rest }) {
  const storedLoginData = localStorage.getItem("loginData");
  const userRole = storedLoginData ? JSON.parse(storedLoginData).user.role : null;

  if (allowedRoles.includes(userRole)) {
    return <Component {...rest} />;
  } else {
    return <Navigate to="/error" replace />;
  }
}

export default App;
