import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Index from './components/Index';
import Navigation from './components/Navigation';
import PrivateRoutes from './components/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Dashboard />} path='/dashboard' exact />
          </Route>
          <Route element={<Index />} path='/' />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
