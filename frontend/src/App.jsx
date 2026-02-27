import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartSidebar from './components/ui/CartSidebar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <CartSidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            {/* Add more routes here as needed (PC Builds, Cart, etc.) */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
