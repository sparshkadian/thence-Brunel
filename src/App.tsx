import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './pages/RegistrationForm';

const App = () => {
  return (
    <Routes>
      <Route path='/projects' element={<RegistrationForm />} />
    </Routes>
  );
};

export default App;
