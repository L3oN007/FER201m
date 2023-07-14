import { Route, Routes } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import Error from './components/Error';
import Index from './components/Index';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import CustomerDashboard from './customer/CustomerDashboard';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/" element={<Index />} />


        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[]} />}>
          <Route path="/" element={<CustomerDashboard />} />
        </Route>



        {/* catch all */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
