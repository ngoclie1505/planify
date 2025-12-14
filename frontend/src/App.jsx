import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import MainLayout from './layout/MainLayout.jsx';
import Profile from "./pages/Profile.jsx";
import CreatePlan from "./pages/CreatePlan.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<CreatePlan />} />
          <Route path="/commu" element={<Profile />} />

          {/* Add more pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

