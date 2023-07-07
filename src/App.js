import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Index from './components/Index';
import Navigation from './components/Navigation';
import PrivateRoutes from './components/PrivateRoute';
import CustomerDashboard from './components/customer/CustomerDashboard';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route element={<Index />} path='/' />
          <Route element={<PrivateRoutes />}>
            <Route element={<CustomerDashboard />} path='/dashboard' />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
