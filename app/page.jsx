import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
export default function Home() {
  return (
   
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      {/* Hero Content */}
      <Hero />
      {/* Footer */}
      <Footer />
    </div>
  );
}
