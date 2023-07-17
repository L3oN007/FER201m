import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './admin/Admin';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import Error from './components/Error';
import Footer from './components/Footer';
import Index from './components/Index';
import Navigation from './components/Navigation';
import Customer from './customer/Customer';
import CustomerDashboard from './customer/CustomerDashboard';
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
          </Route>



          <Route
            path="/admin"
            element={<AuthorizedRoute component={Admin} allowedRoles={["admin"]} />}
          />
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
