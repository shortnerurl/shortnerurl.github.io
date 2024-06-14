import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const HomeScreen = lazy(() => import('./screens/HomeScreen/HomeScreen'));
const ShortIdDetails = lazy(() => import('./screens/CreateShortId/ShortIdDetails'));
const RedirectionUrl = lazy(() => import('./screens/RedirectionUrl/RedirectionUrl'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/shortener" element={<ShortIdDetails />} />
            <Route path="/:shortId" element={<RedirectionUrl />} />
            <Route path="*" element={<HomeScreen />} /> {/* Catch-all route */}
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
