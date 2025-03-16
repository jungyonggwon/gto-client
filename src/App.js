import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">GTO Trainer</h1>
      <p>Train your poker skills with optimal GTO strategies.</p>
      <Link to="/trainer" className="mt-4 p-2 bg-blue-500 text-white rounded">Start Training</Link>
    </div>
  );
}

function Trainer() {
  return (
    <div className="text-center p-4">
      <h1 className="text-xl font-bold">Trainer Mode</h1>
      <p>Select your action for the current hand.</p>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-3 flex justify-between">
      <Link to="/" className="text-lg font-bold">GTO Trainer</Link>
      <div>
        <Link to="/trainer" className="p-2">Trainer</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainer" element={<Trainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
