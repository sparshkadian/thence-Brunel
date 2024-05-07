import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import RegistrationForm from './pages/RegistrationForm';
import FormSuccess from './pages/FormSuccess';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/register/success' element={<FormSuccess />} />
      </Routes>
    </>
  );
};

export default App;
