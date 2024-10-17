import Navbar from './components/Navbar';
import Hero from './components/Hero';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />
      {/* Hero Content */}
      <Hero />
      {/* Restaurants */}
      
    </div>
  );
}