import Home from './pages/Home'
import LandingPage from './pages/LandingPage';
import DetailCountries from './pages/DetailCountries';
import Activity from './pages/Activity'

import { BrowserRouter , Route , Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/detail/:id" element={<DetailCountries />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
