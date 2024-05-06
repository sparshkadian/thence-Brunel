import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/projects' element={<RegistrationForm />} />
      </Routes>
    </>
  );
};

export default App;
