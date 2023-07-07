import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Error from './components/Error';
import Footer from './components/Footer';
import Index from './components/Index';
import Navigation from './components/Navigation';
import PrivateRoutes from './components/PrivateRoute';
import CustomerDashboard from './components/customer/CustomerDashboard';
import CustomerProfileSetting from './components/customer/CustomerProfileSetting';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route element={<Index />} path='/' />
          <Route element={<PrivateRoutes />}>
            <Route element={<CustomerDashboard />} path='/customer-dashboard' />
            <Route element={<CustomerProfileSetting />} path='/customer-profile-setting' />
          </Route>
          <Route element={<Error />} path='*' />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
