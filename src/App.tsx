import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from './components/ScrollToTop';
import Internship from './pages/Internship';
import ScrollToTop1 from './components/ScrollOnRefresh';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures scroll-to-top on route changes */}
      < ScrollToTop1 /> {/* Ensures scroll-to-top on route changes */}
      <div className="min-h-screen bg-stellar-dark">
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
