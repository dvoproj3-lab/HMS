import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Doctor from './Doctor';
import Nurse from './Nurse';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Doctor" replace />} />

        <Route path="/Doctor" element={<Doctor />} />

        <Route path="/Nurse" element={<Nurse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;